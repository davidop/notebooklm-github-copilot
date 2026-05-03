# Compliance Considerations

> **Disclaimer:** This document is not legal advice. It is provided for informational purposes only. Consult your legal, compliance, and data protection teams before using this integration in regulated environments. This project is not affiliated with Google, GitHub, Microsoft, or any other company.

---

## General Guidance

This integration sends data to Google's NotebookLM service, which is an external third-party AI tool. Organisations subject to compliance frameworks must evaluate whether this use is permissible under their applicable regulations, contractual obligations, and internal policies.

---

## Common Compliance Frameworks

### GDPR (and equivalent data protection regulations)

- Uploading personal data of EU residents to NotebookLM triggers GDPR obligations.
- A valid legal basis and, typically, a Data Processing Agreement (DPA) with Google is required.
- Data subject rights (access, erasure) may be difficult to fulfil via NotebookLM.
- **Recommendation:** Do not upload personally identifiable information unless you have confirmed a DPA is in place and covers NotebookLM.

### ISO 27001

- Use of external cloud services must be assessed under your organisation's Supplier Relationships control (A.15 / A.5.19 in ISO 27001:2022).
- A risk assessment for NotebookLM as a third-party processor should be documented.
- **Recommendation:** Include `notebooklm-mcp` and NotebookLM in your asset register and supplier risk assessment.

### SOC 2

- SOC 2 requires controls around data availability, confidentiality, and processing integrity.
- Data uploaded to NotebookLM is outside the SOC 2 boundary of your own systems.
- **Recommendation:** Document NotebookLM as an out-of-scope system and ensure your own controls prevent in-scope data from being uploaded.

### HIPAA-Adjacent Scenarios

- Protected Health Information (PHI) must never be uploaded to NotebookLM without a Business Associate Agreement (BAA) with Google specifically covering this service.
- If you cannot confirm a BAA exists and covers NotebookLM, treat it as off-limits for any PHI.

---

## Third-Party AI Tool Usage Policies

Many organisations have policies governing use of generative AI and third-party AI tools. Before deploying this integration:

- Check your organisation's acceptable use policy for AI tools.
- Confirm the tool is on your approved software list or obtain approval.
- Use the [MCP server approval checklist](../checklists/security/mcp-server-approval-checklist.md).

---

## Data Classification Requirements

Apply your organisation's data classification scheme. Typically only **Public** or **Internal – AI Approved** data should be uploaded. See [privacy and data handling](privacy-and-data-handling.md) for a classification checklist.

---

## Approved Tool Lists and Procurement

- Raise a procurement or tool approval request for `notebooklm-mcp` and the NotebookLM service if required by your organisation.
- Include the version, licence (Apache 2.0 for `notebooklm-mcp`), and data flow description.

---

## Audit Trail Limitations

- NotebookLM does not expose a machine-readable audit log to users.
- Queries, uploads, and deletions are not automatically captured in your SIEM.
- Maintain your own records of what notebooks exist, what sources are loaded, and who has access.

---

## Questions for Legal and Compliance Review

Before deploying, get answers to:

1. Does our Google Workspace agreement cover NotebookLM as a service?
2. Is there a DPA with Google that covers data processed by NotebookLM?
3. What data residency region does NotebookLM use for our account?
4. Is NotebookLM on the organisation's approved AI tool list?
5. What are our obligations if sensitive data is accidentally uploaded?

---

## Checklist: Before Using NotebookLM for Compliance-Sensitive Work

- [ ] Legal / compliance team has reviewed and approved the tool.
- [ ] A DPA or equivalent agreement is confirmed with Google for this service.
- [ ] Data classification policy has been applied; only approved-tier data will be uploaded.
- [ ] Tool is on the organisation's approved software / AI tool list.
- [ ] Audit trail approach is documented (manual records, notebook inventory).
- [ ] Incident response plan for accidental data upload is in place.
- [ ] Developer training on data handling has been completed.
