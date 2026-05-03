import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const requiredFiles = [
  '.vscode/mcp.json',
  '.vscode/settings.json',
  '.github/copilot-instructions.md',
  '.github/instructions/notebooklm-research.instructions.md',
  'docs/setup.md',
  'docs/usage.md',
  'security/threat-model.md',
  'package.json'
];

function fail(message) {
  console.error(`✖ ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`✓ ${message}`);
}

for (const file of requiredFiles) {
  if (!existsSync(file)) fail(`Missing required file: ${file}`);
  else ok(`Found ${file}`);
}

for (const file of ['.vscode/mcp.json', '.vscode/settings.json', 'package.json']) {
  try {
    JSON.parse(readFileSync(file, 'utf8'));
    ok(`Valid JSON: ${file}`);
  } catch (error) {
    fail(`Invalid JSON in ${file}: ${error.message}`);
  }
}

const mcp = JSON.parse(readFileSync('.vscode/mcp.json', 'utf8'));
if (!mcp.servers?.notebooklm) fail('Missing servers.notebooklm in .vscode/mcp.json');
if (mcp.servers?.notebooklm?.command !== 'npx') fail('NotebookLM MCP command should be npx by default');
if (!mcp.servers?.notebooklm?.args?.some((arg) => arg.startsWith('notebooklm-mcp'))) {
  fail('NotebookLM MCP args should include notebooklm-mcp');
}

try {
  const version = execFileSync('node', ['--version'], { encoding: 'utf8' }).trim();
  const major = Number(version.replace(/^v/, '').split('.')[0]);
  if (major < 18) fail(`Node.js 18+ required. Current: ${version}`);
  else ok(`Node.js version OK: ${version}`);
} catch (error) {
  fail(`Unable to check Node.js version: ${error.message}`);
}

if (process.exitCode) {
  console.error('\nValidation failed. Fix the errors above.');
  process.exit(process.exitCode);
}

console.log('\nValidation passed.');
