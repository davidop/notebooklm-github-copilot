# Dev Container

This dev container provides a Node.js 20 environment with GitHub Copilot, GitHub Copilot Chat, and supporting VS Code extensions pre-installed.

## Important: NotebookLM authentication

**NotebookLM browser authentication does not work inside GitHub Codespaces or Docker containers.**

The `notebooklm-mcp` server uses local Chrome browser automation to authenticate with Google NotebookLM. This requires:

1. A visible Chrome browser window — not available in headless container environments.
2. A persistent Chrome profile stored on the local machine.

**Recommended:** Authenticate and run the MCP server from a local VS Code environment (not Codespaces). You can use this dev container for editing, validation, and recipe development without a live NotebookLM connection.

## What works in Codespaces

- Editing configuration files, prompts, recipes, and templates
- Running `npm run validate` to check repository structure
- Developing and testing new recipes and documentation
- All repository tooling except live NotebookLM queries

## What requires a local environment

- `npm run mcp:notebooklm` (browser authentication)
- `npm run smoke:test` (requires live NotebookLM connection)
