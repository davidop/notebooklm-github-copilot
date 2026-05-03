# Templates

This folder contains reusable document templates for common outputs produced when working with GitHub Copilot (or OpenCode/Cursor) and Google NotebookLM. Templates give you a consistent structure to fill in after running a recipe or generating content from a notebook.

## Who should use this folder

| Role | Relevant templates |
|---|---|
| Architect | `adr-template.md`, `azure-architecture-review.md`, `well-architected-review.md` |
| Presales engineer | `presales-proposal-outline.md`, `rfp-analysis.md` |
| Delivery manager | `cloud-adoption-plan.md` |
| Tech lead | `adr-template.md`, `well-architected-review.md` |

## Template index

| Template | Description |
|---|---|
| [`adr-template.md`](adr-template.md) | Architecture Decision Record template with status, context, decision, and consequences sections |
| [`azure-architecture-review.md`](azure-architecture-review.md) | Azure architecture review template covering design, security, reliability, and cost |
| [`cloud-adoption-plan.md`](cloud-adoption-plan.md) | Cloud adoption plan template covering strategy, landing zone, migration, and governance |
| [`presales-proposal-outline.md`](presales-proposal-outline.md) | Presales proposal outline template with executive summary, solution, and commercial sections |
| [`rfp-analysis.md`](rfp-analysis.md) | RFP analysis template for scoring requirements, mapping capabilities, and identifying gaps |
| [`well-architected-review.md`](well-architected-review.md) | Azure Well-Architected Framework review template across the five pillars |

## How templates integrate with NotebookLM recipes

Templates are the second half of a two-step workflow:

1. **Generate** — Use a [recipe](../recipes/) to query NotebookLM and generate a draft in your AI coding assistant.
2. **Structure** — Copy the generated content into the matching template to produce a consistently formatted, reviewable document.

For example, the [`generate-adr.md`](../recipes/generate-adr.md) recipe produces raw ADR content; paste it into [`adr-template.md`](adr-template.md) to get a properly structured record.

Similarly, the [`review-rfp.md`](../recipes/review-rfp.md) recipe guides you through the analysis, and [`rfp-analysis.md`](rfp-analysis.md) provides the output structure.

## Adapting templates

All templates use `<!-- comment -->` placeholders and `<angle-bracket>` variables to mark sections you need to fill in. Remove placeholder comments before sharing the final document. Do not include confidential customer data, credentials, or personally identifiable information in documents committed to this repository.
