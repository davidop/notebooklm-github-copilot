# Privacy and Data Handling Guide

> **Disclaimer:** This is an unofficial community project. It is not affiliated with Google. Data sent to NotebookLM is subject to Google's Terms of Service and Privacy Policy. Review this guide with your legal and privacy team before use.

---

## Data Flow Overview

```
Developer machine
  → Chrome (local browser automation)
    → notebooklm.google.com
      → Google infrastructure (storage, LLM processing)
```

Every document you upload and every query you submit travels to Google's servers. Treat NotebookLM as an external third-party service.

---

## What Google Receives

When you use this integration, Google receives:

- The full content of every document uploaded as a notebook source.
- Every query submitted to NotebookLM via the MCP tool.
- Session identifiers, IP address, and standard browser telemetry.
- Any follow-up prompts and AI-generated responses.

Refer to the [Google Privacy Policy](https://policies.google.com/privacy) and the [NotebookLM Terms of Service](https://notebooklm.google.com/about) for authoritative details on how Google processes this data.

---

## Personal Data (PII) Warning

**Do not upload documents containing personal data** unless your organisation has a legal basis and a Data Processing Agreement with Google that covers the specific data category.

Examples of data to keep out of NotebookLM:

- Names, email addresses, phone numbers, national ID numbers.
- HR records, performance reviews, salary data.
- Medical or health information.
- Financial account details.
- Any data subject to GDPR, CCPA, or equivalent regulations.

---

## Customer Data Warning

**Do not upload regulated or contractually protected customer data.** Customer agreements typically restrict disclosure of their data to third parties. Uploading customer data to a Google service without their consent and without a valid DPA may breach those agreements.

---

## Google's Data Processing

Google processes data submitted to NotebookLM under its own privacy policy. Your organisation's standard data residency and processing controls do not apply unless Google has agreed to specific contractual terms with you.

- Check whether your Google Workspace agreement covers NotebookLM usage.
- Confirm data residency requirements are met before use in regulated environments.

---

## Data Residency Considerations

Google may process and store data in any region unless your Workspace contract specifies otherwise. If your organisation has regional data residency requirements (e.g., EU data must stay in the EU), confirm compliance before uploading any data.

---

## Retention and Deletion

- Notebooks and their sources persist until you manually delete them in the NotebookLM UI.
- Deleting a notebook removes your access to it, but Google's own retention schedules may apply to underlying data.
- Establish a notebook lifecycle policy: create, use, delete when no longer needed.

---

## Team-Level Controls

- Notebooks are currently personal to the signed-in Google account.
- Do not share Google account credentials to share notebook access; use a service account pattern where possible.
- Audit which notebooks exist on the account regularly and delete unused ones.

---

## Incident Response: Accidental Sensitive Data Upload

If sensitive data is accidentally uploaded to NotebookLM:

1. **Immediately delete the notebook source** in the NotebookLM UI.
2. Delete the entire notebook if necessary.
3. Notify your privacy or security team per your organisation's incident response procedure.
4. Document the incident: what was uploaded, when, and what action was taken.
5. Review whether the data requires regulatory notification (e.g., GDPR breach notification within 72 hours).

---

## Data Classification Checklist

Before uploading any document to NotebookLM, confirm:

- [ ] Document is classified **Public** or explicitly **Approved for third-party AI tools**.
- [ ] Document contains no PII.
- [ ] Document contains no regulated health, financial, or legal data.
- [ ] Document contains no customer confidential or contractually restricted data.
- [ ] Document contains no proprietary credentials, secrets, or keys.
- [ ] Appropriate approvals have been obtained per your org's data governance policy.
