# Evaluation Scenario: Azure Architecture Review

**Scenario for evaluating Azure architecture review outputs generated using NotebookLM + Copilot.**

---

## Overview

This scenario tests the quality of architecture reviews for Azure-based systems when a developer or architect asks Copilot to evaluate a design against the Azure Well-Architected Framework and organizational standards, using NotebookLM notebooks as grounding sources.

**Primary rubric:** [Architecture Answer Evaluation](../architecture-answer-evaluation.md)
**Supporting rubric:** [Source Grounding Scorecard](../source-grounding-scorecard.md)

---

## Generic source setup

Configure notebooks with the following source types. Substitute your organization's equivalent documents — do not use real customer system diagrams or sensitive architecture documents unless they are classified as Approved per the [Approved Sources Policy](../../governance/approved-sources-policy.md).

| Notebook | Source types to include |
|----------|------------------------|
| **Azure Well-Architected notebook** | Microsoft Azure Well-Architected Framework pillars (Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency) — use public Microsoft documentation |
| **Internal architecture standards notebook** | Your organization's Azure landing zone design, approved patterns, naming conventions, tagging policies, network topology standards |
| **Vendor and service docs notebook** | Azure service documentation for the specific services under review (e.g., Azure Service Bus, AKS, Azure SQL) |
| **Compliance and NFR notebook** | Applicable compliance frameworks (ISO 27001, SOC 2, industry-specific), SLA requirements, DR/RTO/RPO targets |

---

## Task prompt

Use a prompt in this form when testing the scenario:

```
Using the Azure Well-Architected and Internal Architecture Standards notebooks, review the following architecture for [SYSTEM / COMPONENT DESCRIPTION]:

[PASTE ARCHITECTURE DESCRIPTION OR COMPONENT LIST]

For each Well-Architected pillar, identify:
- Strengths aligned with best practices (cite the source)
- Gaps or risks (cite the relevant standard or requirement)
- Recommended improvements (actionable and specific)

Note any conflicts between the proposed design and our internal architecture standards.
Clearly distinguish sourced findings from assumptions.
```

---

## Expected answer characteristics

A high-quality Azure architecture review should:

- Address all five Well-Architected Framework pillars (or justify skipping any)
- Cite specific Azure documentation or internal standards for each finding
- Provide actionable recommendations, not just gap statements
- Identify trade-offs between pillars (e.g., cost vs. reliability)
- Reference applicable compliance requirements from the NFR notebook
- Distinguish between confirmed gaps (from documentation) and potential concerns (inferences)

---

## Common failure modes

| Failure mode | What to watch for |
|--------------|------------------|
| **Generic boilerplate** | Review reads like a generic Azure checklist with no connection to the specific system described |
| **Missing pillars** | One or more Well-Architected pillars omitted with no explanation |
| **Outdated service guidance** | Recommendations reference deprecated Azure services or outdated configuration patterns |
| **No internal standards alignment** | Review does not reference the organization's landing zone or internal standards notebook |
| **Fabricated compliance requirements** | Output references compliance controls not present in the source notebooks |

---

## Rubric reference

Score using:

1. **[Architecture Answer Evaluation](../architecture-answer-evaluation.md)** — primary rubric
2. **[Source Grounding Scorecard](../source-grounding-scorecard.md)** — grounding baseline

**Pass threshold:** ≥ 3.5 / 5 average on both rubrics; all five WAF pillars addressed or omission justified.
