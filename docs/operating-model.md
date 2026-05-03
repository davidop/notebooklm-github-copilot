# Operating model

## Roles

### Repository owner

- Maintains this starter repository.
- Reviews MCP configuration updates.
- Pins MCP package versions for enterprise usage.

### Developer or architect

- Authenticates locally with the approved Google account.
- Uses NotebookLM for source-grounded context.
- Keeps sensitive data out of NotebookLM unless approved.

### Security reviewer

- Reviews NotebookLM data classification.
- Confirms browser profile handling.
- Approves allowed notebooks and accounts.

## Versioning strategy

For experiments, use:

```json
"notebooklm-mcp@latest"
```

For production team usage, pin a specific version after validation:

```json
"notebooklm-mcp@x.y.z"
```

## Recommended governance

- Maintain a list of approved notebooks.
- Maintain a list of data types that must not be uploaded.
- Rotate or reset local browser profiles when a developer changes role.
- Avoid shared Google accounts where possible.
- Review MCP package updates before broad rollout.
