export type WorkMediaType = "image" | "video" | "youtube";

export type WorkProject = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  mediaType: WorkMediaType;
  mediaSrc: string;
  tags: string[];
  year: number;
};

export type WorkClient = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  projectCount: number;
  testimonial?: string;
  logo: string;
  banner: string;
  services: string[];
  timeline: string;
  tools: string[];
  projects: WorkProject[];
};

export type WorkCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  clients: WorkClient[];
};
