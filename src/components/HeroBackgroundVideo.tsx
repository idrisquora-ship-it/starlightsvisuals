import { useEffect, useRef, useState } from "react";

import heroVideo from "@/assets/hero-background.mp4";
import { cn } from "@/lib/utils";

type HeroBackgroundVideoProps = {
  className?: string;
};

export function HeroBackgroundVideo({ className }: HeroBackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(true);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        inViewRef.current = entry.isIntersecting;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = heroVideo;
    video.load();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playWithSound = () => {
      if (document.hidden || !inViewRef.current) return;

      video.muted = false;
      void video.play().catch(() => {
        video.muted = true;
        void video.play().catch(() => undefined);
      });
    };

    const syncPlayback = () => {
      if (document.hidden || !inViewRef.current) {
        video.muted = true;
        video.pause();
        return;
      }

      playWithSound();
    };

    syncPlayback();

    const unlockSound = () => {
      if (!inViewRef.current || document.hidden) return;
      playWithSound();
    };

    const onVisibility = () => syncPlayback();
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("pointerdown", unlockSound);
    document.addEventListener("keydown", unlockSound);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("pointerdown", unlockSound);
      document.removeEventListener("keydown", unlockSound);
    };
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black", className)}
      aria-hidden
    >
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40 lg:via-background/75 lg:to-background/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_50%,transparent,oklch(0.05_0_0/0.65))]" />
    </div>
  );
}
