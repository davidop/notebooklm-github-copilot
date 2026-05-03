# Sample Demo Prompts

Ready-to-paste prompts for the demo scenarios. Copy and paste these directly into GitHub Copilot chat during a live demo.

> **Before using:** Ensure the MCP server is connected and the `demo-notebook` notebook is loaded in NotebookLM.

## ADR generation

```
Use NotebookLM. In the demo-notebook, generate an Architecture Decision Record for API gateway selection.
Include: title, status, context, decision, rationale, consequences.
Cite all sources. Format as Markdown with standard ADR sections.
```

## Backlog hierarchy

```
Use NotebookLM. In the demo-notebook, generate a backlog hierarchy with:
- 2 Epics grounded in the project brief
- 2 Features per Epic grounded in the architecture principles
- 3 User Stories per Feature in "As a / I want / so that" format
- Acceptance criteria (checkbox list, ≥ 3 items) for each User Story

Cite the source document for every Epic and Feature. Flag any story where acceptance criteria cannot be derived from sources.
```

## GitHub Issues from requirements

```
Use NotebookLM. In the demo-notebook, extract the top 5 implementation requirements and format each as a GitHub Issue with:
- Title (imperative, ≤ 72 chars)
- Body: ## Background, ## Acceptance criteria (checkbox list), ## Source references
- Suggested labels: enhancement, security, architecture
Cite sources. Flag any item that lacks clear source support.
```

## Presales executive summary

```
Use NotebookLM. In the demo-notebook, draft an executive summary for a presales proposal.
Include: engagement overview (2 sentences), key constraints (bullet list), proposed approach (3 sentences), risk summary (2 risks).
Cite all sources. Maximum 400 words. No invented figures or statistics.
```

## Delivery risk review

```
Use NotebookLM. In the demo-notebook, identify the top 5 delivery risks for the programme.
For each risk:
- Title (≤ 10 words)
- Description
- Likelihood: High / Medium / Low with rationale
- Impact: High / Medium / Low with rationale
- Mitigation steps (bullet list)
- Source citation
Flag compliance and security risks separately.
```

## Architecture review

```
Use NotebookLM. In the demo-notebook, perform an architecture review of the proposed solution.
Cover: fitness for purpose, security posture, scalability concerns, compliance gaps, and open questions.
Cite each finding to a specific source. Use section headings. Flag any area where sources are insufficient to form a view.
```

## Sprint planning recommendations

```
Use NotebookLM. In the demo-notebook, recommend which of the following backlog items to include in a 40-point sprint, with rationale grounded in the architecture and security sources:

[PASTE 6–8 BACKLOG ITEM TITLES WITH ESTIMATES HERE]

For each item: recommend include / defer / block with source-backed rationale.
Identify dependencies between items. Flag any compliance-gated items.
```

## Quick single-question prompt

```
Use NotebookLM. In the demo-notebook, answer with citations: What are the top 3 non-negotiable security requirements for this project? Return only source-backed constraints.
```
