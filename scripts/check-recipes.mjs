import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const RECIPES_DIR = join(ROOT, 'recipes');
const INTEGRATIONS_DIR = join(ROOT, 'integrations');

// Patterns are intentionally broad to support both existing (v0.1/v0.2/v0.3) and new (v0.4) recipe formats.
// Existing recipes use "When to use", "Required NotebookLM sources", "Prompt to use", "Expected output".
// New recipes use "Goal", "Prerequisites", "Steps", "Example prompts", "Expected output".
// Integration recipes use "Scenario", "Required NotebookLM sources", "Prompt", "Expected output", "Limitations".
const REQUIRED_SECTIONS = [
  { label: 'Goal/Scenario', pattern: /\bgoal\b|\bwhen to use\b|\bscenario\b/i },
  { label: 'Prerequisites/Required', pattern: /\bprerequisites?\b|\brequired\b/i },
  { label: 'Steps/Prompt', pattern: /\bsteps?\b|\bstep-by-step\b|\bworkflow\b|\bprompt\b/i },
  { label: 'Example/Prompt', pattern: /\bexample\b|\bprompt\b/i },
  { label: 'Output', pattern: /\boutput\b/i },
];

function findMarkdownFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith('.md') &&
        entry.name.toLowerCase() !== 'readme.md'
    )
    .map((entry) => join(entry.parentPath ?? entry.path, entry.name));
}

function extractHeadings(content) {
  return content
    .split('\n')
    .filter((line) => /^#{1,6}\s/.test(line))
    .map((line) => line.replace(/^#{1,6}\s+/, ''));
}

let errorCount = 0;
const recipeMdFiles = findMarkdownFiles(RECIPES_DIR);
const integrationMdFiles = findMarkdownFiles(INTEGRATIONS_DIR);
const mdFiles = [...recipeMdFiles, ...integrationMdFiles];

if (mdFiles.length === 0) {
  console.log('No recipe files found — skipping check.');
  process.exit(0);
}

for (const filePath of mdFiles) {
  const content = readFileSync(filePath, 'utf8');
  const headings = extractHeadings(content);
  const relative = filePath.replace(ROOT + '/', '');
  const missing = [];

  for (const { label, pattern } of REQUIRED_SECTIONS) {
    const found = headings.some((h) => pattern.test(h));
    if (!found) missing.push(label);
  }

  if (missing.length > 0) {
    console.error(`✖ ${relative} — missing sections: ${missing.join(', ')}`);
    errorCount++;
  } else {
    console.log(`✓ ${relative}`);
  }
}

if (errorCount > 0) {
  console.error(`\n${errorCount} recipe file(s) have missing sections.`);
  process.exit(1);
} else {
  console.log(`\n✓ All ${mdFiles.length} recipe files have required sections.`);
}
