# Code generation from NotebookLM context

Use the `notebooklm` MCP server before editing files.

Task:

```text
Retrieve the source-backed implementation requirements for <feature-name>. Then inspect this repository and propose the smallest safe code change.
```

Rules:

- Cite requirements.
- Identify affected files before editing.
- Add tests where practical.
- Do not add unsupported features.
- Document assumptions.
