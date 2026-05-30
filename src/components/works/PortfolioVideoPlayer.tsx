import { Loader2, Play, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

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
  preload = "metadata",
}: PortfolioVideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const playVideo = useCallback(async () => {
    const video = ref.current;
    if (!video) return;

    setHasError(false);
    setIsLoading(true);

    try {
      if (video.readyState === 0) {
        video.load();
      }
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsPlaying(false);
    setHasError(false);
    setIsLoading(false);
  }, [src]);

  useEffect(() => {
    if (!autoPlay) return;
    void playVideo();
  }, [autoPlay, playVideo, src]);

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={controls}
        muted={muted}
        loop={loop}
        playsInline
        preload={preload}
        className={cn("h-full w-full", className)}
        onPlay={() => {
          setIsPlaying(true);
          setIsLoading(false);
          setHasError(false);
        }}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
          setIsPlaying(false);
        }}
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/45">
          {hasError ? (
            <>
              <p className="px-4 text-center text-sm text-foreground/80">Video failed to load.</p>
              <button
                type="button"
                onClick={() => void playVideo()}
                className="inline-flex items-center gap-2 rounded-full border border-neon-green/50 bg-background/90 px-5 py-2.5 font-display text-xs uppercase tracking-widest text-neon-green transition hover:bg-neon-green/10"
              >
                <RotateCcw className="h-4 w-4" />
                Retry
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => void playVideo()}
              disabled={isLoading}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-neon-green/60 bg-background/90 text-neon-green shadow-[0_0_40px_-10px_rgba(76,255,61,0.65)] transition hover:scale-105 hover:bg-neon-green/10 disabled:opacity-70"
              aria-label="Play video"
            >
              {isLoading ? (
                <Loader2 className="h-9 w-9 animate-spin" />
              ) : (
                <Play className="h-9 w-9 fill-current pl-1" />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
