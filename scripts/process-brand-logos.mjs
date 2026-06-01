/**
 * Process Untitled design brand logos for the marquee.
 * Trims empty margins, fits logo inside tile (no crop), keeps background.
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
/** Logo fills ~76% of tile — visible but not cropped */
const FILL = 0.76;

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

function sampleBackground(input) {
  return sharp(input)
    .clone()
    .extract({ left: 0, top: 0, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then(({ data }) => ({
      r: data[0],
      g: data[1],
      b: data[2],
    }));
}

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

  const bg = await sampleBackground(input);
  const trimmed = await loadTrimmed(input);
  const maxW = Math.round(CANVAS_W * FILL);
  const maxH = Math.round(CANVAS_H * FILL);

  const fitted = await sharp(trimmed)
    .resize(maxW, maxH, {
      fit: "inside",
      withoutEnlargement: false,
      background: bg,
    })
    .png()
    .toBuffer({ resolveWithObject: true });

  const left = Math.max(0, Math.floor((CANVAS_W - fitted.info.width) / 2));
  const top = Math.max(0, Math.floor((CANVAS_H - fitted.info.height) / 2));

  await sharp({
    create: {
      width: CANVAS_W,
      height: CANVAS_H,
      channels: 3,
      background: bg,
    },
  })
    .composite([{ input: fitted.data, left, top }])
    .png()
    .toFile(path.join(outDir, `${slug}.png`));

  console.log(`  ${slug} (${name}): fit ${fitted.info.width}×${fitted.info.height} in ${CANVAS_W}×${CANVAS_H}`);
}

fs.mkdirSync(outDir, { recursive: true });

console.log("Processing Untitled brand logos (fit inside tile)…");
for (const entry of SOURCES) {
  await processOne(entry);
}
console.log(`Done → ${outDir}`);
