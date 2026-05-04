# JSON Backlog Output Format

Generate a product backlog as a JSON array conforming to `schemas/backlog-items.schema.json`.

## When to use

Use this prompt pack when you need:
- Backlog items in a machine-readable format for import into Azure DevOps, Jira, or another tool
- Consistent backlog item structure validated against a schema
- A structured array of user stories you can process programmatically

Use the Azure DevOps recipes in `integrations/azure-devops/recipes/` if you need work-item content formatted for direct import.

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, generate a product backlog as a JSON array.

Each element in the array must conform to this structure:
{
  "id": "US-NNN",
  "type": "UserStory | Task | Bug | Impediment | Epic | Feature",
  "title": "string (5–150 chars)",
  "user_story": "As a [role], I want [goal] so that [benefit]",
  "acceptance_criteria": ["string (≥ 1 item)"],
  "priority": 1-4,
  "estimate_points": number,
  "labels": ["string"],
  "parent_id": "EPIC-NNN or FEAT-NNN (if applicable)",
  "source": "source document reference",
  "ungrounded": false
}

Rules:
- Generate [NUMBER] user stories grounded in the notebook sources.
- Every item must have at least 3 acceptance criteria.
- The "source" field must cite a specific source document and section.
- Set "ungrounded": true for any item that cannot be traced to a source, and add a note explaining why.
- Return only valid JSON — a single array with no prose before or after.
```

## Expected output shape

```json
[
  {
    "id": "US-001",
    "type": "UserStory",
    "title": "Corporate IdP login for admin users",
    "user_story": "As an admin user, I want to log in using my corporate identity provider so that I do not need a separate password.",
    "acceptance_criteria": [
      "SAML 2.0 or OIDC flow is supported",
      "Unauthenticated requests redirect to the IdP",
      "Session tokens expire after 8 hours of inactivity"
    ],
    "priority": 1,
    "estimate_points": 8,
    "labels": ["security", "identity"],
    "parent_id": "FEAT-001",
    "source": "security-requirements.md §4.1",
    "ungrounded": false
  }
]
```

See a complete example at [schemas/examples/backlog-items.example.json](../../schemas/examples/backlog-items.example.json).

## Validation notes

Validate the output against the schema:

```bash
node scripts/check-schemas.mjs --schema schemas/backlog-items.schema.json --instance backlog.json
```

Key constraints:
- The root value must be an array (not an object).
- `id` must match the pattern `(US|TASK|EPIC|FEAT|BUG)-NNN`.
- `priority` must be an integer between 1 and 4.
- `acceptance_criteria` must have at least 1 item.

## Limitations

- Copilot may not maintain sequential ID numbering; check for duplicate IDs before import.
- `estimate_points` are suggestions only and should be validated by the delivery team.
- Large backlogs (> 20 items) may be truncated by the Copilot context window; request in batches.
- The `type` enum may not match your tool's work item types exactly; map during import.
