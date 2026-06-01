/**
 * Process Untitled design brand logos for the marquee.
 * Trims empty margins, zooms logo to fill tile, keeps background color.
 * Run: npm run process:brand-logos
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const sourceDir = path.join(root, "src", "assets", "brand logo");
const outDir = path.join(root, "public", "brand-marquee");

const CANVAS_W = 160;
const CANVAS_H = 48;
const SOURCES = [
  { file: "Untitled design (5).png", slug: "brand-1", name: "IJOCKEY" },
  { file: "Untitled design (6).png", slug: "brand-2", name: "projekt w" },
  { file: "Untitled design (7).png", slug: "brand-3", name: "KNOTWTR" },
  { file: "Untitled design (8).png", slug: "brand-4", name: "min-tec" },
  { file: "Untitled design (9).png", slug: "brand-5", name: "RIFARI" },
  { file: "Untitled design (10).png", slug: "brand-6", name: "BIOTARA" },
  { file: "Untitled design (11).png", slug: "brand-7", name: "JOK One" },
  { file: "Untitled design (12).png", slug: "brand-8", name: "Brand 8" },
  { file: "Untitled design (13).png", slug: "brand-9", name: "NOVATORQ" },
];

async function loadTrimmed(input) {
  try {
    return await sharp(input).trim({ threshold: 12 }).toBuffer();
  } catch {
    return fs.readFileSync(input);
  }
}

async function processOne({ file, slug, name }) {
  const input = path.join(sourceDir, file);
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${file}`);
    return null;
  }

  const trimmed = await loadTrimmed(input);
  const meta = await sharp(trimmed).metadata();

  await sharp(trimmed)
    .resize(CANVAS_W, CANVAS_H, {
      fit: "cover",
      position: "centre",
    })
    .png()
    .toFile(path.join(outDir, `${slug}.png`));

  console.log(
    `  ${slug} (${name}): ${meta.width}×${meta.height} → zoomed ${CANVAS_W}×${CANVAS_H}`,
  );
}

fs.mkdirSync(outDir, { recursive: true });

console.log("Processing Untitled brand logos (zoomed, backgrounds kept)…");
for (const entry of SOURCES) {
  await processOne(entry);
}
console.log(`Done → ${outDir}`);
