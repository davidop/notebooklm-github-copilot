# Evaluation Scenario: Code Generation from Vendor Docs

**Scenario for evaluating code generated from vendor API documentation loaded into NotebookLM.**

---

## Overview

This scenario tests the quality of code generated when a developer asks Copilot to implement an integration, resource definition, or API client based on vendor documentation loaded into a NotebookLM notebook. It is especially relevant for Bicep/Terraform resource definitions, REST API clients, and SDK usage patterns derived from vendor specs.

**Primary rubric:** [Code Generation from Docs Evaluation](../code-generation-from-docs-evaluation.md)
**Supporting rubric:** [Source Grounding Scorecard](../source-grounding-scorecard.md)

---

## Generic source setup

Configure notebooks with the following source types. Use only publicly available vendor documentation or internally approved specifications — do not include production credentials, connection strings, or customer data.

| Notebook | Source types to include |
|----------|------------------------|
| **Vendor API docs notebook** | Official API reference documentation for the service being integrated (REST API specs, Bicep/ARM resource definitions, SDK reference pages) — use public vendor documentation |
| **Internal coding standards notebook** | Your organization's coding standards for the relevant language or IaC tool, naming conventions, approved patterns, security requirements (e.g., "always use Key Vault references for secrets") |
| **Architecture specs notebook** | Relevant interface specifications, service topology, required integration points, approved service tiers or SKUs |

All sources must be classified and registered per the [Approved Sources Policy](../../governance/approved-sources-policy.md).

---

## Task prompt

Use a prompt in this form when testing the scenario:

```
Using the Vendor API Docs and Internal Coding Standards notebooks, generate [CODE TYPE] for the following:

[TASK DESCRIPTION — e.g., "A Bicep module that deploys an Azure Service Bus namespace with a topic and two subscriptions, following our naming conventions and using Key Vault references for the connection string"]

Requirements:
- Follow our internal naming conventions and tagging standards from the coding standards notebook
- Use only resource types and API versions documented in the vendor docs notebook
- Do not hardcode any secrets, connection strings, or credentials
- Include parameter definitions with descriptions and constraints
- Add comments where the implementation follows a specific pattern from our standards

Cite the vendor doc section or internal standard for any non-obvious implementation choice.
```

---

## Expected answer characteristics

A high-quality code generation output should:

- Use only resource types, API endpoints, and parameters documented in the vendor API docs notebook
- Apply the organization's naming conventions, tagging, and structural patterns from the coding standards notebook
- Contain no hardcoded secrets, credentials, or environment-specific values
- Include parameter or variable definitions for all configurable values
- Reference the specific API version or spec section for resource definitions
- Be immediately runnable with appropriate input values provided (no placeholders that would cause runtime errors)

---

## Common failure modes

| Failure mode | What to watch for |
|--------------|------------------|
| **Hallucinated resource properties** | Generated code includes properties or parameters not present in the vendor documentation |
| **Hardcoded secrets** | API keys, passwords, or connection strings embedded directly in generated code |
| **Wrong API version** | Code uses an API version not documented in the source notebooks or known to be deprecated |
| **Naming convention violations** | Generated resource names do not follow the patterns in the coding standards notebook |
| **Missing required parameters** | Vendor spec lists required fields that are absent from the generated code |
| **Broken references** | Code references modules, variables, or resources that are not defined within the output |

---

## Rubric reference

Score using:

1. **[Code Generation from Docs Evaluation](../code-generation-from-docs-evaluation.md)** — primary rubric
2. **[Source Grounding Scorecard](../source-grounding-scorecard.md)** — grounding baseline

**Pass threshold:** ≥ 3.5 / 5 average on both rubrics; no Hardcoded Secrets failure mode. Security failures must be escalated to the security team before the code is used in any environment, regardless of overall score. Code must be reviewed by a senior engineer before merging into a shared repository.
