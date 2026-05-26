import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { staggerItem } from "@/components/SectionReveal";
import { cn } from "@/lib/utils";

export type VideoTestimonial = {
  id: string;
  videoSrc: string;
  poster: string;
  name: string;
  company: string;
  quote: string;
  duration: string;
};

type VideoTestimonialCardProps = {
  testimonial: VideoTestimonial;
  onPlay: () => void;
  className?: string;
};

export function VideoTestimonialCard({
  testimonial,
  onPlay,
  className,
}: VideoTestimonialCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={cn(
        "group cursor-pointer overflow-hidden rounded-2xl",
        "border border-white/10 bg-white/[0.03] backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-500",
        "hover:border-neon-green/35 hover:shadow-[0_32px_80px_-36px_oklch(0.88_0.27_142/0.35)]",
        className,
      )}
      onClick={onPlay}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPlay();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Play video testimonial from ${testimonial.name}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={testimonial.poster}
          alt=""
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 transition-opacity duration-500 group-hover:via-background/50" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0px] transition-all duration-500 group-hover:bg-black/10 group-hover:backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-background/50 backdrop-blur-md md:h-[4.5rem] md:w-[4.5rem]"
            whileHover={{ scale: 1.08 }}
            animate={{ boxShadow: ["0 0 0 0 oklch(0.88 0.27 142 / 0.4)", "0 0 0 12px oklch(0.88 0.27 142 / 0)"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          >
            <Play className="ml-1 h-6 w-6 fill-neon-green text-neon-green md:h-7 md:w-7" />
          </motion.div>
        </div>

        <span className="absolute bottom-4 right-4 rounded-md border border-white/15 bg-background/70 px-2 py-1 font-display text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
          {testimonial.duration}
        </span>
      </div>

      <div className="p-6 md:p-8">
        <p className="font-display text-lg leading-snug text-foreground/95 md:text-xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <div>
            <p className="font-display text-sm tracking-tight">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
          </div>
          <span className="font-display text-[10px] uppercase tracking-widest text-neon-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Watch
          </span>
        </div>
      </div>
    </motion.article>
  );
}
