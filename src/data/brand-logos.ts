export type BrandLogoVariant = "color" | "dark";

export type BrandLogo = {
  name: string;
  src: string;
  variant: BrandLogoVariant;
};

/** Untitled design logos — run npm run process:brand-logos to refresh assets */
export const brandLogos: BrandLogo[] = [
  { name: "IJOCKEY", src: "/brand-marquee/brand-1.png", variant: "dark" },
  { name: "projekt w", src: "/brand-marquee/brand-2.png", variant: "dark" },
  { name: "KNOTWTR", src: "/brand-marquee/brand-3.png", variant: "dark" },
  { name: "min-tec", src: "/brand-marquee/brand-4.png", variant: "color" },
  { name: "RIFARI", src: "/brand-marquee/brand-5.png", variant: "color" },
  { name: "BIOTARA", src: "/brand-marquee/brand-6.png", variant: "color" },
  { name: "JOK One", src: "/brand-marquee/brand-7.png", variant: "dark" },
  { name: "Brand 8", src: "/brand-marquee/brand-8.png", variant: "color" },
  { name: "NOVATORQ", src: "/brand-marquee/brand-9.png", variant: "color" },
];
