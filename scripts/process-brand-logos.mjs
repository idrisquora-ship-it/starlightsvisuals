/**
 * Process Untitled design brand logos for the marquee.
 * - White backgrounds → removed (transparent), logo colors preserved
 * - Black/dark marks → kept black; tagged for subtle light edge on dark UI
 * - Color logos → original palette preserved
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
const LOGO_H = 40;

/** Black text with small color accents — still needs edge glow on dark UI */
const FORCE_DARK_SLUGS = new Set(["brand-2"]);

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

function cornerLuminance(data, width, height, channels) {
  const points = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];
  let sum = 0;
  for (const [x, y] of points) {
    const i = (y * width + x) * channels;
    sum += (data[i] + data[i + 1] + data[i + 2]) / 3;
  }
  return sum / points.length;
}

function stripWhiteBackground(data) {
  const out = new Uint8Array(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const avg = (r + g + b) / 3;
    const spread = Math.max(r, g, b) - Math.min(r, g, b);

    if ((r > 235 && g > 235 && b > 235) || (avg > 220 && spread < 35)) {
      out[i + 3] = 0;
    }
  }
  return out;
}

/** Keep black marks; only tag when mostly dark/low-saturation ink */
function detectVariant(data) {
  let count = 0;
  let dark = 0;
  let colorful = 0;

  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a < 40) continue;

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lum = (r + g + b) / 3;
    const sat = max === 0 ? 0 : (max - min) / max;

    count++;
    if (sat > 0.18 && lum > 35 && lum < 245) colorful++;
    if (lum < 95) dark++;
  }

  if (count === 0) return "color";
  if (colorful / count > 0.06) return "color";
  if (dark / count > 0.45) return "dark";
  return "color";
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

async function processOne({ file, slug, name }) {
  const input = path.join(sourceDir, file);
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${file}`);
    return null;
  }

  let pipeline = sharp(input);
  try {
    pipeline = sharp(await sharp(input).trim({ threshold: 10 }).toBuffer());
  } catch {
    pipeline = sharp(input);
  }

  const resized = await pipeline
    .resize({
      width: CANVAS_W - 4,
      height: LOGO_H,
      fit: "inside",
      withoutEnlargement: false,
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const corner = cornerLuminance(
    resized.data,
    resized.info.width,
    resized.info.height,
    resized.info.channels,
  );

  let pixels = new Uint8Array(resized.data);
  if (corner > 180) {
    pixels = stripWhiteBackground(pixels);
  }

  let variant = detectVariant(pixels);
  if (FORCE_DARK_SLUGS.has(slug)) variant = "dark";
  const png = await placeOnCanvas(pixels, resized.info.width, resized.info.height);
  const output = path.join(outDir, `${slug}.png`);
  await fs.promises.writeFile(output, png);

  console.log(`  ${slug} (${name}): ${variant}${corner > 180 ? ", bg removed" : ", dark bg kept"}`);

  return {
    name,
    src: `/brand-marquee/${slug}.png`,
    variant,
  };
}

fs.mkdirSync(outDir, { recursive: true });

console.log(`Processing Untitled brand logos (${CANVAS_W}×${CANVAS_H}px)…`);
for (const entry of SOURCES) {
  await processOne(entry);
}

console.log(`Done → ${outDir}`);
