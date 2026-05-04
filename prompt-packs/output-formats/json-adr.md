# JSON ADR Output Format

Generate Architecture Decision Records (ADRs) as validated JSON conforming to `schemas/adr.schema.json`.

## When to use

Use this prompt pack when you need:
- A machine-readable ADR for import into a document management system
- An ADR that can be validated against the JSON schema
- Consistent ADR structure across a large team

Use the Markdown ADR recipe (`recipes/generate-adr.md`) instead if you need a human-readable document for direct publishing.

## Prompt

Copy and paste this prompt into your MCP-connected Copilot client:

```
Use NotebookLM. In the [notebook-name] notebook, generate an Architecture Decision Record for [DECISION TOPIC] as a JSON object.

The JSON must conform to this structure:
{
  "id": "ADR-NNN",
  "title": "string (≤ 120 chars)",
  "status": "Proposed | Accepted | Deprecated | Superseded | Rejected",
  "date": "YYYY-MM-DD",
  "deciders": ["role1", "role2"],
  "context": "string (background and problem statement, ≥ 20 chars)",
  "decision": "string (the decision made, ≥ 10 chars)",
  "rationale": "string (why this decision over alternatives, ≥ 10 chars)",
  "alternatives": [{ "option": "string", "reason_rejected": "string" }],
  "consequences": {
    "positive": ["string"],
    "negative": ["string"],
    "implementation_tasks": ["string"]
  },
  "sources": ["source document references"]
}

Rules:
- Every field in the JSON must be grounded in a notebook source.
- Cite the specific source document and section for the context, decision, and rationale.
- Do not invent data; if a field cannot be grounded, set it to null and flag it in a separate "warnings" key.
- Return only valid JSON — no prose before or after the JSON block.
```

## Expected output shape

```json
{
  "id": "ADR-001",
  "title": "API Gateway Technology Selection",
  "status": "Accepted",
  "date": "2024-11-15",
  "deciders": ["Solution Architect", "Platform Lead"],
  "context": "The platform requires a managed API gateway...",
  "decision": "We will use a managed cloud-native API gateway...",
  "rationale": "The managed option is the only one that satisfies all architecture principle constraints...",
  "alternatives": [
    { "option": "Self-managed reverse proxy", "reason_rejected": "High operational burden" }
  ],
  "consequences": {
    "positive": ["Centralised policy enforcement"],
    "negative": ["Vendor lock-in"],
    "implementation_tasks": ["Configure mTLS", "Set up GitOps pipeline"]
  },
  "sources": ["architecture-principles.md §3", "security-requirements.md §3.2"]
}
```

See a complete example at [schemas/examples/adr.example.json](../../schemas/examples/adr.example.json).

## Validation notes

Validate the output against the schema before using it:

```bash
node scripts/check-schemas.mjs --schema schemas/adr.schema.json --instance output.json
```

Required fields: `id`, `title`, `status`, `date`, `context`, `decision`, `rationale`, `consequences`.

The `id` field must match the pattern `ADR-NNN` (e.g. `ADR-001`).

## Limitations

- Copilot may not produce perfectly valid JSON on the first attempt; check for trailing commas and ensure the response is wrapped in a code block.
- If the notebook sources do not clearly support a field, Copilot may hallucinate plausible-sounding content. Use the `warnings` key to flag uncertain fields.
- `deciders` should contain roles, not personal names, to avoid PII in documents.
- Large decisions with many alternatives may produce JSON that exceeds the Copilot context window; split into smaller decisions if needed.
