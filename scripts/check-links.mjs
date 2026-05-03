import { readFileSync, readdirSync, existsSync } from 'node:fs';
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

function extractLinks(content) {
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[2]);
  }
  return links;
}

function shouldSkip(link) {
  return (
    link.startsWith('http://') ||
    link.startsWith('https://') ||
    link.startsWith('mailto:') ||
    link.startsWith('#')
  );
}

let errorCount = 0;
const mdFiles = findMarkdownFiles(ROOT);

for (const filePath of mdFiles) {
  const content = readFileSync(filePath, 'utf8');
  const links = extractLinks(content);
  const fileDir = dirname(filePath);

  for (const link of links) {
    if (shouldSkip(link)) continue;

    const withoutAnchor = link.split('#')[0];
    if (!withoutAnchor) continue;

    const resolved = resolve(fileDir, withoutAnchor);
    if (!existsSync(resolved)) {
      const relative = filePath.replace(ROOT + '/', '');
      console.error(`✖ Broken link in ${relative}: ${link}`);
      errorCount++;
    }
  }
}

if (errorCount > 0) {
  console.error(`\nFound ${errorCount} broken link(s).`);
  process.exit(1);
} else {
  console.log(`✓ All internal links are valid (checked ${mdFiles.length} files).`);
}
