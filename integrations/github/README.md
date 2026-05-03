# GitHub Integration Recipes

Use these recipes to connect NotebookLM outputs directly to GitHub workflows via GitHub Copilot.

## Available recipes

| Recipe | Description |
|--------|-------------|
| [Create issues from NotebookLM](recipes/create-issues-from-notebooklm.md) | Turn NotebookLM outputs into well-structured GitHub Issues |
| [Triage issues with NotebookLM](recipes/triage-issues-with-notebooklm.md) | Use NotebookLM context to prioritise and label existing issues |
| [Generate PR description](recipes/generate-pr-description.md) | Draft pull request descriptions grounded in architecture docs |
| [Generate release notes](recipes/generate-release-notes.md) | Produce release notes aligned with ADRs and changelogs |
| [ADR to GitHub Issues](recipes/adr-to-github-issues.md) | Convert Architecture Decision Records into actionable GitHub Issues |

## Prerequisites

- NotebookLM notebook with relevant project sources loaded
- GitHub Copilot (VS Code, Cursor, or OpenCode) connected via MCP
- A GitHub repository with Issues enabled

## Pattern overview

```
NotebookLM sources
       │
       ▼
  Copilot prompt (grounded)
       │
       ▼
  Structured output
       │
       ▼
  GitHub Issue / PR / Release
```

## See also

- [Azure DevOps integration recipes](../azure-devops/README.md)
