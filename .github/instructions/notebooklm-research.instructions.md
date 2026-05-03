---
applyTo: "**/*"
---

# NotebookLM research workflow

When using NotebookLM MCP:

1. First identify the target notebook or ask NotebookLM to list notebooks.
2. Select the notebook that best matches the user intent.
3. Ask a narrow question with the expected output format.
4. Request citations or source references whenever available.
5. Treat missing evidence as a result, not as permission to infer.

Preferred query shape:

```text
Use NotebookLM. In the <notebook-name> notebook, answer this with citations: <question>. Return: findings, source-backed constraints, open questions, and recommended next step.
```

Avoid broad prompts such as:

```text
Tell me everything about this project.
```

Prefer:

```text
What are the non-functional requirements for the Azure landing zone migration? Return only source-backed constraints and cite each one.
```
