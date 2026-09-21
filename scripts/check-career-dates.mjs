import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const portfolio = readFileSync(resolve(root, 'constants.ts'), 'utf8');
const cv = readFileSync(resolve(root, 'assets/docs/german-david-alvarez-cv.html'), 'utf8');

function matchDate(source, pattern, label) {
  const match = source.match(pattern);
  if (!match) throw new Error(`Could not find ${label} date`);
  return match[1].replace(/\s*[–-]\s*/, ' - ').trim();
}

function monthIndex(value) {
  const match = value.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/);
  if (!match) throw new Error(`Invalid career date: ${value}`);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return Number(match[2]) * 12 + months.indexOf(match[1]);
}

const jobs = [
  {
    name: 'Metro de Bogota',
    portfolio: /company: "Metro de Bogotá",[\s\S]*?period: "([^"]+)"/,
    cv: /job-heading">Creative Designer \| Metro de Bogota<\/p>\s*<p class="job-details">([^|]+)\|/,
  },
  {
    name: 'Habi',
    portfolio: /company: "Habi",[\s\S]*?period: "([^"]+)"/,
    cv: /job-heading">Product Designer \| Habi<\/p>\s*<p class="job-details">([^|]+)\|/,
  },
];

const dates = Object.fromEntries(jobs.map(({ name, portfolio: sitePattern, cv: cvPattern }) => {
  const siteDate = matchDate(portfolio, sitePattern, `${name} portfolio`);
  const cvDate = matchDate(cv, cvPattern, `${name} CV`);
  if (siteDate !== cvDate) {
    throw new Error(`${name} dates disagree: portfolio "${siteDate}", CV "${cvDate}"`);
  }
  const [start, end] = siteDate.split(' - ');
  if (monthIndex(start) > monthIndex(end)) throw new Error(`${name} ends before it starts`);
  return [name, { start, end }];
}));

if (monthIndex(dates['Metro de Bogota'].end) > monthIndex(dates.Habi.start)) {
  throw new Error('Metro de Bogota and Habi dates overlap');
}

console.log('Career dates match across portfolio and CV, with no Metro/Habi overlap.');
