import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { staggerItem } from "@/components/SectionReveal";
import { cn } from "@/lib/utils";

export type TextTestimonial = {
  quote: string;
  name: string;
  company: string;
  role: string;
  result: string;
  initials: string;
  rating?: number;
};

type TestimonialCardProps = {
  testimonial: TextTestimonial;
  className?: string;
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5;

  return (
    <motion.figure
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className={cn(
        "group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl",
        "border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl",
        "shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)]",
        "transition-[box-shadow,border-color] duration-500",
        "hover:border-neon-green/40 hover:shadow-[0_28px_90px_-28px_oklch(0.88_0.27_142/0.25)]",
        className,
      )}
    >
      <Quote
        className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 text-neon-green/[0.07] transition-colors duration-500 group-hover:text-neon-green/[0.12]"
        strokeWidth={1}
        aria-hidden
      />

      <div className="relative">
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < rating ? "fill-neon-green text-neon-green" : "text-muted-foreground/30",
              )}
            />
          ))}
        </div>

        <blockquote className="mt-6 text-base leading-relaxed text-foreground/90 md:text-[15px]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="relative mt-8 border-t border-white/10 pt-6">
        <span className="inline-flex rounded-full border border-neon-green/30 bg-neon-green/10 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-neon-green">
          {testimonial.result}
        </span>

        <figcaption className="mt-5 flex items-center gap-4">
          <Avatar className="h-12 w-12 border border-white/15 ring-2 ring-neon-green/20">
            <AvatarFallback className="bg-gradient-to-br from-background to-card font-display text-sm text-neon-green">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-display text-sm tracking-tight">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            <p className="text-xs font-medium text-foreground/70">{testimonial.company}</p>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}
