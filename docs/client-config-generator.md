# Client Config Generator

The client config generator (`scripts/generate-client-config.mjs`) produces a validated MCP configuration file for a specific client without running the interactive wizard.

## Usage

```bash
npm run generate-config -- --client <client-name>
```

Or run the script directly:

```bash
node scripts/generate-client-config.mjs --client vscode
```

## Options

| Flag | Description | Required | Values |
|------|-------------|----------|--------|
| `--client` | Target MCP client | Yes | `vscode`, `cursor`, `opencode` |
| `--server-url` | MCP server URL | No | Any valid URL or `npx` command |
| `--output` | Output file path (overrides default) | No | File path |
| `--dry-run` | Print config to stdout without writing | No | Flag |
| `--overwrite` | Overwrite existing config without prompting | No | Flag |

## Examples

Generate a VS Code config with the default server:

```bash
node scripts/generate-client-config.mjs --client vscode
```

Generate a Cursor config with a custom server URL:

```bash
node scripts/generate-client-config.mjs --client cursor --server-url "npx @notebooklm/mcp-server@latest"
```

Preview the config without writing:

```bash
node scripts/generate-client-config.mjs --client opencode --dry-run
```

## Output files and formats

### VS Code (`.vscode/mcp.json`)

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "npx",
      "args": ["-y", "@notebooklm/mcp-server"],
      "env": {}
    }
  }
}
```

### Cursor (`.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "npx",
      "args": ["-y", "@notebooklm/mcp-server"],
      "env": {}
    }
  }
}
```

### OpenCode (`opencode.jsonc`)

```jsonc
{
  "mcp": {
    "servers": {
      "notebooklm": {
        "type": "local",
        "command": ["npx", "-y", "@notebooklm/mcp-server"]
      }
    }
  }
}
```

## Validation

The generator validates the output configuration before writing using the schema in `schemas/`. If validation fails, the script prints an error and exits without writing.

## Troubleshooting

If generation fails, check that you have the correct Node.js version:

```bash
node --version  # must be 20 or later
```

See [setup-wizard.md](setup-wizard.md) for the interactive alternative, or [doctor.md](doctor.md) to diagnose connection issues.
