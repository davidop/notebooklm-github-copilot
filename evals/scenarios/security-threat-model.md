# Evaluation Scenario: Security Threat Model

**Scenario for evaluating security threat modeling outputs generated using NotebookLM + Copilot.**

---

## Overview

This scenario tests the quality of threat models produced when a security engineer or architect asks Copilot to identify threats, assess risks, and recommend controls for a system design — using NotebookLM notebooks containing security standards, architecture documentation, and compliance requirements as grounding sources.

**Primary rubric:** [Security Review Evaluation](../security-review-evaluation.md)
**Supporting rubric:** [Source Grounding Scorecard](../source-grounding-scorecard.md)

---

## Generic source setup

Configure notebooks with the following source types. Do not include production system credentials, customer data, or any information prohibited by the [NotebookLM Usage Policy](../../governance/notebooklm-usage-policy.md).

| Notebook | Source types to include |
|----------|------------------------|
| **Security standards notebook** | Organizational security baseline controls, secure design principles, approved cryptographic standards, network security requirements |
| **Architecture docs notebook** | System design documentation (component diagrams, data flow diagrams, API contracts) — ensure these are classified as Approved before loading |
| **Compliance requirements notebook** | Applicable compliance framework controls (e.g., ISO 27001 Annex A, NIST SP 800-53, CIS Benchmarks, relevant industry standards) |
| **Threat intelligence notebook** (optional) | OWASP Top 10, relevant threat landscape summaries, STRIDE reference material — publicly available sources preferred |

---

## Task prompt

Use a prompt in this form when testing the scenario:

```
Using the Security Standards, Architecture Docs, and Compliance Requirements notebooks, perform a threat model for the following system:

[SYSTEM DESCRIPTION — e.g., "A REST API service that processes customer orders, backed by a PostgreSQL database, deployed on AKS, accessible from the public internet"]

Using the STRIDE framework:
- Identify threats in each STRIDE category relevant to this system
- Assess the risk severity for each threat (High / Medium / Low) and justify using our security standards
- Recommend specific, implementable controls for each identified threat
- Map findings to applicable compliance controls from the compliance notebook
- Clearly distinguish threats documented in our standards from inferences based on the system description

Cite the source for each control recommendation.
```

---

## Expected answer characteristics

A high-quality threat model output should:

- Cover all six STRIDE categories (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege)
- Ground threat identification in the architecture docs notebook, not in generic descriptions
- Justify severity ratings by reference to organizational security standards or recognized frameworks
- Provide specific, actionable controls (not just "implement encryption" but "use TLS 1.2+ with approved cipher suites per [standard]")
- Map controls to compliance requirements where applicable
- Explicitly flag inferences made about the system that are not sourced from documentation

---

## Common failure modes

| Failure mode | What to watch for |
|--------------|------------------|
| **Missing STRIDE categories** | One or more STRIDE categories absent from the output |
| **Generic threats** | Threats listed are too generic to be actionable for this specific system |
| **Severity inconsistency** | Severity ratings do not follow a consistent framework or organizational standard |
| **Fabricated CVEs or controls** | Output references vulnerability IDs or standards not present in source notebooks |
| **Compliance gaps missed** | Applicable compliance controls from the compliance notebook are not addressed |
| **Architecture misrepresentation** | Threats are based on a misreading of the system description in the architecture docs |

---

## Rubric reference

Score using:

1. **[Security Review Evaluation](../security-review-evaluation.md)** — primary rubric
2. **[Source Grounding Scorecard](../source-grounding-scorecard.md)** — grounding baseline

**Pass threshold:** ≥ 3.5 / 5 average on both rubrics; all STRIDE categories addressed; no Fabricated CVEs failure mode. Must be reviewed by a qualified security engineer before use in risk acceptance decisions or architecture approvals.
