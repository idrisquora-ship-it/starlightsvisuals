import type { WorkCategory, WorkClient, WorkProject } from "@/types/portfolio-works";

import { brandLogos } from "@/data/brand-logos";
import { anabomfimVideos, cartoon2dPosters, cartoon2dVideos, ijockeyVideos, industrialAnimationVideos, lemonadeJuiceVideos, shoksPosters, shoksVideos, valentinoVideos, watchDesignVideos } from "@/data/portfolio-media";

/** Placeholder client logos from the brand marquee set. */
const brandLogo = (index: number) => brandLogos[index % brandLogos.length]!.src;

import ijockeyHelmetPart from "@/assets/Ijockey portfolio folder/Helmet Part.jpeg";
import ijockeyClientSketch from "@/assets/Ijockey portfolio folder/Client Sketch.jpeg";
import ijockeyClientSketch1 from "@/assets/Ijockey portfolio folder/Client sketch 1.jpeg";
import ijockeyModelling from "@/assets/Ijockey portfolio folder/Modelling.jpeg";
import ijockeyModelling1 from "@/assets/Ijockey portfolio folder/Modelling 1.jpeg";
import ijockeyFinalProduct from "@/assets/Ijockey portfolio folder/Final Product.jpeg";
import ijockeyFinalProduct1 from "@/assets/Ijockey portfolio folder/Final Product 1.jpeg";
import ijockeyFinalProduct2 from "@/assets/Ijockey portfolio folder/Final Product 2.jpeg";

import caterpillarBanner from "@/assets/Caterpillar animation portfolio/industrial animation.jpg";
import caterpillarKeyVisual from "@/assets/Caterpillar animation portfolio/create-realistic-3d-product-animation-industrial-animation-cgi-animation.png";

import anabomfimPerfume from "@/assets/Anabomfim project/ana-bomfim-perfume.jpg";

import valentinoRender1 from "@/assets/Valentino Project/Valentino perfume render1.jpg";
import valentinoRender2 from "@/assets/Valentino Project/Valentino perfume render2.jpg";
import valentinoRender3 from "@/assets/Valentino Project/Valentino perfume render 3.jpg";
import valentinoRender4 from "@/assets/Valentino Project/Valentino perfume render 4.jpg";

import watchRender1 from "@/assets/watch concept/Final rendered Image watch concept.png";
import watchRender2 from "@/assets/watch concept/Final rendered Image watch concept 2.png";
import watchRender3 from "@/assets/watch concept/Final rendered Image watch concept 3.jpg";
import watchRender4 from "@/assets/watch concept/Final rendered Image watch concept 4.jpg";

import lemonadeRender1 from "@/assets/Lemonade Juice/I will create photorealistic renders and 3d product animations.jpg";
import lemonadeRender2 from "@/assets/Lemonade Juice/I will create photorealistic renders and 3d product animations (1).jpg";
import lemonadeRender3 from "@/assets/Lemonade Juice/I will create photorealistic renders and 3d product animations (2).jpg";

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
  options?: { skipPad?: boolean },
): WorkClient {
  const projectList = options?.skipPad
    ? projects(partial.projects, projectPrefix)
    : padProjects(partial.projects, projectPrefix, partial.name);
  return {
    ...partial,
    projectCount: options?.skipPad ? projectList.length : Math.max(partial.projectCount, projectList.length),
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
          logo: brandLogo(0),
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
          logo: brandLogo(1),
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
          logo: brandLogo(2),
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
      client(
        {
          slug: "2d-cartoon-animation",
          name: "2D Cartoon Animation",
          industry: "Children & Education",
          description:
            "Custom 2D character animation and cartoon films for kids learning content, explainers, and branded storytelling.",
          projectCount: 2,
          logo: cartoon2dPosters.cartoon,
          banner: cartoon2dPosters.numberNames,
          services: ["2D Character Animation", "Kids Learning", "Cartoon Films"],
          timeline: "2025",
          tools: ["After Effects", "Toon Boom", "Illustrator"],
          projects: [
            {
              title: "Number Names Learning Video",
              description:
                "Educational 2D cartoon animation teaching number names with playful characters and clear pacing.",
              thumbnail: cartoon2dPosters.numberNames,
              mediaType: "video",
              mediaSrc: cartoon2dVideos.numberNames,
              tags: ["Education", "Character"],
              year: 2025,
            },
            {
              title: "Custom Cartoon Animation",
              description:
                "Bespoke 2D character animation with expressive acting, bold color, and campaign-ready motion.",
              thumbnail: cartoon2dPosters.cartoon,
              mediaType: "video",
              mediaSrc: cartoon2dVideos.cartoon,
              tags: ["Cartoon", "Character"],
              year: 2025,
            },
          ],
        },
        "2d-cartoon-animation",
        { skipPad: true },
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
          logo: brandLogo(3),
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
          logo: brandLogo(4),
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
          logo: brandLogo(5),
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
          logo: brandLogo(6),
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
          logo: brandLogo(7),
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
          logo: brandLogo(8),
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
          slug: "anabomfim",
          name: "Anabomfim",
          industry: "Beauty & Fragrance",
          description:
            "Photoreal 3D product animation for luxury fragrance launches and campaign hero films.",
          projectCount: 2,
          logo: anabomfimPerfume,
          banner: anabomfimPerfume,
          services: ["3D Product Animation", "Packshot Films", "Beauty CGI"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Perfume Render",
              description:
                "Photoreal studio render with premium glass materials, ribbon detail, and campaign-ready lighting.",
              thumbnail: anabomfimPerfume,
              mediaType: "image",
              mediaSrc: anabomfimPerfume,
              tags: ["Render", "Fragrance"],
              year: 2025,
            },
            {
              title: "Perfume Product Film",
              description:
                "Cinematic 3D perfume animation with studio lighting, liquid sim, and premium packshot finish.",
              thumbnail: anabomfimPerfume,
              mediaType: "video",
              mediaSrc: anabomfimVideos.perfume,
              tags: ["Product", "Fragrance"],
              year: 2025,
            },
          ],
        },
        "anabomfim-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "valentino",
          name: "Valentino",
          industry: "Luxury Beauty & Fragrance",
          description:
            "High-end 3D perfume visualization and cinematic product films for luxury fragrance campaigns.",
          projectCount: 5,
          logo: valentinoRender1,
          banner: valentinoRender2,
          services: ["3D Product Animation", "Luxury Packshots", "Beauty CGI"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Perfume Render",
              description: "Hero studio render with soft lighting and premium glass material finish.",
              thumbnail: valentinoRender1,
              mediaType: "image",
              mediaSrc: valentinoRender1,
              tags: ["Render", "Packshot"],
              year: 2025,
            },
            {
              title: "Perfume Render",
              description: "Alternate angle showcasing bottle silhouette and label detail.",
              thumbnail: valentinoRender2,
              mediaType: "image",
              mediaSrc: valentinoRender2,
              tags: ["Render", "Product"],
              year: 2025,
            },
            {
              title: "Perfume Render",
              description: "Close-up product render with refined reflections and color grade.",
              thumbnail: valentinoRender3,
              mediaType: "image",
              mediaSrc: valentinoRender3,
              tags: ["Render", "Beauty"],
              year: 2025,
            },
            {
              title: "Perfume Render",
              description: "Final packshot frame for campaign and retail placements.",
              thumbnail: valentinoRender4,
              mediaType: "image",
              mediaSrc: valentinoRender4,
              tags: ["Render", "Campaign"],
              year: 2025,
            },
            {
              title: "Perfume Product Film",
              description:
                "Cinematic 3D perfume animation with fluid dynamics and luxury brand presentation.",
              thumbnail: valentinoRender1,
              mediaType: "video",
              mediaSrc: valentinoVideos.perfume,
              tags: ["Film", "Fragrance"],
              year: 2025,
            },
          ],
        },
        "valentino-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "watch-design-and-animation",
          name: "Watch Design and Animation",
          industry: "Luxury Watches & Product Design",
          description:
            "Concept-to-final 3D watch design, photoreal renders, and cinematic product animation for luxury timepieces.",
          projectCount: 5,
          logo: watchRender1,
          banner: watchRender2,
          services: ["Product Design", "3D Product Animation", "Luxury Renders"],
          timeline: "2025",
          tools: ["Cinema 4D", "Blender", "Redshift", "After Effects"],
          projects: [
            {
              title: "Watch Render",
              description: "Hero studio render showcasing dial detail, materials, and premium lighting.",
              thumbnail: watchRender1,
              mediaType: "image",
              mediaSrc: watchRender1,
              tags: ["Render", "Watch"],
              year: 2025,
            },
            {
              title: "Watch Render",
              description: "Alternate angle highlighting case geometry and bracelet finish.",
              thumbnail: watchRender2,
              mediaType: "image",
              mediaSrc: watchRender2,
              tags: ["Render", "Product"],
              year: 2025,
            },
            {
              title: "Watch Render",
              description: "Close-up product render with refined reflections and surface detail.",
              thumbnail: watchRender3,
              mediaType: "image",
              mediaSrc: watchRender3,
              tags: ["Render", "Detail"],
              year: 2025,
            },
            {
              title: "Watch Render",
              description: "Final packshot frame for campaign and retail placements.",
              thumbnail: watchRender4,
              mediaType: "image",
              mediaSrc: watchRender4,
              tags: ["Render", "Campaign"],
              year: 2025,
            },
            {
              title: "Watch Product Film",
              description:
                "Cinematic 3D watch animation from concept design through final product presentation.",
              thumbnail: watchRender1,
              mediaType: "video",
              mediaSrc: watchDesignVideos.productDesign,
              tags: ["Film", "Product Design"],
              year: 2025,
            },
          ],
        },
        "watch-design-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "lemonade-juice",
          name: "Lemonade Juice",
          industry: "Food & Beverage",
          description:
            "Photoreal 3D lemonade renders and cinematic product animation for beverage campaigns and retail.",
          projectCount: 4,
          logo: lemonadeRender1,
          banner: lemonadeRender2,
          services: ["3D Product Animation", "Packshot Films", "Beverage CGI"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Lemonade Render",
              description: "Hero studio render with condensation, citrus accents, and premium packshot finish.",
              thumbnail: lemonadeRender1,
              mediaType: "image",
              mediaSrc: lemonadeRender1,
              tags: ["Render", "Beverage"],
              year: 2025,
            },
            {
              title: "Lemonade Render",
              description: "Alternate angle highlighting bottle form, label, and refreshment cues.",
              thumbnail: lemonadeRender2,
              mediaType: "image",
              mediaSrc: lemonadeRender2,
              tags: ["Render", "Product"],
              year: 2025,
            },
            {
              title: "Lemonade Render",
              description: "Close-up product render with refined liquid and glass material detail.",
              thumbnail: lemonadeRender3,
              mediaType: "image",
              mediaSrc: lemonadeRender3,
              tags: ["Render", "Packshot"],
              year: 2025,
            },
            {
              title: "Lemonade Product Film",
              description:
                "Cinematic 3D lemonade animation with fluid motion and campaign-ready product presentation.",
              thumbnail: lemonadeRender1,
              mediaType: "video",
              mediaSrc: lemonadeJuiceVideos.product,
              tags: ["Film", "Beverage"],
              year: 2025,
            },
          ],
        },
        "lemonade-juice-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "shoks",
          name: "SHOKS",
          industry: "Consumer Electronics",
          description:
            "Photoreal 3D earbud product animation with studio lighting, material detail, and campaign-ready motion.",
          projectCount: 1,
          logo: shoksPosters.earbud,
          banner: shoksPosters.earbud,
          services: ["3D Product Animation", "Packshot Films", "Tech CGI"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Earbud Product Film",
              description:
                "Cinematic 3D earbud animation highlighting form, materials, and premium product presentation.",
              thumbnail: shoksPosters.earbud,
              mediaType: "video",
              mediaSrc: shoksVideos.earbud,
              tags: ["Product", "Electronics"],
              year: 2025,
            },
          ],
        },
        "shoks-product",
        { skipPad: true },
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
          logo: brandLogo(1),
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
          logo: brandLogo(2),
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
          logo: brandLogo(3),
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
          slug: "industrial-animation",
          name: "Industrial Animation",
          industry: "Manufacturing & Heavy Equipment",
          description:
            "Realistic 3D industrial and CGI product animation for heavy machinery, assembly showcases, and technical marketing films.",
          projectCount: 5,
          logo: caterpillarBanner,
          banner: caterpillarKeyVisual,
          services: ["Industrial Animation", "CGI Product Film", "Technical Visualization"],
          timeline: "2024 — 2025",
          tools: ["Cinema 4D", "Blender", "After Effects"],
          projects: [
            {
              title: "Industrial Hero Still",
              description: "Key still frame from a heavy-equipment industrial animation sequence.",
              thumbnail: caterpillarBanner,
              mediaType: "image",
              mediaSrc: caterpillarBanner,
              tags: ["Industrial", "Still"],
              year: 2025,
            },
            {
              title: "CGI Product Key Visual",
              description: "Photoreal CGI product render for campaign and pitch decks.",
              thumbnail: caterpillarKeyVisual,
              mediaType: "image",
              mediaSrc: caterpillarKeyVisual,
              tags: ["CGI", "Product"],
              year: 2025,
            },
            {
              title: "Industrial Animation Film",
              description: "Full industrial animation showcasing machinery in motion.",
              thumbnail: caterpillarBanner,
              mediaType: "video",
              mediaSrc: industrialAnimationVideos.film,
              tags: ["Industrial", "Film"],
              year: 2025,
            },
            {
              title: "CGI Product Animation",
              description: "Realistic 3D product animation with cinematic lighting and camera moves.",
              thumbnail: caterpillarKeyVisual,
              mediaType: "video",
              mediaSrc: industrialAnimationVideos.cgi,
              tags: ["CGI", "Animation"],
              year: 2024,
            },
            {
              title: "Animation Sample Reel",
              description: "Sample industrial animation cut for social and presentation use.",
              thumbnail: caterpillarBanner,
              mediaType: "video",
              mediaSrc: industrialAnimationVideos.sample,
              tags: ["Sample", "Industrial"],
              year: 2024,
            },
          ],
        },
        "industrial-animation",
        { skipPad: true },
      ),
      client(
        {
          slug: "ijockey",
          name: "Ijockey",
          industry: "Consumer Products",
          description:
            "3D product animation, paper renders, and branded films for Ijockey's retail and campaign launches.",
          projectCount: 11,
          logo: ijockeyFinalProduct,
          banner: ijockeyFinalProduct1,
          services: ["3D Product Animation", "Industrial Render", "Brand Film"],
          timeline: "2024 — 2025",
          tools: ["Cinema 4D", "Blender", "After Effects"],
          projects: [
            {
              title: "Helmet Part",
              description: "Product overview and dynamic ventilation system for the Ijockey helmet.",
              thumbnail: ijockeyHelmetPart,
              mediaType: "image",
              mediaSrc: ijockeyHelmetPart,
              tags: ["Helmet Part", "Product"],
              year: 2025,
            },
            {
              title: "Client Sketch",
              description: "Initial product concept sketch for Ijockey form and proportions.",
              thumbnail: ijockeyClientSketch,
              mediaType: "image",
              mediaSrc: ijockeyClientSketch,
              tags: ["Client Sketch", "Concept"],
              year: 2025,
            },
            {
              title: "Client Sketch",
              description: "Refined client sketch exploring silhouette and detail placement.",
              thumbnail: ijockeyClientSketch1,
              mediaType: "image",
              mediaSrc: ijockeyClientSketch1,
              tags: ["Client Sketch", "Concept"],
              year: 2025,
            },
            {
              title: "Modelling",
              description: "3D block-out and modelling pass for the Ijockey product.",
              thumbnail: ijockeyModelling,
              mediaType: "image",
              mediaSrc: ijockeyModelling,
              tags: ["Modelling", "3D"],
              year: 2025,
            },
            {
              title: "Modelling",
              description: "Modelling refinement with improved topology and surface flow.",
              thumbnail: ijockeyModelling1,
              mediaType: "image",
              mediaSrc: ijockeyModelling1,
              tags: ["Modelling", "3D"],
              year: 2025,
            },
            {
              title: "Final Product",
              description: "Finished product render with materials and studio lighting.",
              thumbnail: ijockeyFinalProduct,
              mediaType: "image",
              mediaSrc: ijockeyFinalProduct,
              tags: ["Final Product", "Render"],
              year: 2024,
            },
            {
              title: "Final Product",
              description: "Hero final product frame for campaign and retail use.",
              thumbnail: ijockeyFinalProduct1,
              mediaType: "image",
              mediaSrc: ijockeyFinalProduct1,
              tags: ["Final Product", "Render"],
              year: 2024,
            },
            {
              title: "Final Product",
              description: "Alternate final product angle for launch and paid media.",
              thumbnail: ijockeyFinalProduct2,
              mediaType: "image",
              mediaSrc: ijockeyFinalProduct2,
              tags: ["Final Product", "Render"],
              year: 2024,
            },
            {
              title: "Branded Product Film",
              description: "Branded product animation with on-screen typography and logo treatment.",
              thumbnail: ijockeyFinalProduct,
              mediaType: "video",
              mediaSrc: ijockeyVideos.withText,
              tags: ["Film", "Branded"],
              year: 2024,
            },
            {
              title: "Clean Product Animation",
              description: "Logo-free product animation for flexible channel versioning.",
              thumbnail: ijockeyFinalProduct1,
              mediaType: "video",
              mediaSrc: ijockeyVideos.withoutText,
              tags: ["Animation", "Product"],
              year: 2024,
            },
            {
              title: "Product Showcase",
              description: "Full product showcase film for retail and digital placements.",
              thumbnail: ijockeyFinalProduct2,
              mediaType: "video",
              mediaSrc: ijockeyVideos.showcase,
              tags: ["Showcase", "Film"],
              year: 2024,
            },
          ],
        },
        "ijockey-industrial",
        { skipPad: true },
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
