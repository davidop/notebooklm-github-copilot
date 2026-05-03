# Rubric Template

**Copy this template to create a custom evaluation rubric for your team or use case.**

---

## Purpose

> *Describe what this rubric evaluates and why it matters. What risk does it address? What quality bar does it set?*
>
> [FILL IN]

---

## Scenario

> *Describe the specific scenario or output type this rubric is designed for.*
>
> [FILL IN — e.g., "Use this rubric when evaluating X generated from Y sources using Z tool"]

---

## Input requirements

Before scoring, gather:

1. [INPUT 1 — e.g., the original question or prompt]
2. [INPUT 2 — e.g., the AI-generated output]
3. [INPUT 3 — e.g., the source documents or notebooks]
4. [INPUT 4 — e.g., any applicable standards or constraints]

---

## Scoring rubric

Score each dimension from 1 (poor) to 5 (excellent). Define what each score level looks like for your specific use case.

| Dimension | 1 — Poor | 3 — Acceptable | 5 — Excellent |
|-----------|----------|---------------|---------------|
| **[Dimension 1]** | [What does a poor score look like?] | [What does an acceptable score look like?] | [What does excellent look like?] |
| **[Dimension 2]** | | | |
| **[Dimension 3]** | | | |
| **[Dimension 4]** | | | |
| **[Dimension 5]** | | | |

**Score each dimension 1–5. Average the scores for the overall result.**

---

## Failure modes

List specific failure conditions that should block the output from use, regardless of average score.

| Failure mode | Description | Action |
|--------------|-------------|--------|
| [FAILURE MODE 1] | [Description] | [Required action] |
| [FAILURE MODE 2] | [Description] | [Required action] |
| [FAILURE MODE 3] | [Description] | [Required action] |

---

## Reviewer notes

> **Reviewer:** [NAME]
> **Date:** [DATE]
> **Output reviewed:** [DESCRIPTION]
> **Notes:**

---

## Pass/fail threshold

Define the minimum score required for the output to be considered usable.

| Result | Criteria |
|--------|---------|
| **Pass** | Average score ≥ [X.X] / 5; no blocking failure modes present |
| **Conditional pass** | Average [X.X–X.X] / 5; gaps documented; approved by [ROLE] before use |
| **Fail** | Average < [X.X] / 5, or any blocking failure mode identified |

---

*Adapted from the [notebooklm-github-copilot evals framework](../README.md). See existing rubrics for examples.*
