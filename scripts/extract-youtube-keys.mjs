import fs from "node:fs";

const text = fs.readFileSync("src/data/portfolio-works.ts", "utf8");
const mockSlugs = new Set(["exa", "kurk", "huya", "mirrorskin", "bello", "moxeys"]);
const entries = {};
const clientRe =
  /client\(\s*\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?\},\s*"([^"]+)",\s*\{ skipPad: true \}/g;

let match;
while ((match = clientRe.exec(text)) !== null) {
  const slug = match[1];
  const prefix = match[2];
  if (mockSlugs.has(slug)) continue;
  const block = match[0];
  const videos = (block.match(/mediaType: "video"/g) ?? []).length;
  const images = (block.match(/mediaType: "image"/g) ?? []).length;
  for (let i = 1; i <= videos + images; i += 1) {
    entries[`${prefix}-p${i}`] = "";
  }
}

const lines = Object.entries(entries).map(([key, value]) => `  "${key}": "${value}",`);

const output = `/** YouTube video IDs (or full URLs) keyed by portfolio project id.
 * Paste each sample's YouTube link after uploading — only projects with an ID appear on the site.
 * Regenerate keys: node scripts/extract-youtube-keys.mjs
 */
export const projectYoutubeIds = {
${lines.join("\n")}
} as const;
`;

fs.writeFileSync("src/data/portfolio-youtube.ts", output);
console.log(`Wrote src/data/portfolio-youtube.ts (${Object.keys(entries).length} keys)`);
