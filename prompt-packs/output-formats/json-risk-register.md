# JSON Risk Register Output Format

Generate a delivery risk register as a JSON object conforming to `schemas/risk-register.schema.json`.

## When to use

Use this prompt pack when you need:
- A machine-readable risk register for import into Azure DevOps, a spreadsheet, or a dashboard
- Consistent risk scoring across team members
- A structured risk register that can be validated and processed programmatically

Use the [delivery-risk-review recipe](../../integrations/azure-devops/recipes/delivery-risk-review.md) if you need a human-readable Markdown risk register instead.

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, generate a delivery risk register for [MILESTONE NAME] as a JSON object.

The JSON must conform to this structure:
{
  "milestone": "string",
  "date": "YYYY-MM-DD",
  "sources": ["source references"],
  "risks": [
    {
      "id": "RISK-NNN",
      "title": "string (≤ 100 chars)",
      "description": "string (what could go wrong and why, ≥ 20 chars)",
      "likelihood": "High | Medium | Low",
      "impact": "High | Medium | Low",
      "score": "Critical | High | Medium | Low",
      "type": "Architecture risk | Security risk | Compliance risk | Delivery risk | External dependency | Resource risk | Technical debt",
      "mitigations": ["string (≥ 1)"],
      "owner_role": "string (role, not personal name)",
      "source": "source document reference",
      "status": "Open | Mitigated | Accepted | Closed"
    }
  ]
}

Risk score calculation:
- High likelihood × High impact = Critical
- High likelihood × Medium impact = High
- Medium likelihood × High impact = High
- Medium likelihood × Medium impact = Medium
- Low likelihood × any = Low

Rules:
- Every risk must cite a source document.
- Compliance and security risks must be flagged with their specific type.
- Do not invent risks; only include risks evidenced in the notebook sources.
- Return only valid JSON.
```

## Expected output shape

```json
{
  "milestone": "Phase 2 go-live",
  "date": "2024-11-15",
  "sources": ["architecture-principles.md", "security-requirements.md §7.1"],
  "risks": [
    {
      "id": "RISK-001",
      "title": "EU data residency scope unresolved for backup storage",
      "description": "Customer has not confirmed whether EU data residency applies to backup storage...",
      "likelihood": "High",
      "impact": "High",
      "score": "Critical",
      "type": "Compliance risk",
      "mitigations": [
        "Schedule clarification call by 2024-11-15",
        "Prepare two architecture options"
      ],
      "owner_role": "solution-architect",
      "source": "security-requirements.md §7.1; customer-meeting-notes.md §Open questions",
      "status": "Open"
    }
  ]
}
```

See a complete example at [schemas/examples/risk-register.example.json](../../schemas/examples/risk-register.example.json).

## Validation notes

Validate the output against the schema:

```bash
node scripts/check-schemas.mjs --schema schemas/risk-register.schema.json --instance risk-register.json
```

Key constraints:
- `id` must match the pattern `RISK-NNN`.
- `score` must be derived from the `likelihood` × `impact` matrix documented in the prompt.
- `mitigations` must have at least 1 item per risk.
- `owner_role` must be a role description, not a personal name.

## Limitations

- Risk scoring is based on the evidence in the notebook, not the team's lived experience; supplement with a team review.
- NotebookLM may not identify risks that are not evidenced in the uploaded sources.
- Compliance risks should be reviewed by a security lead before being presented to stakeholders.
- The `status` field cannot be maintained by NotebookLM; update it manually as risks are mitigated or closed.
