import type { WorkCategory, WorkClient, WorkProject } from "@/types/portfolio-works";

import { applyPortfolioYoutube } from "@/lib/apply-portfolio-youtube";
import { anabomfimVideos, anime2dPosters, anime2dVideos, anime3dVideos, atxPosters, atxVideos, autozCravePosters, autozCraveVideos, cartoon2dPosters, cartoon2dVideos, character3dVideos, chibiArtPosters, chibiArtVideos, credexCleaningPosters, credexCleaningVideos, ijockeyVideos, industrialAnimationVideos, integraPwPosters, integraPwVideos, lemonadeJuiceVideos, live2dPosters, live2dVideos, medical3dPosters, medical3dVideos, phr1Posters, phr1Videos, raiv2dPosters, raiv2dVideos, shoksPosters, shoksVideos, simbaMattressPosters, simbaMattressVideos, steelReefVideos, suitcasePosters, suitcaseVideos, valentinoVideos, vtuberPosters, vtuberVideos, watchDesignVideos, wristbandPosters, wristbandVideos } from "@/data/portfolio-media";

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

import atxRender1 from "@/assets/ATX Project/3d-technical-product-animation-industrial-fusion-360-video-and-blender-render.jpg";
import atxRender2 from "@/assets/ATX Project/3d-technical-product-animation-industrial-fusion-360-video-and-blender-render (1).jpg";
import atxRender3 from "@/assets/ATX Project/3d-technical-product-animation-industrial-fusion-360-video-and-blender-render (2).jpg";

import credexClientReference1 from "@/assets/CREDEX CARPET Cleaning Macchine/Client image reference.jpg";
import credexClientReference2 from "@/assets/CREDEX CARPET Cleaning Macchine/Client image reference (2).jpg";

import integraPwClientReference from "@/assets/Integra PW/Client's product image reference.png";

import live2dCharacterImage from "@/assets/Live2D/Live2d character image.jpg";

import vtuberCharacterImage1 from "@/assets/vtuber/Vtuber character  image.jpg";
import vtuberCharacterImage2 from "@/assets/vtuber/Vtuber character Image.jpg";

import raivCharacterColors from "@/assets/RAIV 2D GAME NSFW/character with colors.png";
import raivCharacterSketch from "@/assets/RAIV 2D GAME NSFW/Character sketch.jpeg";

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

import steelReefRender1 from "@/assets/STEEL REEF/Steel Reef rendered image.jpg";
import steelReefRender2 from "@/assets/STEEL REEF/Steel Reef rendered image (2).jpg";

import phr1Render1 from "@/assets/PHR 1 Electric Engine/CAAA85E4-B35B-48D8-98F2-F830C1670BE6.jpeg";
import phr1Render2 from "@/assets/PHR 1 Electric Engine/check.jpeg";

import wristbandRef1 from "@/assets/wristband animation/Client's ref image.jpeg";
import wristbandRef2 from "@/assets/wristband animation/Client's ref image (2).jpeg";
import wristbandRef3 from "@/assets/wristband animation/Client's ref image (3).jpeg";
import wristbandRef4 from "@/assets/wristband animation/Client's ref image (4).jpeg";
import wristbandRef5 from "@/assets/wristband animation/Client's ref image (5).jpeg";

import character3dImage1 from "@/assets/3D Character/3d character image.jpg";
import character3dImage2 from "@/assets/3D Character/3d character image 2.jpg";
import character3dImage3 from "@/assets/3D Character/3d character image 3.jpg";
import character3dImage4 from "@/assets/3D Character/3d character image 4.jpg";

import anime3dClientReference from "@/assets/3D Anime/client reference.png";
import anime3dBlackRedFront from "@/assets/3D Anime/Black_red_front.png";
import anime3dBlackRedBack from "@/assets/3D Anime/Black_red_back.png";

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
  | "video-editing"
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

const rawWorkCategories: WorkCategory[] = [
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
      client(
        {
          slug: "2d-anime-animation",
          name: "2D Anime Animation",
          industry: "Entertainment & Music",
          description:
            "High-quality 2D anime-style animation and music videos with expressive characters and cinematic motion.",
          projectCount: 2,
          logo: anime2dPosters.animeStyle,
          banner: anime2dPosters.musicVideo,
          services: ["2D Anime Animation", "Music Videos", "Character Animation"],
          timeline: "2025",
          tools: ["After Effects", "Toon Boom", "Clip Studio Paint"],
          projects: [
            {
              title: "Anime Style Animation",
              description:
                "Japanese anime-style 2D animation with dynamic posing, expressive acting, and polished line work.",
              thumbnail: anime2dPosters.animeStyle,
              mediaType: "video",
              mediaSrc: anime2dVideos.animeStyle,
              tags: ["Anime", "Character"],
              year: 2025,
            },
            {
              title: "Anime Music Video",
              description:
                "2D anime music video with rhythmic character motion, bold visuals, and cinematic storytelling.",
              thumbnail: anime2dPosters.musicVideo,
              mediaType: "video",
              mediaSrc: anime2dVideos.musicVideo,
              tags: ["Music Video", "Anime"],
              year: 2025,
            },
          ],
        },
        "2d-anime-animation",
        { skipPad: true },
      ),
      client(
        {
          slug: "chibi-art",
          name: "Chbi ART",
          industry: "Character & Illustration",
          description:
            "Chibi-style 2D character animation with expressive scenes and behind-the-scenes making process films.",
          projectCount: 3,
          logo: chibiArtPosters.scene1,
          banner: chibiArtPosters.scene2,
          services: ["2D Character Animation", "Chibi Art", "Scene Animation"],
          timeline: "2025",
          tools: ["After Effects", "Clip Studio Paint", "Illustrator"],
          projects: [
            {
              title: "Chibi Art Scene 1",
              description:
                "Playful chibi character animation with bold color, expressive acting, and charming scene storytelling.",
              thumbnail: chibiArtPosters.scene1,
              mediaType: "video",
              mediaSrc: chibiArtVideos.scene1,
              tags: ["Chibi", "Scene"],
              year: 2025,
            },
            {
              title: "Chibi Art Scene 2",
              description:
                "Second chibi animation scene with dynamic character motion and polished 2D illustration style.",
              thumbnail: chibiArtPosters.scene2,
              mediaType: "video",
              mediaSrc: chibiArtVideos.scene2,
              tags: ["Chibi", "Character"],
              year: 2025,
            },
            {
              title: "Making Process Film",
              description:
                "Behind-the-scenes look at the chibi art creation and animation workflow from sketch to final motion.",
              thumbnail: chibiArtPosters.makingProcess,
              mediaType: "video",
              mediaSrc: chibiArtVideos.makingProcess,
              tags: ["Process", "Workflow"],
              year: 2025,
            },
          ],
        },
        "chibi-art",
        { skipPad: true },
      ),
      client(
        {
          slug: "live2d",
          name: "Live2D",
          industry: "Character & VTuber",
          description:
            "Live2D character art, rigging, and animation from character design through sample films and making-process breakdowns.",
          projectCount: 4,
          logo: live2dCharacterImage,
          banner: live2dPosters.sample,
          services: ["Live2D Animation", "Character Rigging", "VTuber Art"],
          timeline: "2025",
          tools: ["Live2D Cubism", "Clip Studio Paint", "After Effects"],
          projects: [
            {
              title: "Character Art",
              description: "Finished Live2D character illustration with expressive posing and campaign-ready polish.",
              thumbnail: live2dCharacterImage,
              mediaType: "image",
              mediaSrc: live2dCharacterImage,
              tags: ["Character", "Illustration"],
              year: 2025,
            },
            {
              title: "Live2D Video Sample",
              description:
                "Animated Live2D character sample showcasing rigged motion, expression, and polished 2D performance.",
              thumbnail: live2dPosters.sample,
              mediaType: "video",
              mediaSrc: live2dVideos.sample,
              tags: ["Live2D", "Animation"],
              year: 2025,
            },
            {
              title: "Rigging Process",
              description:
                "Live2D rigging workflow film showing mesh setup, deformation, and character puppet preparation.",
              thumbnail: live2dPosters.rigging,
              mediaType: "video",
              mediaSrc: live2dVideos.rigging,
              tags: ["Rigging", "Process"],
              year: 2025,
            },
            {
              title: "Making Process Film",
              description:
                "Behind-the-scenes look at the Live2D character build from art through rigging and final animation.",
              thumbnail: live2dPosters.makingProcess,
              mediaType: "video",
              mediaSrc: live2dVideos.makingProcess,
              tags: ["Process", "Workflow"],
              year: 2025,
            },
          ],
        },
        "live2d",
        { skipPad: true },
      ),
      client(
        {
          slug: "vtuber",
          name: "Vtuber",
          industry: "VTuber & Character",
          description:
            "VTuber character art and 2D animation — princess samples, character films, process breakdowns, and polished Live2D-style performance.",
          projectCount: 8,
          logo: vtuberCharacterImage1,
          banner: vtuberPosters.princessSample,
          services: ["VTuber Animation", "2D Character Animation", "Live2D"],
          timeline: "2025",
          tools: ["Live2D Cubism", "Clip Studio Paint", "After Effects"],
          projects: [
            {
              title: "VTuber Character Art",
              description: "Finished VTuber character illustration with expressive posing and campaign-ready polish.",
              thumbnail: vtuberCharacterImage1,
              mediaType: "image",
              mediaSrc: vtuberCharacterImage1,
              tags: ["Character", "Illustration"],
              year: 2025,
            },
            {
              title: "VTuber Character Art",
              description: "Alternate VTuber character render highlighting costume detail and personality.",
              thumbnail: vtuberCharacterImage2,
              mediaType: "image",
              mediaSrc: vtuberCharacterImage2,
              tags: ["Character", "VTuber"],
              year: 2025,
            },
            {
              title: "Princess VTuber Sample",
              description:
                "Animated princess VTuber sample showcasing character expression, rigged motion, and polished 2D performance.",
              thumbnail: vtuberPosters.princessSample,
              mediaType: "video",
              mediaSrc: vtuberVideos.princessSample,
              tags: ["VTuber", "Princess"],
              year: 2025,
            },
            {
              title: "VTuber 2D Film",
              description: "Cinematic 2D VTuber animation with dynamic character motion and expressive performance.",
              thumbnail: vtuberPosters.vtuber2d,
              mediaType: "video",
              mediaSrc: vtuberVideos.vtuber2d,
              tags: ["2D", "Animation"],
              year: 2025,
            },
            {
              title: "VTuber Sample 2",
              description: "Second VTuber animation sample with bold character acting and polished motion.",
              thumbnail: vtuberPosters.sample2,
              mediaType: "video",
              mediaSrc: vtuberVideos.sample2,
              tags: ["VTuber", "Sample"],
              year: 2025,
            },
            {
              title: "VTuber Sample 3",
              description: "Extended VTuber character showcase with cinematic pacing and expressive 2D animation.",
              thumbnail: vtuberPosters.sample3,
              mediaType: "video",
              mediaSrc: vtuberVideos.sample3,
              tags: ["VTuber", "Showcase"],
              year: 2025,
            },
            {
              title: "Video Process Film",
              description: "Behind-the-scenes VTuber animation process from art through rigging and final motion.",
              thumbnail: vtuberPosters.process,
              mediaType: "video",
              mediaSrc: vtuberVideos.process,
              tags: ["Process", "Workflow"],
              year: 2025,
            },
            {
              title: "Stella Manami VTuber Film",
              description: "Character-driven VTuber animation sample featuring Stella Manami with polished 2D performance.",
              thumbnail: vtuberPosters.stellaManami,
              mediaType: "video",
              mediaSrc: vtuberVideos.stellaManami,
              tags: ["VTuber", "Character"],
              year: 2025,
            },
          ],
        },
        "vtuber",
        { skipPad: true },
      ),
      client(
        {
          slug: "raiv-2d-game-nsfw",
          name: "RAIV 2D Game NSFW",
          industry: "Game & Interactive",
          description:
            "2D game character animation and scene work for RAIV — character design, motion cycles, and polished in-game animation sequences.",
          projectCount: 13,
          logo: raivCharacterColors,
          banner: raivCharacterSketch,
          services: ["2D Game Animation", "Character Animation", "Scene Animation"],
          timeline: "2025",
          tools: ["Spine", "After Effects", "Clip Studio Paint"],
          projects: [
            {
              title: "Character Art",
              description: "Finished 2D game character illustration with full color, posing, and production-ready polish.",
              thumbnail: raivCharacterColors,
              mediaType: "image",
              mediaSrc: raivCharacterColors,
              tags: ["Character", "Art"],
              year: 2025,
            },
            {
              title: "Character Sketch",
              description: "Initial character concept sketch exploring form, proportions, and design direction.",
              thumbnail: raivCharacterSketch,
              mediaType: "image",
              mediaSrc: raivCharacterSketch,
              tags: ["Sketch", "Concept"],
              year: 2025,
            },
            {
              title: "Scene 1 Animation",
              description: "Cinematic 2D game scene animation with character acting and polished motion timing.",
              thumbnail: raiv2dPosters.scene1,
              mediaType: "video",
              mediaSrc: raiv2dVideos.scene1,
              tags: ["Scene", "Animation"],
              year: 2025,
            },
            {
              title: "Jump Animation",
              description: "2D character jump cycle animation with expressive motion and game-ready timing.",
              thumbnail: raiv2dPosters.animation01Jump,
              mediaType: "video",
              mediaSrc: raiv2dVideos.animation01Jump,
              tags: ["Motion", "Character"],
              year: 2025,
            },
            {
              title: "Animation 02",
              description: "Second 2D game animation sequence with dynamic character performance.",
              thumbnail: raiv2dPosters.an02,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an02,
              tags: ["Animation", "Game"],
              year: 2025,
            },
            {
              title: "Animation 02 Alt",
              description: "Alternate animation 02 cut with refined character motion and scene pacing.",
              thumbnail: raiv2dPosters.an02Video,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an02Video,
              tags: ["Animation", "Scene"],
              year: 2025,
            },
            {
              title: "Animation 03.1",
              description: "Polished 2D game animation sequence with expressive character acting.",
              thumbnail: raiv2dPosters.an031,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an031,
              tags: ["Animation", "Character"],
              year: 2025,
            },
            {
              title: "Animation 03 Video",
              description: "Animation 03 scene cut with cinematic 2D character motion.",
              thumbnail: raiv2dPosters.an03Video,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an03Video,
              tags: ["Scene", "Motion"],
              year: 2025,
            },
            {
              title: "Animation 04",
              description: "Fourth 2D game animation with bold character performance and polished finish.",
              thumbnail: raiv2dPosters.an04,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an04,
              tags: ["Animation", "Game"],
              year: 2025,
            },
            {
              title: "Animation 04 Video",
              description: "Alternate animation 04 scene with dynamic pacing and character expression.",
              thumbnail: raiv2dPosters.an04Video,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an04Video,
              tags: ["Scene", "Animation"],
              year: 2025,
            },
            {
              title: "Animation 05",
              description: "Fifth 2D game animation sequence with expressive character motion.",
              thumbnail: raiv2dPosters.an05,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an05,
              tags: ["Animation", "Character"],
              year: 2025,
            },
            {
              title: "Animation 06",
              description: "Sixth 2D game animation cut with polished timing and scene storytelling.",
              thumbnail: raiv2dPosters.an06,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an06,
              tags: ["Animation", "Scene"],
              year: 2025,
            },
            {
              title: "Animation 07",
              description: "Seventh 2D game animation sequence with refined character performance.",
              thumbnail: raiv2dPosters.an07,
              mediaType: "video",
              mediaSrc: raiv2dVideos.an07,
              tags: ["Animation", "Game"],
              year: 2025,
            },
          ],
        },
        "raiv-2d-game-nsfw",
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
          slug: "3d-character-animation",
          name: "3D Character Animation",
          industry: "Character & Entertainment",
          description:
            "Stylized 3D character design, posing, and cinematic animation from concept through final showcase films.",
          projectCount: 5,
          logo: character3dImage1,
          banner: character3dImage3,
          services: ["3D Character Design", "Character Animation", "Stylized CGI"],
          timeline: "2025",
          tools: ["Blender", "Cinema 4D", "After Effects"],
          projects: [
            {
              title: "Character Render",
              description: "Hero character render with expressive posing and polished stylized materials.",
              thumbnail: character3dImage1,
              mediaType: "image",
              mediaSrc: character3dImage1,
              tags: ["Character", "Render"],
              year: 2025,
            },
            {
              title: "Character Render",
              description: "Alternate pose highlighting silhouette, accessories, and personality.",
              thumbnail: character3dImage2,
              mediaType: "image",
              mediaSrc: character3dImage2,
              tags: ["Character", "Pose"],
              year: 2025,
            },
            {
              title: "Character Render",
              description: "Full-body character frame with refined lighting and surface detail.",
              thumbnail: character3dImage3,
              mediaType: "image",
              mediaSrc: character3dImage3,
              tags: ["Character", "Stylized"],
              year: 2025,
            },
            {
              title: "Character Render",
              description: "Campaign-ready character still for social, pitch decks, and launch assets.",
              thumbnail: character3dImage4,
              mediaType: "image",
              mediaSrc: character3dImage4,
              tags: ["Character", "Campaign"],
              year: 2025,
            },
            {
              title: "Animation Workflow Film",
              description:
                "Behind-the-scenes 3D cartoon animation workflow from modeling through final character motion.",
              thumbnail: character3dImage1,
              mediaType: "video",
              mediaSrc: character3dVideos.workflow,
              tags: ["Film", "Workflow"],
              year: 2025,
            },
          ],
        },
        "3d-character-animation",
        { skipPad: true },
      ),
      client(
        {
          slug: "3d-anime-animation",
          name: "3D Anime Animation",
          industry: "Anime & Character Design",
          description:
            "3D anime character development from client reference through modeling, turntable renders, and client showcase films.",
          projectCount: 5,
          logo: anime3dClientReference,
          banner: anime3dBlackRedFront,
          services: ["3D Character Modeling", "Anime Character Design", "Client Showcase Films"],
          timeline: "2025",
          tools: ["Blender", "Cinema 4D", "After Effects"],
          projects: [
            {
              title: "Client Reference",
              description: "Initial client reference and concept direction for the 3D anime character build.",
              thumbnail: anime3dClientReference,
              mediaType: "image",
              mediaSrc: anime3dClientReference,
              tags: ["Concept", "Reference"],
              year: 2025,
            },
            {
              title: "Character Render",
              description: "Front-facing character render with anime styling, materials, and lighting polish.",
              thumbnail: anime3dBlackRedFront,
              mediaType: "image",
              mediaSrc: anime3dBlackRedFront,
              tags: ["Character", "Render"],
              year: 2025,
            },
            {
              title: "Character Render",
              description: "Back-facing character render showcasing hair, costume, and silhouette detail.",
              thumbnail: anime3dBlackRedBack,
              mediaType: "image",
              mediaSrc: anime3dBlackRedBack,
              tags: ["Character", "Turnaround"],
              year: 2025,
            },
            {
              title: "3D Modeling Process",
              description: "Modeling workflow film showing the character build from reference to finished mesh.",
              thumbnail: anime3dBlackRedFront,
              mediaType: "video",
              mediaSrc: anime3dVideos.modeling,
              tags: ["Modeling", "Workflow"],
              year: 2025,
            },
            {
              title: "Client Showcase Film",
              description: "Final 3D anime character showcase animation prepared for client review and delivery.",
              thumbnail: anime3dBlackRedBack,
              mediaType: "video",
              mediaSrc: anime3dVideos.showcase,
              tags: ["Showcase", "Anime"],
              year: 2025,
            },
          ],
        },
        "3d-anime-animation",
        { skipPad: true },
      ),
      client(
        {
          slug: "3d-medical-animation",
          name: "3D Medical Animation",
          industry: "Healthcare & Medical",
          description:
            "High-quality 3D medical animation covering anatomy, surgical procedures, and medical device visualization.",
          projectCount: 2,
          logo: medical3dPosters.surgical,
          banner: medical3dPosters.sample,
          services: ["Medical Animation", "Anatomy Visualization", "Surgical CGI"],
          timeline: "2025",
          tools: ["Cinema 4D", "Blender", "After Effects"],
          projects: [
            {
              title: "Surgical & Medical Device Film",
              description:
                "Detailed 3D medical animation showcasing anatomy, surgical technique, and medical device presentation.",
              thumbnail: medical3dPosters.surgical,
              mediaType: "video",
              mediaSrc: medical3dVideos.surgical,
              tags: ["Surgical", "Medical"],
              year: 2025,
            },
            {
              title: "Medical Animation Sample",
              description:
                "Cinematic medical visualization with accurate anatomy, lighting, and educational storytelling.",
              thumbnail: medical3dPosters.sample,
              mediaType: "video",
              mediaSrc: medical3dVideos.sample,
              tags: ["Anatomy", "Healthcare"],
              year: 2025,
            },
          ],
        },
        "3d-medical-animation",
        { skipPad: true },
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
      client(
        {
          slug: "steel-reef",
          name: "STEEL REEF",
          industry: "Consumer Products",
          description:
            "Photoreal 3D product renders and cinematic animation for STEEL REEF brand campaigns and retail.",
          projectCount: 3,
          logo: steelReefRender1,
          banner: steelReefRender2,
          services: ["3D Product Animation", "Packshot Films", "Product CGI"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Product Render",
              description: "Hero studio render with premium materials, lighting, and campaign-ready finish.",
              thumbnail: steelReefRender1,
              mediaType: "image",
              mediaSrc: steelReefRender1,
              tags: ["Render", "Product"],
              year: 2025,
            },
            {
              title: "Product Render",
              description: "Alternate angle showcasing product form, surface detail, and brand presentation.",
              thumbnail: steelReefRender2,
              mediaType: "image",
              mediaSrc: steelReefRender2,
              tags: ["Render", "Packshot"],
              year: 2025,
            },
            {
              title: "Product Film",
              description:
                "Cinematic 3D product animation with dynamic camera moves and polished commercial finish.",
              thumbnail: steelReefRender1,
              mediaType: "video",
              mediaSrc: steelReefVideos.product,
              tags: ["Film", "Product"],
              year: 2025,
            },
          ],
        },
        "steel-reef-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "simba-mattress-animation",
          name: "Simba Mattress Animation",
          industry: "Home & Furniture",
          description:
            "Photoreal 3D mattress and furniture product animation with cinematic lighting and commercial polish.",
          projectCount: 2,
          logo: simbaMattressPosters.introducing,
          banner: simbaMattressPosters.product,
          services: ["3D Product Animation", "Furniture CGI", "Packshot Films"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Simba Introducing Film",
              description:
                "Cinematic 3D product animation introducing the Simba mattress with dynamic camera moves and premium finish.",
              thumbnail: simbaMattressPosters.introducing,
              mediaType: "video",
              mediaSrc: simbaMattressVideos.introducing,
              tags: ["Film", "Mattress"],
              year: 2025,
            },
            {
              title: "Mattress Product Film",
              description:
                "Photoreal 3D mattress animation highlighting materials, comfort layers, and furniture product presentation.",
              thumbnail: simbaMattressPosters.product,
              mediaType: "video",
              mediaSrc: simbaMattressVideos.product,
              tags: ["Product", "Furniture"],
              year: 2025,
            },
          ],
        },
        "simba-mattress-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "suitcase-animation",
          name: "Suitcase Animation",
          industry: "Travel & Luggage",
          description:
            "Photoreal 3D suitcase and bag product animation with cinematic lighting and commercial polish.",
          projectCount: 1,
          logo: suitcasePosters.product,
          banner: suitcasePosters.product,
          services: ["3D Product Animation", "Luggage CGI", "Packshot Films"],
          timeline: "2025",
          tools: ["Cinema 4D", "Redshift", "After Effects"],
          projects: [
            {
              title: "Suitcase Product Film",
              description:
                "Cinematic 3D suitcase animation highlighting materials, form, and premium luggage product presentation.",
              thumbnail: suitcasePosters.product,
              mediaType: "video",
              mediaSrc: suitcaseVideos.product,
              tags: ["Product", "Luggage"],
              year: 2025,
            },
          ],
        },
        "suitcase-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "phr-1",
          name: "PHR 1",
          industry: "Automotive & Electric",
          description:
            "Photoreal 3D electric engine product animation and technical renders for the PHR-1 with cinematic commercial polish.",
          projectCount: 4,
          logo: phr1Render1,
          banner: phr1Render2,
          services: ["3D Product Animation", "Electric Engine CGI", "Technical Visualization"],
          timeline: "2025",
          tools: ["Cinema 4D", "Blender", "Redshift", "After Effects"],
          projects: [
            {
              title: "Electric Engine Render",
              description: "Hero studio render of the PHR-1 electric engine with technical lighting and premium materials.",
              thumbnail: phr1Render1,
              mediaType: "image",
              mediaSrc: phr1Render1,
              tags: ["Render", "Engine"],
              year: 2025,
            },
            {
              title: "Technical Check Render",
              description: "Technical product render highlighting engine components, form, and assembly detail.",
              thumbnail: phr1Render2,
              mediaType: "image",
              mediaSrc: phr1Render2,
              tags: ["Render", "Technical"],
              year: 2025,
            },
            {
              title: "PHR-1 Draft Film",
              description:
                "Draft 3D product animation showcasing the PHR-1 electric engine in motion with cinematic camera work.",
              thumbnail: phr1Posters.draft,
              mediaType: "video",
              mediaSrc: phr1Videos.draft,
              tags: ["Draft", "Engine"],
              year: 2025,
            },
            {
              title: "Electric Engine Film",
              description:
                "Cinematic 3D electric engine animation with dynamic motion, materials, and commercial finish.",
              thumbnail: phr1Posters.film,
              mediaType: "video",
              mediaSrc: phr1Videos.film,
              tags: ["Film", "Product"],
              year: 2025,
            },
          ],
        },
        "phr-1-product",
        { skipPad: true },
      ),
      client(
        {
          slug: "wristband-animation",
          name: "Wristband Animation",
          industry: "Wearables & Consumer Products",
          description:
            "Photoreal 3D wristband product animation from client references through cinematic films and animation process breakdowns.",
          projectCount: 7,
          logo: wristbandRef1,
          banner: wristbandRef3,
          services: ["3D Product Animation", "Wearable CGI", "Packshot Films"],
          timeline: "2025",
          tools: ["Cinema 4D", "Blender", "Redshift", "After Effects"],
          projects: [
            {
              title: "Client Reference",
              description: "Initial client reference image for the wristband product design and animation direction.",
              thumbnail: wristbandRef1,
              mediaType: "image",
              mediaSrc: wristbandRef1,
              tags: ["Reference", "Product"],
              year: 2025,
            },
            {
              title: "Client Reference",
              description: "Alternate client reference showcasing wristband form, materials, and brand styling.",
              thumbnail: wristbandRef2,
              mediaType: "image",
              mediaSrc: wristbandRef2,
              tags: ["Reference", "Wearable"],
              year: 2025,
            },
            {
              title: "Client Reference",
              description: "Third client reference highlighting product detail, color, and campaign-ready presentation.",
              thumbnail: wristbandRef3,
              mediaType: "image",
              mediaSrc: wristbandRef3,
              tags: ["Reference", "Design"],
              year: 2025,
            },
            {
              title: "Client Reference",
              description: "Additional reference angle for wristband proportions and surface finish.",
              thumbnail: wristbandRef4,
              mediaType: "image",
              mediaSrc: wristbandRef4,
              tags: ["Reference", "Product"],
              year: 2025,
            },
            {
              title: "Client Reference",
              description: "Final client reference frame for modeling and animation alignment.",
              thumbnail: wristbandRef5,
              mediaType: "image",
              mediaSrc: wristbandRef5,
              tags: ["Reference", "Wearable"],
              year: 2025,
            },
            {
              title: "Wristband Product Film",
              description:
                "Cinematic 3D wristband animation with dynamic camera moves, premium materials, and commercial polish.",
              thumbnail: wristbandPosters.wristband02,
              mediaType: "video",
              mediaSrc: wristbandVideos.wristband02,
              tags: ["Film", "Product"],
              year: 2025,
            },
            {
              title: "Animation Process Film",
              description:
                "Behind-the-scenes animation process showing the wristband build from reference through final motion.",
              thumbnail: wristbandPosters.process,
              mediaType: "video",
              mediaSrc: wristbandVideos.process,
              tags: ["Process", "Workflow"],
              year: 2025,
            },
          ],
        },
        "wristband-product",
        { skipPad: true },
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
      client(
        {
          slug: "atx",
          name: "ATX",
          industry: "Manufacturing & Technical Products",
          description:
            "3D technical product animation and industrial visualization for ATX, from Fusion 360 builds through Blender renders and cinematic films.",
          projectCount: 4,
          logo: atxRender1,
          banner: atxRender2,
          services: ["Industrial Animation", "Technical Visualization", "Product CGI"],
          timeline: "2025",
          tools: ["Fusion 360", "Blender", "After Effects"],
          projects: [
            {
              title: "Technical Product Render",
              description: "Photoreal industrial product render with technical lighting and campaign-ready finish.",
              thumbnail: atxRender1,
              mediaType: "image",
              mediaSrc: atxRender1,
              tags: ["Render", "Industrial"],
              year: 2025,
            },
            {
              title: "Technical Product Render",
              description: "Alternate angle showcasing product form, materials, and technical detail.",
              thumbnail: atxRender2,
              mediaType: "image",
              mediaSrc: atxRender2,
              tags: ["Render", "Product"],
              year: 2025,
            },
            {
              title: "Technical Product Render",
              description: "Studio render highlighting industrial design and surface finish for marketing use.",
              thumbnail: atxRender3,
              mediaType: "image",
              mediaSrc: atxRender3,
              tags: ["Render", "Technical"],
              year: 2025,
            },
            {
              title: "Industrial Animation Film",
              description:
                "Cinematic 3D industrial animation showcasing technical product motion and manufacturing presentation.",
              thumbnail: atxPosters.industrial,
              mediaType: "video",
              mediaSrc: atxVideos.industrial,
              tags: ["Film", "Industrial"],
              year: 2025,
            },
          ],
        },
        "atx-industrial",
        { skipPad: true },
      ),
      client(
        {
          slug: "autoz-crave",
          name: "AUTOZ CRAVE",
          industry: "Automotive & Mechanical",
          description:
            "3D industrial product animation showcasing mechanical systems, technical detail, and cinematic automotive presentation.",
          projectCount: 1,
          logo: autozCravePosters.industrial,
          banner: autozCravePosters.industrial,
          services: ["Industrial Animation", "Mechanical Visualization", "Product CGI"],
          timeline: "2025",
          tools: ["Cinema 4D", "Blender", "After Effects"],
          projects: [
            {
              title: "Industrial Product Film",
              description:
                "Cinematic 3D mechanical and technical product animation with dynamic camera moves and industrial polish.",
              thumbnail: autozCravePosters.industrial,
              mediaType: "video",
              mediaSrc: autozCraveVideos.industrial,
              tags: ["Film", "Mechanical"],
              year: 2025,
            },
          ],
        },
        "autoz-crave-industrial",
        { skipPad: true },
      ),
      client(
        {
          slug: "credex-cleaning-carpet",
          name: "CREDEX CLEANING CARPET",
          industry: "Consumer Products & Cleaning",
          description:
            "3D industrial product animation for CREDEX carpet cleaning machines — client references, exploded views, and cinematic films with SFX.",
          projectCount: 6,
          logo: credexClientReference1,
          banner: credexClientReference2,
          services: ["Industrial Animation", "Product CGI", "Technical Visualization"],
          timeline: "2025",
          tools: ["Cinema 4D", "Blender", "After Effects"],
          projects: [
            {
              title: "Client Reference",
              description: "Initial client reference image for the CREDEX carpet cleaning machine product build.",
              thumbnail: credexClientReference1,
              mediaType: "image",
              mediaSrc: credexClientReference1,
              tags: ["Reference", "Product"],
              year: 2025,
            },
            {
              title: "Client Reference",
              description: "Alternate client reference showcasing machine form, materials, and design direction.",
              thumbnail: credexClientReference2,
              mediaType: "image",
              mediaSrc: credexClientReference2,
              tags: ["Reference", "Industrial"],
              year: 2025,
            },
            {
              title: "Exploded Views Film",
              description:
                "10-second exploded-view animation revealing internal components and assembly of the carpet cleaner.",
              thumbnail: credexCleaningPosters.explodedViews,
              mediaType: "video",
              mediaSrc: credexCleaningVideos.explodedViews,
              tags: ["Exploded", "Technical"],
              year: 2025,
            },
            {
              title: "Carpet Cleaner Update",
              description: "Updated 3D carpet cleaning machine animation with refined motion and product presentation.",
              thumbnail: credexCleaningPosters.update,
              mediaType: "video",
              mediaSrc: credexCleaningVideos.update,
              tags: ["Update", "Product"],
              year: 2025,
            },
            {
              title: "Product Showcase Film",
              description: "Cinematic carpet cleaner product animation highlighting form, function, and brand presentation.",
              thumbnail: credexCleaningPosters.showcase,
              mediaType: "video",
              mediaSrc: credexCleaningVideos.showcase,
              tags: ["Showcase", "Film"],
              year: 2025,
            },
            {
              title: "Final HD Film with SFX",
              description:
                "Final high-definition industrial animation with sound design, dynamic camera moves, and commercial polish.",
              thumbnail: credexCleaningPosters.finalSfx,
              mediaType: "video",
              mediaSrc: credexCleaningVideos.finalSfx,
              tags: ["Final", "SFX"],
              year: 2025,
            },
          ],
        },
        "credex-cleaning-carpet-industrial",
        { skipPad: true },
      ),
      client(
        {
          slug: "integra-pw",
          name: "Integra PW",
          industry: "Industrial & Power Equipment",
          description:
            "3D industrial product animation for Integra PW — from client reference through cinematic product films with technical polish.",
          projectCount: 2,
          logo: integraPwClientReference,
          banner: integraPwPosters.product,
          services: ["Industrial Animation", "Product CGI", "Technical Visualization"],
          timeline: "2025",
          tools: ["Cinema 4D", "Blender", "After Effects"],
          projects: [
            {
              title: "Client Product Reference",
              description: "Client product reference image guiding the Integra PW industrial animation build.",
              thumbnail: integraPwClientReference,
              mediaType: "image",
              mediaSrc: integraPwClientReference,
              tags: ["Reference", "Product"],
              year: 2025,
            },
            {
              title: "Industrial Product Film",
              description:
                "Cinematic 3D industrial product animation with dynamic camera moves and commercial finish.",
              thumbnail: integraPwPosters.product,
              mediaType: "video",
              mediaSrc: integraPwVideos.product,
              tags: ["Film", "Industrial"],
              year: 2025,
            },
          ],
        },
        "integra-pw-industrial",
        { skipPad: true },
      ),
    ],
  },
];

export const workCategories = applyPortfolioYoutube(rawWorkCategories);

const showcaseLabels: Record<
  WorkCategorySlug,
  { tag: string; title: string }
> = {
  "2d-animation": { tag: "2D Animation", title: "2D Animation" },
  "3d-animation": { tag: "3D Animation", title: "3D Animation" },
  "video-editing": { tag: "3D", title: "Product Animation" },
  branding: { tag: "3D", title: "Industrial Animation" },
};

export const showcaseCategories = workCategories.map((c) => ({
  slug: c.slug,
  tag: showcaseLabels[c.slug as WorkCategorySlug].tag,
  title: showcaseLabels[c.slug as WorkCategorySlug].title,
  coverImage: c.coverImage,
}));
