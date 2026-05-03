# Prompt and Output Review Policy

**Template — adapt to your organization's legal, compliance, and security requirements.**

---

## 1. Purpose

This policy establishes standards for constructing prompts sent to AI tools (including GitHub Copilot, NotebookLM, and related integrations) and for reviewing the outputs those tools produce. It ensures that [ORGANIZATION]'s AI-assisted engineering outputs are grounded, accurate, and appropriately reviewed before use in decisions, deliverables, or production systems.

---

## 2. Scope

This policy applies whenever an AI tool output is used:

- As the basis for an architecture decision, design choice, or technology selection
- In a customer-facing deliverable (proposal, RFP response, capability statement, report)
- In a security or risk assessment
- As generated code that will be merged into a production repository
- In any document that will be formally approved or distributed outside the engineering team

For informal exploration and personal productivity, this policy is advisory.

---

## 3. Prompt standards

Well-formed prompts improve output quality and reduce hallucination risk. When constructing prompts for AI tools integrated with NotebookLM:

- **Specify the source:** Instruct the model to use a named notebook or specific sources. Example: *"Using the Architecture Standards notebook, ..."*
- **Request citations:** Ask the model to cite sources for factual claims. Example: *"Cite the source document and section for each recommendation."*
- **Distinguish facts from assumptions:** Ask the model to flag when it is inferring beyond the source material. Example: *"Clearly indicate if any recommendation is not supported by the provided sources."*
- **Scope the response:** Define the expected output format, length, and audience to reduce drift.
- **Avoid injecting prohibited data:** Review prompt text for PII, secrets, or regulated data before submission.

---

## 4. Output review requirements

All outputs subject to this policy (see Section 2) must be reviewed by a qualified team member before use. Reviewers must verify:

### Grounding verification
- Each factual claim can be traced to a cited source.
- Claims that cannot be traced are either removed or explicitly flagged as assumptions.

### Citation checking
- Cited sources exist and are accessible.
- The output accurately reflects what the cited source says (no misquotation or distortion).

### Hallucination detection
- Review for plausible-sounding but unsupported statements, especially in technical specifications, compliance requirements, or security guidance.
- When in doubt, locate and verify the claim in the original source document.

---

## 5. High-stakes output review

Outputs in the following categories require review by a senior or specialist reviewer in addition to the standard review:

| Category | Required reviewer |
|----------|------------------|
| Architecture decisions affecting production systems | Senior architect or principal engineer |
| Customer proposals or RFP responses | Presales lead or delivery manager |
| Security assessments or threat models | Security engineer or architect |
| Compliance-related guidance | Compliance lead or legal counsel |

High-stakes outputs must be documented with the reviewer's name and the date of review before distribution.

---

## 6. Documentation requirements

For all outputs subject to this policy, the following must be recorded (in the pull request, document revision history, or equivalent):

- AI tool(s) used
- Notebook(s) or sources queried
- Name of reviewer and date of review
- Any claims that were removed or flagged as unverified

---

## 7. Escalation process

If a reviewer identifies:

- An output that contains fabricated citations or significantly inaccurate claims
- A prompt or output that may have included prohibited data
- A pattern of poor-quality outputs from a specific notebook or configuration

They should escalate to [ENGINEERING LEAD / AI GOVERNANCE CONTACT] and document the incident. Systemic issues will be reviewed against the [Approved Sources Policy](./approved-sources-policy.md) and tool configuration standards.

---

- **Policy owner:** [ROLE / NAME]
- **Effective date:** [DATE]
- **Review cadence:** Annually or following material changes to AI tool capabilities
- **Next review date:** [DATE]

---

*This template does not constitute legal advice. Consult qualified legal and compliance professionals before formal adoption.*
