# Presales Output Evaluation

**Rubric for evaluating proposals, RFP responses, and capability statements generated with NotebookLM + Copilot.**

---

## Purpose

Presales outputs represent your organization to customers and prospects. Inaccurate, poorly grounded, or tone-inappropriate content can damage credibility and relationships. This rubric ensures AI-assisted presales outputs are accurate, professional, and fit for customer distribution.

---

## Scenario

Use this rubric when evaluating:

- Proposal sections or full proposals
- RFP / RFI / RFQ response sections
- Capability statements
- Executive summaries for customer opportunities
- Solution overviews or architecture summaries prepared for customer audiences

---

## Input requirements

Before scoring, gather:

1. **The customer requirement or RFP section** being addressed.
2. **The AI-generated draft** (proposal section, capability statement, etc.).
3. **The source notebooks used** (capabilities library, past proposals, reference architectures, customer notes — all approved per the [Approved Sources Policy](../governance/approved-sources-policy.md)).
4. **Any known customer context** relevant to evaluating relevance and accuracy.

---

## Scoring rubric

Score each dimension from 1 (poor) to 5 (excellent).

| Dimension | 1 — Poor | 3 — Acceptable | 5 — Excellent |
|-----------|----------|---------------|---------------|
| **Source grounding** | Claims are unsupported; no citation to capabilities library or prior work | Most claims cite source material; some gaps | All substantive claims trace to cited, approved sources |
| **Accuracy** | Contains factual errors about services, technologies, or organizational capabilities | Mostly accurate; minor inaccuracies that could be corrected | Factually correct and verifiable against source documents |
| **Completeness** | Does not address the customer requirement | Addresses main requirement; some elements missing | Fully addresses the requirement including scope, approach, and differentiators |
| **Tone and professionalism** | Inappropriate tone, unprofessional language, or formatting issues | Acceptable tone; minor polish needed | Professional, clear, and appropriate for the customer audience |
| **Customer relevance** | Generic content with no connection to customer context | Partially tailored; some generic sections remain | Specifically tailored to the customer's stated requirements and context |
| **Competitive positioning** | No differentiation or positioning | Some differentiation mentioned but not compelling | Clear, credible differentiation grounded in demonstrated capabilities |
| **Call to action** | No clear next step or call to action | Next step is mentioned but vague | Clear, specific, and appropriate call to action for the opportunity stage |

---

## Failure modes

| Failure mode | Description | Action |
|--------------|-------------|--------|
| **Capability inflation** | Output claims capabilities or certifications not held by the organization | Remove or correct before any customer distribution |
| **Customer data leakage** | Output includes customer PII or confidential information from another engagement | Remove immediately; review source notebooks for prohibited content |
| **Fabricated references** | Output cites case studies or prior work that do not exist | Remove; escalate to presales lead |
| **Tone mismatch** | Content is overly technical for an executive audience, or too casual for a formal RFP | Revise for audience; do not distribute as-is |
| **Stale references** | References to products, pricing, or certifications that are outdated | Verify currency of all references before use |

---

## Reviewer notes

> **Reviewer:** [NAME]
> **Date:** [DATE]
> **Opportunity / RFP section evaluated:** [DESCRIPTION]
> **Source notebooks used:** [LIST NOTEBOOKS]
> **Notes:**

---

## Pass/fail threshold

| Result | Criteria |
|--------|---------|
| **Pass** | Average score ≥ 3.5 / 5; no Capability Inflation or Fabricated References failure modes |
| **Conditional pass** | Average 3.0–3.4 / 5; gaps documented; approved by presales lead before customer distribution |
| **Fail** | Average < 3.0 / 5, or any Capability Inflation or Fabricated References failure mode identified |

Presales outputs that fail must not be shared with customers or prospects without revision and re-evaluation by the presales lead.
