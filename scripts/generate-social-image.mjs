import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
await mkdir(new URL('public/social/', root), { recursive: true });
// Marca original completa: apenas escala proporcional e fundo para legibilidade.
const logo = await sharp(
  new URL('public/brand/roberta-cunha-escuro.png', root).pathname,
)
  .resize({ width: 180, withoutEnlargement: true })
  .png()
  .toBuffer();
await sharp({
  create: { width: 200, height: 200, channels: 3, background: '#FCF8F5' },
})
  .composite([{ input: logo, gravity: 'centre' }])
  .png()
  .toFile(
    new URL('public/social/roberta-cunha-whatsapp-compact-v5.png', root)
      .pathname,
  );
console.log('Miniatura social com logo original criada: 200 × 200 px.');
