import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { SectionReveal, StaggerReveal } from "@/components/SectionReveal";
import { VideoModal } from "@/components/VideoModal";
import {
  VideoTestimonialCard,
  type VideoTestimonial,
} from "@/components/VideoTestimonialCard";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import trailerVid from "@/assets/portfolio-trailer.mp4.asset.json";
import characterVid from "@/assets/portfolio-character.mp4.asset.json";
import creatureVid from "@/assets/portfolio-creature.mp4.asset.json";
import gameVid from "@/assets/portfolio-game.mp4.asset.json";

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "trailer",
    videoSrc: trailerVid.url,
    poster: portfolioTrailer,
    name: "Alex Morgan",
    company: "Lumen Worlds",
    quote: "They turned our launch into a cinematic moment our audience couldn't ignore.",
    duration: "1:24",
  },
  {
    id: "character",
    videoSrc: characterVid.url,
    poster: portfolioCharacter,
    name: "Priya Shah",
    company: "Nova Vanguard",
    quote: "The craft, pacing, and polish felt like a feature film — not a vendor deliverable.",
    duration: "0:58",
  },
  {
    id: "creature",
    videoSrc: creatureVid.url,
    poster: portfolioCreature,
    name: "Jonas Weber",
    company: "Abyss Studios",
    quote: "From concept to final grade in record time. Our conversion metrics proved it.",
    duration: "1:12",
  },
  {
    id: "game",
    videoSrc: gameVid.url,
    poster: portfolioGame,
    name: "Mia Laurent",
    company: "Iron Forge Interactive",
    quote: "Premium visuals that made our brand feel twice our size overnight.",
    duration: "0:47",
  },
];

export function VideoTestimonialsSection() {
  const [active, setActive] = useState<VideoTestimonial | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInView = useInView(carouselRef, { once: true, margin: "-5% 0px" });

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/40 bg-card/20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,oklch(0.88_0.27_142/0.07),transparent)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-25" />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14 md:py-32">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[10px] uppercase tracking-[0.35em] text-neon-green">
              Video testimonials
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-balance md:text-6xl">
              Hear what brands say about working with Starlights Visuals.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Real founders sharing their experience, growth, and results.
            </p>
          </SectionReveal>

          {/* Desktop 2-column */}
          <StaggerReveal className="mt-14 hidden gap-6 md:mt-20 md:grid md:grid-cols-2">
            {videoTestimonials.map((v) => (
              <VideoTestimonialCard
                key={v.id}
                testimonial={v}
                onPlay={() => setActive(v)}
              />
            ))}
          </StaggerReveal>

          {/* Mobile carousel */}
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 32 }}
            animate={carouselInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 md:hidden"
          >
            <div className="testimonial-carousel -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
              {videoTestimonials.map((v) => (
                <div key={v.id} className="w-[min(92vw,400px)] shrink-0 snap-center">
                  <VideoTestimonialCard testimonial={v} onPlay={() => setActive(v)} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <VideoModal
        open={active !== null}
        onClose={() => setActive(null)}
        videoSrc={active?.videoSrc ?? ""}
        poster={active?.poster}
        title={active ? `Video testimonial — ${active.name}` : "Video testimonial"}
      />
    </>
  );
}
