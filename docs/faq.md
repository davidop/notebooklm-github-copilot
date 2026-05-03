# FAQ

## Is this an official NotebookLM or GitHub project?

No. This is an unofficial community project. It is not affiliated with, endorsed by, or supported by Google (NotebookLM), GitHub, Microsoft, or OpenAI. See the disclaimer in the [README](../README.md).

## Does this replace Claude Code?

No. This project provides a similar capability (document-grounded AI assistance) for GitHub Copilot users, using NotebookLM as the document intelligence layer and MCP as the integration protocol. It does not replace Claude Code for Claude users, and it is not a port of Claude Code Skills.

## Does this work with GitHub Copilot Business or Enterprise?

Yes, with a caveat. GitHub Copilot Business and Enterprise require your organization to explicitly allow MCP servers in the Copilot policy settings. Check with your GitHub organization administrator to confirm MCP is permitted before deploying.

## Where is authentication stored?

Authentication is managed by the `notebooklm-mcp` package in a local Chrome browser profile on the developer's machine. It is not stored in this repository, and it is not committed to version control. The `.gitignore` excludes common local credential directories.

## Can I use it with customer documents?

Only if your organization's data classification policy permits uploading those documents to Google NotebookLM. Never upload documents containing secrets, credentials, personal data (PII/PHI), or confidential information covered by NDA unless Google's terms and your internal policy allow it. See [SECURITY.md](../SECURITY.md) for full guidance.

## Can I use it in Codespaces?

Partially. You can use Codespaces for editing configuration, recipes, templates, and documentation. However, interactive NotebookLM browser authentication requires a visible Chrome browser, which is not available in headless container environments (Codespaces or Docker). Run the MCP server from a local VS Code environment for live NotebookLM queries. See [.devcontainer/README.md](../.devcontainer/README.md) for details.

## What happens if NotebookLM changes its UI?

The `notebooklm-mcp` server uses browser automation against the NotebookLM UI. If Google changes the UI, the MCP server may stop working until the `notebooklm-mcp` package is updated. To mitigate this: keep the MCP server updated, pin a known-good version for enterprise rollouts, and monitor the `notebooklm-mcp` package changelog.

## Can I use OpenCode or Cursor too?

The MCP protocol is editor-agnostic. Any editor or AI assistant that supports MCP as a client can connect to `notebooklm-mcp`. Support for OpenCode and Cursor configurations is planned for v0.2 of this project. See [ROADMAP.md](../ROADMAP.md).

## Is this a replacement for Claude Code skills?

It is a functional alternative for GitHub Copilot users, not a port of Claude skills. It uses MCP so GitHub Copilot can call NotebookLM through a standard tool interface, providing similar source-grounded assistance within VS Code.

## Does this require a paid NotebookLM subscription?

This repository does not enforce a NotebookLM plan. Your actual capabilities depend on the Google account and NotebookLM service limits available to you.

## Can this run in CI?

The repository validation workflow (`npm run validate`) can run in CI. Interactive NotebookLM browser authentication is intended for local developer machines, not CI pipelines.

## Can I use HTTP instead of stdio?

Yes. The `notebooklm-mcp` package supports HTTP transport mode. This starter defaults to stdio because it is the simplest configuration for VS Code MCP. Run `npm run mcp:notebooklm:http` to start in HTTP mode on port 3000.
