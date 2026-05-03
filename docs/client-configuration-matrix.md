# Client Configuration Matrix

Comparison of MCP client configuration options for NotebookLM + GitHub Copilot.

## Matrix

| Client | Config file | Transport | Command | Example path | Best for | Limitations |
|--------|-------------|-----------|---------|--------------|----------|-------------|
| VS Code + Copilot | `.vscode/mcp.json` | stdio | `npx -y @notebooklm/mcp-server` | `.vscode/mcp.json` | Individual developers; GitHub Copilot users | Requires Copilot extension v1.200+ |
| Cursor | `.cursor/mcp.json` | stdio | `npx -y @notebooklm/mcp-server` | `.cursor/mcp.json` | Developers using Cursor AI | May require Cursor Pro for full MCP support |
| OpenCode | `opencode.jsonc` | stdio | `npx -y @notebooklm/mcp-server` | `opencode.jsonc` | Power users; agent presets; CLI workflows | Requires OpenCode 0.3+ |
| Generic MCP | Varies | stdio or SSE | Varies | Varies | Custom integrations | No official support; community only |

## VS Code

Full guide: [clients/vscode/README.md](../clients/vscode/README.md)

**Minimum config:**

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "npx",
      "args": ["-y", "@notebooklm/mcp-server"]
    }
  }
}
```

**Location:** `.vscode/mcp.json` in the project root (workspace-scoped) or `~/.vscode/mcp.json` (user-scoped).

**Notes:**
- Workspace-scoped config applies only to the current project.
- User-scoped config applies to all projects and is not checked into source control.
- Reload VS Code after changing the config (`Ctrl+Shift+P` → "Developer: Reload Window").

## Cursor

Full guide: [clients/cursor/README.md](../clients/cursor/README.md)

**Minimum config:**

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "npx",
      "args": ["-y", "@notebooklm/mcp-server"]
    }
  }
}
```

**Location:** `.cursor/mcp.json` in the project root.

**Notes:**
- Cursor uses the same JSON format as VS Code for MCP server configuration.
- Restart Cursor after changing the config.

## OpenCode

Full guide: [clients/opencode/README.md](../clients/opencode/README.md)

**Minimum config:**

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

**Location:** `opencode.jsonc` in the project root.

**Notes:**
- OpenCode supports agent presets (architect, presales, researcher) — see the `clients/opencode/` folder.
- The `type: "local"` field is required for stdio transport in OpenCode.

## Generic MCP client

For any other MCP-compatible client:

1. Use `stdio` transport if the client supports it.
2. Set the command to `npx -y @notebooklm/mcp-server` (or the equivalent for your environment).
3. Refer to your client's documentation for the exact config format.

## Generating a config automatically

Use the client config generator to produce a validated config for your client:

```bash
npm run generate-config -- --client vscode
```

See [client-config-generator.md](client-config-generator.md) for full documentation.
