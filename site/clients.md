# Client Configuration

Configure your MCP-compatible AI coding client to connect to the NotebookLM MCP server.

## Supported clients

| Client | Status | Config file |
|--------|--------|-------------|
| VS Code + GitHub Copilot | Fully supported | `.vscode/mcp.json` |
| Cursor | Fully supported | `.cursor/mcp.json` |
| OpenCode | Fully supported | `opencode.jsonc` |
| Generic MCP client | Community support | Varies |

## VS Code

See the full configuration guide in [clients/vscode/README.md](../clients/vscode/README.md).

Quick start:

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

## Cursor

See the full configuration guide in [clients/cursor/README.md](../clients/cursor/README.md).

## OpenCode

See the full configuration guide in [clients/opencode/README.md](../clients/opencode/README.md). OpenCode also supports agent presets for architect, presales, and researcher roles.

## Generate a config automatically

Use the client config generator to produce a validated configuration file:

```bash
npm run generate-config -- --client vscode
```

For full documentation, see [docs/client-config-generator.md](../docs/client-config-generator.md).

## Troubleshooting

Run the doctor command if your client cannot connect:

```bash
npm run doctor
```

See [docs/troubleshooting.md](../docs/troubleshooting.md) for common issues and fixes.

## Full configuration matrix

For a detailed comparison of all client options, see [docs/client-configuration-matrix.md](../docs/client-configuration-matrix.md).

Also see the full MCP clients reference: [docs/mcp-clients.md](../docs/mcp-clients.md).
