# JSON Schemas

JSON Schema definitions for validating structured outputs from NotebookLM + GitHub Copilot.

## Available schemas

| Schema | File | Description |
|--------|------|-------------|
| ADR | [adr.schema.json](adr.schema.json) | Architecture Decision Record |
| Architecture review | [architecture-review.schema.json](architecture-review.schema.json) | Architecture review output |
| Backlog items | [backlog-items.schema.json](backlog-items.schema.json) | Array of user stories |
| Presales proposal | [presales-proposal.schema.json](presales-proposal.schema.json) | Presales proposal section |
| Risk register | [risk-register.schema.json](risk-register.schema.json) | Delivery risk register |

## Example instances

| Example | File |
|---------|------|
| ADR example | [examples/adr.example.json](examples/adr.example.json) |
| Architecture review example | [examples/architecture-review.example.json](examples/architecture-review.example.json) |
| Backlog items example | [examples/backlog-items.example.json](examples/backlog-items.example.json) |
| Risk register example | [examples/risk-register.example.json](examples/risk-register.example.json) |

## Schema version

All schemas use JSON Schema Draft 2020-12 (`https://json-schema.org/draft/2020-12/schema`).

## Validation

Validate generated outputs against these schemas using the check-schemas script:

```bash
npm run check-schemas
```

Or validate a specific file:

```bash
node scripts/check-schemas.mjs --schema schemas/adr.schema.json --instance output.json
```

## Using schemas with output format prompt packs

The output format prompt packs in `prompt-packs/output-formats/` reference these schemas. When asking Copilot to produce JSON output, instruct it to conform to the relevant schema:

```
Use NotebookLM. In the [notebook-name] notebook, generate an ADR as JSON conforming to the adr.schema.json schema. Fields required: id, title, status, context, decision, rationale, consequences, sources.
```
