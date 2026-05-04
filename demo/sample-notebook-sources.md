# Sample Notebook Sources

This document describes which sources to load into your demo NotebookLM notebook. All sample source files are located in the `sample-sources/` directory at the repository root.

## Sources to load

Load all 6 of the following files into a single NotebookLM notebook named **"demo-notebook"**:

| File | Type | Purpose in demo |
|------|------|-----------------|
| [cloud-modernization-brief.md](../sample-sources/cloud-modernization-brief.md) | Project brief | Provides engagement context and scope |
| [architecture-principles.md](../sample-sources/architecture-principles.md) | Architecture | Drives ADR decisions and backlog constraints |
| [security-requirements.md](../sample-sources/security-requirements.md) | Security | Sources security-related acceptance criteria |
| [customer-meeting-notes.md](../sample-sources/customer-meeting-notes.md) | Meeting notes | Used in work-item and risk demo scenarios |
| [vendor-implementation-guide.md](../sample-sources/vendor-implementation-guide.md) | Vendor doc | Used in API gateway and integration scenarios |
| [previous-proposal-summary.md](../sample-sources/previous-proposal-summary.md) | Proposal | Used in presales proposal scenario |

## How to load sources

1. Open NotebookLM in your browser.
2. Create a new notebook named `demo-notebook`.
3. Click **Add source** for each file in the table above.
4. Upload the file from your local copy of the `sample-sources/` directory.
5. Wait for NotebookLM to process all sources (typically 30–60 seconds per file).
6. Verify by asking: "What sources are loaded in this notebook?" in the NotebookLM chat.

## Important note

> **DISCLAIMER:** All files in `sample-sources/` are fictional demo sources and do not represent a real customer, organisation, or project. Do not use real customer data for demos without explicit data governance approval.

## Recommended notebook settings

- Notebook name: `demo-notebook`
- Sharing: Private (do not share the demo notebook publicly)
- Sources: English only (other languages may affect citation accuracy)

## Refreshing sources

If you make changes to a sample source file, delete the old source from NotebookLM and re-upload the updated file. NotebookLM does not auto-sync with file changes.
