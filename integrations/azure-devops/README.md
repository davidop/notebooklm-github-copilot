# Azure DevOps Integration Recipes

Use these recipes to connect NotebookLM outputs directly to Azure DevOps workflows via GitHub Copilot.

## Available recipes

| Recipe | Description |
|--------|-------------|
| [Create work items from meeting notes](recipes/create-work-items-from-meeting-notes.md) | Convert customer meeting notes into Azure DevOps work items |
| [Epics, features, and user stories](recipes/epics-features-user-stories.md) | Generate a structured backlog hierarchy from requirements |
| [Generate acceptance criteria](recipes/generate-acceptance-criteria.md) | Produce grounded acceptance criteria for existing work items |
| [Sprint planning from NotebookLM](recipes/sprint-planning-from-notebooklm.md) | Use notebook sources to inform sprint planning |
| [Delivery risk review](recipes/delivery-risk-review.md) | Identify and document delivery risks from project sources |

## Prerequisites

- NotebookLM notebook with relevant project sources loaded
- GitHub Copilot (VS Code, Cursor, or OpenCode) connected via MCP
- Azure DevOps project with a configured board and area path

## Pattern overview

```
NotebookLM sources
       │
       ▼
  Copilot prompt (grounded)
       │
       ▼
  Structured output (work items, criteria, risk register)
       │
       ▼
  Azure DevOps (manual or via az devops CLI)
```

## Importing work items

After generating work items with these recipes, use the Azure DevOps CSV import or the `az boards work-item create` CLI to bulk-create items. Example:

```bash
az boards work-item create \
  --title "Implement API gateway rate limiting" \
  --type "User Story" \
  --project "MyProject" \
  --description "..."
```

## See also

- [GitHub integration recipes](../github/README.md)
