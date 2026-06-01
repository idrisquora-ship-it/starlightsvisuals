/**
 * Prepare brand marquee assets: white silhouettes for dark logos (1,2,7,8),
 * original colors for the rest. All exported at the same canvas size.
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

/** Same canvas for every logo so the marquee aligns */
const CANVAS_W = 160;
const CANVAS_H = 48;
const LOGO_H = 40;

/** Only these need forced white on dark UI */
const WHITE_SLUGS = new Set(["brand-1", "brand-2", "brand-7", "brand-8"]);

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

function stripLightBackground(data) {
  const out = new Uint8Array(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const avg = (r + g + b) / 3;
    const spread = Math.max(r, g, b) - Math.min(r, g, b);

    if ((r > 238 && g > 238 && b > 238) || (avg > 228 && spread < 30)) {
      out[i + 3] = 0;
    }
  }
  return out;
}

async function placeOnCanvas(pixels, width, height) {
  const left = Math.max(0, Math.floor((CANVAS_W - width) / 2));
  const top = Math.max(0, Math.floor((CANVAS_H - height) / 2));

  return sharp({
    create: {
      width: CANVAS_W,
      height: CANVAS_H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: Buffer.from(pixels),
        raw: { width, height, channels: 4 },
        left,
        top,
      },
    ])
    .png()
    .toBuffer();
}

async function processWhite({ file, slug }) {
  const input = path.join(sourceDir, file);

  const base = sharp(input)
    .resize({
      width: CANVAS_W - 4,
      height: LOGO_H,
      fit: "inside",
      withoutEnlargement: false,
    })
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
  const { out: pixels } = toWhiteRgba(data, info.channels, aggressive);

  const png = await placeOnCanvas(pixels, info.width, info.height);
  const output = path.join(outDir, `${slug}.png`);
  await fs.promises.writeFile(output, png);

  console.log(`  ${slug}: white (mono)`);
}

async function processColor({ file, slug }) {
  const input = path.join(sourceDir, file);

  let pipeline = sharp(input);
  try {
    pipeline = sharp(await sharp(input).trim({ threshold: 12 }).toBuffer());
  } catch {
    pipeline = sharp(input);
  }

  const { data, info } = await pipeline
    .resize({
      width: CANVAS_W - 4,
      height: LOGO_H,
      fit: "inside",
      withoutEnlargement: false,
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = stripLightBackground(data);
  const png = await placeOnCanvas(pixels, info.width, info.height);
  const output = path.join(outDir, `${slug}.png`);
  await fs.promises.writeFile(output, png);

  console.log(`  ${slug}: color`);
}

async function processOne(entry) {
  const input = path.join(sourceDir, entry.file);
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${entry.file}`);
    return null;
  }

  if (WHITE_SLUGS.has(entry.slug)) {
    await processWhite(entry);
  } else {
    await processColor(entry);
  }
}

fs.mkdirSync(outDir, { recursive: true });

console.log(`Processing brand logos (${CANVAS_W}×${CANVAS_H}px canvas)…`);
for (const entry of SOURCES) {
  await processOne(entry);
}
console.log(`Done → ${outDir}`);
