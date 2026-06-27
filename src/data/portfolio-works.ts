import type { WorkCategory } from "@/types/portfolio-works";

import { applyPortfolioYoutube } from "@/lib/apply-portfolio-youtube";

import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";

export type WorkCategorySlug =
  | "2d-animation"
  | "3d-animation"
  | "motion-graphics"
  | "video-editing"
  | "vfx"
  | "branding";

/** Portfolio categories — add clients here when YouTube samples are ready. */
const rawWorkCategories: WorkCategory[] = [
  {
    slug: "2d-animation",
    title: "2D Animation",
    tagline: "Frame by frame craft for campaigns and series",
    description:
      "Character driven 2D animation for commercials, explainers, and episodic content with bold motion and cinematic timing.",
    coverImage: portfolio2d,
    clients: [],
  },
  {
    slug: "3d-animation",
    title: "3D Animation",
    tagline: "Stylized and photoreal 3D for film and brands",
    description:
      "High quality 3D character, product, and cinematic animation with feature level polish for campaigns and series.",
    coverImage: portfolioCharacter,
    clients: [],
  },
  {
    slug: "motion-graphics",
    title: "Game Environment",
    tagline: "Immersive worlds and playable spaces in motion",
    description:
      "Design led motion systems for launches, dashboards, and brand worlds that scale across channels.",
    coverImage: portfolioMotion,
    clients: [],
  },
  {
    slug: "video-editing",
    title: "Product Animation",
    tagline: "Photoreal product films and cinematic packshots",
    description:
      "Editorial finishing, rhythm, and story structure for commercials, documentaries, and brand films.",
    coverImage: portfolioTrailer,
    clients: [],
  },
  {
    slug: "vfx",
    title: "VFX",
    tagline: "Compositing, FX, and cinematic finishing",
    description:
      "Visual effects for trailers, product films, and branded content, from cleanups to full CG integration.",
    coverImage: portfolioTrailer,
    clients: [],
  },
  {
    slug: "branding",
    title: "Industrial Animation",
    tagline: "Technical storytelling for products and manufacturing",
    description:
      "Brand films, identity motion, and launch assets that define how audiences remember your name.",
    coverImage: portfolioGame,
    clients: [],
  },
];

export const workCategories = applyPortfolioYoutube(rawWorkCategories);

const showcaseLabels: Record<
  WorkCategorySlug,
  { tag: string; title: string }
> = {
  "2d-animation": { tag: "2D Animation", title: "2D Animation" },
  "3d-animation": { tag: "3D Animation", title: "3D Animation" },
  "motion-graphics": { tag: "Game Environment", title: "Game Environment" },
  "video-editing": { tag: "3D", title: "Product Animation" },
  vfx: { tag: "VFX", title: "VFX" },
  branding: { tag: "3D", title: "Industrial Animation" },
};

export const showcaseCategories = workCategories.map((c) => ({
  slug: c.slug,
  tag: showcaseLabels[c.slug as WorkCategorySlug].tag,
  title: showcaseLabels[c.slug as WorkCategorySlug].title,
  coverImage: c.coverImage,
}));
