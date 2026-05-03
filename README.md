# NotebookLM GitHub Copilot Bridge

Connect GitHub Copilot with NotebookLM through Model Context Protocol to build source-grounded coding, architecture, and presales workflows directly inside VS Code.

The repo does **not** vendor or fork NotebookLM automation code. It wires GitHub Copilot to the community `notebooklm-mcp` server and adds team-safe instructions, setup scripts, validation, examples, and operational guidance.

> This is an unofficial community starter. It is not affiliated with Google, GitHub, Microsoft, or the NotebookLM product team.

## What this gives you

- Workspace-level VS Code MCP configuration in `.vscode/mcp.json`.
- GitHub Copilot repository instructions in `.github/copilot-instructions.md`.
- Reusable prompt patterns for architecture, presales, code generation, ADRs, and proposal reuse.
- Validation scripts for local developer setup.
- GitHub Actions workflow to keep the repo structure healthy.
- Security notes for using browser automation and Google accounts safely.

## Architecture

```text
GitHub Copilot Chat in VS Code
        |
        | MCP stdio
        v
notebooklm-mcp via npx
        |
        | Local browser automation + persistent Chrome profile
        v
Google NotebookLM
        |
        v
Source-grounded answers over your uploaded notebooks
```

## Prerequisites

- GitHub Copilot enabled for your user or organization.
- Visual Studio Code with GitHub Copilot Chat.
- Node.js 18 or newer.
- Chrome stable installed, or a compatible Chromium fallback.
- A Google account with access to the target NotebookLM notebooks.
- Organization policy allowing MCP servers in Copilot, if you use Copilot Business or Enterprise.

## Quick start

```bash
git clone <your-new-repo-url>
cd notebooklm-github-copilot
npm run validate
```

Open the repository in VS Code and start the MCP server from `.vscode/mcp.json` using the CodeLens **Start** action, or run:

```bash
npx notebooklm-mcp@latest
```

Then open Copilot Chat, select **Agent** mode, enable the `notebooklm` MCP tools, and ask:

```text
Use NotebookLM to list my available notebooks and confirm whether I am authenticated.
```

For first-time login, ask Copilot:

```text
Use the NotebookLM MCP server to run setup_auth. Open the browser visibly so I can log in.
```

## Recommended Copilot usage

Use NotebookLM when the answer depends on documents outside the repository:

- customer documentation
- proposal archives
- architecture decision records
- implementation guides
- meeting notes
- delivery handover documents
- product or vendor documentation loaded into a NotebookLM notebook

Do **not** use NotebookLM for secrets, credentials, private keys, personal data, or documents that are not approved for upload to Google NotebookLM.

## Repository layout

```text
.github/
  copilot-instructions.md
  instructions/
    notebooklm-research.instructions.md
    presales-architecture.instructions.md
  workflows/
    validate.yml
.vscode/
  mcp.json
  settings.json
  extensions.json
docs/
  setup.md
  usage.md
  troubleshooting.md
  operating-model.md
security/
  threat-model.md
prompts/
  architecture-review.prompt.md
  code-from-docs.prompt.md
  presales-proposal.prompt.md
  adr-generation.prompt.md
examples/
  prompts.md
scripts/
  validate.mjs
  smoke-test.mjs
package.json
```

## Important notes

- This project uses `npx notebooklm-mcp@latest` by default so the MCP server can update independently.
- Pin the package version in `.vscode/mcp.json` for controlled enterprise rollouts.
- Authentication is stored in the NotebookLM MCP Chrome profile on the developer machine, not inside this repository.
- Browser automation against NotebookLM can be fragile if Google changes the UI; keep the MCP server updated and test regularly.

## License

MIT. See `LICENSE`.
