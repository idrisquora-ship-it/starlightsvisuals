import { motion } from "framer-motion";
import { BadgeCheck, Play, Star, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { staggerItem } from "@/components/SectionReveal";
import { cn } from "@/lib/utils";

export type VideoTestimonial = {
  id: string;
  videoSrc: string;
  poster: string;
  name: string;
  company: string;
  role: string;
  initials: string;
  duration: string;
  avatarUrl?: string;
  progress?: number;
  rating?: number;
};

function avatarSrc(testimonial: VideoTestimonial) {
  if (testimonial.avatarUrl) return testimonial.avatarUrl;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.initials)}&background=141414&color=9dff57&size=128&bold=true&format=png`;
}

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
  const { t } = useTranslation();
  const rating = testimonial.rating ?? 5;
  const progress = testimonial.progress ?? 0.35;

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={cn(
        "group overflow-hidden rounded-xl border border-white/[0.08] bg-[oklch(0.11_0_0)]",
        "transition-[border-color,box-shadow] duration-400",
        "hover:border-neon-green/25 hover:shadow-[0_20px_60px_-24px_oklch(0.88_0.27_142/0.2)]",
        className,
      )}
    >
      <button
        type="button"
        onClick={onPlay}
        className="relative block w-full cursor-pointer overflow-hidden bg-black text-left"
        aria-label={t("testimonials.playAria", { name: testimonial.name })}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={testimonial.poster}
            alt=""
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />

          <span
            className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/55 backdrop-blur-sm"
            aria-hidden
          >
            <Volume2 className="h-3.5 w-3.5 text-foreground" />
          </span>

          <span className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-neon-green shadow-[0_0_24px_oklch(0.88_0.27_142/0.45)] transition-transform group-hover:scale-105 md:h-14 md:w-14">
            <Play className="ml-0.5 h-5 w-5 fill-background text-background md:h-6 md:w-6" />
          </span>

          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 pb-2.5 pt-10">
            <div className="h-1 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-neon-green transition-all duration-500 group-hover:w-[45%]"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <p className="mt-1.5 font-display text-[11px] tabular-nums text-foreground">
              {testimonial.duration}
            </p>
          </div>
        </div>
      </button>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-3">
        <div className="inline-flex gap-0.5" aria-label={t("testimonials.starsAria", { rating })}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3 w-3",
                i < rating ? "fill-neon-green text-neon-green" : "text-muted-foreground/25",
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 font-display text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
          <BadgeCheck className="h-3.5 w-3.5 text-neon-green" aria-hidden />
          <span>{t("testimonials.verifiedClient")}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 px-4 pb-5">
        <Avatar className="h-12 w-12 shrink-0 rounded-md border border-white/10">
          <AvatarImage
            src={avatarSrc(testimonial)}
            alt={testimonial.name}
            className="rounded-md object-cover"
          />
          <AvatarFallback className="rounded-md bg-card font-display text-xs text-neon-green">
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate font-display text-xs uppercase tracking-wide text-foreground md:text-sm">
            {testimonial.name}
          </p>
          <p className="mt-0.5 truncate text-[11px] text-muted-foreground md:text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
