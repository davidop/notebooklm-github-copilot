# Doctor Command

The doctor command (`scripts/doctor.mjs`) diagnoses common configuration and connectivity issues with the NotebookLM MCP setup.

## Usage

```bash
npm run doctor
```

Or run the script directly:

```bash
node scripts/doctor.mjs
```

## What it checks

The doctor command runs the following checks in sequence:

| Check | Description | Pass condition |
|-------|-------------|----------------|
| Node.js version | Verifies Node.js 20+ is installed | `node --version` returns 20.x or higher |
| MCP config exists | Checks that an MCP config file exists for at least one client | `.vscode/mcp.json`, `.cursor/mcp.json`, or `opencode.jsonc` present |
| MCP config is valid JSON | Parses the config file | No JSON parse errors |
| MCP server command | Verifies the server command is resolvable | `npx` is available or custom command is found |
| MCP server connection | Attempts a lightweight ping to the MCP server | Server responds within the timeout |
| Notebook reachability | Checks that NotebookLM is accessible from the current network | HTTP 200 from NotebookLM endpoint |
| Schema files | Verifies schema files in `schemas/` are valid JSON | All `.schema.json` files parse successfully |

## Example output

```
NotebookLM + GitHub Copilot — Doctor
--------------------------------------
✓ Node.js version: 20.11.0
✓ MCP config found: .vscode/mcp.json
✓ MCP config is valid JSON
✓ MCP server command: npx -y @notebooklm/mcp-server
✓ MCP server connection: reachable (142 ms)
✓ NotebookLM reachable
✓ Schema files: 5 valid

All checks passed.
```

## Interpreting failures

### MCP config not found

```
✖ MCP config not found
  Run: npm run setup
```

Run the setup wizard to create the configuration.

### MCP server connection failed

```
✖ MCP server connection: failed (timeout after 5000 ms)
  Check that the MCP server is running and the URL in your config is correct.
```

Possible causes:
- The MCP server process is not running
- A firewall or proxy is blocking the connection
- The `command` in the config file is incorrect

### NotebookLM not reachable

```
✖ NotebookLM not reachable
  Check your internet connection and whether NotebookLM requires VPN access.
```

Check your network connection and any VPN or proxy requirements.

## Options

| Flag | Description |
|------|-------------|
| `--verbose` | Print additional debug information for each check |
| `--fix` | Attempt to auto-fix simple issues (e.g. missing config) |
| `--json` | Output results as JSON for CI use |

## Using in CI

```bash
node scripts/doctor.mjs --json
```

Returns exit code 0 on all-pass, exit code 1 if any check fails.
