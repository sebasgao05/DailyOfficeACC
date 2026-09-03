// Genera los iconos cuadrados de la app a partir de ACC-Logo.png.
// Uso: node scripts/gen-icons.mjs
// (Requiere `sharp`, que ya viene con Next.)
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "ACC-Logo.png");
const appDir = path.join(root, "src", "app");

const BG = { r: 255, g: 255, b: 255, alpha: 1 }; // fondo blanco

// Crea un PNG cuadrado de `size`px con el logo centrado y `pad` de margen relativo.
async function squareIcon(size, pad, outFile) {
  const inner = Math.round(size * (1 - pad * 2));
  const logo = await sharp(src)
    .resize(inner, inner, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(outFile);
  console.log("✓", path.relative(root, outFile), `(${size}x${size})`);
}

await squareIcon(180, 0.12, path.join(appDir, "apple-icon.png")); // iOS home screen
await squareIcon(512, 0.1, path.join(appDir, "icon.png")); // navegador / PWA

console.log("Listo. Regenera favicon.ico aparte si hace falta.");

// --- Imágenes para compartir en redes (Open Graph / Twitter) ---
// Formato horizontal 1200x630 con el logo centrado sobre fondo blanco.
async function ogImage(outFile) {
  const w = 1200;
  const h = 630;
  const logo = await sharp(src)
    .resize(Math.round(w * 0.55), Math.round(h * 0.7), {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .toBuffer();

  await sharp({
    create: { width: w, height: h, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(outFile);
  console.log("✓", path.relative(root, outFile), `(${w}x${h})`);
}

await ogImage(path.join(appDir, "opengraph-image.png"));
await ogImage(path.join(appDir, "twitter-image.png"));
