# AI-Assisted Engineering Policy

**Template — adapt to your organization's legal, compliance, and security requirements.**

---

## 1. Purpose and scope

This policy establishes expectations for the safe, responsible, and productive use of AI-assisted engineering tools at [ORGANIZATION]. It applies to all engineering staff, contractors, and third parties who use AI tools — including large language model (LLM) assistants, AI coding tools, and AI-connected knowledge retrieval tools — when performing work on behalf of [ORGANIZATION].

---

## 2. Policy statement

[ORGANIZATION] supports the use of approved AI-assisted engineering tools to improve developer productivity, code quality, and knowledge retrieval. All use of such tools must be consistent with [ORGANIZATION]'s data classification policy, security standards, and applicable legal obligations. AI tool outputs must be reviewed by a qualified engineer before use in production systems, customer deliverables, or formal documentation.

---

## 3. Approved use cases

The following use cases are approved for AI-assisted engineering tools:

- Code generation, completion, and refactoring from approved specifications
- Retrieval and summarization of internal technical documentation
- Drafting and reviewing architecture decision records (ADRs)
- Generating boilerplate, tests, and scaffolding
- Presales proposal drafting from approved document libraries
- Answering technical questions grounded in approved internal notebooks or documentation

---

## 4. Prohibited use cases

The following uses are **prohibited**:

- Uploading or querying against customer PII, regulated data (PHI, PCI-DSS cardholder data, etc.), or data governed by confidentiality agreements
- Using AI tools to generate or review credentials, secrets, API keys, or cryptographic material
- Treating AI-generated outputs as final without human review
- Using unapproved AI tools or browser extensions that transmit organizational data to external services
- Using AI tools to infer or reconstruct data that should remain confidential

---

## 5. Data handling requirements

- **Internal data:** May be used with approved tools in approved configurations only.
- **Confidential data:** Requires explicit approval from the data owner and the security team before use with any AI tool.
- **Regulated data:** Must not be submitted to any external AI service. Use of on-premises or approved private-cloud models requires separate approval.
- **Source documents:** All documents loaded into AI knowledge tools (e.g., NotebookLM notebooks) must be classified and registered per the [Approved Sources Policy](./approved-sources-policy.md).

---

## 6. Tool approval process

1. Engineering team or individual identifies a candidate AI tool.
2. Submit a Tool Approval Request to [SECURITY TEAM / PLATFORM TEAM CONTACT].
3. Security team performs vendor assessment and data flow review.
4. Legal reviews terms of service and data processing agreements.
5. If approved, tool is added to the [ORGANIZATION] Approved AI Tools Registry.
6. Approved tools are listed at [LINK TO REGISTRY / WIKI PAGE].

---

## 7. Developer responsibilities

- Use only tools listed in the Approved AI Tools Registry.
- Review all AI-generated outputs before committing code or submitting deliverables.
- Cite AI tool usage in pull request descriptions or document revision notes where material.
- Report suspected data exposure or tool misuse to [SECURITY INCIDENT CONTACT].
- Complete required training before using new tool categories.

---

## 8. Manager responsibilities

- Ensure team members complete required training before adopting new tools.
- Review team adoption of new tools against this policy before rollout.
- Escalate exception requests through the [exception request process](./exception-request-template.md).
- Include AI tool usage in team retrospectives and quality reviews.

---

## 9. Review and audit

[ORGANIZATION]'s security team may audit AI tool usage logs, notebook contents, and developer workflows on a [QUARTERLY / ANNUAL] basis. Audit findings will be shared with engineering leadership and used to update this policy.

---

## 10. Policy exceptions

Exceptions to this policy must be submitted using the [Exception Request Template](./exception-request-template.md) and approved by [CISO / SECURITY DIRECTOR] and the relevant engineering manager. Exceptions are time-limited and subject to periodic review.

---

## 11. Effective date and review cadence

- **Effective date:** [DATE]
- **Policy owner:** [ROLE / NAME]
- **Review cadence:** Annually, or following any material change to the AI tool landscape or regulatory environment
- **Next review date:** [DATE]

---

*This template does not constitute legal advice. Consult qualified legal and compliance professionals before formal adoption.*
