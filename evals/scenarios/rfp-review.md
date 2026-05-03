# Evaluation Scenario: RFP Review

**Scenario for evaluating RFP review and proposal drafting outputs generated using NotebookLM + Copilot.**

---

## Overview

This scenario tests the quality of outputs when a presales team member asks Copilot to analyze an RFP, map requirements to organizational capabilities, and draft response sections — using NotebookLM notebooks containing the RFP, capabilities library, and prior proposals as grounding sources.

**Primary rubric:** [Presales Output Evaluation](../presales-output-evaluation.md)
**Supporting rubric:** [Source Grounding Scorecard](../source-grounding-scorecard.md)

---

## Generic source setup

Configure notebooks with the following source types. Do not include customer PII, confidential competitor information, or any data prohibited by the [NotebookLM Usage Policy](../../governance/notebooklm-usage-policy.md).

| Notebook | Source types to include |
|----------|------------------------|
| **RFP requirements notebook** | The anonymized or approved RFP document, requirements matrix, evaluation criteria, submission guidelines |
| **Capabilities library notebook** | Approved service descriptions, methodology documents, technology capability statements, certifications and accreditations |
| **Past proposals notebook** | Approved, anonymized sections from prior successful proposals (executive summaries, approach sections, case study summaries) |
| **Reference architecture notebook** | Approved solution patterns and reference architectures relevant to the opportunity domain |

All sources must be classified and registered per the [Approved Sources Policy](../../governance/approved-sources-policy.md) before loading into notebooks.

---

## Task prompt

Use a prompt in this form when testing the scenario:

```
Using the RFP Requirements and Capabilities Library notebooks, perform the following:

1. List the top 5 evaluation criteria from the RFP and rate our alignment (High / Medium / Low) with justification.
2. Identify any requirements we cannot fully meet — be explicit.
3. Draft an executive summary section (300 words) that responds to the customer's stated objectives.
   Cite the specific RFP sections being addressed and the capabilities or past work supporting each claim.
4. Suggest 2–3 win themes based on our differentiated capabilities relative to the stated requirements.

Do not invent capabilities or references to past work not present in the source notebooks.
```

---

## Expected answer characteristics

A high-quality RFP review output should:

- Map responses directly to specific RFP requirements with section references
- Identify capability gaps honestly rather than overstating fit
- Ground every capability claim in the Capabilities Library notebook
- Reference relevant past work from the Past Proposals notebook without fabricating details
- Maintain a professional, customer-appropriate tone throughout
- Propose win themes that are defensible based on sourced capabilities

---

## Common failure modes

| Failure mode | What to watch for |
|--------------|------------------|
| **Capability inflation** | Output claims certifications, services, or past projects not present in the capabilities library |
| **Requirement mapping gaps** | Output addresses some RFP sections but silently ignores others |
| **Generic response** | Executive summary reads as boilerplate with no connection to this RFP's specific objectives |
| **Fabricated case studies** | References to client engagements or outcomes not present in the approved past proposals notebook |
| **Missing gap disclosure** | Output omits areas where organizational capabilities do not meet RFP requirements |

---

## Rubric reference

Score using:

1. **[Presales Output Evaluation](../presales-output-evaluation.md)** — primary rubric
2. **[Source Grounding Scorecard](../source-grounding-scorecard.md)** — grounding baseline

**Pass threshold:** ≥ 3.5 / 5 average on both rubrics; no Capability Inflation or Fabricated Case Studies failure modes. Must be reviewed and approved by the presales lead before any customer distribution.
