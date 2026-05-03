# Code Generation from Docs Evaluation

**Rubric for evaluating code generated from vendor specifications or architecture documents loaded in NotebookLM.**

---

## Purpose

Generating code (Bicep, Terraform, Python, API clients, etc.) from vendor documentation or architecture specs in NotebookLM is a high-value use case — but also a high-risk one. Code that misinterprets a spec, omits required parameters, or introduces security issues can cause outages or vulnerabilities. This rubric ensures generated code is reviewed systematically before use.

---

## Scenario

Use this rubric when evaluating code generated from:

- Vendor API documentation (REST APIs, SDKs, service specifications)
- Azure/cloud provider resource specifications
- Infrastructure-as-code specs (Bicep, Terraform, ARM templates)
- Internal architecture or interface specifications loaded into NotebookLM
- Protocol or standard documents

---

## Input requirements

Before scoring, gather:

1. **The specification or documentation** used as source (or the notebook containing it).
2. **The generation prompt** provided to Copilot or the AI tool.
3. **The generated code output**.
4. **The relevant sections of the source spec** for verification.
5. **Any applicable organizational coding standards** (security, style, naming).

---

## Scoring rubric

Score each dimension from 1 (poor) to 5 (excellent).

| Dimension | 1 — Poor | 3 — Acceptable | 5 — Excellent |
|-----------|----------|---------------|---------------|
| **Spec alignment** | Code does not match the specification (wrong parameters, wrong endpoints, wrong resource types) | Mostly aligned; minor deviations present | Code faithfully implements the specification as documented |
| **Correctness** | Code contains logic errors or would fail at runtime | Code is mostly correct; edge cases may fail | Code is functionally correct and handles documented edge cases |
| **Completeness** | Required parameters, resource properties, or error handling are missing | Main functionality implemented; optional elements missing | All required elements are implemented; optional elements noted |
| **Security hygiene** | Credentials hardcoded, insecure protocols used, or security controls absent | No obvious critical issues; some best practices missing | Follows security best practices: no hardcoded secrets, least-privilege, secure defaults |
| **Maintainability** | Code is unreadable, undocumented, or uses inconsistent patterns | Readable but could be improved; some comments missing | Clear, well-structured, follows team conventions, appropriately commented |
| **Testability** | Code is tightly coupled or has side effects that make testing impractical | Testable with some effort; minor coupling issues | Code is structured to support unit and integration testing |

---

## Failure modes

| Failure mode | Description | Action |
|--------------|-------------|--------|
| **Hardcoded secrets** | API keys, passwords, or tokens embedded in generated code | Remove immediately; rotate any exposed credentials |
| **Spec mismatch** | Code uses API endpoints, parameters, or resource types not present in the spec | Return for revision against the source spec |
| **Missing required fields** | Required API parameters or resource properties omitted | Return for completion; verify against spec's required field list |
| **Deprecated API usage** | Code uses endpoints or methods marked deprecated in the source spec | Update to current spec before use |
| **Insecure defaults** | Generated code uses insecure protocols, open network rules, or permissive IAM | Require security review before deployment |

---

## Reviewer notes

> **Reviewer:** [NAME]
> **Date:** [DATE]
> **Code / resource type evaluated:** [DESCRIPTION]
> **Source spec / notebook used:** [DESCRIPTION]
> **Notes:**

---

## Pass/fail threshold

| Result | Criteria |
|--------|---------|
| **Pass** | Average score ≥ 3.5 / 5; no Hardcoded Secrets or Insecure Defaults failure modes |
| **Conditional pass** | Average 3.0–3.4 / 5; issues documented; approved by senior engineer before merge |
| **Fail** | Average < 3.0 / 5, or any Hardcoded Secrets failure mode identified |

Code that fails must not be merged or deployed until it is revised and re-evaluated. Security failures (hardcoded secrets, insecure defaults) must be escalated to the security team regardless of the overall score.
