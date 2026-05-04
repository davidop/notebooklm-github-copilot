# Create GitHub Issues from NotebookLM Outputs

## Scenario

You have completed a research or analysis session in NotebookLM and want to convert the findings into actionable GitHub Issues without losing the source grounding. Use this recipe whenever you need to translate requirements, architecture decisions, or meeting notes into trackable work items.

## Required NotebookLM sources

- Customer meeting notes or requirements document
- Architecture principles or constraints document
- Any relevant RFP, brief, or specification
- Previous proposal summaries (if applicable)

## Prompt for GitHub Copilot

Use this prompt after loading your notebook in the Copilot chat:

```
Use NotebookLM. In the [notebook-name] notebook, extract all action items and requirements and format each as a GitHub Issue with:
- Title (imperative, ≤ 72 chars)
- Body: ## Background, ## Acceptance criteria (checkbox list), ## References (cite notebook sources)
- Suggested labels (from: enhancement, bug, documentation, architecture, security)
- Suggested assignee role (e.g. backend-engineer, architect)

Return only source-backed items. Flag any items that lack clear source support.
```

## Expected output

```markdown
### Issue: Implement API gateway rate limiting

**Labels:** `enhancement`, `security`
**Assignee role:** backend-engineer

#### Background
Based on security requirements (source: security-requirements.md), all public
API endpoints must enforce per-client rate limiting.

#### Acceptance criteria
- [ ] Rate limit of 1 000 req/min per client token is enforced
- [ ] 429 responses include a Retry-After header
- [ ] Rate limit events are emitted to the audit log

#### References
- security-requirements.md §3.2 — API protection controls
```

## Recommended GitHub labels

| Label | When to apply |
|-------|---------------|
| `architecture` | Issue relates to structural or design decisions |
| `security` | Issue has a security or compliance dimension |
| `enhancement` | New capability derived from requirements |
| `documentation` | Issue requires only doc updates |
| `needs-triage` | Source grounding is unclear; needs human review |

## Quality checklist

- [ ] Every issue body cites at least one NotebookLM source
- [ ] Acceptance criteria are testable (checkbox list)
- [ ] Title is imperative and ≤ 72 characters
- [ ] No sensitive customer data appears in the issue body
- [ ] Labels have been reviewed by a human before publishing

## Limitations

- NotebookLM cannot access live GitHub data; all issue content is generated from uploaded sources only.
- Copilot cannot create issues directly — use the `gh issue create` CLI or the GitHub web UI to publish.
- Complex multi-team issues may require manual decomposition after generation.
- Always review generated acceptance criteria before publishing; NotebookLM may omit edge cases not covered by sources.
