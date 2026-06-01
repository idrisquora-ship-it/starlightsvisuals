/**
 * Prepare brand marquee assets: remove dark/light backgrounds and normalize for dark UI.
 * Run: node scripts/process-brand-logos.mjs
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
  { file: "Brand.jpg", slug: "brand", variant: "mono" },
  { file: "Brand 1.jpg", slug: "brand-1", variant: "mono" },
  { file: "brand 2.jpg", slug: "brand-2", variant: "mono" },
  { file: "brand 3.jpg", slug: "brand-3", variant: "mono" },
  { file: "brand 4.jpg", slug: "brand-4", variant: "mono" },
  { file: "brand 5.jpg", slug: "brand-5", variant: "mono" },
  { file: "brand 6.jpg", slug: "brand-6", variant: "mono" },
  { file: "brand 7.png", slug: "brand-7", variant: "color" },
  { file: "brand 8.jpg", slug: "brand-8", variant: "mono" },
  { file: "brand 9.png", slug: "brand-9", variant: "color" },
  { file: "brad 10.jpg", slug: "brand-10", variant: "mono" },
];

function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function isBackground(r, g, b, a, variant) {
  if (a < 16) return true;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lum = luminance(r, g, b);

  if (variant === "color") {
    return lum > 248 && max - min < 12;
  }

  return max < 52 || lum < 40;
}

function processPixels(data, variant) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    if (isBackground(r, g, b, a, variant)) {
      data[i + 3] = 0;
      continue;
    }

    if (variant === "mono") {
      const lum = luminance(r, g, b);
      const alpha = Math.min(255, Math.round(lum * 1.35 + 55));
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = alpha;
    } else {
      const lum = luminance(r, g, b);
      if (lum < 90) {
        const boost = Math.min(255, lum + 200);
        data[i] = boost;
        data[i + 1] = boost;
        data[i + 2] = boost;
      }
      data[i + 3] = Math.max(data[i + 3], 220);
    }
  }
}

async function processOne({ file, slug, variant }) {
  const input = path.join(sourceDir, file);
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${file}`);
    return null;
  }

  const { data, info } = await sharp(input)
    .resize({ height: 96, withoutEnlargement: false })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);
  processPixels(pixels, variant);

  const output = path.join(outDir, `${slug}.png`);
  await sharp(Buffer.from(pixels), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);

  return { slug, variant, src: `/brand-marquee/${slug}.png` };
}

fs.mkdirSync(outDir, { recursive: true });

const results = [];
for (const entry of SOURCES) {
  const result = await processOne(entry);
  if (result) results.push(result);
}

console.log(`Processed ${results.length} logos → ${outDir}`);
