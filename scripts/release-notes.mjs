#!/usr/bin/env node
/**
 * release-notes.mjs
 *
 * Generates a draft release notes file from CHANGELOG.md.
 * Extracts the section for the specified version and writes it to a file.
 *
 * Usage:
 *   npm run release:notes -- --version v0.4.0
 *   node scripts/release-notes.mjs --version v0.4.0
 *   node scripts/release-notes.mjs --version v0.4.0 --output /tmp/release-v0.4.0.md
 *
 * Does NOT call GitHub APIs. Local file generation only.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        i++;
      } else {
        args[key] = true;
      }
    }
  }
  return args;
}

function extractVersionSection(changelog, version) {
  const normalized = version.replace(/^v/, '');
  const escaped = normalized.replace(/\./g, '\\.');
  // Match section headings like ## [0.4.0] or ## v0.4.0 or ## 0.4.0
  const headerPattern = new RegExp(
    `^##\\s+(?:\\[?v?${escaped}\\]?|v?${escaped})`,
    'mi'
  );

  const match = changelog.match(headerPattern);
  if (!match) return null;

  const startIdx = match.index;
  // Find the next ## heading after this one
  const rest = changelog.slice(startIdx);
  const nextHeaderMatch = rest.match(/\n## /);
  const section = nextHeaderMatch
    ? rest.slice(0, nextHeaderMatch.index)
    : rest;

  return section.trim();
}

function buildReleaseNotes(version, section) {
  const date = new Date().toISOString().split('T')[0];
  return (
    `# Release Notes — ${version}\n\n` +
    `Generated: ${date}\n\n` +
    `---\n\n` +
    section +
    `\n\n---\n\n` +
    `See [CHANGELOG.md](../CHANGELOG.md) for the full history.\n`
  );
}

function run() {
  const args = parseArgs(process.argv.slice(2));
  const version = args.version;

  if (!version) {
    console.error('✖ --version is required. Example: --version v0.4.0');
    process.exit(1);
  }

  const changelogPath = resolve(ROOT, 'CHANGELOG.md');
  if (!existsSync(changelogPath)) {
    console.error('✖ CHANGELOG.md not found.');
    process.exit(1);
  }

  const changelog = readFileSync(changelogPath, 'utf8');
  const section = extractVersionSection(changelog, version);

  if (!section) {
    console.error(`✖ Version "${version}" not found in CHANGELOG.md.`);
    console.error(
      '  Ensure CHANGELOG.md has a section like: ## [0.4.0] or ## v0.4.0'
    );
    process.exit(1);
  }

  const outputPath =
    args.output || resolve(ROOT, `release-notes-${version.replace(/^v/, 'v')}.md`);
  const content = buildReleaseNotes(version, section);

  writeFileSync(outputPath, content, 'utf8');
  console.log(`✓ Release notes written to: ${outputPath}`);
  console.log(`  Version: ${version}`);
  console.log(`  Characters: ${content.length}`);
}

run();
