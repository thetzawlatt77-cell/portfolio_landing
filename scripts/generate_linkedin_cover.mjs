import sharp from "sharp";
import { fileURLToPath } from "node:url";

const width = 1584;
const height = 396;
const output = fileURLToPath(
  new URL("../public/linkedin-cover.png", import.meta.url),
);

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f0e0d"/>
      <stop offset="0.56" stop-color="#151210"/>
      <stop offset="1" stop-color="#2b1811"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="42%" r="55%">
      <stop offset="0" stop-color="#ff7657" stop-opacity="0.22"/>
      <stop offset="0.42" stop-color="#9a442f" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#151210" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" fill="none" stroke="#ffffff" stroke-opacity="0.027" stroke-width="1"/>
    </pattern>
    <filter id="blur"><feGaussianBlur stdDeviation="30"/></filter>
  </defs>

  <rect width="1584" height="396" fill="url(#background)"/>
  <rect width="1584" height="396" fill="url(#glow)"/>
  <rect width="1584" height="396" fill="url(#grid)"/>

  <!-- This area stays intentionally quiet beneath LinkedIn's profile avatar. -->
  <circle cx="128" cy="314" r="178" fill="#ff7657" opacity="0.045"/>
  <circle cx="128" cy="314" r="132" fill="none" stroke="#ff7657" stroke-opacity="0.16" stroke-width="1.5"/>
  <circle cx="128" cy="314" r="98" fill="none" stroke="#ffffff" stroke-opacity="0.07" stroke-width="1"/>

  <g transform="translate(510 54)">
    <rect x="0" y="0" width="330" height="31" rx="15.5" fill="#ffffff" fill-opacity="0.055" stroke="#ffffff" stroke-opacity="0.13"/>
    <circle cx="18" cy="15.5" r="4" fill="#ff7657"/>
      <text x="32" y="20" fill="#d9d4d0" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" letter-spacing="2.4">SOFTWARE ENGINEERING · MOBILE SPECIALIZATION</text>

    <text x="0" y="91" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="47" font-weight="700" letter-spacing="-1.2">Software Engineer</text>
    <text x="0" y="143" fill="#ff7657" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700" letter-spacing="-0.8">Flutter &amp; Mobile Development</text>

    <text x="0" y="190" fill="#c8c2bd" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="400">Architecture · Integration · Testing · Release · Maintenance</text>

    <g transform="translate(0 220)">
      <rect width="650" height="41" rx="20.5" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.11"/>
      <text x="21" y="26" fill="#eeeae7" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" letter-spacing="0.35">Flutter  ·  Firebase  ·  Riverpod  ·  Next.js  ·  Supabase  ·  AI</text>
    </g>

    <g transform="translate(0 285)">
      <circle cx="8" cy="-5" r="8" fill="#ff7657"/>
      <path d="M4 -5h8M8 -9v8" stroke="#151210" stroke-width="1.5" stroke-linecap="round"/>
      <text x="25" y="1" fill="#ffb29f" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="0.5">portfolio-tzl.vercel.app</text>
      <text x="260" y="1" fill="#8f8985" font-family="Arial, Helvetica, sans-serif" font-size="15">Based in Da Nang, Vietnam</text>
    </g>
  </g>

  <g transform="translate(1420 58)">
    <circle cx="56" cy="56" r="55" fill="#ffffff" fill-opacity="0.045" stroke="#ffffff" stroke-opacity="0.13"/>
    <circle cx="56" cy="56" r="43" fill="#ff7657"/>
    <text x="56" y="64" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="800" letter-spacing="1">TZ</text>
  </g>

  <rect x="510" y="375" width="965" height="2" rx="1" fill="#ff7657" opacity="0.42"/>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(output);
console.log(`Generated ${output}`);
