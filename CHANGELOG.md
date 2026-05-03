# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.2.0] — Multi-client MCP toolkit

### Added

- **OpenCode support** — `clients/opencode/` with `opencode.jsonc` configuration and agent instruction files for researcher, architect, and presales workflows.
- **Cursor support** — `clients/cursor/` with `mcp.json` configuration and Cursor Rules for source-grounded research, code generation, and architecture review.
- **VS Code client reference** — `clients/vscode/` with reference `mcp.json`, `copilot-instructions.example.md`, and an explanation of VS Code MCP discovery and Copilot instruction loading.
- **Multi-client documentation** — `docs/mcp-clients.md` comparing GitHub Copilot, OpenCode, Cursor, and generic MCP clients with a Mermaid architecture diagram.
- **Dev Container documentation** — `docs/devcontainer.md` covering local VS Code Dev Containers usage, Codespaces caveats, browser automation limitations, and troubleshooting.
- **Dev Container improvements** — Added GitHub CLI feature and JSON VS Code extension to `.devcontainer/devcontainer.json`.

---

## [0.1.0] — Initial release

### Added

- **VS Code MCP configuration** — `.vscode/mcp.json` wiring GitHub Copilot to `notebooklm-mcp` via MCP stdio transport.
- **GitHub Copilot repository instructions** — `.github/copilot-instructions.md` and `.github/instructions/` teaching Copilot when and how to use NotebookLM tools.
- **Source-grounded research workflow** — Instruction files guiding Copilot to query NotebookLM before making architecture, presales, or implementation decisions.
- **Architecture and presales prompt recipes** — Pre-built prompts for ADR generation, architecture review, presales proposals, and code generation from vendor docs.
- **Validation scripts** — `scripts/validate.mjs` and `scripts/smoke-test.mjs` for local developer setup verification.
- **GitHub Actions CI workflow** — `.github/workflows/validate.yml` keeping the repository structure healthy.
- **Security documentation** — `security/threat-model.md`, `SECURITY.md`, and enterprise data handling guidance.
- **Enterprise rollout guide** — `docs/enterprise-rollout.md` with deployment checklist.
- **Community files** — `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SUPPORT.md`, `ROADMAP.md`.
- **Recipes** — Step-by-step workflow guides for ADRs, Azure architecture, proposals, RFPs, Bicep, Terraform, and meeting notes.
- **Templates** — Reusable document templates for ADRs, Azure architecture reviews, presales proposals, RFP analysis, cloud adoption plans, and Well-Architected reviews.
- **Worked examples** — Example prompts and expected outputs for common scenarios.
- **Dev container** — `.devcontainer/devcontainer.json` for Codespaces and local container development.
- **Spanish README** — `README.es.md` for Spanish-speaking technical audiences.
