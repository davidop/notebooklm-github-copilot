# Setup guide

## 1. Install prerequisites

Install:

- Visual Studio Code
- GitHub Copilot and GitHub Copilot Chat extensions
- Node.js 18+
- Chrome stable

For enterprise environments, confirm that MCP servers are allowed by your GitHub Copilot organization or enterprise policy.

## 2. Open the repository in VS Code

The workspace MCP configuration is stored in:

```text
.vscode/mcp.json
```

The default server entry is:

```json
{
  "servers": {
    "notebooklm": {
      "command": "npx",
      "args": ["notebooklm-mcp@latest"],
      "env": {
        "NOTEBOOKLM_ACCOUNT": "work"
      }
    }
  }
}
```

## 3. Start the MCP server

Open `.vscode/mcp.json`. VS Code should show a CodeLens action to start the configured server.

Alternatively run:

```bash
npm run mcp:notebooklm
```

## 4. Authenticate NotebookLM

In Copilot Chat, select Agent mode and ask:

```text
Use the NotebookLM MCP server to run setup_auth. Open the browser visibly so I can log in.
```

Complete the Google login in the browser window. The MCP server stores authentication in a local browser profile managed by `notebooklm-mcp`.

## 5. Verify the tools

Ask Copilot:

```text
What NotebookLM MCP tools are available? List them and explain when to use each one.
```

Then test a grounded query:

```text
Use NotebookLM to list my notebooks. Then ask the most relevant notebook: what source-backed requirements are available for this project?
```

## 6. Optional: pin the MCP server version

For controlled enterprise rollout, replace:

```json
"notebooklm-mcp@latest"
```

with a tested version, for example:

```json
"notebooklm-mcp@2.0.0"
```

Commit that change once validated by the team.
