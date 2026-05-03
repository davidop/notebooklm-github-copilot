# FAQ

## Is this a replacement for Claude Code skills?

It is not a direct port of Claude skills. It uses MCP so GitHub Copilot can call NotebookLM through a standard tool interface.

## Does this require Claude Code?

No. The default path is GitHub Copilot Chat in VS Code plus a local MCP server.

## Does this require a paid NotebookLM subscription?

This repository does not enforce a NotebookLM plan. Your actual capabilities depend on the Google account and NotebookLM service limits available to you.

## Where is authentication stored?

Authentication is managed by `notebooklm-mcp` in a local browser profile on the developer machine. It is not stored in this repository.

## Can this run in CI?

The repository validation workflow can run in CI. Interactive NotebookLM browser authentication is intended for local developer machines, not standard CI.

## Can I use HTTP instead of stdio?

Yes. The package supports HTTP mode. This starter defaults to stdio because it is the simplest fit for VS Code MCP.
