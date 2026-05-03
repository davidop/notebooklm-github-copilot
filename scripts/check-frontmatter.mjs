import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function findMarkdownFiles(dir) {
  return readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => join(entry.parentPath ?? entry.path, entry.name))
    .filter((p) => !p.includes('node_modules'));
}

function validateFrontmatter(content, filePath) {
  if (!content.startsWith('---')) return null;

  const end = content.indexOf('---', 3);
  if (end === -1) return 'Frontmatter block is not closed (missing closing `---`)';

  const block = content.slice(3, end).trim();
  if (block.length === 0) return 'Frontmatter block is empty';

  const seenKeys = new Set();
  const lines = block.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Allow list items under a key
    if (trimmed.startsWith('-')) continue;

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;

    const key = trimmed.slice(0, colonIdx).trim();
    if (!key) continue;

    if (seenKeys.has(key)) return `Duplicate frontmatter key: "${key}"`;
    seenKeys.add(key);
  }

  return null;
}

let errorCount = 0;
const mdFiles = findMarkdownFiles(ROOT);

for (const filePath of mdFiles) {
  const content = readFileSync(filePath, 'utf8');
  const error = validateFrontmatter(content, filePath);

  if (error) {
    const relative = filePath.replace(ROOT + '/', '');
    console.error(`✖ ${relative}: ${error}`);
    errorCount++;
  }
}

if (errorCount > 0) {
  console.error(`\n${errorCount} file(s) have invalid frontmatter.`);
  process.exit(1);
} else {
  console.log(`✓ Frontmatter valid (checked ${mdFiles.length} files).`);
}
