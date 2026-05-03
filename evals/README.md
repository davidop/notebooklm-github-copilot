# Evals

This folder contains an evaluation framework for assessing the quality of AI-assisted engineering outputs produced using the **notebooklm-github-copilot** integration. Use these rubrics and scenarios to establish consistent quality standards, onboard reviewers, and continuously improve outputs over time.

---

## Who should use this folder

| Role | Recommended starting point |
|------|---------------------------|
| **Tech leads and principal engineers** | `source-grounding-scorecard.md` — establishes the baseline quality bar |
| **Architects** | `architecture-answer-evaluation.md`, `scenarios/adr-generation.md` |
| **Presales and delivery managers** | `presales-output-evaluation.md`, `scenarios/rfp-review.md` |
| **Security engineers** | `security-review-evaluation.md`, `scenarios/security-threat-model.md` |
| **Quality assurance reviewers** | Start with `rubric-template.md` to understand the scoring framework, then review scenario-specific rubrics |
| **Teams building custom evaluations** | `rubric-template.md` |

---

## Contents

### Rubrics

| File | Description |
|------|-------------|
| [`source-grounding-scorecard.md`](./source-grounding-scorecard.md) | Core rubric for evaluating whether AI outputs are grounded in cited sources. **Applies to all output types.** |
| [`architecture-answer-evaluation.md`](./architecture-answer-evaluation.md) | Rubric for architecture decisions, design choices, and technology selections. |
| [`presales-output-evaluation.md`](./presales-output-evaluation.md) | Rubric for proposals, RFP responses, and capability statements. |
| [`code-generation-from-docs-evaluation.md`](./code-generation-from-docs-evaluation.md) | Rubric for code generated from vendor specs or architecture documents loaded in NotebookLM. |
| [`security-review-evaluation.md`](./security-review-evaluation.md) | Rubric for threat models, security assessments, and risk analyses. |
| [`rubric-template.md`](./rubric-template.md) | Blank template for creating team-specific or use-case-specific evaluation rubrics. |

### Scenarios

Pre-built evaluation scenarios with example prompts, source setups, and expected outputs. Each scenario references one or more rubrics.

| File | Description |
|------|-------------|
| [`scenarios/adr-generation.md`](./scenarios/adr-generation.md) | Evaluating ADRs generated with NotebookLM + Copilot. |
| [`scenarios/azure-architecture-review.md`](./scenarios/azure-architecture-review.md) | Evaluating Azure architecture review outputs. |
| [`scenarios/rfp-review.md`](./scenarios/rfp-review.md) | Evaluating RFP review and proposal drafting outputs. |
| [`scenarios/security-threat-model.md`](./scenarios/security-threat-model.md) | Evaluating security threat modeling outputs. |
| [`scenarios/code-from-vendor-docs.md`](./scenarios/code-from-vendor-docs.md) | Evaluating code generated from vendor API documentation. |

---

## How to use rubrics

1. Select the rubric that matches your output type.
2. Gather the required inputs listed in the rubric's **Input requirements** section.
3. Score each dimension on the 1–5 scale using the rubric descriptions.
4. Average the scores and compare against the **Pass/fail threshold**.
5. Document the scores, reviewer name, and date alongside the output.

If no existing rubric fits your use case, copy `rubric-template.md` and customize it.

---

## Recommended quality bar

A minimum average score of **3.5 / 5** is the suggested baseline pass threshold across all rubrics. High-stakes outputs (architecture decisions, customer proposals, security assessments) should target **4.0 / 5** or above. Adjust thresholds to match your team's risk appetite and maturity.
