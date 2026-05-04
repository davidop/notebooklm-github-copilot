#!/usr/bin/env node
/**
 * generate-client-config.mjs
 *
 * Non-interactive client configuration generator for notebooklm-github-copilot.
 * Generates MCP client configuration files without requiring user input.
 *
 * Usage:
 *   node scripts/generate-client-config.mjs --client vscode --version latest --output .vscode/mcp.json
 *   node scripts/generate-client-config.mjs --client opencode --version notebooklm-mcp@0.1.0 --output opencode.jsonc
 *   node scripts/generate-client-config.mjs --client cursor --version latest --output .cursor/mcp.json
 *   node scripts/generate-client-config.mjs --client generic --output mcp-server.json --force
 *
 * Does NOT make external network calls or require NotebookLM authentication.
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const SUPPORTED_CLIENTS = ['vscode', 'opencode', 'cursor', 'generic'];

const DEFAULT_OUTPUTS = {
  vscode: '.vscode/mcp.json',
  opencode: 'opencode.jsonc',
  cursor: '.cursor/mcp.json',
  generic: 'mcp-server.json',
};

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

function resolvePackage(versionArg) {
  if (!versionArg || versionArg === 'latest') return 'notebooklm-mcp@latest';
  if (versionArg.startsWith('notebooklm-mcp@')) return versionArg;
  return `notebooklm-mcp@${versionArg}`;
}

function validateClient(client) {
  if (!SUPPORTED_CLIENTS.includes(client)) {
    console.error(
      `✖ Unsupported client: "${client}"\n  Supported clients: ${SUPPORTED_CLIENTS.join(', ')}`
    );
    process.exit(1);
  }
}

function validateVersion(versionArg) {
  if (!versionArg || versionArg === 'latest') return;
  const semverLike = /^notebooklm-mcp@(\d+\.\d+\.\d+.*|latest)$/;
  const plain = /^\d+\.\d+\.\d+/;
  if (!semverLike.test(versionArg) && !plain.test(versionArg)) {
    console.warn(
      `⚠ Version argument "${versionArg}" may not be a valid semver or package specifier.`
    );
  }
}

function buildConfig(client, pkg) {
  if (client === 'vscode') {
    return {
      servers: {
        notebooklm: {
          command: 'npx',
          args: ['-y', pkg],
          type: 'stdio',
        },
      },
    };
  }
  return {
    mcpServers: {
      notebooklm: {
        command: 'npx',
        args: ['-y', pkg],
        type: 'stdio',
      },
    },
  };
}

function renderContent(client, config) {
  const json = JSON.stringify(config, null, 2);
  if (client === 'opencode') {
    return `// opencode.jsonc — NotebookLM MCP configuration for OpenCode\n${json}\n`;
  }
  return json + '\n';
}

function printNextSteps(client, outputPath) {
  const steps = {
    vscode: [
      `1. Open ${outputPath} in VS Code.`,
      '2. Click the Start CodeLens next to the notebooklm server entry.',
      '3. Open Copilot Chat → Agent mode → enable notebooklm tools.',
      '4. Run setup_auth to authenticate with Google NotebookLM.',
      '5. See docs/setup.md for the full walkthrough.',
    ],
    opencode: [
      `1. Place ${outputPath} in your project root or merge with existing opencode.jsonc.`,
      '2. Run: opencode',
      '3. The notebooklm MCP server will be available as a tool.',
      '4. See clients/opencode/README.md for details.',
    ],
    cursor: [
      `1. Ensure ${outputPath} is in your project root or global Cursor config directory.`,
      '2. Restart Cursor.',
      '3. Verify notebooklm tools appear in the Chat panel.',
      '4. Run setup_auth to authenticate.',
      '5. See clients/cursor/README.md for details.',
    ],
    generic: [
      `1. Integrate ${outputPath} into your MCP client configuration.`,
      '2. Launch the MCP server with: npx notebooklm-mcp@latest',
      '3. Refer to your MCP client documentation for tool registration.',
    ],
  };
  console.log('\nNext steps:');
  for (const step of steps[client] || steps.generic) {
    console.log(`  ${step}`);
  }
  console.log(
    '\n  Authentication must be tested manually through the MCP client.'
  );
}

function run() {
  const args = parseArgs(process.argv.slice(2));

  const client = args.client || 'vscode';
  const versionArg = args.version || 'latest';
  const force = args.force === true;
  const outputPath = args.output || DEFAULT_OUTPUTS[client] || DEFAULT_OUTPUTS.generic;

  validateClient(client);
  validateVersion(versionArg);

  const pkg = resolvePackage(versionArg);
  const absOutput = resolve(ROOT, outputPath);
  const outputDir = dirname(absOutput);

  if (existsSync(absOutput) && !force) {
    console.error(
      `✖ File already exists: ${outputPath}\n  Use --force to overwrite existing files.`
    );
    process.exit(1);
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`✓ Created directory: ${outputDir}`);
  }

  const config = buildConfig(client, pkg);
  const content = renderContent(client, config);
  writeFileSync(absOutput, content, 'utf8');

  console.log(`✓ Generated ${client} config → ${outputPath}`);
  console.log(`  Package: ${pkg}`);

  printNextSteps(client, outputPath);
}

run();
