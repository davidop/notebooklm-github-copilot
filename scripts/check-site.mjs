#!/usr/bin/env node
/**
 * check-site.mjs
 *
 * Checks that the GitHub Pages site/ folder has the expected structure.
 * Verifies required index and content pages exist and have minimal content.
 *
 * Usage:
 *   npm run check:site
 *   node scripts/check-site.mjs
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SITE_DIR = join(ROOT, 'site');

const REQUIRED_PAGES = [
  { path: 'site/index.md', label: 'Site index' },
  { path: 'site/getting-started.md', label: 'Getting started' },
  { path: 'site/clients.md', label: 'Clients reference' },
  { path: 'site/recipes.md', label: 'Recipes overview' },
  { path: 'site/security.md', label: 'Security page' },
  { path: 'site/governance.md', label: 'Governance page' },
  { path: 'site/faq.md', label: 'FAQ page' },
];

const OPTIONAL_PAGES = [
  { path: 'site/evaluations.md', label: 'Evaluations page' },
  { path: 'site/demo.md', label: 'Demo page' },
];

const CONFIG_FILES = [
  { path: '_config.yml', label: 'GitHub Pages config' },
];

let errorCount = 0;
let warnCount = 0;
let passCount = 0;

function check(filePath, label, required) {
  const abs = resolve(ROOT, filePath);
  if (!existsSync(abs)) {
    if (required) {
      console.error(`✖ Missing required site file: ${filePath} (${label})`);
      errorCount++;
    } else {
      console.warn(`⚠ Missing optional site file: ${filePath} (${label})`);
      warnCount++;
    }
    return;
  }

  const content = readFileSync(abs, 'utf8');
  if (content.trim().length < 50) {
    console.warn(`⚠ ${filePath} appears to be nearly empty (${content.trim().length} chars)`);
    warnCount++;
    return;
  }

  console.log(`✓ ${filePath}`);
  passCount++;
}

if (!existsSync(SITE_DIR)) {
  console.error('✖ site/ directory not found. Create it with the required page files.');
  process.exit(1);
}

for (const { path, label } of REQUIRED_PAGES) {
  check(path, label, true);
}

for (const { path, label } of OPTIONAL_PAGES) {
  check(path, label, false);
}

for (const { path, label } of CONFIG_FILES) {
  check(path, label, false);
}

console.log('');
if (errorCount > 0) {
  console.error(`✖ ${errorCount} required site file(s) are missing.`);
  process.exit(1);
} else if (warnCount > 0) {
  console.warn(`⚠ ${warnCount} optional site file(s) are missing or thin.`);
  console.log(`✓ All required site files present (${passCount} checked).`);
} else {
  console.log(`✓ Site structure valid (${passCount} files checked).`);
}
