# Security Review Evaluation

**Rubric for evaluating threat models, security assessments, and risk analyses assisted by NotebookLM + Copilot.**

---

## Purpose

Security assessments require high accuracy, comprehensive threat coverage, and correct risk severity judgments. AI-assisted security outputs can miss threats, misclassify severity, or omit compliance-relevant controls. This rubric helps security engineers and architects verify that AI-assisted security outputs are fit for use.

---

## Scenario

Use this rubric when evaluating:

- Threat models (STRIDE, PASTA, or equivalent)
- Security assessment sections of architecture reviews
- Risk registers generated from architecture or design documents
- Control gap analyses
- Security-relevant sections of ADRs or design documents

---

## Input requirements

Before scoring, gather:

1. **The system or component being assessed** (description or architecture diagram).
2. **The AI-generated security output** (threat model, risk assessment, control analysis).
3. **The source notebooks used** (security standards, compliance requirements, architecture docs).
4. **Applicable compliance frameworks or standards** relevant to the system.
5. **Any known threats or risks** to use as a verification baseline.

---

## Scoring rubric

Score each dimension from 1 (poor) to 5 (excellent).

| Dimension | 1 — Poor | 3 — Acceptable | 5 — Excellent |
|-----------|----------|---------------|---------------|
| **Source grounding** | Threats and controls are asserted with no reference to security standards or architecture docs | Most findings cite relevant standards; some gaps | All findings are grounded in cited security standards, frameworks, or architecture docs |
| **Threat coverage** | Major threat categories (e.g., spoofing, tampering, DoS, privilege escalation) are missing | Main threats identified; some attack vectors missing | Comprehensive coverage of relevant threat categories for the system type |
| **Risk severity accuracy** | Severity ratings are inconsistent with industry-standard frameworks (e.g., CVSS, DREAD) | Most severities are appropriate; some over- or under-rating | Severities are consistent with applicable frameworks and justified |
| **Mitigation quality** | Mitigations are absent, generic, or impractical | Mitigations are present but some are vague or hard to implement | Specific, actionable, and prioritized mitigations for each identified risk |
| **Compliance alignment** | Applicable compliance requirements (e.g., ISO 27001, SOC 2, GDPR) are not addressed | Key compliance controls mentioned; coverage incomplete | Compliance requirements are mapped to findings and control gaps are identified |
| **False positive / negative rate** | Many findings are irrelevant to the system, or obvious threats are missed | Mostly relevant findings; minor gaps or noise | Findings are well-scoped, relevant, and complete with no obvious omissions |

---

## Failure modes

| Failure mode | Description | Action |
|--------------|-------------|--------|
| **Fabricated CVEs or standards** | Output references vulnerability IDs or standards that do not exist | Escalate immediately; discard output |
| **Severity inflation** | Low-impact risks rated as critical, causing misallocation of remediation effort | Re-rate against standard framework; calibrate with security engineer |
| **Missing critical threat categories** | Entire threat categories (e.g., injection, authentication bypass) absent for a relevant system | Require explicit threat category coverage checklist |
| **Compliance gap missed** | Output omits a compliance requirement that clearly applies to the system | Add applicable compliance framework to source notebooks; re-evaluate |
| **Impractical mitigations** | Suggested controls are not implementable in the target environment | Replace with environment-specific mitigations |

---

## Reviewer notes

> **Reviewer:** [NAME — must be a security engineer or architect for high-stakes assessments]
> **Date:** [DATE]
> **System / component assessed:** [DESCRIPTION]
> **Source notebooks used:** [LIST NOTEBOOKS]
> **Compliance frameworks applied:** [LIST FRAMEWORKS]
> **Notes:**

---

## Pass/fail threshold

| Result | Criteria |
|--------|---------|
| **Pass** | Average score ≥ 3.5 / 5; no Fabricated CVEs failure mode; compliance requirements addressed |
| **Conditional pass** | Average 3.0–3.4 / 5; gaps documented; approved by security engineer before use |
| **Fail** | Average < 3.0 / 5, or any Fabricated CVEs / Standards failure mode identified |

Security review outputs that fail must not be used to make risk acceptance decisions, approve architectures, or satisfy compliance requirements until revised and re-evaluated by a qualified security engineer.
