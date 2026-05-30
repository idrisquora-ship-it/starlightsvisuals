import { useEffect, useRef, useState } from "react";

import heroPoster from "@/assets/hero-cosmic.jpg";
import heroVideo from "@/assets/hero-background.mp4";
import { cn } from "@/lib/utils";

type HeroBackgroundVideoProps = {
  className?: string;
};

export function HeroBackgroundVideo({ className }: HeroBackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { rootMargin: "100px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!active || !video) return;

    video.src = heroVideo;
    video.load();

    const play = () => {
      void video.play().catch(() => {
        /* autoplay blocked — poster remains visible */
      });
    };

    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });

    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [active]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else if (active) void video.play().catch(() => undefined);
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [active]);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black", className)}
      aria-hidden
    >
      <img
        src={heroPoster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={heroPoster}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          active ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40 lg:via-background/75 lg:to-background/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_50%,transparent,oklch(0.05_0_0/0.65))]" />
    </div>
  );
}
