import { Play } from "lucide-react";
import { useRef, useState } from "react";

type ProjectVideoCardProps = {
  src: string;
  poster: string;
};

export function ProjectVideoCard({ src, poster }: ProjectVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => undefined);
  };

  const pausePreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      onFocus={playPreview}
      onBlur={pausePreview}
      onTouchStart={playPreview}
    >
      <img
        src={poster}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
      />
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/20 transition group-hover:bg-background/10"
        aria-hidden
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/30 bg-background/80 backdrop-blur-sm transition group-hover:border-neon-green group-hover:text-neon-green">
          <Play className="h-6 w-6 fill-current pl-0.5" />
        </span>
      </div>
    </div>
  );
}
