# Usage guide

## Standard workflow

1. Start Copilot Chat in Agent mode.
2. Enable the `notebooklm` MCP tools.
3. Ask Copilot to select or confirm the relevant notebook.
4. Ask a narrow, citation-backed question.
5. Use the answer to make code, architecture, proposal, or documentation changes.

## Good prompt patterns

```text
Use NotebookLM. In the project proposal notebook, answer with citations:
What are the mandatory non-functional requirements for the target platform?
Return a table with requirement, source, implication for architecture, and open question.
```

```text
Use NotebookLM to retrieve all source-backed constraints related to identity, RBAC, network isolation, monitoring, backup, and compliance. Then update docs/architecture.md accordingly.
```

```text
Use NotebookLM to compare the current implementation plan with the customer requirements. Identify gaps only when there is source evidence.
```

## Bad prompt patterns

Avoid:

```text
Read everything and build the solution.
```

Avoid:

```text
Use NotebookLM to search secrets or credentials.
```

Avoid:

```text
Assume the customer wants the standard architecture.
```

## Expected answer format for Copilot

When using NotebookLM, ask Copilot to return:

```text
1. Source-backed findings
2. Citations or source references
3. Design implications
4. Risks
5. Open questions
6. Proposed repository changes
```
