# Prompt Packs

This folder contains copy-paste-ready prompt collections organised by use case and team. Each prompt pack is a curated set of prompts designed to get the best results from GitHub Copilot, OpenCode, or Cursor when connected to Google NotebookLM via MCP.

## Who should use this folder

Any developer or team member using GitHub Copilot, OpenCode, or Cursor with NotebookLM. Prompt packs are particularly useful for:

- **Teams onboarding** to NotebookLM-backed workflows
- **Individuals** who want proven, reusable starting points rather than writing prompts from scratch
- **Leads and coaches** who want to standardise prompting patterns across a team

## Recommended starting point

Browse the [`team/`](team/) subfolder and pick the pack closest to your role. Each file is self-contained — you can read it, copy the prompts you need, and adapt them to your context.

## Team prompt packs

| Pack | Description |
|---|---|
| [`team/cloud-architecture.md`](team/cloud-architecture.md) | Prompts for cloud architects designing Azure solutions |
| [`team/delivery-management.md`](team/delivery-management.md) | Prompts for delivery managers turning docs into plans and backlogs |
| [`team/developer-enablement.md`](team/developer-enablement.md) | Prompts for developers generating and reviewing code from specs |
| [`team/platform-engineering.md`](team/platform-engineering.md) | Prompts for platform engineers working with IaC and pipelines |
| [`team/presales.md`](team/presales.md) | Prompts for presales engineers comparing proposals and reviewing RFPs |
| [`team/security.md`](team/security.md) | Prompts for security teams reviewing architecture and configurations |

## Standalone prompts

The [`../prompts/`](../prompts/) folder contains individual, focused prompt files for specific tasks:

| Prompt | Description |
|---|---|
| [`../prompts/adr-generation.prompt.md`](../prompts/adr-generation.prompt.md) | Prompts for generating Architecture Decision Records |
| [`../prompts/architecture-review.prompt.md`](../prompts/architecture-review.prompt.md) | Prompts for reviewing architecture against documented requirements |
| [`../prompts/code-from-docs.prompt.md`](../prompts/code-from-docs.prompt.md) | Prompts for generating code grounded in specification documents |
| [`../prompts/presales-proposal.prompt.md`](../prompts/presales-proposal.prompt.md) | Prompts for building and comparing presales proposals |

## Prompt format

Each prompt is written as a complete, self-contained instruction. Placeholders are shown in `<angle-brackets>`. Adapt them by replacing the placeholders with your notebook name, project name, or specific question.

## Contributing a new prompt pack

To add a new team pack, open an issue using the [Prompt Pack Request](.github/ISSUE_TEMPLATE/prompt_pack_request.yml) template, or submit a PR adding a new file to `team/`. Follow the existing file structure: brief intro, then a numbered or headed list of prompts with a one-line description of each.
