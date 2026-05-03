# NotebookLM Usage Policy

**Template — adapt to your organization's legal, compliance, and security requirements.**

---

## 1. Purpose and scope

This policy governs the use of Google NotebookLM by [ORGANIZATION] staff in engineering, architecture, presales, and related workflows. It sets out what is acceptable, what is prohibited, and the controls required to use NotebookLM in a manner consistent with [ORGANIZATION]'s security, compliance, and data governance obligations.

This policy applies to all [ORGANIZATION] employees, contractors, and partners who access NotebookLM using organizational accounts or on organizational devices.

---

## 2. Acceptable use

NotebookLM may be used for:

- Summarizing and querying approved internal technical documentation
- Grounding architecture, design, and engineering decisions in approved source material
- Supporting presales activities using approved document libraries (proposals, capability statements, reference architectures)
- Generating draft content (ADRs, design docs, proposals) that is reviewed and approved by a qualified team member before use
- Research and learning from public or approved vendor documentation

All acceptable use must comply with the [Approved Sources Policy](./approved-sources-policy.md).

---

## 3. Prohibited use

The following are prohibited in all NotebookLM notebooks and queries:

- **Regulated data:** Health records (PHI), payment card data (PCI-DSS), or any data subject to sector-specific regulation
- **Customer PII:** Names, contact details, account numbers, or any other personally identifiable information belonging to customers or prospects
- **Secrets and credentials:** API keys, passwords, certificates, tokens, or connection strings
- **Confidential legal documents:** Contracts, NDAs, legal opinions, or privileged communications not approved for AI processing
- **Competitor intelligence:** Confidential third-party information obtained under NDA or through restricted access

If you are unsure whether a document contains prohibited content, do not upload it. Contact [DATA GOVERNANCE / SECURITY TEAM] for guidance.

---

## 4. Account and authentication requirements

- NotebookLM must be accessed using [ORGANIZATION]-provisioned Google Workspace accounts only. Personal Google accounts must not be used for organizational notebooks.
- Multi-factor authentication (MFA) must be enabled on all accounts.
- Shared or team accounts are not permitted. Each user must access NotebookLM with their own individual identity.

---

## 5. Notebook management

- Notebooks containing Conditional-class sources (see [Approved Sources Policy](./approved-sources-policy.md)) must have sharing restricted to authorized individuals only.
- Notebooks must be named descriptively so that their scope and contents are identifiable during audits.
- Notebooks no longer in active use must be archived or deleted within [30 / 60] days of the project or use case concluding.
- Notebook contents are subject to [ORGANIZATION]'s data retention policy. Do not use notebooks to store data beyond its required retention period.

---

## 6. Data retention

NotebookLM sources and chat history are subject to Google's data retention and deletion policies, which may differ from [ORGANIZATION]'s internal policies. Do not use NotebookLM as a system of record. Maintain authoritative copies of all source documents in [ORGANIZATION]'s approved document management systems.

---

## 7. Incident reporting

Report any of the following to [SECURITY INCIDENT CONTACT] immediately:

- Accidental upload of prohibited content (PII, secrets, regulated data)
- Unauthorized access to a notebook
- AI-generated output that appears to contain fabricated sensitive information
- Any suspected data exposure via the NotebookLM integration

---

## 8. Training requirements

Staff must complete [ORGANIZATION]'s AI tools orientation training before using NotebookLM in organizational workflows. Training must be refreshed [ANNUALLY / EVERY 18 MONTHS] or when material changes to this policy occur.

---

## 9. Compliance monitoring

[ORGANIZATION]'s security team may review notebook access logs, source registries, and usage patterns on a [QUARTERLY / ANNUAL] basis. Non-compliance with this policy may result in access revocation and disciplinary action in accordance with [ORGANIZATION]'s standard HR and conduct policies.

---

- **Policy owner:** [ROLE / NAME]
- **Effective date:** [DATE]
- **Review cadence:** Annually or following material changes to NotebookLM's terms of service or [ORGANIZATION]'s data governance framework
- **Next review date:** [DATE]

---

*This template does not constitute legal advice. Consult qualified legal and compliance professionals before formal adoption.*
