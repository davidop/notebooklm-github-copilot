# Team Prompt Pack: Security

## Team profile

Security teams include security engineers, security architects, compliance officers, and application security (AppSec) specialists. They conduct threat modeling, lead security reviews, perform compliance gap analyses, and maintain security standards. Their knowledge lives in security policies, compliance frameworks, architecture documents, and threat intelligence summaries.

This pack helps security teams produce source-grounded threat models, compliance gap reports, and security reviews—without relying on generic AI output disconnected from actual organisational standards.

---

## Common workflows

- **Threat modeling**: Identify threats to a system design using security standards as grounding.
- **Security reviews**: Review an architecture or code change against internal security standards.
- **Compliance gap analysis**: Identify gaps between current state and a compliance framework.
- **Security standards documentation**: Draft or update security policies and standards from authoritative sources.

---

## Required NotebookLM sources

- Internal security standards and policies
- Compliance framework documentation (e.g., ISO 27001, SOC 2, PCI DSS, NIST CSF)
- Architecture and system design documents (approved for security review)
- Threat intelligence summaries and known vulnerability patterns
- Past security review findings and remediation records

> **Important**: Be careful about uploading sensitive security findings or vulnerability details to cloud-hosted notebook services. Follow your organisation's data classification policy before uploading any security documentation.

---

## Recommended agent / client

**GitHub Copilot** — best for inline security reviews during code review and for generating security documentation alongside code.

---

## Copy-paste prompts

```
Use NotebookLM. In the security-standards notebook, review this architecture for
OWASP Top 10 coverage. Return: each OWASP category, whether the design addresses it,
gaps with the relevant standard cited, and recommended mitigations.
[Paste architecture description]
```

```
Use NotebookLM. In the compliance-requirements notebook, identify all controls
required for [framework, e.g., SOC 2 Type II, ISO 27001] that apply to a
[system or data type]. Return: control ID, description, current state if known, and gap.
```

```
Use NotebookLM. In the security-standards notebook, conduct a threat model for
this system using STRIDE. Return: threat category, threat description, affected component,
likelihood, impact, and recommended mitigation. Cite the relevant standard for each mitigation.
[Paste system description]
```

```
Use NotebookLM. In the security-standards notebook, review this code change for
security issues related to [area, e.g., authentication, input validation, secrets management].
Return: findings with severity, description, violated standard cited, and remediation guidance.
[Paste code or diff]
```

```
Use NotebookLM. In the compliance-requirements notebook, generate a compliance gap report
for [system name] against [framework]. Return: in-scope controls, compliant controls,
gaps with evidence of non-compliance, and a prioritised remediation list.
```

```
Use NotebookLM. In the security-standards notebook, draft a security standard for
[topic, e.g., secrets management, container image hardening, API authentication].
Include: scope, requirements, rationale, and implementation guidance. Cite source standards.
```

---

## Output format

- **Threat models**: STRIDE table with threat, component, likelihood, impact, and mitigation
- **Security reviews**: Numbered finding list with severity, description, citation, and remediation
- **Compliance gap reports**: Control table with status (compliant/gap/not applicable) and evidence
- **Security standards**: Structured Markdown with scope, requirements, rationale, and examples

---

## Quality checklist

- [ ] Every threat or finding is grounded in a cited standard or framework control
- [ ] Mitigations are specific and actionable, not generic best practice
- [ ] Assumptions about current controls are clearly flagged as assumptions
- [ ] Compliance gaps include evidence of non-compliance, not just absence of evidence
- [ ] Sensitive details in outputs are handled according to data classification policy

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Sensitive security findings uploaded to a cloud service | Classify documents before upload; use anonymised or aggregate summaries where possible |
| False sense of security from an incomplete threat model | State the threat model scope and assumptions explicitly in the output |
| Generic mitigations not aligned to actual controls | Cross-reference every mitigation against the standards notebook |
| Outdated compliance framework documentation | Pin framework version in the source document name; update at each framework revision |
