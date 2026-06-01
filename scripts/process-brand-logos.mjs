/**
 * Prepare brand marquee assets as white silhouettes on transparent PNGs for dark UI.
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

const SOURCES = [
  { file: "Brand.jpg", slug: "brand" },
  { file: "Brand 1.jpg", slug: "brand-1" },
  { file: "brand 2.jpg", slug: "brand-2" },
  { file: "brand 3.jpg", slug: "brand-3" },
  { file: "brand 4.jpg", slug: "brand-4" },
  { file: "brand 5.jpg", slug: "brand-5" },
  { file: "brand 6.jpg", slug: "brand-6" },
  { file: "brand 7.png", slug: "brand-7" },
  { file: "brand 8 - Copy.jpg", slug: "brand-8" },
  { file: "brand 9.png", slug: "brand-9" },
  { file: "brad 10.jpg", slug: "brand-10" },
];

function averageGray(gray, channels) {
  let sum = 0;
  const n = gray.length / channels;
  for (let i = 0; i < gray.length; i += channels) {
    sum += gray[i];
  }
  return sum / n;
}

function toWhiteRgba(gray, channels, aggressive) {
  const n = gray.length / channels;
  const out = new Uint8Array(n * 4);
  const floor = aggressive ? 10 : 22;
  let visible = 0;

  for (let i = 0; i < n; i++) {
    const g = gray[i * channels];
    const o = i * 4;

    if (g < floor) {
      out[o + 3] = 0;
      continue;
    }

    const alpha = Math.min(255, Math.round(g * 2.4 + 55));
    out[o] = 255;
    out[o + 1] = 255;
    out[o + 2] = 255;
    out[o + 3] = Math.max(alpha, 235);
    visible++;
  }
  return { out, visible };
}

async function processOne({ file, slug }) {
  const input = path.join(sourceDir, file);
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${file}`);
    return null;
  }

  const base = sharp(input)
    .resize({ height: 96, withoutEnlargement: false })
    .flatten({ background: { r: 0, g: 0, b: 0 } });

  const probeMeta = await base.clone().grayscale().raw().toBuffer({ resolveWithObject: true });
  const avg = averageGray(probeMeta.data, probeMeta.info.channels);

  const aggressive = avg < 40;

  let pipeline = base.grayscale();
  if (avg > 115) {
    pipeline = pipeline.negate({ alpha: false });
  }
  pipeline = pipeline.normalize();

  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true });
  const { out: pixels, visible } = toWhiteRgba(data, info.channels, aggressive);

  const output = path.join(outDir, `${slug}.png`);
  await sharp(Buffer.from(pixels), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);

  const tags = [avg > 115 && "negated", aggressive && "boosted"].filter(Boolean).join(", ");
  console.log(`  ${slug}: avg ${avg.toFixed(0)}${tags ? ` (${tags})` : ""} → ${visible} visible px`);

  return { slug, src: `/brand-marquee/${slug}.png` };
}

fs.mkdirSync(outDir, { recursive: true });

console.log("Processing brand logos as white silhouettes…");
for (const entry of SOURCES) {
  await processOne(entry);
}
console.log(`Done → ${outDir}`);
