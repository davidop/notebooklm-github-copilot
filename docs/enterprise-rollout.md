# Enterprise rollout guide

## Recommended rollout phases

### Phase 1: Individual pilot

- Use `notebooklm-mcp@latest`.
- Use a non-sensitive NotebookLM notebook.
- Validate authentication and basic querying.
- Capture failure modes and prompts that work well.

### Phase 2: Team pilot

- Pin a specific `notebooklm-mcp` version.
- Define approved notebooks and data classifications.
- Review local browser profile handling.
- Add team-specific instructions under `.github/instructions`.

### Phase 3: Production use

- Keep version pinning mandatory.
- Review package updates before adoption.
- Document approved use cases.
- Monitor source quality and prompt patterns.

## Suggested controls

| Control | Recommendation |
|---|---|
| Package version | Pin after pilot validation |
| Data classification | Allow only approved documentation |
| Google account | Use named work accounts |
| Secrets | Never upload secrets or credentials |
| Local session | Protect with endpoint security and disk encryption |
| Evidence | Require citations for requirements and decisions |

## Version pinning

Update `.vscode/mcp.json` from:

```json
"notebooklm-mcp@latest"
```

to:

```json
"notebooklm-mcp@2.0.0"
```

Then run:

```bash
npm run validate
```
