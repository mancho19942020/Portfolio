import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const htmlPath = resolve(root, 'assets/docs/german-david-alvarez-cv.html');
const pdfPath = resolve(root, 'assets/docs/german-david-alvarez-cv.pdf');

const chromeCandidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];

const chromePath = chromeCandidates.find((p) => existsSync(p));

if (!chromePath) {
  console.error('Could not find Chrome or Chromium. Install Google Chrome and try again.');
  process.exit(1);
}

if (!existsSync(htmlPath)) {
  console.error(`Source HTML not found at ${htmlPath}`);
  process.exit(1);
}

console.log(`Rendering ${htmlPath} → ${pdfPath} via ${chromePath}`);

const result = spawnSync(
  chromePath,
  [
    '--headless=new',
    '--no-pdf-header-footer',
    '--disable-gpu',
    `--print-to-pdf=${pdfPath}`,
    `file://${htmlPath}`,
  ],
  { stdio: 'inherit' },
);

if (result.status !== 0) {
  console.error('Chrome PDF generation failed.');
  process.exit(result.status ?? 1);
}

console.log(`PDF generated: ${pdfPath}`);
