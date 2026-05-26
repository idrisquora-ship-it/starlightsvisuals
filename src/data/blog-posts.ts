import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cinematic-trailers-that-convert",
    title: "Why cinematic trailers convert better than product demos",
    excerpt:
      "Story-first launch films build emotional stakes before the CTA. Here is how we structure hooks, pacing, and grade for maximum retention.",
    category: "Strategy",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: portfolioTrailer,
  },
  {
    slug: "character-design-for-ip",
    title: "Character design that anchors your IP across every channel",
    excerpt:
      "From silhouette readability to merch-ready turnarounds — the checklist we use before a hero goes into production.",
    category: "Craft",
    date: "May 3, 2026",
    readTime: "5 min read",
    image: portfolioCharacter,
  },
  {
    slug: "game-art-pipeline",
    title: "Inside our game art pipeline: concept to shipped assets",
    excerpt:
      "How we align art direction, tech constraints, and milestone reviews so teams ship on time without sacrificing polish.",
    category: "Production",
    date: "Apr 21, 2026",
    readTime: "8 min read",
    image: portfolioGame,
  },
  {
    slug: "motion-systems-for-brands",
    title: "Building motion systems brands can actually reuse",
    excerpt:
      "Modular motion libraries, logo stings, and UI micro-interactions that keep campaigns consistent at scale.",
    category: "Motion",
    date: "Apr 8, 2026",
    readTime: "4 min read",
    image: portfolioMotion,
  },
  {
    slug: "2d-animation-in-2026",
    title: "2D animation in 2026: hybrid pipelines that still feel handmade",
    excerpt:
      "Combining rigged efficiency with frame-by-frame accents — when to push each technique for premium results.",
    category: "Animation",
    date: "Mar 29, 2026",
    readTime: "7 min read",
    image: portfolio2d,
  },
  {
    slug: "creature-design-breakdown",
    title: "Creature design breakdown: from mood board to final rig",
    excerpt:
      "A look at how we develop boss creatures with readable silhouettes, material storytelling, and cinematic presence.",
    category: "Craft",
    date: "Mar 14, 2026",
    readTime: "6 min read",
    image: portfolioCreature,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
