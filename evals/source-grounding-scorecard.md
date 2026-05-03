# Source Grounding Scorecard

**Core rubric — applies to all NotebookLM-assisted outputs.**

---

## Purpose

This scorecard evaluates whether an AI-assisted output is grounded in its cited sources. Poor source grounding — outputs that make unsupported claims, misrepresent sources, or fail to cite at all — is the primary quality risk in AI-assisted engineering workflows. Use this scorecard for any output type before applying a domain-specific rubric.

---

## Scenario

Any answer, summary, or generated document produced using NotebookLM, GitHub Copilot, or a connected AI tool where source grounding is required.

---

## Input requirements

Before scoring, gather:

1. **The question or prompt** submitted to the AI tool.
2. **The AI-generated output** (answer, document, code, etc.).
3. **The source documents** referenced or cited in the output (or the notebook contents).

Do not score an output if the source documents are not available for verification.

---

## Scoring rubric

Score each dimension from 1 (poor) to 5 (excellent).

| Dimension | 1 — Poor | 3 — Acceptable | 5 — Excellent |
|-----------|----------|---------------|---------------|
| **Citation presence** | No citations at all | Some claims cited; others left unsupported | Every factual claim has a citation |
| **Citation accuracy** | Citations are fabricated or clearly incorrect | Citations exist but some do not support the stated claim | All citations accurately reflect the source content |
| **Fact/assumption separation** | Facts and assumptions are mixed with no distinction | Some distinction, but inconsistent | Facts and assumptions are clearly and consistently distinguished |
| **Unsupported claims** | Multiple significant claims with no source support | One or two minor unsupported claims | No unsupported factual claims; inferences are flagged |
| **Source relevance** | Sources are unrelated to the question | Sources are partially relevant; gaps exist | Sources are directly relevant and sufficient for the question |

**Score each dimension 1–5. Average the five scores for the overall result.**

---

## Failure modes

| Failure mode | Description | Action |
|--------------|-------------|--------|
| **No citations** | Output makes factual claims with no source references | Return for revision; do not use as-is |
| **Fabricated citations** | Output references sources that do not exist or that say something different | Escalate immediately; do not use output |
| **Mixed facts and assumptions** | Output presents inferences as facts without flagging them | Return for revision; annotate assumptions before use |
| **Stale sources** | Cited sources are outdated relative to the question | Flag for source refresh; note limitations in the output |
| **Partial coverage** | Sources do not address key aspects of the question | Explicitly note gaps; seek additional sources |

---

## Reviewer notes

> Use this space to document specific citations checked, gaps identified, or corrections made during review.
>
> **Reviewer:** [NAME]
> **Date:** [DATE]
> **Output reviewed:** [DESCRIPTION]

---

## Pass/fail threshold

| Result | Criteria |
|--------|---------|
| **Pass** | Average score ≥ 3.5 / 5; no Fabricated Citations failure mode present |
| **Conditional pass** | Average score 3.0–3.4 / 5; gaps documented and flagged in the output |
| **Fail** | Average score < 3.0 / 5, or any Fabricated Citations failure mode identified |

Outputs that fail must not be used in decisions, deliverables, or production systems without revision and re-scoring.
