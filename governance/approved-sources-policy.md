# Approved Sources Policy

**Template — adapt to your organization's legal, compliance, and security requirements.**

---

## 1. Purpose

This policy defines how [ORGANIZATION] classifies, approves, and manages document sources that are loaded into Google NotebookLM notebooks used in AI-assisted engineering workflows. It ensures that only appropriate content is made available to AI tools and that source provenance is documented and auditable.

---

## 2. Scope

This policy applies to all staff who create or maintain NotebookLM notebooks for use in engineering, architecture, presales, or other workflows at [ORGANIZATION]. It covers documents, files, URLs, and any other content ingested into a notebook.

---

## 3. Source classification

| Class | Definition | Examples |
|-------|-----------|----------|
| **Approved** | Content cleared for use in AI-assisted workflows without additional review | Publicly available vendor documentation, internal technical standards, approved architecture templates, published ADRs |
| **Conditional** | Content that may be used with documented owner approval and restricted notebook access | Internal design documents, project retrospectives, approved partner documentation |
| **Prohibited** | Content that must never be loaded into any NotebookLM notebook | Customer PII, regulated data (PHI, PCI, etc.), credentials or secrets, confidential legal documents, data covered by NDA without explicit AI-use authorization |

When in doubt, treat a source as **Conditional** and obtain owner approval before loading it.

---

## 4. Approval process

### Who approves

- **Approved class:** Engineering lead or document owner self-declares; no formal approval required.
- **Conditional class:** Document owner plus [SECURITY / DATA GOVERNANCE TEAM] must approve in writing before the source is loaded.
- **Prohibited class:** No approval pathway exists. These sources must not be used.

### How to request approval for Conditional sources

1. Submit a source approval request to [DATA GOVERNANCE CONTACT / TICKETING SYSTEM].
2. Identify the document, its data classification, and the intended notebook and use case.
3. Obtain written approval from both the document owner and [SECURITY TEAM].
4. Record approval in the Source Registry (see Section 5).

### How to document approved sources

All approved sources must be logged in the Source Registry before the notebook is shared with any collaborator or connected to any AI tool integration.

---

## 5. Source registry requirements

Each team or project maintaining notebooks must keep a Source Registry — a lightweight record that captures:

- Source name and brief description
- Classification (Approved / Conditional)
- Document owner
- Approval date and approver name (for Conditional)
- Notebook(s) the source appears in
- Scheduled review date

The registry may be maintained in a shared spreadsheet, wiki page, or ticketing system, provided it is accessible to [SECURITY / GOVERNANCE TEAM] on request.

---

## 6. Periodic review

Source registries must be reviewed [QUARTERLY / SEMI-ANNUALLY]. During review, teams should:

- Confirm each source is still relevant and in use.
- Verify the classification has not changed (e.g., a document previously internal may now be public, or vice versa).
- Remove stale or superseded sources from active notebooks.

---

## 7. Revocation process

If a source's classification changes (e.g., a document becomes confidential or is subject to a new NDA), the notebook owner must:

1. Remove the source from all affected notebooks immediately.
2. Notify [SECURITY TEAM] within [24 / 48] hours.
3. Document the revocation in the Source Registry.
4. Assess whether any AI-generated outputs based on that source need to be reviewed or retracted.

---

## 8. Owner responsibilities

Notebook owners are responsible for:

- Ensuring all sources in their notebooks are classified and registered.
- Reviewing and updating the Source Registry on the required cadence.
- Promptly revoking access to any source that changes classification.
- Not sharing notebooks that contain Conditional sources with unauthorized collaborators.

---

*This template does not constitute legal advice. Consult qualified legal and compliance professionals before formal adoption.*
