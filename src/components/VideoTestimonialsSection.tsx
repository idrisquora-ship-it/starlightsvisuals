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
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import portfolio2d from "@/assets/portfolio-2d.jpg";
import trailerVid from "@/assets/portfolio-trailer.mp4.asset.json";
import characterVid from "@/assets/portfolio-character.mp4.asset.json";
import creatureVid from "@/assets/portfolio-creature.mp4.asset.json";
import gameVid from "@/assets/portfolio-game.mp4.asset.json";
import motionVid from "@/assets/portfolio-motion.mp4.asset.json";
import twoDVid from "@/assets/portfolio-2d.mp4.asset.json";

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "trailer",
    videoSrc: trailerVid.url,
    poster: portfolioTrailer,
    name: "Alex Morgan",
    company: "Lumen Worlds",
    role: "CEO",
    initials: "AM",
    duration: "2:20",
    progress: 0.38,
  },
  {
    id: "character",
    videoSrc: characterVid.url,
    poster: portfolioCharacter,
    name: "Priya Shah",
    company: "Nova Vanguard",
    role: "Art Director",
    initials: "PS",
    duration: "1:45",
    progress: 0.42,
  },
  {
    id: "creature",
    videoSrc: creatureVid.url,
    poster: portfolioCreature,
    name: "Jonas Weber",
    company: "Abyss Studios",
    role: "Founder",
    initials: "JW",
    duration: "2:05",
    progress: 0.3,
  },
  {
    id: "game",
    videoSrc: gameVid.url,
    poster: portfolioGame,
    name: "Mia Laurent",
    company: "Iron Forge Interactive",
    role: "Head of Production",
    initials: "ML",
    duration: "1:58",
    progress: 0.48,
  },
  {
    id: "motion",
    videoSrc: motionVid.url,
    poster: portfolioMotion,
    name: "Elena Vasquez",
    company: "Raycon",
    role: "VP Marketing",
    initials: "EV",
    duration: "2:12",
    progress: 0.35,
  },
  {
    id: "2d",
    videoSrc: twoDVid.url,
    poster: portfolio2d,
    name: "James Whitfield",
    company: "Crossrope",
    role: "Co-Founder",
    initials: "JW",
    duration: "1:32",
    progress: 0.55,
  },
];

export function VideoTestimonialsSection() {
  const [active, setActive] = useState<VideoTestimonial | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInView = useInView(carouselRef, { once: true, margin: "-5% 0px" });

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/40 bg-background">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(0.88_0.27_142/0.06),transparent)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-20" />

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-14 md:py-28">
          <SectionReveal className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center border border-neon-green/80 px-4 py-1.5 font-display text-[9px] uppercase tracking-[0.28em] text-foreground md:text-[10px]">
              Video testimonials
            </span>

            <h2 className="mt-5 font-display text-2xl uppercase leading-tight tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none">
              Hear{" "}
              <span className="neon-text text-glow">what brands say</span> about Starlights
              Visuals
            </h2>
          </SectionReveal>

          <StaggerReveal className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-6">
            {videoTestimonials.map((v) => (
              <VideoTestimonialCard key={v.id} testimonial={v} onPlay={() => setActive(v)} />
            ))}
          </StaggerReveal>

          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 32 }}
            animate={carouselInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:hidden"
          >
            <div className="testimonial-carousel -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
              {videoTestimonials.map((v) => (
                <div key={v.id} className="w-[min(88vw,320px)] shrink-0 snap-center">
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
        title={active ? `Video testimonial — ${active.name}` : "Video testimimonial"}
      />
    </>
  );
}
