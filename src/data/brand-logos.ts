export type BrandLogoVariant = "mono" | "color";

export type BrandLogo = {
  name: string;
  src: string;
  variant: BrandLogoVariant;
};

/** Processed marquee logos (see scripts/process-brand-logos.mjs). */
export const brandLogos: BrandLogo[] = [
  { name: "Brand", src: "/brand-marquee/brand.png", variant: "color" },
  { name: "Brand 1", src: "/brand-marquee/brand-1.png", variant: "mono" },
  { name: "Brand 2", src: "/brand-marquee/brand-2.png", variant: "mono" },
  { name: "Brand 3", src: "/brand-marquee/brand-3.png", variant: "color" },
  { name: "Brand 4", src: "/brand-marquee/brand-4.png", variant: "color" },
  { name: "Brand 5", src: "/brand-marquee/brand-5.png", variant: "color" },
  { name: "Brand 6", src: "/brand-marquee/brand-6.png", variant: "color" },
  { name: "Brand 7", src: "/brand-marquee/brand-7.png", variant: "mono" },
  { name: "Brand 8", src: "/brand-marquee/brand-8.png", variant: "mono" },
  { name: "Brand 9", src: "/brand-marquee/brand-9.png", variant: "color" },
  { name: "Brand 10", src: "/brand-marquee/brand-10.png", variant: "color" },
];
