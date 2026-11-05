import sharp from 'sharp';
import { readFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

process.env.XDG_CACHE_HOME ??= join(tmpdir(), 'roberta-social-cache');
await mkdir(process.env.XDG_CACHE_HOME, { recursive: true });

// Composição determinística: a marca é incorporada intacta, apenas redimensionada.
const root = new URL('../', import.meta.url);
const logo = await readFile(
  new URL('public/brand/roberta-cunha-escuro.png', root),
);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#EADBD7"/>
  <rect x="24" y="24" width="1152" height="582" fill="#FCF8F5"/>
  <image x="320" y="80" width="560" height="335.75" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${logo.toString('base64')}"/>
  <text x="600" y="471" text-anchor="middle" font-family="sans-serif" font-size="17" letter-spacing="3" fill="#765A53">PSICOLOGIA E NEUROPSICOLOGIA</text>
  <text x="600" y="506" text-anchor="middle" font-family="sans-serif" font-size="14" letter-spacing="2" fill="#765A53">CURITIBA · PRESENCIAL E ONLINE</text>
  <path d="M86 546H1114" stroke="#C58D7C" stroke-width="1"/>
</svg>`;
await mkdir(new URL('public/social/', root), { recursive: true });
await sharp(Buffer.from(svg))
  .png()
  .toFile(new URL('public/social/roberta-cunha-og-v1.png', root).pathname);
console.log('Imagem social criada: 1200 × 630 px.');
