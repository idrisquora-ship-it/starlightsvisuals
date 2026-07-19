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
      client(
        {
          slug: "live2d-animation",
          name: "LIVE2D ANIMATION",
          industry: "Live2D & Character",
          description:
            "Live2D character art, rigging, and animation from making process films through polished sample performances.",
          projectCount: 6,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["Live2D", "Rigging", "2D Character Animation"],
          timeline: "2025",
          tools: ["Live2D Cubism", "After Effects", "Photoshop"],
          projects: [
            {
              title: "Live2D Making Process",
              description:
                "Behind the scenes Live2D creation workflow from art through final animated performance.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Live2D", "Process"],
              year: 2025,
            },
            {
              title: "Live2D Sample",
              description:
                "Finished Live2D character sample with expressive posing and polished motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Live2D", "Sample"],
              year: 2025,
            },
            {
              title: "Live2D Rigging Process",
              description:
                "Live2D rigging process film showing mesh, deformers, and parameter setup.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Live2D", "Rigging"],
              year: 2025,
            },
            {
              title: "Sample Live2D Rigging",
              description:
                "Sample Live2D rigging demonstration with clean parameter control and facial acting.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Live2D", "Rigging"],
              year: 2025,
            },
            {
              title: "Live2D Rigging Result",
              description:
                "Final Live2D rigging result showcasing smooth motion and expressive character performance.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Live2D", "Result"],
              year: 2025,
            },
            {
              title: "Live2D Film",
              description:
                "Cinematic Live2D animation with dynamic character motion and polished presentation.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Live2D", "Film"],
              year: 2025,
            },
          ],
        },
        "live2d-animation",
      ),
      client(
        {
          slug: "2d-anime-animation",
          name: "2D ANIME ANIMATION",
          industry: "Anime & 2D Animation",
          description:
            "High quality 2D anime style animation and music videos with expressive characters and cinematic motion.",
          projectCount: 3,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["2D Anime", "Music Video", "Character Animation"],
          timeline: "2025",
          tools: ["After Effects", "Toon Boom", "Clip Studio Paint"],
          projects: [
            {
              title: "Japanese Style 2D Anime",
              description:
                "Japanese anime style 2D animation with dynamic posing, expressive acting, and polished line work.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Anime", "2D"],
              year: 2025,
            },
            {
              title: "Anime Music Video",
              description:
                "2D anime music video with character driven storytelling and cinematic timing.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Music Video", "Anime"],
              year: 2025,
            },
            {
              title: "Meme Song Animation",
              description:
                "Playful 2D anime character animation timed to a meme song with bold motion and humor.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Anime", "Music"],
              year: 2025,
            },
          ],
        },
        "2d-anime-animation",
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
    clients: [
      client(
        {
          slug: "kids-learning-animation",
          name: "KIDS LEARNING ANIMATION",
          industry: "Children & Education",
          description:
            "Fun character animation for kids learning content, including number videos and cute cartoon characters.",
          projectCount: 3,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["Kids Learning", "Character Animation", "Educational Content"],
          timeline: "2025",
          tools: ["After Effects", "Toon Boom", "Blender"],
          projects: [
            {
              title: "123 Number Kids Learning Video",
              description:
                "Educational number learning video with engaging characters and playful motion for kids.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Kids", "Learning"],
              year: 2025,
            },
            {
              title: "Custom 2D Character",
              description:
                "Custom 2D character animation with expressive acting and colorful stylized design.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Character", "2D"],
              year: 2025,
            },
            {
              title: "Cute 2D Cartoon Character",
              description:
                "Cute 2D cartoon character film with friendly personality and polished kids content motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Cartoon", "Kids"],
              year: 2025,
            },
          ],
        },
        "kids-learning-animation",
      ),
    ],
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
    clients: [
      client(
        {
          slug: "watch-animation",
          name: "WATCH ANIMATION",
          industry: "Luxury Watches",
          description:
            "Photoreal 3D watch product animation and cinematic packshot films for luxury timepieces.",
          projectCount: 3,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["3D Product Animation", "Watch CGI", "Packshot Films"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Watch Product Film",
              description:
                "Cinematic 3D watch animation with studio lighting, material detail, and premium packshot finish.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Watch", "Product"],
              year: 2025,
            },
            {
              title: "Rifari Wrist Watch",
              description:
                "Photoreal Rifari wrist watch product film with refined reflections and commercial presentation.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Watch", "Rifari"],
              year: 2025,
            },
            {
              title: "Steel Reef Wrist Watch",
              description:
                "Steel Reef wrist watch animation with premium materials, lighting, and campaign ready motion.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Watch", "Steel Reef"],
              year: 2025,
            },
          ],
        },
        "watch-animation",
      ),
      client(
        {
          slug: "ryse-drink-3d-product-animation",
          name: "RYSE DRINK 3D PRODUCT ANIMATION",
          industry: "Beverage & Product CGI",
          description:
            "Photoreal 3D beverage product animation for Ryse drink and lemonade campaigns with cinematic packshot finish.",
          projectCount: 2,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["3D Product Animation", "Beverage CGI", "Packshot Films"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Ryse Drink 3D Product Animation",
              description:
                "Cinematic 3D Ryse drink product animation with studio lighting, material detail, and commercial finish.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Beverage", "Product"],
              year: 2025,
            },
            {
              title: "Lemonade Product Film",
              description:
                "Photoreal lemonade product animation with fluid motion, glass materials, and campaign ready presentation.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Lemonade", "Product"],
              year: 2025,
            },
          ],
        },
        "ryse-drink-3d-product-animation",
      ),
      client(
        {
          slug: "3d-perfume-animation",
          name: "3D PERFUME ANIMATION",
          industry: "Beauty & Fragrance",
          description:
            "Photoreal 3D perfume product animation for luxury fragrance launches and campaign hero films.",
          projectCount: 3,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["3D Product Animation", "Fragrance CGI", "Packshot Films"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Anabomfim 3D Perfume Video",
              description:
                "Cinematic 3D Anabomfim perfume animation with studio lighting, glass materials, and premium packshot finish.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Perfume", "Anabomfim"],
              year: 2025,
            },
            {
              title: "Valentino Perfume Video",
              description:
                "Luxury Valentino perfume product film with refined reflections, fluid motion, and commercial presentation.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Perfume", "Valentino"],
              year: 2025,
            },
            {
              title: "Soul of Amir 3D Animation",
              description:
                "Soul of Amir 3D fragrance animation with cinematic camera work and campaign ready polish.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Perfume", "Soul of Amir"],
              year: 2025,
            },
          ],
        },
        "3d-perfume-animation",
      ),
      client(
        {
          slug: "3d-gadget-animation",
          name: "3D GADGET ANIMATION",
          industry: "Consumer Electronics",
          description:
            "Photoreal 3D gadget and earbud product animation with studio lighting, material detail, and campaign ready motion.",
          projectCount: 2,
          logo: PROJECT_PLACEHOLDER,
          banner: PROJECT_PLACEHOLDER,
          services: ["3D Product Animation", "Gadget CGI", "Packshot Films"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Shoks Earbud Animation",
              description:
                "Cinematic 3D Shoks earbud product animation with refined materials and commercial finish.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Earbud", "Gadget"],
              year: 2025,
            },
            {
              title: "Headphone Earbud Product Film",
              description:
                "3D headphone and earbud product animation with dynamic camera moves and premium packshot presentation.",
              thumbnail: PROJECT_PLACEHOLDER,
              mediaType: "video",
              mediaSrc: "",
              tags: ["Headphone", "Product"],
              year: 2025,
            },
          ],
        },
        "3d-gadget-animation",
      ),
    ],
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
