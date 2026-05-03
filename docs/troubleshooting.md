# Troubleshooting

## MCP server does not appear in Copilot

- Confirm `.vscode/mcp.json` exists at repository root.
- Confirm the top-level key is `servers` for VS Code.
- Restart VS Code.
- Open Command Palette and run `MCP: List Servers`.
- Confirm Copilot Chat is in Agent mode.
- Confirm your organization allows MCP servers in Copilot.

## `npx notebooklm-mcp@latest` fails

- Check Node.js version: `node --version`.
- Use Node.js 18 or newer.
- Check corporate proxy settings.
- Try `npm view notebooklm-mcp version`.
- Pin a known-good version if `latest` breaks.

## Authentication fails

- Ask the MCP server to run `setup_auth` with a visible browser.
- If switching Google accounts, use the MCP server's re-auth or cleanup flow.
- Confirm Chrome can launch on your machine.
- In WSL, use WSL2 with GUI support.

## Copilot does not call NotebookLM

Be explicit:

```text
Use the notebooklm MCP server. Do not answer from memory. Query the notebook and cite the sources.
```

## Results are stale or incomplete

- Confirm the right NotebookLM notebook was selected.
- Confirm sources are uploaded and processed in NotebookLM.
- Ask NotebookLM for source coverage and missing documents.
- Avoid broad questions; split them by domain.
