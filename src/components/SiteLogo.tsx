import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import siteLogo from "@/assets/starligh-logo-transparent.png";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
};

export function SiteLogo({ className, imageClassName, onClick }: SiteLogoProps) {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn("inline-block shrink-0", className)}
      aria-label={t("brand.name")}
    >
      <img
        src={siteLogo}
        alt={t("brand.name")}
        width={320}
        height={160}
        decoding="async"
        className={cn(
          "h-auto w-[108px] max-w-full object-contain object-left md:w-[120px]",
          imageClassName,
        )}
      />
    </Link>
  );
}
