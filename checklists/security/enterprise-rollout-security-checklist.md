# Enterprise Rollout Security Checklist

## Purpose

This checklist must be completed before deploying the notebooklm-github-copilot integration across an organisation or team. It consolidates all security, data governance, operational, and compliance requirements into a single sign-off document.

---

## Owner

Platform team / Security team

---

## When to Use

Complete this checklist before any organisation-wide or team-wide deployment. Also revisit annually and after any major version upgrade, security incident, or significant change to the data classification or compliance requirements.

---

## Checklist

### MCP Server Approval

- [ ] [MCP server approval checklist](mcp-server-approval-checklist.md) completed and signed off.
- [ ] Package version is pinned; lockfile is committed.
- [ ] `npm audit` shows no unresolved critical or high vulnerabilities.
- [ ] Licence compatibility confirmed by legal team (if required).
- [ ] Source code review completed for the pinned version.

### Data Governance

- [ ] Data classification policy for NotebookLM sources is documented and communicated to all users.
- [ ] [Source approval checklist](notebooklm-source-approval-checklist.md) is required before any document upload.
- [ ] [Customer data review checklist](customer-data-review-checklist.md) is required for any customer-related content.
- [ ] [Privacy and data handling guide](../../docs/privacy-and-data-handling.md) has been reviewed by the privacy / legal team.
- [ ] [Compliance considerations guide](../../docs/compliance-considerations.md) has been reviewed and applicable requirements are addressed.
- [ ] Legal basis and DPA with Google confirmed (if required by applicable regulations).

### Browser Profile Management

- [ ] [Browser profile checklist](browser-profile-checklist.md) is completed for each developer before first use.
- [ ] Profile storage on encrypted volumes is confirmed for all workstations.
- [ ] `.gitignore` configuration prevents profile commits; this is enforced or documented in onboarding.
- [ ] Profile rotation schedule is defined and communicated (minimum quarterly).
- [ ] Offboarding procedure for profile cleanup is documented.

### Developer Training

- [ ] All users have read the [security hardening guide](../../docs/security-hardening.md).
- [ ] All users have read the [privacy and data handling guide](../../docs/privacy-and-data-handling.md).
- [ ] Prompt injection risks are explained in onboarding materials.
- [ ] Users know how to report security incidents and suspicious AI outputs.

### Policy Documentation

- [ ] Acceptable use policy for this integration is written and published internally.
- [ ] The integration is registered in the organisation's approved software / AI tool list.
- [ ] Procurement / tool approval process completed (if required).

### Incident Response

- [ ] Incident response runbook for browser profile compromise is documented.
- [ ] Incident response runbook for accidental sensitive data upload is documented.
- [ ] Security team contact for this integration is identified and communicated.
- [ ] Users know the steps to immediately revoke a Google session if compromised.

### Audit and Monitoring

- [ ] AI client tool call logging is enabled where available.
- [ ] A notebook inventory (list of notebooks, their sources, and owners) is maintained.
- [ ] Periodic review cadence for the notebook inventory is scheduled (at least quarterly).
- [ ] Known auditability limitations (no machine-readable NotebookLM audit log) are documented and accepted.

### Organisational Approvals

- [ ] Security team sign-off obtained.
- [ ] Legal / privacy team sign-off obtained (if applicable).
- [ ] Platform team sign-off obtained.
- [ ] Senior stakeholder / CISO approval obtained (if required by your governance framework).

---

## Evidence to Collect

- Signed copies of all referenced sub-checklists.
- Legal / DPA confirmation documentation.
- Training completion records.
- Approved tool list entry.
- Incident response runbooks.

---

## Approval Notes

| Field | Value |
|---|---|
| Deployment scope (team / org) | |
| Package version approved | |
| Date of review | |
| Security team approver | |
| Legal / privacy approver | |
| Platform team approver | |
| Overall approval status | ☐ Approved  ☐ Conditionally approved  ☐ Rejected |
| Conditions / notes | |

---

## Review Cadence

- **Annual** review, or
- After any **major version upgrade** of `notebooklm-mcp`, or
- After any **security incident** involving this integration, or
- When **compliance requirements** or **data classification policies** change.
