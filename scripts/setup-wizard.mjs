#!/usr/bin/env node
/**
 * setup-wizard.mjs
 *
 * Interactive guided setup wizard for notebooklm-github-copilot.
 * Generates or updates client configuration files from templates.
 *
 * Usage:
 *   npm run setup:wizard
 *   npm run setup:wizard -- --client vscode --version latest
 *   npm run setup:wizard -- --client opencode --version notebooklm-mcp@0.1.0
 *   npm run setup:wizard -- --client cursor --output ./clients/cursor/mcp.json
 *   npm run setup:wizard -- --client vscode --version latest --force --enterprise
 *
 * Does NOT require NotebookLM login or live MCP calls.
 */

import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline';

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

function prompt(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function banner() {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║   NotebookLM + GitHub Copilot — Setup Wizard v0.4   ║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log('');
  console.log('This wizard generates MCP client configuration files.');
  console.log('No NotebookLM login or live MCP calls are required.');
  console.log('');
}

function resolveVersion(versionArg) {
  if (!versionArg || versionArg === 'latest') return 'notebooklm-mcp@latest';
  if (versionArg.startsWith('notebooklm-mcp@')) return versionArg;
  return `notebooklm-mcp@${versionArg}`;
}

function generateVscodeConfig(pkg, enterprise) {
  const config = {
    servers: {
      notebooklm: {
        command: 'npx',
        args: ['-y', pkg],
        type: 'stdio',
      },
    },
  };
  if (enterprise) {
    return (
      '// NotebookLM MCP configuration for VS Code / GitHub Copilot\n' +
      '// DISCLAIMER: This project is unofficial and not affiliated with Google, GitHub, or Microsoft.\n' +
      '// Review your organization MCP policy before enabling this server in a corporate environment.\n' +
      JSON.stringify(config, null, 2) +
      '\n'
    );
  }
  return JSON.stringify(config, null, 2) + '\n';
}

function generateOpencodeConfig(pkg, enterprise) {
  const disclaimer = enterprise
    ? '// DISCLAIMER: Unofficial project. Not affiliated with Google, GitHub, or Microsoft.\n// Review org policy before use.\n'
    : '';
  return (
    disclaimer +
    '// opencode.jsonc — NotebookLM MCP configuration for OpenCode\n' +
    JSON.stringify(
      {
        mcpServers: {
          notebooklm: {
            command: 'npx',
            args: ['-y', pkg],
            type: 'stdio',
          },
        },
      },
      null,
      2
    ) +
    '\n'
  );
}

function generateCursorConfig(pkg, enterprise) {
  const config = {
    mcpServers: {
      notebooklm: {
        command: 'npx',
        args: ['-y', pkg],
        type: 'stdio',
      },
    },
  };
  if (enterprise) {
    return (
      '// NotebookLM MCP configuration for Cursor\n' +
      '// DISCLAIMER: Unofficial project. Not affiliated with Google, GitHub, or Microsoft.\n' +
      JSON.stringify(config, null, 2) +
      '\n'
    );
  }
  return JSON.stringify(config, null, 2) + '\n';
}

function generateGenericConfig(pkg, enterprise) {
  const config = {
    mcpServers: {
      notebooklm: {
        command: 'npx',
        args: ['-y', pkg],
        type: 'stdio',
      },
    },
  };
  if (enterprise) {
    return (
      '// Generic MCP server snippet\n' +
      '// DISCLAIMER: Unofficial project. Not affiliated with Google, GitHub, or Microsoft.\n' +
      JSON.stringify(config, null, 2) +
      '\n'
    );
  }
  return JSON.stringify(config, null, 2) + '\n';
}

function generateConfig(client, pkg, enterprise) {
  switch (client) {
    case 'vscode':
      return generateVscodeConfig(pkg, enterprise);
    case 'opencode':
      return generateOpencodeConfig(pkg, enterprise);
    case 'cursor':
      return generateCursorConfig(pkg, enterprise);
    default:
      return generateGenericConfig(pkg, enterprise);
  }
}

function generateInstructions(client) {
  if (client === 'vscode') {
    return (
      '# GitHub Copilot — NotebookLM instructions\n\n' +
      'When the user asks about architecture, proposals, or document-grounded questions:\n\n' +
      '1. Use the NotebookLM MCP server to query the relevant notebook.\n' +
      '2. Return source-grounded answers with citations.\n' +
      '3. Never invent facts not grounded in the notebook sources.\n'
    );
  }
  if (client === 'cursor') {
    return (
      '# Cursor NotebookLM rules\n\n' +
      'Query NotebookLM before answering architecture or document questions.\n' +
      'Cite sources. Return structured, grounded answers.\n'
    );
  }
  return null;
}

function printNextSteps(client, outputPath) {
  console.log('');
  console.log('Next steps:');
  if (client === 'vscode') {
    console.log(`  1. Open ${outputPath} in VS Code.`);
    console.log('  2. Click the Start CodeLens above the notebooklm server entry.');
    console.log('  3. Open Copilot Chat → Agent mode → enable notebooklm tools.');
    console.log('  4. Run setup_auth to authenticate with Google NotebookLM.');
  } else if (client === 'opencode') {
    console.log(`  1. Place ${outputPath} in your project root.`);
    console.log('  2. Start OpenCode with: opencode');
    console.log('  3. The notebooklm MCP server will be available as a tool.');
  } else if (client === 'cursor') {
    console.log(`  1. Restart Cursor to pick up ${outputPath}.`);
    console.log('  2. Open the Chat panel and verify notebooklm tools are available.');
    console.log('  3. Run setup_auth to authenticate with Google NotebookLM.');
  } else {
    console.log(`  1. Integrate ${outputPath} into your MCP client configuration.`);
    console.log('  2. Start the MCP server with: npx notebooklm-mcp@latest');
  }
  console.log('');
  console.log(
    '  Note: Authentication must be tested manually through your MCP client.'
  );
  console.log('  See docs/setup.md for the full setup walkthrough.');
  console.log('');
}

async function run() {
  const args = parseArgs(process.argv.slice(2));

  banner();

  const rl =
    Object.keys(args).length === 0
      ? createInterface({ input: process.stdin, output: process.stdout })
      : null;

  let client = args.client;
  let version = args.version;
  let outputPath = args.output;
  let force = args.force === true;
  let genInstructions = args.instructions === true;
  let enterprise = args.enterprise === true;

  if (rl) {
    const clientAnswer = await prompt(
      rl,
      `Target client [vscode/opencode/cursor/generic] (default: vscode): `
    );
    client = clientAnswer.trim() || 'vscode';

    const versionAnswer = await prompt(
      rl,
      `notebooklm-mcp version [latest or e.g. 0.1.0] (default: latest): `
    );
    version = versionAnswer.trim() || 'latest';

    const defaultOutput = DEFAULT_OUTPUTS[client] || DEFAULT_OUTPUTS.generic;
    const outputAnswer = await prompt(
      rl,
      `Config output path (default: ${defaultOutput}): `
    );
    outputPath = outputAnswer.trim() || defaultOutput;

    const overwriteAnswer = await prompt(
      rl,
      'Overwrite existing files? [y/N]: '
    );
    force = overwriteAnswer.trim().toLowerCase() === 'y';

    const instrAnswer = await prompt(
      rl,
      'Generate example instructions/rules? [y/N]: '
    );
    genInstructions = instrAnswer.trim().toLowerCase() === 'y';

    const enterpriseAnswer = await prompt(
      rl,
      'Include enterprise disclaimer comments? [y/N]: '
    );
    enterprise = enterpriseAnswer.trim().toLowerCase() === 'y';

    rl.close();
  }

  if (!client) client = 'vscode';
  if (!SUPPORTED_CLIENTS.includes(client)) {
    console.error(
      `✖ Unsupported client: "${client}". Supported: ${SUPPORTED_CLIENTS.join(', ')}`
    );
    process.exit(1);
  }

  const pkg = resolveVersion(version);
  if (!outputPath) outputPath = DEFAULT_OUTPUTS[client] || DEFAULT_OUTPUTS.generic;

  const absOutput = resolve(ROOT, outputPath);
  const outputDir = dirname(absOutput);

  if (existsSync(absOutput) && !force) {
    console.error(
      `✖ File already exists: ${outputPath}\n  Use --force to overwrite.`
    );
    process.exit(1);
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`✓ Created directory: ${outputDir}`);
  }

  const content = generateConfig(client, pkg, enterprise);
  writeFileSync(absOutput, content, 'utf8');
  console.log(`✓ Generated ${client} config: ${outputPath}`);
  console.log(`  Package: ${pkg}`);

  if (genInstructions) {
    const instrContent = generateInstructions(client);
    if (instrContent) {
      const instrPath =
        client === 'vscode'
          ? resolve(ROOT, '.github/copilot-instructions-notebooklm.md')
          : client === 'cursor'
            ? resolve(ROOT, '.cursor/rules/notebooklm.md')
            : null;
      if (instrPath) {
        const instrDir = dirname(instrPath);
        if (!existsSync(instrDir)) mkdirSync(instrDir, { recursive: true });
        if (!existsSync(instrPath) || force) {
          writeFileSync(instrPath, instrContent, 'utf8');
          const rel = instrPath.replace(ROOT + '/', '');
          console.log(`✓ Generated instructions: ${rel}`);
        } else {
          const rel = instrPath.replace(ROOT + '/', '');
          console.log(`  Skipped (exists): ${rel}`);
        }
      }
    }
  }

  printNextSteps(client, outputPath);
}

run().catch((err) => {
  console.error('Setup wizard error:', err.message);
  process.exit(1);
});
