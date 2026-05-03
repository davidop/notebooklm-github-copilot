# Recipes

This folder contains step-by-step workflow guides for common engineering tasks using GitHub Copilot (or OpenCode/Cursor) connected to Google NotebookLM via MCP. Each recipe walks you through a repeatable process: which notebook to query, what prompts to use, how to validate the output, and how to structure the result.

## Who should use this folder

| Role | Starting point |
|---|---|
| Developer (new to the project) | [`generate-adr.md`](generate-adr.md) |
| Architect | [`generate-azure-architecture.md`](generate-azure-architecture.md) |
| Presales engineer | [`compare-proposals.md`](compare-proposals.md) |
| Delivery manager | [`create-backlog-from-meeting.md`](create-backlog-from-meeting.md) |
| Anyone validating claims | [`source-triangulation.md`](source-triangulation.md) |

## Recommended starting points

- **New users**: Start with [`generate-adr.md`](generate-adr.md). It demonstrates the core NotebookLM query-and-generate loop in a short, self-contained workflow.
- **Presales engineers**: Start with [`compare-proposals.md`](compare-proposals.md). It shows how to ground proposal comparisons in prior delivery documents.

## Recipe index

| Recipe | Description |
|---|---|
| [`generate-adr.md`](generate-adr.md) | Create Architecture Decision Records grounded in prior decisions stored in NotebookLM |
| [`generate-azure-architecture.md`](generate-azure-architecture.md) | Generate Azure architecture designs from customer requirements and constraints in NotebookLM |
| [`compare-proposals.md`](compare-proposals.md) | Compare two proposals against a set of requirements retrieved from NotebookLM |
| [`create-backlog-from-meeting.md`](create-backlog-from-meeting.md) | Turn meeting notes stored in NotebookLM into a structured sprint backlog |
| [`generate-bicep-from-docs.md`](generate-bicep-from-docs.md) | Generate Azure Bicep templates grounded in architecture specs and naming conventions |
| [`generate-terraform-from-docs.md`](generate-terraform-from-docs.md) | Generate Terraform modules from design documents and compliance requirements |
| [`review-rfp.md`](review-rfp.md) | Analyse a Request for Proposal against your capability library stored in NotebookLM |
| [`multi-notebook-research.md`](multi-notebook-research.md) | Cross-notebook research workflow for synthesising information across multiple projects |
| [`source-triangulation.md`](source-triangulation.md) | Verify and cross-check claims across multiple sources in one or more notebooks |
| [`compare-notebook-answers.md`](compare-notebook-answers.md) | Compare answers to the same question from different notebooks to surface inconsistencies |
| [`conflict-resolution-between-sources.md`](conflict-resolution-between-sources.md) | Identify and resolve conflicts between sources within or across notebooks |

## Recipe structure

Every recipe in this folder follows the same structure so you can scan quickly and get started:

- **Goal** — what the recipe produces and when to use it
- **Prerequisites** — notebooks, sources, and tools required
- **Sources** — recommended source types to load into your notebook
- **Steps** — numbered, copy-paste-ready workflow
- **Example prompts** — verbatim prompts to use with GitHub Copilot / OpenCode / Cursor
- **Expected output** — what a good result looks like
- **Quality checks** — how to verify the output is grounded and accurate

If a recipe refers to a template, you will find it in [`../templates/`](../templates/).
