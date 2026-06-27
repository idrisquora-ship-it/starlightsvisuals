import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const filePath = path.join(root, "src", "data", "portfolio-works.ts");

const motionGraphics = `  {
    slug: "motion-graphics",
    title: "Game Environment",
    tagline: "Immersive worlds and playable spaces in motion",
    description:
      "Design led motion systems for launches, dashboards, and brand worlds that scale across channels.",
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
          timeline: "2024 to 2025",
          tools: ["After Effects", "Cinema 4D"],
          projects: [
            {
              title: "Launch Toolkit",
              description: "Modular motion components for keynote and social rollout.",
              thumbnail: portfolioMotion,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Launch", "Toolkit"],
              year: 2025,
            },
          ],
        },
        "exa-motion",
        { skipPad: true },
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
          timeline: "2023 to 2025",
          tools: ["After Effects", "Illustrator"],
          projects: [
            {
              title: "Ingredient Story",
              description: "Kinetic type and macro overlays for hero DTC ads.",
              thumbnail: portfolio2d,
              mediaType: "video",
              mediaSrc: "",
              tags: ["DTC", "Typography"],
              year: 2025,
            },
          ],
        },
        "kurk-motion",
        { skipPad: true },
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
          timeline: "2023 to 2025",
          tools: ["Unreal Engine", "Cinema 4D", "After Effects"],
          projects: [
            {
              title: "Arena World Reveal",
              description: "Cinematic environment tour with dynamic lighting and VFX.",
              thumbnail: portfolioGame,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Environment", "Launch"],
              year: 2025,
            },
          ],
        },
        "huya-env",
        { skipPad: true },
      ),
    ],
  },`;

const vfxCategory = `  {
    slug: "vfx",
    title: "VFX",
    tagline: "Compositing, FX, and cinematic finishing",
    description:
      "Visual effects for trailers, product films, and branded content, from cleanups to full CG integration.",
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
          timeline: "2023 to 2025",
          tools: ["Nuke", "After Effects", "Houdini"],
          projects: [
            {
              title: "Particle Beauty Pass",
              description: "Macro serum particles integrated into live action plates.",
              thumbnail: portfolioTrailer,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VFX", "Beauty"],
              year: 2025,
            },
            {
              title: "Trailer Finish",
              description: "Full comp pipeline for a 30s launch trailer.",
              thumbnail: portfolioCreature,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Trailer"],
              year: 2024,
            },
          ],
        },
        "mirrorskin-vfx",
        { skipPad: true },
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
              mediaType: "video",
              mediaSrc: "",
              tags: ["Retail"],
              year: 2024,
            },
          ],
        },
        "bello-vfx",
        { skipPad: true },
      ),
      client(
        {
          slug: "moxeys",
          name: "Moxeys",
          industry: "Retail & E-commerce",
          description: "VFX heavy product films with set extensions and particle systems.",
          projectCount: 5,
          logo: brandLogo(3),
          banner: portfolioMotion,
          services: ["Compositing", "Particle FX"],
          timeline: "2023 to 2025",
          tools: ["Nuke", "Houdini", "After Effects"],
          projects: [
            {
              title: "Particle Product Pass",
              description: "Macro particle FX integrated with studio product plates.",
              thumbnail: portfolioMotion,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VFX", "Product"],
              year: 2025,
            },
          ],
        },
        "moxeys-vfx",
        { skipPad: true },
      ),
    ],
  },`;

const assetImportNames = [
  "ijockeyHelmetPart",
  "ijockeyClientSketch",
  "ijockeyClientSketch1",
  "ijockeyModelling",
  "ijockeyModelling1",
  "ijockeyFinalProduct",
  "ijockeyFinalProduct1",
  "ijockeyFinalProduct2",
  "caterpillarBanner",
  "caterpillarKeyVisual",
  "atxRender1",
  "atxRender2",
  "atxRender3",
  "credexClientReference1",
  "credexClientReference2",
  "integraPwClientReference",
  "live2dCharacterImage",
  "vtuberCharacterImage1",
  "vtuberCharacterImage2",
  "raivCharacterColors",
  "raivCharacterSketch",
  "anabomfimPerfume",
  "valentinoRender1",
  "valentinoRender2",
  "valentinoRender3",
  "valentinoRender4",
  "watchRender1",
  "watchRender2",
  "watchRender3",
  "watchRender4",
  "lemonadeRender1",
  "lemonadeRender2",
  "lemonadeRender3",
  "steelReefRender1",
  "steelReefRender2",
  "phr1Render1",
  "phr1Render2",
  "wristbandRef1",
  "wristbandRef2",
  "wristbandRef3",
  "wristbandRef4",
  "wristbandRef5",
  "character3dImage1",
  "character3dImage2",
  "character3dImage3",
  "character3dImage4",
  "anime3dClientReference",
  "anime3dBlackRedFront",
  "anime3dBlackRedBack",
];

const mediaPatterns = [
  /anabomfimVideos\.\w+/g,
  /anime2dVideos\.\w+/g,
  /anime2dPosters\.\w+/g,
  /anime3dVideos\.\w+/g,
  /atxVideos\.\w+/g,
  /atxPosters\.\w+/g,
  /autozCraveVideos\.\w+/g,
  /autozCravePosters\.\w+/g,
  /cartoon2dVideos\.\w+/g,
  /cartoon2dPosters\.\w+/g,
  /character3dVideos\.\w+/g,
  /chibiArtVideos\.\w+/g,
  /chibiArtPosters\.\w+/g,
  /credexCleaningVideos\.\w+/g,
  /credexCleaningPosters\.\w+/g,
  /ijockeyVideos\.\w+/g,
  /industrialAnimationVideos\.\w+/g,
  /integraPwVideos\.\w+/g,
  /integraPwPosters\.\w+/g,
  /lemonadeJuiceVideos\.\w+/g,
  /live2dVideos\.\w+/g,
  /live2dPosters\.\w+/g,
  /medical3dVideos\.\w+/g,
  /medical3dPosters\.\w+/g,
  /phr1Videos\.\w+/g,
  /phr1Posters\.\w+/g,
  /raiv2dVideos\.\w+/g,
  /raiv2dPosters\.\w+/g,
  /shoksVideos\.\w+/g,
  /shoksPosters\.\w+/g,
  /simbaMattressVideos\.\w+/g,
  /simbaMattressPosters\.\w+/g,
  /steelReefVideos\.\w+/g,
  /suitcaseVideos\.\w+/g,
  /suitcasePosters\.\w+/g,
  /valentinoVideos\.\w+/g,
  /vtuberVideos\.\w+/g,
  /vtuberPosters\.\w+/g,
  /watchDesignVideos\.\w+/g,
  /wristbandVideos\.\w+/g,
  /wristbandPosters\.\w+/g,
];

let content = fs.readFileSync(filePath, "utf8");

if (!content.includes('slug: "motion-graphics"')) {
  content = content.replace(
    /  \},\r?\n  \{\r?\n    slug: "video-editing"/,
    `  },\n${motionGraphics}\n  {\n    slug: "video-editing"`,
  );
}

if (!content.includes('slug: "vfx"')) {
  content = content.replace(
    /  \},\r?\n  \{\r?\n    slug: "branding"/,
    `  },\n${vfxCategory}\n  {\n    slug: "branding"`,
  );
}

content = content.replace(
  /import \{ applyPortfolioYoutube \} from "@\/lib\/apply-portfolio-youtube";\r?\nimport \{ anabomfimVideos[\s\S]*? \} from "@\/data\/portfolio-media";\r?\n\r?\nimport ijockeyHelmetPart[\s\S]*?import heroVideo from "@\/assets\/hero-background\.mp4";\r?\n/,
  `import { applyPortfolioYoutube } from "@/lib/apply-portfolio-youtube";
import { brandLogos } from "@/data/brand-logos";

/** Placeholder client logos from the brand marquee set. */
const brandLogo = (index: number) => brandLogos[index % brandLogos.length]!.src;

import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import heroVideo from "@/assets/hero-background.mp4";

`,
);

for (const name of assetImportNames) {
  content = content.replace(new RegExp(`\\b${name}\\b`, "g"), "portfolioTrailer");
}

for (const pattern of mediaPatterns) {
  content = content.replace(pattern, '""');
}

content = content.replace(/mediaType: "image"/g, 'mediaType: "video"');

content = content.replace(
  /export type WorkCategorySlug =\r?\n  \| "2d-animation"\r?\n  \| "3d-animation"\r?\n  \| "video-editing"\r?\n  \| "branding";/,
  `export type WorkCategorySlug =
  | "2d-animation"
  | "3d-animation"
  | "motion-graphics"
  | "video-editing"
  | "vfx"
  | "branding";`,
);

content = content.replace(
  /const showcaseLabels: Record<\r?\n  WorkCategorySlug,\r?\n  \{ tag: string; title: string \}\r?\n> = \{\r?\n  "2d-animation": \{ tag: "2D Animation", title: "2D Animation" \},\r?\n  "3d-animation": \{ tag: "3D Animation", title: "3D Animation" \},\r?\n  "video-editing": \{ tag: "3D", title: "Product Animation" \},\r?\n  branding: \{ tag: "3D", title: "Industrial Animation" \},\r?\n\};/,
  `const showcaseLabels: Record<
  WorkCategorySlug,
  { tag: string; title: string }
> = {
  "2d-animation": { tag: "2D Animation", title: "2D Animation" },
  "3d-animation": { tag: "3D Animation", title: "3D Animation" },
  "motion-graphics": { tag: "Game Environment", title: "Game Environment" },
  "video-editing": { tag: "3D", title: "Product Animation" },
  vfx: { tag: "VFX", title: "VFX" },
  branding: { tag: "3D", title: "Industrial Animation" },
};`,
);

fs.writeFileSync(filePath, content, "utf8");
console.log("Updated portfolio-works.ts");
