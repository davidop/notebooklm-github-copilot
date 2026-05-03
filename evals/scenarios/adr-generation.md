# Evaluation Scenario: ADR Generation

**Scenario for evaluating Architecture Decision Records generated using NotebookLM + Copilot.**

---

## Overview

This scenario tests the quality of ADRs generated when a developer asks Copilot to draft an architecture decision, using NotebookLM notebooks containing prior ADRs and architecture standards as grounding sources.

**Primary rubric:** [Architecture Answer Evaluation](../architecture-answer-evaluation.md)
**Supporting rubric:** [Source Grounding Scorecard](../source-grounding-scorecard.md)

---

## Generic source setup

Configure notebooks with the following source types. Use your organization's equivalent documents — no real customer data should be used.

| Notebook | Source types to include |
|----------|------------------------|
| **Prior ADRs notebook** | 5–10 previously accepted ADRs in your standard format, covering different decision categories (data storage, messaging, authentication, deployment) |
| **Architecture standards notebook** | Your organization's architecture principles, reference patterns, technology radar or approved technology list |
| **NFR and constraints notebook** | Non-functional requirements template, scalability and availability targets, compliance constraints relevant to your platform |
| **Vendor docs notebook** (optional) | Relevant vendor documentation for the technology under consideration |

Ensure all sources are classified and registered per the [Approved Sources Policy](../../governance/approved-sources-policy.md).

---

## Task prompt

Use a prompt in this form when testing the scenario:

```
Using the Prior ADRs and Architecture Standards notebooks, draft an ADR for the following decision:

[DECISION QUESTION — e.g., "Should we use a message queue or direct API calls for the order processing integration?"]

The ADR should follow our standard format and:
- Cite prior ADRs where relevant precedents exist
- Reference applicable architecture standards and principles
- Document at least two alternatives with their tradeoffs
- Identify risks and any open questions
- Clearly distinguish sourced facts from assumptions

Cite the source document and section for each recommendation.
```

---

## Expected answer characteristics

A high-quality ADR generated in this scenario should:

- Follow the organization's ADR format (status, context, decision, consequences)
- Cite at least one prior ADR or architecture standard for the chosen approach
- Present 2–3 alternatives with explicit tradeoff analysis
- Identify technical and organizational risks
- Distinguish between facts sourced from prior decisions and inferences made by the model
- Not invent precedents or prior decisions that do not exist in the source notebooks

---

## Common failure modes

| Failure mode | What to watch for |
|--------------|------------------|
| **Fabricated precedents** | ADR references prior decisions that do not exist in the source notebooks |
| **No source citations** | Recommendations are made without referencing architecture standards or prior ADRs |
| **Missing alternatives** | Only one option presented, with no alternatives analyzed |
| **Context-free decision** | ADR does not reflect the specific constraints in the NFR notebook |
| **Mixed facts and assumptions** | Model presents inferences as established organizational standards |

---

## Rubric reference

Score using:

1. **[Architecture Answer Evaluation](../architecture-answer-evaluation.md)** — primary rubric
2. **[Source Grounding Scorecard](../source-grounding-scorecard.md)** — grounding baseline

**Pass threshold:** ≥ 3.5 / 5 average on both rubrics; no Fabricated Precedents failure.
