import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import type { WorkProject } from "@/types/portfolio-works";

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
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl border border-border/60 bg-card/80 p-4 shadow-[0_0_60px_-20px_rgba(76,255,61,0.35)] md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full border border-border p-2 text-foreground transition hover:border-neon-green hover:text-neon-green"
              aria-label={t("works.closePreview")}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="overflow-hidden rounded-lg border border-border/40">
              {project.mediaType === "video" ? (
                <video
                  src={project.mediaSrc}
                  poster={project.thumbnail}
                  controls
                  autoPlay
                  className="max-h-[60vh] w-full bg-black object-contain"
                />
              ) : (
                <img
                  src={project.mediaSrc}
                  alt={project.title}
                  className="max-h-[60vh] w-full object-contain"
                />
              )}
            </div>
            <div className="mt-5">
              <p className="font-display text-[10px] uppercase tracking-widest text-neon-green">{project.year}</p>
              <h3 className="mt-1 font-display text-3xl tracking-tight">{project.title}</h3>
              <p className="mt-3 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
