# Output Format Prompt Packs

These prompt packs instruct GitHub Copilot to produce output in specific structured formats (JSON or Markdown) that can be validated against the schemas in `schemas/`.

## Available prompt packs

| File | Output format | Schema |
|------|---------------|--------|
| [json-adr.md](json-adr.md) | JSON ADR | [schemas/adr.schema.json](../../schemas/adr.schema.json) |
| [json-backlog.md](json-backlog.md) | JSON backlog items array | [schemas/backlog-items.schema.json](../../schemas/backlog-items.schema.json) |
| [json-risk-register.md](json-risk-register.md) | JSON risk register | [schemas/risk-register.schema.json](../../schemas/risk-register.schema.json) |
| [markdown-executive-summary.md](markdown-executive-summary.md) | Markdown executive summary | N/A (Markdown format) |
| [markdown-architecture-review.md](markdown-architecture-review.md) | Markdown architecture review | N/A (Markdown format) |

## When to use output format packs

Use these prompt packs when you need:
- **Machine-readable output** for import into tools (JSON packs)
- **Consistent Markdown structure** across team members (Markdown packs)
- **Schema validation** of generated outputs

## Validating JSON outputs

After generating JSON output, validate it against the schema:

```bash
npm run check-schemas
```

## Combining with core recipes

Output format packs can be combined with core recipes. For example, use the ADR recipe from `recipes/generate-adr.md` to get the full workflow, then use `json-adr.md` to get the output in JSON format for import into a tool.
