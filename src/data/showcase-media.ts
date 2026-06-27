import { showcaseYoutubeIds } from "@/data/showcase-youtube";
import { extractYouTubeId, youTubeThumbnail, youTubeWatchUrl } from "@/lib/youtube";

export type ShowcaseVideoKey = keyof typeof showcaseYoutubeIds;

export function resolveShowcaseVideo(key: ShowcaseVideoKey) {
  const youtubeId = extractYouTubeId(showcaseYoutubeIds[key] ?? "");
  if (!youtubeId) return null;

  return {
    videoSrc: youTubeWatchUrl(youtubeId),
    poster: youTubeThumbnail(youtubeId),
    youtubeId,
  };
}
