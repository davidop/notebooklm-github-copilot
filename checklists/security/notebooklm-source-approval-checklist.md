# NotebookLM Source Approval Checklist

## Purpose

This checklist must be completed before uploading any document as a source to a NotebookLM notebook through this integration. It ensures that only appropriately classified, approved data is sent to Google's NotebookLM service.

---

## Owner

Document owner / Team lead

---

## When to Use

Complete this checklist for **every document** before it is uploaded as a NotebookLM source. Keep a record of approvals for audit purposes.

---

## Checklist

### Data Classification

- [ ] The document has been assigned a data classification label (e.g., Public, Internal, Confidential, Restricted).
- [ ] The classification is **Public** or explicitly **Internal – Approved for third-party AI tools** (or equivalent in your org's classification scheme).
- [ ] Documents classified Confidential, Restricted, or equivalent have **not** been uploaded without explicit additional approval.

### PII Check

- [ ] The document does not contain names, email addresses, phone numbers, or other direct identifiers of natural persons.
- [ ] The document does not contain national ID numbers, passport numbers, or similar government identifiers.
- [ ] The document does not contain financial account numbers, payment card data, or equivalent.

### Regulated Data Check

- [ ] The document does not contain health or medical information (HIPAA-relevant or equivalent).
- [ ] The document does not contain data subject to financial services regulations.
- [ ] The document does not contain data subject to legal privilege.

### Confidentiality and IP Check

- [ ] The document does not contain trade secrets or unreleased product information that the organisation is not prepared to expose to a third-party AI service.
- [ ] The document does not contain content that is copyright-restricted in a way that would prevent sharing with a third-party processor.
- [ ] The document does not contain information received under NDA from a third party.

### Customer Data Check

- [ ] The document does not contain data belonging to or describing identifiable customers of the organisation.
- [ ] No customer contractual restrictions prevent sharing this content with Google.
- [ ] See [customer data review checklist](customer-data-review-checklist.md) for customer data scenarios.

### Sensitivity Labels and Google ToS Alignment

- [ ] The document's sensitivity label (if any) permits upload to external AI services.
- [ ] The planned use of this document in NotebookLM is consistent with Google's Terms of Service.

---

## Evidence to Collect

- Document name and description.
- Classification label assigned.
- Name of reviewer who completed this checklist.
- Date of review.
- Notes on any borderline decisions.

---

## Approval Notes

| Field | Value |
|---|---|
| Document name / description | |
| Classification | |
| Date of review | |
| Reviewer | |
| Approval status | ☐ Approved  ☐ Rejected  ☐ Needs further review |
| Notes | |

---

## Review Cadence

- Complete this checklist for each new document added to a notebook.
- Revisit existing notebooks periodically (at least quarterly) to confirm sources remain appropriate.
- Remove sources that no longer meet the criteria.
