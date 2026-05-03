import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PROMPTS_DIR = join(ROOT, 'prompt-packs');

// Patterns handle both singular and plural forms, and common section title variations.
const TEAM_REQUIRED_SECTIONS = [
  { label: 'Team profile / Profile', pattern: /\bteam\s+profile\b|\bprofile\b/i },
  { label: 'Workflow', pattern: /\bworkflows?\b/i },
  { label: 'NotebookLM', pattern: /\bnotebooklm\b/i },
  { label: 'Prompt', pattern: /\bprompt/i },
  { label: 'Quality / Checklist', pattern: /\bquality\b|\bchecklist\b/i },
  { label: 'Risk', pattern: /\brisks?\b/i },
];

// Output-format files have a different structure (when to use, prompt, expected output, validation, limitations).
const OUTPUT_FORMAT_REQUIRED_SECTIONS = [
  { label: 'When to use', pattern: /\bwhen to use\b/i },
  { label: 'Prompt', pattern: /\bprompt\b/i },
  { label: 'Expected output', pattern: /\bexpected output\b|\boutput shape\b/i },
  { label: 'Limitations', pattern: /\blimitations?\b|\bvalidation\b/i },
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
const mdFiles = findMarkdownFiles(PROMPTS_DIR);

if (mdFiles.length === 0) {
  console.log('No prompt-pack files found — skipping check.');
  process.exit(0);
}

for (const filePath of mdFiles) {
  const content = readFileSync(filePath, 'utf8');
  const headings = extractHeadings(content);
  const relative = filePath.replace(ROOT + '/', '');
  const missing = [];

  // Use different required sections for output-format files vs team prompt packs
  const isOutputFormat = filePath.includes('/output-formats/');
  const sections = isOutputFormat ? OUTPUT_FORMAT_REQUIRED_SECTIONS : TEAM_REQUIRED_SECTIONS;

  for (const { label, pattern } of sections) {
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
  console.error(`\n${errorCount} prompt-pack file(s) have missing sections.`);
  process.exit(1);
} else {
  console.log(`\n✓ All ${mdFiles.length} prompt-pack files have required sections.`);
}
