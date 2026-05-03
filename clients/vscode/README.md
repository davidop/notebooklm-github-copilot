# VS Code + GitHub Copilot + NotebookLM MCP

Use NotebookLM as a grounded knowledge layer from GitHub Copilot in VS Code via the Model Context Protocol.

> **Unofficial community project.** Not affiliated with Google, GitHub, or Microsoft.

---

## Overview

This folder contains the VS Code–specific MCP configuration and a reference Copilot instructions file. The **primary configuration** for this repository remains at the root:

- `.vscode/mcp.json` — active workspace MCP configuration
- `.github/copilot-instructions.md` — active Copilot agent instructions

The files in this folder are **reference copies** and examples for teams that want to understand or adapt the configuration.

---

## How VS Code discovers MCP servers

VS Code looks for MCP server definitions in the following locations, in order:

| Location | Scope | When to use |
|---|---|---|
| `.vscode/mcp.json` | Workspace | Shared team config; committed to the repository |
| `~/.vscode/mcp.json` (user settings) | User | Private config applying to all workspaces |
| VS Code **User Settings** (`settings.json`) | User | Alternative to the JSON file; uses the `mcp.servers` key |

For most teams, `.vscode/mcp.json` committed to the repository is the recommended approach. It ensures all developers use the same server configuration without additional setup.

---

## How GitHub Copilot uses MCP tools

When Copilot Chat is in **Agent mode**, it can call tools exposed by MCP servers. The NotebookLM MCP server exposes tools such as:

- `list_notebooks` — list available notebooks
- `query_notebook` — query a notebook with a natural language question
- `setup_auth` — trigger browser authentication

Copilot automatically discovers these tools from the running MCP server. Repository instructions in `.github/copilot-instructions.md` guide Copilot on *when* to use them.

---

## Workspace-level config vs user-level config

**Use workspace-level (`.vscode/mcp.json`)** when:

- You want all developers on the project to share the same MCP server configuration.
- The configuration is safe to commit (no secrets, just command and args).
- You want CI or onboarding scripts to validate the config is present.

**Use user-level config** when:

- You want to apply the configuration across all your projects without committing it.
- You are using personal credentials or account-specific environment variables that should not be shared.

The `NOTEBOOKLM_ACCOUNT` environment variable in the config selects which Chrome profile `notebooklm-mcp` uses. Set it to `"work"` or `"personal"` depending on which Google account holds your notebooks.

---

## How repository instructions guide Copilot

Files in `.github/copilot-instructions.md` and `.github/instructions/` are loaded by GitHub Copilot as persistent context. They instruct Copilot to:

1. Query NotebookLM before making architecture or implementation decisions.
2. Cite sources when returning answers grounded in notebook content.
3. Refuse to forward secrets or sensitive data to NotebookLM.

You can add project-specific instructions by creating additional files in `.github/instructions/` with `applyTo` patterns targeting specific file types.

---

## Setup

See [docs/setup.md](../../docs/setup.md) for the full setup walkthrough.

Quick steps:

1. Open the repo in VS Code.
2. Open `.vscode/mcp.json` — click the **Start** CodeLens to launch the server.
3. Open Copilot Chat → select **Agent** mode → enable `notebooklm` tools.
4. Authenticate:
   ```
   Use the NotebookLM MCP server to run setup_auth. Open the browser visibly so I can log in.
   ```
5. Verify:
   ```
   Use NotebookLM to list my notebooks.
   ```

---

## Files in this folder

| File | Description |
|---|---|
| `mcp.json` | Reference MCP server configuration for VS Code |
| `copilot-instructions.example.md` | Example Copilot instructions showing the research and security policies |
| `README.md` | This file |
