# Setup Wizard

The setup wizard (`scripts/setup-wizard.mjs`) guides first-time users through configuring the NotebookLM MCP server and their chosen MCP client.

## What the wizard does

1. Detects the operating system and Node.js version
2. Asks which MCP client you are using (VS Code, Cursor, OpenCode)
3. Prompts for the MCP server URL (or uses the default)
4. Generates a validated configuration file for the selected client
5. Verifies the configuration by running a lightweight connection check
6. Prints a summary of next steps

## Usage

```bash
npm run setup
```

Or run the script directly:

```bash
node scripts/setup-wizard.mjs
```

## Options

The wizard is interactive by default. To skip prompts and use defaults:

```bash
node scripts/setup-wizard.mjs --client vscode --yes
```

Available flags:

| Flag | Description | Default |
|------|-------------|---------|
| `--client` | Target MCP client: `vscode`, `cursor`, `opencode` | Interactive |
| `--server-url` | MCP server URL | Default server URL |
| `--yes` | Accept all defaults without prompting | false |
| `--dry-run` | Print the generated config without writing it | false |

## Output files

The wizard writes the configuration file to the correct location for the selected client:

| Client | Output file |
|--------|-------------|
| VS Code | `.vscode/mcp.json` |
| Cursor | `.cursor/mcp.json` |
| OpenCode | `opencode.jsonc` |

If the output file already exists, the wizard asks before overwriting.

## Example session

```
$ npm run setup

NotebookLM + GitHub Copilot Setup Wizard
-----------------------------------------
Which MCP client are you configuring?
  1. VS Code + GitHub Copilot
  2. Cursor
  3. OpenCode
> 1

MCP server URL [default: npx @notebooklm/mcp-server]:
> (press Enter to accept default)

Writing .vscode/mcp.json...
✓ Configuration written.

Running connection check...
✓ MCP server is reachable.

Setup complete. Next steps:
1. Reload VS Code (Ctrl+Shift+P → "Developer: Reload Window")
2. Open Copilot chat and paste:
   Use NotebookLM. In the [notebook-name] notebook, answer: what sources are loaded?
```

## Troubleshooting

If the wizard fails, run the doctor command:

```bash
npm run doctor
```

See [doctor.md](doctor.md) for interpretation of doctor output.
