import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type PortfolioVideoPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
};

export function PortfolioVideoPlayer({
  src,
  poster,
  className,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  preload = "auto",
}: PortfolioVideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.load();

    if (!autoPlay) return;

    const play = async () => {
      try {
        video.muted = true;
        await video.play();
        if (!muted) {
          video.muted = false;
        }
      } catch {
        /* Browser blocked autoplay — controls remain available */
      }
    };

    if (video.readyState >= 2) {
      void play();
      return;
    }

    video.addEventListener("canplay", () => void play(), { once: true });
  }, [src, autoPlay, muted]);

  return (
    <video
      key={src}
      ref={ref}
      src={src}
      poster={poster}
      controls={controls}
      muted={muted}
      loop={loop}
      playsInline
      preload={preload}
      className={cn("h-full w-full", className)}
    />
  );
}
