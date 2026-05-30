import type { WorkCategory, WorkClient, WorkProject } from "@/types/portfolio-works";

import raycon from "@/assets/brand logo/raycon.png";
import crossrope from "@/assets/brand logo/crossrope.png";
import depology from "@/assets/brand logo/depology.png";
import joyjolt from "@/assets/brand logo/joyjolt.png";
import exa from "@/assets/brand logo/exa.png";
import kurk from "@/assets/brand logo/kurk.png";
import mirrorskin from "@/assets/brand logo/mirrorskin.png";
import nutrition from "@/assets/brand logo/nutrition.png";
import bello from "@/assets/brand logo/bello.png";
import cardigan from "@/assets/brand logo/cardigan.png";
import scoop from "@/assets/brand logo/scoop.png";
import saltyface from "@/assets/brand logo/saltyface.png";
import itsy from "@/assets/brand logo/itsy.png";
import innermost from "@/assets/brand logo/innermost.png";
import huya from "@/assets/brand logo/huya.png";
import snax from "@/assets/brand logo/snax.png";
import moxeys from "@/assets/brand logo/moxeys.png";
import swolly from "@/assets/brand logo/swolly.png";

import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import heroVideo from "@/assets/hero-background.mp4";

const portfolioImages = [
  portfolio2d,
  portfolioCharacter,
  portfolioCreature,
  portfolioGame,
  portfolioMotion,
  portfolioTrailer,
] as const;

const sampleTitles = [
  "Hero Campaign",
  "Social Cutdown Pack",
  "Launch Film",
  "Brand Story",
  "Seasonal Refresh",
] as const;

function padProjects(
  items: Omit<WorkProject, "id">[],
  prefix: string,
  clientName: string,
): WorkProject[] {
  const padded: Omit<WorkProject, "id">[] = [...items];
  const seed = items[0];

  while (padded.length < 5) {
    const i = padded.length;
    const thumbnail = portfolioImages[i % portfolioImages.length];
    padded.push({
      title: `${clientName} ${sampleTitles[i]}`,
      description:
        seed?.description ??
        `Sample deliverable showcasing our work with ${clientName}.`,
      thumbnail,
      mediaType: "image",
      mediaSrc: thumbnail,
      tags: seed?.tags ?? ["Campaign"],
      year: (seed?.year ?? 2025) - Math.floor(i / 2),
    });
  }

  return projects(
    padded.slice(0, 5).map((item, i) => ({
      ...item,
      mediaType: i % 2 === 1 ? "video" : "image",
      mediaSrc: i % 2 === 1 ? heroVideo : item.thumbnail,
    })),
    prefix,
  );
}

export type WorkCategorySlug =
  | "2d-animation"
  | "3d-animation"
  | "motion-graphics"
  | "video-editing"
  | "vfx"
  | "branding";

function projects(
  items: Omit<WorkProject, "id">[],
  prefix: string,
): WorkProject[] {
  return items.map((item, i) => ({ ...item, id: `${prefix}-p${i + 1}` }));
}

function client(
  partial: Omit<WorkClient, "projects"> & { projects: Omit<WorkProject, "id">[] },
  projectPrefix: string,
): WorkClient {
  const projectList = padProjects(partial.projects, projectPrefix, partial.name);
  return {
    ...partial,
    projectCount: Math.max(partial.projectCount, projectList.length),
    projects: projectList,
  };
}

const sharedTools = ["After Effects", "Cinema 4D", "Blender", "DaVinci Resolve", "Photoshop"];

export const workCategories: WorkCategory[] = [
  {
    slug: "2d-animation",
    title: "2D Animation",
    tagline: "Frame-by-frame craft for campaigns and series",
    description:
      "Character-driven 2D animation for commercials, explainers, and episodic content with bold motion and cinematic timing.",
    coverImage: portfolio2d,
    clients: [
      client(
        {
          slug: "raycon",
          name: "Raycon",
          industry: "Consumer Electronics",
          description:
            "Animated product stories and character loops for global paid social and hero campaign launches.",
          projectCount: 8,
          testimonial: "The motion language felt premium from the first storyboard frame.",
          logo: raycon,
          banner: portfolio2d,
          services: ["2D Character Animation", "Explainer Sequences", "Social Cutdowns"],
          timeline: "2022 — Present",
          tools: ["After Effects", "Toon Boom", "Photoshop"],
          projects: [
            {
              title: "Hero Launch Loop",
              description: "15s looping animation for paid social with product-first storytelling.",
              thumbnail: portfolio2d,
              mediaType: "image",
              mediaSrc: portfolio2d,
              tags: ["Campaign", "Product"],
              year: 2025,
            },
            {
              title: "Character Spot",
              description: "Hand-drawn character acting for a seasonal brand refresh.",
              thumbnail: portfolioCharacter,
              mediaType: "image",
              mediaSrc: portfolioCharacter,
              tags: ["Character", "Broadcast"],
              year: 2024,
            },
          ],
        },
        "raycon-2d",
      ),
      client(
        {
          slug: "crossrope",
          name: "Crossrope",
          industry: "Fitness & Wellness",
          description: "High-energy 2D motion for app onboarding and performance marketing.",
          projectCount: 5,
          logo: crossrope,
          banner: portfolioMotion,
          services: ["2D Motion Graphics", "UI Animation"],
          timeline: "2023 — 2025",
          tools: ["After Effects", "Illustrator"],
          projects: [
            {
              title: "App Onboarding",
              description: "Modular 2D scenes explaining workout modes and tracking.",
              thumbnail: portfolioMotion,
              mediaType: "image",
              mediaSrc: portfolioMotion,
              tags: ["UI", "Explainer"],
              year: 2025,
            },
          ],
        },
        "crossrope-2d",
      ),
      client(
        {
          slug: "itsy",
          name: "Itsy",
          industry: "Children & Education",
          description: "Playful 2D character animation for app stories and learning content.",
          projectCount: 5,
          logo: itsy,
          banner: portfolioCharacter,
          services: ["2D Character Animation", "Storyboarding"],
          timeline: "2023 — 2025",
          tools: ["After Effects", "Toon Boom"],
          projects: [
            {
              title: "Storybook Series",
              description: "Episodic 2D shorts for in-app learning journeys.",
              thumbnail: portfolioCharacter,
              mediaType: "image",
              mediaSrc: portfolioCharacter,
              tags: ["Character", "Series"],
              year: 2025,
            },
          ],
        },
        "itsy-2d",
      ),
    ],
  },
  {
    slug: "3d-animation",
    title: "3D Animation",
    tagline: "Photoreal and stylized 3D for brands and film",
    description:
      "Product, character, and environment animation with cinematic lighting, physics, and premium finish.",
    coverImage: portfolioCharacter,
    clients: [
      client(
        {
          slug: "depology",
          name: "Depology",
          industry: "Beauty & Skincare",
          description: "3D product visualization and macro beauty shots for DTC campaigns.",
          projectCount: 12,
          testimonial: "Every frame felt editorial — our conversion creative finally matched our brand.",
          logo: depology,
          banner: portfolioCreature,
          services: ["3D Product Animation", "Beauty Macro", "CGI Environments"],
          timeline: "2021 — Present",
          tools: sharedTools,
          projects: [
            {
              title: "Serum Hero Film",
              description: "Photoreal product turntable with fluid sim and macro lensing.",
              thumbnail: portfolioCreature,
              mediaType: "image",
              mediaSrc: portfolioCreature,
              tags: ["Product", "Beauty"],
              year: 2025,
            },
            {
              title: "Routine Reveal",
              description: "Three-step routine animation for landing page hero.",
              thumbnail: portfolioCharacter,
              mediaType: "image",
              mediaSrc: portfolioCharacter,
              tags: ["Campaign"],
              year: 2024,
            },
          ],
        },
        "depology-3d",
      ),
      client(
        {
          slug: "joyjolt",
          name: "Joyjolt",
          industry: "Home & Lifestyle",
          description: "Stylized 3D glassware animation for Amazon and paid social.",
          projectCount: 6,
          logo: joyjolt,
          banner: portfolioGame,
          services: ["3D Product", "Hard Surface"],
          timeline: "2022 — 2024",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Glassware Collection",
              description: "Crystal refraction studies and packshot animations.",
              thumbnail: portfolioGame,
              mediaType: "image",
              mediaSrc: portfolioGame,
              tags: ["Product"],
              year: 2024,
            },
          ],
        },
        "joyjolt-3d",
      ),
      client(
        {
          slug: "innermost",
          name: "Innermost",
          industry: "Health & Wellness",
          description: "3D supplement visualization with macro textures and fluid dynamics.",
          projectCount: 5,
          logo: innermost,
          banner: portfolioCreature,
          services: ["3D Product", "Macro CGI"],
          timeline: "2022 — 2025",
          tools: sharedTools,
          projects: [
            {
              title: "Powder Macro Film",
              description: "Slow-motion powder pour with photoreal lighting and grade.",
              thumbnail: portfolioCreature,
              mediaType: "image",
              mediaSrc: portfolioCreature,
              tags: ["Product", "Macro"],
              year: 2025,
            },
          ],
        },
        "innermost-3d",
      ),
    ],
  },
  {
    slug: "motion-graphics",
    title: "Game Environment",
    tagline: "Immersive worlds and playable spaces in motion",
    description:
      "Design-led motion systems for launches, dashboards, and brand worlds that scale across channels.",
    coverImage: portfolioMotion,
    clients: [
      client(
        {
          slug: "exa",
          name: "Exa",
          industry: "Technology",
          description: "Launch motion toolkits and abstract data visualizations.",
          projectCount: 4,
          logo: exa,
          banner: portfolioMotion,
          services: ["Brand Motion", "Launch Films"],
          timeline: "2024 — 2025",
          tools: ["After Effects", "Cinema 4D"],
          projects: [
            {
              title: "Launch Toolkit",
              description: "Modular motion components for keynote and social rollout.",
              thumbnail: portfolioMotion,
              mediaType: "image",
              mediaSrc: portfolioMotion,
              tags: ["Launch", "Toolkit"],
              year: 2025,
            },
          ],
        },
        "exa-motion",
      ),
      client(
        {
          slug: "kurk",
          name: "Kurk",
          industry: "Health & Supplements",
          description: "Supplement brand motion with organic textures and bold typography.",
          projectCount: 7,
          logo: kurk,
          banner: portfolio2d,
          services: ["Motion Graphics", "Paid Social"],
          timeline: "2023 — 2025",
          tools: ["After Effects", "Illustrator"],
          projects: [
            {
              title: "Ingredient Story",
              description: "Kinetic type and macro overlays for hero DTC ads.",
              thumbnail: portfolio2d,
              mediaType: "image",
              mediaSrc: portfolio2d,
              tags: ["DTC", "Typography"],
              year: 2025,
            },
          ],
        },
        "kurk-motion",
      ),
      client(
        {
          slug: "huya",
          name: "Huya",
          industry: "Gaming & Live Streaming",
          description: "Game environment flythroughs and arena worlds for launch campaigns.",
          projectCount: 5,
          logo: huya,
          banner: portfolioGame,
          services: ["Environment Art", "Cinematic Flythrough"],
          timeline: "2023 — 2025",
          tools: ["Unreal Engine", "Cinema 4D", "After Effects"],
          projects: [
            {
              title: "Arena World Reveal",
              description: "Cinematic environment tour with dynamic lighting and VFX.",
              thumbnail: portfolioGame,
              mediaType: "image",
              mediaSrc: portfolioGame,
              tags: ["Environment", "Launch"],
              year: 2025,
            },
          ],
        },
        "huya-env",
      ),
    ],
  },
  {
    slug: "video-editing",
    title: "Product Animation",
    tagline: "Photoreal product films and cinematic packshots",
    description:
      "Editorial finishing, rhythm, and story structure for commercials, documentaries, and brand films.",
    coverImage: portfolioTrailer,
    clients: [
      client(
        {
          slug: "nutrition",
          name: "Nutrition",
          industry: "Health & Fitness",
          description: "High-retention edits for YouTube, paid social, and influencer collaborations.",
          projectCount: 9,
          logo: nutrition,
          banner: portfolioTrailer,
          services: ["Commercial Edit", "Social Cutdowns"],
          timeline: "2022 — 2025",
          tools: ["Premiere Pro", "DaVinci Resolve"],
          projects: [
            {
              title: "Campaign Montage",
              description: "Fast-cut performance edit with sound design and color polish.",
              thumbnail: portfolioTrailer,
              mediaType: "image",
              mediaSrc: portfolioTrailer,
              tags: ["Edit", "Social"],
              year: 2025,
            },
          ],
        },
        "nutrition-edit",
      ),
      client(
        {
          slug: "saltyface",
          name: "Saltyface",
          industry: "Beauty",
          description: "Beauty editorial edits with seamless transitions and grade consistency.",
          projectCount: 5,
          logo: saltyface,
          banner: portfolioCharacter,
          services: ["Editorial", "Color"],
          timeline: "2023 — 2024",
          tools: ["DaVinci Resolve"],
          projects: [
            {
              title: "Editorial Film",
              description: "60s brand film assembled from multi-day production footage.",
              thumbnail: portfolioCharacter,
              mediaType: "image",
              mediaSrc: portfolioCharacter,
              tags: ["Beauty", "Film"],
              year: 2024,
            },
          ],
        },
        "saltyface-edit",
      ),
      client(
        {
          slug: "snax",
          name: "Snax",
          industry: "Food & Beverage",
          description: "3D product animation for packshots, splashes, and hero retail films.",
          projectCount: 5,
          logo: snax,
          banner: portfolioTrailer,
          services: ["3D Product Animation", "Packshot Films"],
          timeline: "2022 — 2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Packshot Hero",
              description: "Photoreal product spin with liquid sim and studio lighting.",
              thumbnail: portfolioTrailer,
              mediaType: "image",
              mediaSrc: portfolioTrailer,
              tags: ["Product", "Packshot"],
              year: 2025,
            },
          ],
        },
        "snax-product",
      ),
    ],
  },
  {
    slug: "vfx",
    title: "VFX",
    tagline: "Compositing, FX, and cinematic finishing",
    description:
      "Visual effects for trailers, product films, and branded content — from cleanups to full CG integration.",
    coverImage: portfolioTrailer,
    clients: [
      client(
        {
          slug: "mirrorskin",
          name: "Mirrorskin",
          industry: "Skincare",
          description: "Beauty VFX, skin retouching, and particle FX for premium campaign films.",
          projectCount: 6,
          testimonial: "Invisible VFX that still felt magical on screen.",
          logo: mirrorskin,
          banner: portfolioTrailer,
          services: ["Compositing", "Beauty VFX", "Particles"],
          timeline: "2023 — 2025",
          tools: ["Nuke", "After Effects", "Houdini"],
          projects: [
            {
              title: "Particle Beauty Pass",
              description: "Macro serum particles integrated into live-action plates.",
              thumbnail: portfolioTrailer,
              mediaType: "image",
              mediaSrc: portfolioTrailer,
              tags: ["VFX", "Beauty"],
              year: 2025,
            },
            {
              title: "Trailer Finish",
              description: "Full comp pipeline for a 30s launch trailer.",
              thumbnail: portfolioCreature,
              mediaType: "image",
              mediaSrc: portfolioCreature,
              tags: ["Trailer"],
              year: 2024,
            },
          ],
        },
        "mirrorskin-vfx",
      ),
      client(
        {
          slug: "bello",
          name: "Bello",
          industry: "Consumer Goods",
          description: "Product enhancement and environment extensions for retail campaigns.",
          projectCount: 4,
          logo: bello,
          banner: portfolioGame,
          services: ["Compositing", "Set Extension"],
          timeline: "2024",
          tools: ["Nuke", "Photoshop"],
          projects: [
            {
              title: "Retail Hero",
              description: "CG environment blend with studio product photography.",
              thumbnail: portfolioGame,
              mediaType: "image",
              mediaSrc: portfolioGame,
              tags: ["Retail"],
              year: 2024,
            },
          ],
        },
        "bello-vfx",
      ),
      client(
        {
          slug: "moxeys",
          name: "Moxeys",
          industry: "Retail & E-commerce",
          description: "VFX-heavy product films with set extensions and particle systems.",
          projectCount: 5,
          logo: moxeys,
          banner: portfolioMotion,
          services: ["Compositing", "Particle FX"],
          timeline: "2023 — 2025",
          tools: ["Nuke", "Houdini", "After Effects"],
          projects: [
            {
              title: "Particle Product Pass",
              description: "Macro particle FX integrated with studio product plates.",
              thumbnail: portfolioMotion,
              mediaType: "image",
              mediaSrc: portfolioMotion,
              tags: ["VFX", "Product"],
              year: 2025,
            },
          ],
        },
        "moxeys-vfx",
      ),
    ],
  },
  {
    slug: "branding",
    title: "Industrial Animation",
    tagline: "Technical storytelling for products and manufacturing",
    description:
      "Brand films, identity motion, and launch assets that define how audiences remember your name.",
    coverImage: portfolioGame,
    clients: [
      client(
        {
          slug: "cardigan",
          name: "Cardigan",
          industry: "Fashion",
          description: "Seasonal brand films and motion identity for digital-first launches.",
          projectCount: 5,
          logo: cardigan,
          banner: portfolioGame,
          services: ["Brand Film", "Identity Motion"],
          timeline: "2023 — 2025",
          tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
          projects: [
            {
              title: "Season Launch Film",
              description: "60s brand narrative with typographic system and color world.",
              thumbnail: portfolioGame,
              mediaType: "image",
              mediaSrc: portfolioGame,
              tags: ["Brand", "Fashion"],
              year: 2025,
            },
          ],
        },
        "cardigan-brand",
      ),
      client(
        {
          slug: "scoop",
          name: "Scoop",
          industry: "Media & Publishing",
          description: "Rebrand motion toolkit and template library for editorial teams.",
          projectCount: 3,
          logo: scoop,
          banner: portfolioMotion,
          services: ["Rebrand", "Motion System"],
          timeline: "2024",
          tools: ["After Effects", "Figma"],
          projects: [
            {
              title: "Motion Identity",
              description: "Logo sting, lower thirds, and transition package.",
              thumbnail: portfolioMotion,
              mediaType: "image",
              mediaSrc: portfolioMotion,
              tags: ["Identity"],
              year: 2024,
            },
          ],
        },
        "scoop-brand",
      ),
      client(
        {
          slug: "swolly",
          name: "Swolly",
          industry: "Manufacturing",
          description: "3D industrial animation explaining assembly lines and machinery.",
          projectCount: 5,
          logo: swolly,
          banner: portfolio2d,
          services: ["Industrial Animation", "Technical Explainer"],
          timeline: "2022 — 2025",
          tools: ["Cinema 4D", "Blender", "After Effects"],
          projects: [
            {
              title: "Assembly Line Explainer",
              description: "Cutaway factory animation with labeled components and motion.",
              thumbnail: portfolio2d,
              mediaType: "image",
              mediaSrc: portfolio2d,
              tags: ["Industrial", "Explainer"],
              year: 2025,
            },
          ],
        },
        "swolly-industrial",
      ),
    ],
  },
];

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
