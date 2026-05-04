#!/usr/bin/env node
/**
 * check-schemas.mjs
 *
 * Validates that JSON schema files in schemas/ are valid JSON.
 * Also validates example JSON files in schemas/examples/.
 *
 * Usage:
 *   npm run check:schemas
 *   node scripts/check-schemas.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SCHEMAS_DIR = join(ROOT, 'schemas');

function findJsonFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => join(entry.parentPath ?? entry.path, entry.name));
}

function checkSchemaStructure(schema, filePath) {
  const issues = [];
  if (typeof schema !== 'object' || schema === null || Array.isArray(schema)) {
    issues.push('Root value must be a JSON object.');
    return issues;
  }
  if (!schema['$schema']) {
    issues.push('Missing "$schema" keyword (recommend JSON Schema 2020-12).');
  }
  if (!schema.title) {
    issues.push('Missing "title" property.');
  }
  if (!schema.type && !schema.oneOf && !schema.anyOf && !schema.allOf && !schema['$ref']) {
    issues.push('Missing "type" or schema composition keyword.');
  }
  return issues;
}

let errorCount = 0;
let warnCount = 0;
const jsonFiles = findJsonFiles(SCHEMAS_DIR);

if (jsonFiles.length === 0) {
  console.log('No schema JSON files found — skipping check.');
  process.exit(0);
}

for (const filePath of jsonFiles) {
  const relative = filePath.replace(ROOT + '/', '');

  let parsed;
  try {
    const raw = readFileSync(filePath, 'utf8');
    parsed = JSON.parse(raw);
  } catch (err) {
    console.error(`✖ Invalid JSON: ${relative} — ${err.message}`);
    errorCount++;
    continue;
  }

  // Only run schema structure checks for schema definition files (not examples)
  const isExample = filePath.includes('/examples/');
  if (!isExample) {
    const issues = checkSchemaStructure(parsed, filePath);
    if (issues.length > 0) {
      for (const issue of issues) {
        console.warn(`⚠ ${relative}: ${issue}`);
        warnCount++;
      }
    } else {
      console.log(`✓ ${relative}`);
    }
  } else {
    console.log(`✓ ${relative} (example)`);
  }
}

console.log('');
if (errorCount > 0) {
  console.error(`✖ ${errorCount} schema file(s) have JSON errors.`);
  process.exit(1);
} else if (warnCount > 0) {
  console.warn(
    `⚠ ${warnCount} schema file(s) have structural warnings (non-fatal).`
  );
  console.log(`✓ All ${jsonFiles.length} schema JSON files are valid JSON.`);
} else {
  console.log(`✓ All ${jsonFiles.length} schema JSON files passed.`);
}
