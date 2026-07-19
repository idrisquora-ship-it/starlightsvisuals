import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { resolveVideoEmbed } from "@/lib/youtube";
import { cn } from "@/lib/utils";

export type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
  poster?: string;
  title: string;
};

export function VideoModal({ open, onClose, videoSrc, poster, title }: VideoModalProps) {
  const { t } = useTranslation();
  const embed = resolveVideoEmbed(videoSrc);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            type="button"
            aria-label={t("videoModal.closeVideo")}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={cn(
              "relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl",
              "border border-white/10 shadow-[0_40px_120px_-24px_rgba(0,0,0,0.9)]",
            )}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-background/80 text-foreground backdrop-blur transition hover:border-neon-green hover:text-neon-green"
              aria-label={t("videoModal.close")}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-black">
              {embed ? (
                <iframe
                  key={embed.id}
                  src={embed.embedUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <video
                  key={videoSrc}
                  src={videoSrc}
                  poster={poster}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
