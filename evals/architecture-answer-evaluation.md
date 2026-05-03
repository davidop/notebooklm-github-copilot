# Architecture Answer Evaluation

**Rubric for evaluating architecture decisions, design choices, and technology selections generated with NotebookLM + Copilot.**

---

## Purpose

Architecture outputs carry high stakes — they influence system design, cost, risk, and long-term maintainability. This rubric supplements the [Source Grounding Scorecard](./source-grounding-scorecard.md) with architecture-specific dimensions to ensure outputs are technically sound, complete, and enterprise-suitable.

---

## Scenario

Use this rubric when evaluating:

- Architecture Decision Records (ADRs)
- Technology selection recommendations
- Design choice justifications
- Reference architecture drafts
- Migration or modernization approach documents

---

## Input requirements

Before scoring, gather:

1. **The architecture question or decision context** (e.g., "Should we use event streaming or request-reply for this integration?")
2. **The AI-generated output** (ADR, recommendation, design doc section)
3. **The source documents** used (architecture standards notebook, vendor docs notebook, prior ADR notebook)
4. **The relevant constraints** (non-functional requirements, compliance requirements, existing systems)

---

## Scoring rubric

Score each dimension from 1 (poor) to 5 (excellent). Also run the [Source Grounding Scorecard](./source-grounding-scorecard.md) separately.

| Dimension | 1 — Poor | 3 — Acceptable | 5 — Excellent |
|-----------|----------|---------------|---------------|
| **Source grounding** | Recommendations are opinion-based with no source support | Most recommendations cite sources; some gaps | All recommendations are grounded in cited architecture standards or vendor docs |
| **Technical correctness** | Contains factual errors about technology capabilities or behaviour | Mostly correct; minor inaccuracies present | Technically accurate; statements can be independently verified |
| **Completeness** | Key alternatives, tradeoffs, or constraints are missing | Main options covered; some tradeoffs missing | Alternatives, tradeoffs, and constraints are all addressed |
| **Actionability** | Output is too vague to act on | Provides direction but lacks implementation detail | Output provides clear next steps, owners, or follow-up questions |
| **Risk awareness** | No risks or failure modes identified | Some risks mentioned but not assessed | Risks are identified, assessed, and mitigations suggested |
| **Enterprise suitability** | Output ignores organizational standards or compliance requirements | Partially aligned; some gaps | Explicitly addresses relevant standards, compliance, and operational requirements |

---

## Failure modes

| Failure mode | Description | Action |
|--------------|-------------|--------|
| **Technology misrepresentation** | Output describes a technology's capabilities inaccurately | Return for revision; verify against vendor documentation |
| **Missing alternatives** | Only one option presented without justification for excluding others | Request analysis of 2–3 alternatives |
| **Ignores constraints** | Recommendation conflicts with known NFRs, compliance requirements, or existing systems | Return with constraints explicitly stated in the prompt |
| **No risk coverage** | Architecture recommendation made with no discussion of failure modes or risks | Require explicit risk section before approval |
| **Fabricated precedents** | Output cites prior ADRs or decisions that do not exist | Escalate immediately; do not use output |

---

## Reviewer notes

> **Reviewer:** [NAME]
> **Date:** [DATE]
> **Decision or topic evaluated:** [DESCRIPTION]
> **Source notebooks used:** [LIST NOTEBOOKS]
> **Notes:**

---

## Pass/fail threshold

| Result | Criteria |
|--------|---------|
| **Pass** | Average score ≥ 3.5 / 5 on this rubric AND ≥ 3.5 / 5 on Source Grounding Scorecard; no Fabricated Precedents failure |
| **Conditional pass** | Average 3.0–3.4 / 5; gaps documented; approved by senior architect before use |
| **Fail** | Average < 3.0 / 5, or any Fabricated Precedents failure mode identified |

Architecture outputs that fail must not be used to drive decisions without revision and re-evaluation.
