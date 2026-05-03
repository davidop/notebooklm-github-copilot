# Customer Data Review Checklist

## Purpose

This checklist is used to determine whether a dataset or document containing customer-related information is safe to upload to NotebookLM. Customer data carries specific contractual, regulatory, and reputational risks when shared with third-party AI services.

---

## Owner

Data owner / Privacy team lead / Team lead responsible for the data

---

## When to Use

Complete this checklist whenever a document or dataset may contain customer data — even if it appears to be anonymised or aggregated. Use in conjunction with the [source approval checklist](notebooklm-source-approval-checklist.md).

---

## Checklist

### Step 1: Identify Data Types Present

- [ ] List the types of customer data in the document (e.g., usage logs, configuration exports, support tickets, financial records, contact information).
- [ ] Determine whether any data directly or indirectly identifies a customer organisation or individual end user.
- [ ] Determine whether any data is subject to a specific regulatory regime (GDPR, CCPA, HIPAA-equivalent, financial services regulation).

### Step 2: Check Data Sharing Agreements

- [ ] Review the relevant customer contract(s) for data sharing restrictions.
- [ ] Confirm whether the contract permits sharing customer data with third-party AI services (most standard agreements do not).
- [ ] If no explicit permission exists, assume sharing is **not permitted** and do not upload.

### Step 3: Check Customer Consent

- [ ] Confirm whether the customer has consented to their data being processed by Google's NotebookLM.
- [ ] If consent is required and has not been obtained, do not upload.

### Step 4: Check Regulatory Requirements

- [ ] If the data involves EU residents, confirm GDPR compliance (legal basis, DPA with Google for this service).
- [ ] If the data involves California residents, confirm CCPA obligations are met.
- [ ] If health-related data is present, confirm no PHI is included (HIPAA-adjacent risk).

### Step 5: Anonymisation and Pseudonymisation

- [ ] If the document must be used, determine whether it can be sufficiently anonymised or pseudonymised before upload.
- [ ] Confirm that anonymised data cannot be re-identified using information available in the notebook or externally.
- [ ] Document the anonymisation method applied.

### Step 6: Document Approval

- [ ] Privacy team or designated data owner has reviewed and approved the upload (or anonymised substitute).
- [ ] Approval is recorded with date, approver name, and justification.

---

## Evidence to Collect

- Description of data types present.
- Relevant contract clause or privacy team sign-off.
- Anonymisation method (if applied).
- Approver name, role, and date.

---

## Approval Notes

| Field | Value |
|---|---|
| Document / dataset description | |
| Customer(s) involved | |
| Regulatory regimes applicable | |
| Anonymisation applied | ☐ Yes  ☐ No  ☐ N/A |
| Date of review | |
| Reviewer | |
| Approval status | ☐ Approved  ☐ Rejected  ☐ Approved with anonymisation |
| Notes | |

---

## Review Cadence

- Complete for each new customer-related document considered for upload.
- Revisit if customer contracts, data classification, or regulatory status of the data changes.
