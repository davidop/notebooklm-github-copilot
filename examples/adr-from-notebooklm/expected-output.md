# Expected Output

The following is a representative example of the output you would expect from this prompt. Actual output depends on the content of your NotebookLM notebook.

---

## NotebookLM Findings

**From "platform-architecture" notebook:**

**Prior decisions:**
- ADR-007 (Source: architecture-decisions-log.pdf, p.12): "We standardise on Azure-native services for API management to reduce operational overhead." Decision status: Accepted.
- ADR-003 (Source: architecture-decisions-log.pdf, p.6): "All external-facing APIs must enforce OAuth 2.0 + JWT validation at the gateway level."

**Architecture principles:**
- "Prefer managed services over self-managed infrastructure for platform-level concerns." (Source: architecture-principles.md)
- "No third-party SaaS in the critical data path unless security review is complete." (Source: security-policy.pdf, section 4.2)

---

## Generated ADR

# ADR-012: API Gateway Selection for Microservices Platform

**Date:** 2024-03-15
**Status:** Proposed
**Deciders:** Platform Team, Security Team

### Context and Problem Statement

We need to expose 15 internal microservices through a unified API layer...

[Full ADR continues with all sections populated from the NotebookLM sources]

### Decision Outcome

**Chosen option:** Azure API Management (APIM) Premium tier, because it aligns with ADR-007's principle of Azure-native services, natively supports OAuth 2.0 + JWT validation (satisfying ADR-003), and reduces operational overhead compared to a self-managed gateway.

---

*Citations: architecture-decisions-log.pdf (ADR-007, ADR-003), architecture-principles.md, security-policy.pdf §4.2*
