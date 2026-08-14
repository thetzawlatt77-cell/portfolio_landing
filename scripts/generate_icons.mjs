import sharp from "sharp";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../public/profile-original-gray.JPG", import.meta.url));

async function createCircularIcon(size, output, { transparent = true } = {}) {
  const ringWidth = Math.max(4, Math.round(size * 0.035));
  const inset = Math.ceil(ringWidth / 2) + 2;
  const radius = size / 2 - inset;

  const circleMask = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="white" />
    </svg>
  `);

  const accentRing = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle
        cx="${size / 2}"
        cy="${size / 2}"
        r="${radius}"
        fill="none"
        stroke="#ff7657"
        stroke-width="${ringWidth}"
      />
    </svg>
  `);

  const photo = await sharp(source)
    .resize(size, size, { fit: "cover", position: "centre" })
    .composite([{ input: circleMask, blend: "dest-in" }, { input: accentRing }])
    .png()
    .toBuffer();

  if (transparent) {
    await sharp(photo).toFile(output);
    return;
  }

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: "#151310",
    },
  })
    .composite([{ input: photo }])
    .png()
    .toFile(output);
}

await createCircularIcon(512, fileURLToPath(new URL("../src/app/icon.png", import.meta.url)));
await createCircularIcon(180, fileURLToPath(new URL("../src/app/apple-icon.png", import.meta.url)), {
  transparent: false,
});

console.log("Generated circular browser and Apple icons.");
