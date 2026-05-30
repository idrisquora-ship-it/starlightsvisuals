import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import type { WorkProject } from "@/types/portfolio-works";

import { PortfolioVideoPlayer } from "@/components/works/PortfolioVideoPlayer";

type ProjectLightboxProps = {
  project: WorkProject | null;
  onClose: () => void;
};

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t("works.closePreview")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
        >
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-[0_0_60px_-20px_rgba(76,255,61,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full border border-border bg-background/90 p-2 text-foreground transition hover:border-neon-green hover:text-neon-green"
              aria-label={t("works.closePreview")}
            >
              <X className="h-4 w-4" />
            </button>
            {project.mediaType === "video" ? (
              <div className="aspect-video w-full bg-black">
                <PortfolioVideoPlayer
                  src={project.mediaSrc}
                  poster={project.thumbnail}
                  autoPlay
                  className="object-contain"
                />
              </div>
            ) : (
              <img
                src={project.mediaSrc}
                alt=""
                className="max-h-[90vh] w-full object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
