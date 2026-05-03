# Copilot repository instructions (example)

This is an example of the Copilot instructions used in this repository.
The active file is `.github/copilot-instructions.md`.
Copy and adapt this for your own project.

---

# Copilot repository instructions

You are working in a repository configured to use NotebookLM through MCP.

## Research policy

Use the `notebooklm` MCP server before making architecture, implementation, presales, migration, or documentation decisions that depend on knowledge outside this repository.

Use NotebookLM especially when the task mentions:

- customer-specific requirements
- proposal reuse
- architecture decisions
- vendor or product documentation
- prior delivery documentation
- meeting notes
- service descriptions
- migration constraints
- security or compliance requirements

## Source discipline

When NotebookLM returns citations, preserve the source names or citation references in your answer. If NotebookLM cannot find support for a claim, say so instead of inventing context.

## Implementation discipline

Before editing code from document-derived requirements:

1. Query NotebookLM for the relevant requirements.
2. Summarize the grounded findings.
3. Identify affected files.
4. Make the smallest viable change.
5. Add or update tests where practical.
6. Document assumptions.

## Security discipline

Never send secrets, API keys, credentials, private keys, personal data, or regulated customer data to NotebookLM unless the user explicitly confirms that the data is approved for that system.

Do not paste `.env` files, token values, tenant secrets, certificates, production logs with sensitive identifiers, or private customer data into NotebookLM.

## Decision discipline

If repository code conflicts with NotebookLM context, call out the conflict and ask whether code or documents are authoritative.

Prefer exact, grounded answers over generic best practices.
