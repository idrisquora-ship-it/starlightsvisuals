import { brandLogos, type BrandLogo } from "@/data/brand-logos";
import { cn } from "@/lib/utils";

type LogoMarqueeProps = {
  className?: string;
};

const ROW_COUNT = 3;

function splitIntoRows(logos: BrandLogo[]): BrandLogo[][] {
  const perRow = Math.ceil(logos.length / ROW_COUNT);
  return Array.from({ length: ROW_COUNT }, (_, i) =>
    logos.slice(i * perRow, (i + 1) * perRow),
  ).filter((row) => row.length > 0);
}

function LogoCard({ logo, ariaHidden }: { logo: BrandLogo; ariaHidden?: boolean }) {
  return (
    <div className="logo-marquee-card flex shrink-0 items-center justify-center">
      <img
        src={logo.src}
        alt={ariaHidden ? undefined : `${logo.name} logo`}
        width={128}
        height={40}
        loading="lazy"
        decoding="async"
        className="logo-marquee-img max-h-6 w-auto max-w-[96px] object-contain md:max-h-7 md:max-w-[108px]"
      />
    </div>
  );
}

function MarqueeRow({
  logos,
  direction = "left",
  offset = false,
  duration,
}: {
  logos: BrandLogo[];
  direction?: "left" | "right";
  offset?: boolean;
  duration: number;
}) {
  const animationName =
    direction === "right" ? "logo-marquee-reverse" : "logo-marquee";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        offset && "logo-marquee-row-offset",
      )}
    >
      <div
        className="logo-marquee-track-inner flex w-max flex-nowrap will-change-transform"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        <div className="logo-marquee-row flex shrink-0 flex-nowrap items-center">
          {logos.map((logo) => (
            <LogoCard key={logo.name} logo={logo} />
          ))}
        </div>
        <div
          className="logo-marquee-row flex shrink-0 flex-nowrap items-center"
          aria-hidden
        >
          {logos.map((logo) => (
            <LogoCard key={`dup-${logo.name}`} logo={logo} ariaHidden />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LogoMarquee({ className }: LogoMarqueeProps) {
  const rows = splitIntoRows(brandLogos);
  const durations = [32, 40, 28];

  return (
    <div
      className={cn(
        "logo-marquee-shell relative w-full",
        "before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r before:from-background before:to-transparent md:before:w-24",
        "after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l after:from-background after:to-transparent md:after:w-24",
        className,
      )}
    >
      <div className="logo-marquee-rows flex flex-col">
        {rows.map((rowLogos, i) => (
          <MarqueeRow
            key={i}
            logos={rowLogos}
            direction={i === 1 ? "right" : "left"}
            offset={i === 1}
            duration={durations[i] ?? 35}
          />
        ))}
      </div>
    </div>
  );
}
