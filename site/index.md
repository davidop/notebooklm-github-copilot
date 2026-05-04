# NotebookLM + GitHub Copilot

Source-grounded AI engineering with NotebookLM, GitHub Copilot, and the Model Context Protocol (MCP).

## What is this?

This project connects **NotebookLM** (Google's source-grounded AI notebook) to **GitHub Copilot** via the **Model Context Protocol (MCP)**. Instead of asking Copilot to guess at architecture decisions, requirements, or proposals, you load your actual project documents into NotebookLM and ask Copilot questions that are answered from those sources — with citations.

## Quick navigation

- [Getting started](getting-started.md) — Install, configure, and run your first query in under 10 minutes
- [Client configuration](clients.md) — Configure VS Code, Cursor, or OpenCode
- [Recipes](recipes.md) — Ready-to-use workflows for common engineering tasks
- [Security](security.md) — Data handling, browser isolation, and enterprise hardening
- [Governance](governance.md) — Policies, operating model, and compliance guidance
- [Evaluations](evaluations.md) — How to evaluate output quality and measure improvement
- [Demo](demo.md) — Scripts, sample outputs, and recording checklists
- [FAQ](faq.md) — Common questions answered

## Why source grounding matters

Without source grounding, AI assistants invent plausible-sounding but incorrect answers about your specific project. With NotebookLM as the source store, every Copilot response is traceable to a document you uploaded. If the source doesn't support a claim, Copilot says so.

## Key features

- Works with VS Code, Cursor, and OpenCode
- Source citations in every output
- Integration recipes for GitHub Issues and Azure DevOps
- JSON Schema validation for structured outputs
- Enterprise security and governance guidance
- Setup wizard for first-time configuration

## Get started now

```bash
git clone https://github.com/davidop/notebooklm-github-copilot
cd notebooklm-github-copilot
npm run setup
```
