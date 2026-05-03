import { readFileSync, writeFileSync } from 'node:fs';

const version = process.argv[2];
if (!version || !/^\d+\.\d+\.\d+(-[\w.-]+)?$/.test(version)) {
  console.error('Usage: node scripts/pin-notebooklm-version.mjs <semver>');
  console.error('Example: node scripts/pin-notebooklm-version.mjs 2.0.0');
  process.exit(1);
}

const path = '.vscode/mcp.json';
const config = JSON.parse(readFileSync(path, 'utf8'));
const args = config.servers?.notebooklm?.args;

if (!Array.isArray(args)) {
  console.error('Invalid .vscode/mcp.json: servers.notebooklm.args must be an array.');
  process.exit(1);
}

const index = args.findIndex((arg) => arg.startsWith('notebooklm-mcp@'));
if (index === -1) {
  console.error('Could not find notebooklm-mcp argument to pin.');
  process.exit(1);
}

args[index] = `notebooklm-mcp@${version}`;
writeFileSync(path, `${JSON.stringify(config, null, 2)}\n`);
console.log(`Pinned notebooklm-mcp to ${version} in ${path}`);
