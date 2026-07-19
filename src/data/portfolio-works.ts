import type { WorkCategory, WorkClient, WorkProject } from "@/types/portfolio-works";

import { applyPortfolioYoutube } from "@/lib/apply-portfolio-youtube";
import { PROJECT_PLACEHOLDER } from "@/data/portfolio-placeholder";

import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
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
  const projectList = projects(partial.projects, projectPrefix);
  return {
    ...partial,
    projectCount: projectList.length,
    projects: projectList,
  };
}

/** Portfolio categories — add clients here when YouTube samples are ready. */
const rawWorkCategories: WorkCategory[] = [
  {
    slug: "2d-animation",
    title: "2D Animation",
    tagline: "Frame by frame craft for campaigns and series",
    description:
      "Character driven 2D animation for commercials, explainers, and episodic content with bold motion and cinematic timing.",
    coverImage: portfolio2d,
    clients: [
      client(
        {
          slug: "chibi-art",
          name: "CHIBI ART",
          industry: "Character & Animation",
          description:
            "Chibi style 2D character animation with expressive scenes and behind the scenes making process films.",
          projectCount: 3,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["2D Animation", "Chibi Art", "Character Animation"],
          timeline: "2025",
          tools: ["After Effects", "Clip Studio Paint", "Photoshop"],
          projects: [
            {
              title: "Chibi Art Scene 1",
              description:
                "Expressive chibi character scene with polished 2D animation and campaign ready motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Chibi", "Scene"],
              year: 2025,
            },
            {
              title: "Chibi Art Scene 2",
              description:
                "Second chibi character scene showcasing personality, timing, and colorful 2D performance.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Chibi", "Scene"],
              year: 2025,
            },
            {
              title: "Making Process Film",
              description:
                "Behind the scenes look at the chibi art creation and animation workflow from sketch to final motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Process", "Workflow"],
              year: 2025,
            },
          ],
        },
        "chibi-art",
      ),
      client(
        {
          slug: "vtuber-animation",
          name: "VTUBER ANIMATION",
          industry: "VTuber & Character",
          description:
            "VTuber character art and 2D animation with modeling process films, polished samples, and Live2D style performance.",
          projectCount: 7,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["VTuber Animation", "2D Character", "Live2D Style"],
          timeline: "2025",
          tools: ["Live2D", "After Effects", "Clip Studio Paint"],
          projects: [
            {
              title: "Vtuber Modeling Creation",
              description:
                "VTuber character modeling creation film covering art direction and build workflow.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VTuber", "Modeling"],
              year: 2025,
            },
            {
              title: "Vtuber 2D Video Results",
              description:
                "Finished 2D VTuber animation results with expressive performance and polished motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VTuber", "2D"],
              year: 2025,
            },
            {
              title: "Princess Vtuber Modeling",
              description:
                "Princess VTuber modeling sample showcasing character design and animated performance.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VTuber", "Princess"],
              year: 2025,
            },
            {
              title: "Vtuber 2D Video",
              description:
                "Cinematic 2D VTuber animation with dynamic character motion and expressive acting.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VTuber", "2D"],
              year: 2025,
            },
            {
              title: "Vtuber Sample 2",
              description:
                "Second VTuber animation sample with bold character acting and polished motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VTuber", "Sample"],
              year: 2025,
            },
            {
              title: "Vtuber Sample 3",
              description:
                "Extended VTuber character showcase with cinematic pacing and expressive 2D animation.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["VTuber", "Sample"],
              year: 2025,
            },
            {
              title: "Vtuber Video Process",
              description:
                "Behind the scenes VTuber animation process from art through rigging and final motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Process", "Workflow"],
              year: 2025,
            },
          ],
        },
        "vtuber-animation",
      ),
    ],
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
