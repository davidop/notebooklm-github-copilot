# Dev Container guide

This repository includes a dev container configuration that provides a ready-to-use development environment for editing, validating, and extending the NotebookLM + MCP toolkit.

---

## Local VS Code Dev Containers

### Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop) running locally
- [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Opening the container

1. Clone the repository.
2. Open the folder in VS Code.
3. When prompted, click **Reopen in Container** — or open the Command Palette and run **Dev Containers: Reopen in Container**.
4. VS Code builds and starts the container. Pre-configured extensions are installed automatically.

### What is pre-installed

| Tool / Extension | Purpose |
|---|---|
| Node.js 20 | Runtime for `notebooklm-mcp` and validation scripts |
| GitHub CLI (`gh`) | Repository and workflow operations |
| GitHub Copilot | AI assistant |
| GitHub Copilot Chat | Chat interface for Copilot |
| GitHub Actions | Workflow file support |
| Markdown All in One | Editing recipes and documentation |
| YAML | Editing workflow and config files |
| JSON | Editing MCP and package configuration files |

The `postCreateCommand` runs `npm install` to install project dependencies automatically.

---

## GitHub Codespaces

You can open this repository in Codespaces for editing documentation, recipes, prompts, and configuration files. All repository tooling (validation scripts, CI) works in Codespaces.

### What works in Codespaces

- Editing configuration files, prompts, recipes, and templates
- Running `npm run validate` to check repository structure
- Developing and testing new recipes and documentation
- All repository tooling except live NotebookLM queries

### What does NOT work in Codespaces

| Feature | Reason |
|---|---|
| NotebookLM browser authentication | Requires a visible Chrome browser window |
| `npm run mcp:notebooklm` | Browser automation not supported in headless containers |
| `npm run smoke:test` | Requires a live NotebookLM session |

### Codespaces recommendation

Use Codespaces for **content and documentation work**. Use a local VS Code environment for any workflow that requires the live NotebookLM MCP connection.

---

## Browser automation caveats

`notebooklm-mcp` uses local Chrome browser automation to authenticate with Google NotebookLM. This has the following implications for container environments:

- **Visible browser required** — Authentication requires a real, visible Chrome window. Headless or virtual display environments are not reliably supported.
- **Chrome profile is local** — The authentication state is stored in a Chrome profile on your local machine. It is not available inside a container or Codespace.
- **Authentication is per-developer** — There is no shared service account for NotebookLM. Each developer authenticates with their own Google account.

**Recommended workflow:**

1. Authenticate once from your local VS Code environment (not a container).
2. Use the dev container or Codespaces for editing and validation.
3. Run live NotebookLM queries from local VS Code.

---

## Troubleshooting

### Container does not start

- Confirm Docker Desktop is running.
- Check that the Dev Containers extension is installed in VS Code.
- Run **Dev Containers: Rebuild Container** from the Command Palette to force a clean rebuild.

### `npm install` fails on container start

- Check your internet connection.
- Run `npm install` manually in the container terminal.
- If behind a corporate proxy, configure `npm` with the proxy settings before running `npm install`.

### VS Code extensions not installed

- Run **Developer: Reinstall Extension** from the Command Palette for the missing extension.
- Alternatively, run **Dev Containers: Rebuild Container** to trigger a full rebuild.

### GitHub CLI not authenticated

- Run `gh auth login` inside the container terminal.
- For Codespaces, GitHub CLI is pre-authenticated. For local containers, run `gh auth login` after the container starts.

### NotebookLM MCP server fails to start

- This is expected inside containers. Run the MCP server from your local VS Code environment.
- See [docs/troubleshooting.md](troubleshooting.md) for local environment troubleshooting.

### `npm run validate` fails

- Check that all required files listed in `scripts/validate.mjs` are present.
- Run `npm run validate` manually and review the output for missing files.
