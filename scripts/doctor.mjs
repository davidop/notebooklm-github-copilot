#!/usr/bin/env node
/**
 * doctor.mjs
 *
 * Local readiness check for notebooklm-github-copilot.
 * Checks Node.js version, npm/npx availability, repository structure,
 * client config files, package scripts, and optional Chrome detection.
 *
 * Usage:
 *   npm run doctor
 *   node scripts/doctor.mjs
 *
 * Does NOT require Google login, NotebookLM authentication, or external network access.
 * Authentication must be tested manually through the MCP client.
 */

import { existsSync, readFileSync } from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

let passCount = 0;
let warnCount = 0;
let failCount = 0;

function pass(label, detail) {
  passCount++;
  console.log(`  ✓ ${label}${detail ? ` — ${detail}` : ''}`);
}

function warn(label, detail, remediation) {
  warnCount++;
  console.warn(`  ⚠ ${label}${detail ? ` — ${detail}` : ''}`);
  if (remediation) console.warn(`    → ${remediation}`);
}

function fail(label, detail, remediation) {
  failCount++;
  console.error(`  ✖ ${label}${detail ? ` — ${detail}` : ''}`);
  if (remediation) console.error(`    → ${remediation}`);
}

function section(title) {
  console.log('');
  console.log(`▸ ${title}`);
}

// ─── Node.js version ─────────────────────────────────────────────────────────
section('Node.js');
try {
  const version = execFileSync('node', ['--version'], { encoding: 'utf8' }).trim();
  const major = Number(version.replace(/^v/, '').split('.')[0]);
  if (major >= 20) {
    pass('Node.js version', `${version} (recommended: >=20)`);
  } else if (major >= 18) {
    warn(
      'Node.js version',
      `${version} (minimum: 18, recommended: 20+)`,
      'Upgrade to Node.js 20 LTS: https://nodejs.org'
    );
  } else {
    fail(
      'Node.js version',
      `${version} (minimum: 18 required)`,
      'Install Node.js 18 or higher: https://nodejs.org'
    );
  }
} catch {
  fail('Node.js', 'not found', 'Install Node.js 18+: https://nodejs.org');
}

// ─── npm ──────────────────────────────────────────────────────────────────────
section('npm / npx');
try {
  const npmVer = execFileSync('npm', ['--version'], { encoding: 'utf8' }).trim();
  pass('npm', `v${npmVer}`);
} catch {
  fail('npm', 'not found', 'Install npm via Node.js: https://nodejs.org');
}

try {
  const npxVer = execFileSync('npx', ['--version'], { encoding: 'utf8' }).trim();
  pass('npx', `v${npxVer}`);
} catch {
  fail('npx', 'not found', 'npx is bundled with npm 5.2+. Update npm: npm install -g npm');
}

// ─── Repository structure ─────────────────────────────────────────────────────
section('Repository structure');
const required = [
  { path: '.vscode/mcp.json', label: 'VS Code MCP config' },
  { path: '.github/copilot-instructions.md', label: 'Copilot instructions' },
  { path: 'package.json', label: 'package.json' },
  { path: 'docs/setup.md', label: 'Setup documentation' },
  { path: 'scripts/validate.mjs', label: 'Validation script' },
];

for (const { path, label } of required) {
  const abs = resolve(ROOT, path);
  if (existsSync(abs)) {
    pass(label, path);
  } else {
    fail(label, `${path} not found`, `Restore ${path} from the repository.`);
  }
}

// ─── Client config files ──────────────────────────────────────────────────────
section('Client configuration files');
const clientConfigs = [
  { path: '.vscode/mcp.json', label: 'VS Code / GitHub Copilot', required: true },
  { path: 'clients/vscode/mcp.json', label: 'VS Code client reference', required: false },
  { path: 'clients/cursor/mcp.json', label: 'Cursor client config', required: false },
  { path: 'clients/opencode/opencode.jsonc', label: 'OpenCode config', required: false },
];

for (const { path, label, required: isRequired } of clientConfigs) {
  const abs = resolve(ROOT, path);
  if (existsSync(abs)) {
    try {
      // Try to parse as JSON (strip comments for .jsonc)
      const raw = readFileSync(abs, 'utf8').replace(/\/\/[^\n]*/g, '');
      JSON.parse(raw);
      pass(label, path);
    } catch {
      warn(label, `${path} exists but contains invalid JSON`, 'Check the file for syntax errors.');
    }
  } else if (isRequired) {
    fail(label, `${path} not found`, `Run: npm run setup:vscode`);
  } else {
    warn(
      label,
      `${path} not found (optional)`,
      `Generate with: npm run setup:wizard -- --client ${path.includes('cursor') ? 'cursor' : path.includes('opencode') ? 'opencode' : 'vscode'}`
    );
  }
}

// ─── .github/copilot-instructions.md ─────────────────────────────────────────
section('Copilot instructions');
const copilotInstr = resolve(ROOT, '.github/copilot-instructions.md');
if (existsSync(copilotInstr)) {
  pass('.github/copilot-instructions.md exists');
} else {
  fail(
    '.github/copilot-instructions.md missing',
    '',
    'Restore from the repository or run: npm run setup:vscode'
  );
}

// ─── Package scripts ─────────────────────────────────────────────────────────
section('Package scripts');
const expectedScripts = [
  'validate',
  'check:repo',
  'check:links',
  'check:recipes',
  'check:prompts',
  'check:frontmatter',
  'check:schemas',
  'check:site',
  'doctor',
  'setup:wizard',
  'setup:vscode',
  'setup:opencode',
  'setup:cursor',
];

let pkg;
try {
  pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
} catch {
  fail('package.json', 'could not be parsed');
  pkg = { scripts: {} };
}

for (const script of expectedScripts) {
  if (pkg.scripts?.[script]) {
    pass(`npm run ${script}`);
  } else {
    warn(`npm run ${script}`, 'script not found in package.json');
  }
}

// ─── Chrome / Chromium (optional) ─────────────────────────────────────────────
section('Chrome / Chromium (optional — needed for notebooklm-mcp)');
const chromePaths = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

let chromeFound = false;
for (const p of chromePaths) {
  if (existsSync(p)) {
    pass('Chrome/Chromium found', p);
    chromeFound = true;
    break;
  }
}

if (!chromeFound) {
  // Try which/where
  const result = spawnSync('which', ['google-chrome', 'chromium', 'chromium-browser'], {
    encoding: 'utf8',
  });
  if (result.stdout?.trim()) {
    pass('Chrome/Chromium found via PATH', result.stdout.trim().split('\n')[0]);
    chromeFound = true;
  }
}

if (!chromeFound) {
  warn(
    'Chrome/Chromium not detected',
    'notebooklm-mcp uses browser automation and requires Chrome',
    'Install Chrome: https://www.google.com/chrome/'
  );
}

// ─── Summary ─────────────────────────────────────────────────────────────────
console.log('');
console.log('─'.repeat(54));
console.log(
  `  Results: ${passCount} passed, ${warnCount} warned, ${failCount} failed`
);
console.log('─'.repeat(54));
console.log('');
console.log(
  '  NOTE: Authentication with Google NotebookLM must be tested'
);
console.log(
  '  manually through the MCP client by running setup_auth.'
);
console.log(
  '  See docs/setup.md for the full authentication walkthrough.'
);
console.log('');

if (failCount > 0) {
  console.error(`  ✖ ${failCount} check(s) failed. Resolve issues above before proceeding.`);
  process.exit(1);
} else if (warnCount > 0) {
  console.warn(`  ⚠ ${warnCount} warning(s). Optional items may affect full functionality.`);
} else {
  console.log('  ✓ All checks passed. Your environment looks ready.');
}
