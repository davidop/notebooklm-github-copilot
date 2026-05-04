# Convert ADRs to GitHub Issues

## Scenario

You have a set of Architecture Decision Records (ADRs) in your NotebookLM notebook and want to convert each ADR's consequences and implementation tasks into trackable GitHub Issues. Use this recipe after an architecture decision session to ensure all implementation work is captured in the backlog.

## Required NotebookLM sources

- ADR files (one or more)
- Architecture principles document
- Sprint or milestone planning notes

## Prompt for GitHub Copilot

```
Use NotebookLM. In the [notebook-name] notebook, review all ADRs and for each one:
1. Identify the implementation tasks in the "Consequences" or "Decision" section.
2. Create one GitHub Issue per implementation task with:
   - Title (imperative, ≤ 72 chars)
   - Body: ## Context (cite the ADR), ## Task, ## Acceptance criteria (checkbox list), ## ADR reference
   - Suggested labels: architecture, enhancement, security (as appropriate)
   - Suggested milestone (if derivable from ADR status)
3. Flag any ADR tasks that are already marked "Decided" but have no corresponding issue.

Cite the source ADR for each issue.
```

## Expected output

```markdown
### Issue: Configure API gateway with mTLS between services

**Source ADR:** ADR-009 — Service mesh communication policy
**Labels:** `architecture`, `security`
**Milestone:** Q3 infrastructure hardening

#### Context
ADR-009 decided to use mutual TLS (mTLS) for all inter-service communication
within the platform boundary (source: adr-009-service-mesh.md §Decision).

#### Task
Configure the API gateway to enforce mTLS for all east-west traffic.

#### Acceptance criteria
- [ ] mTLS is enforced on all internal service routes
- [ ] Certificate rotation is automated via cert-manager
- [ ] A failing mTLS handshake results in a 503 with a structured error body

#### ADR reference
ADR-009 — Service mesh communication policy (Decided, 2024-11-01)
```

## Recommended GitHub labels

| Label | When to apply |
|-------|---------------|
| `architecture` | All ADR-derived issues |
| `security` | ADR has a security consequence |
| `enhancement` | ADR introduces new capability |
| `adr-tracking` | Use to filter all ADR-derived issues |

## Quality checklist

- [ ] Each issue cites the source ADR by number and title
- [ ] Acceptance criteria are testable and specific
- [ ] Milestone is set where derivable from ADR status
- [ ] No issues created for ADR tasks already completed
- [ ] A human architect has reviewed generated issues before publishing

## Limitations

- NotebookLM can only process ADRs uploaded as sources; ADRs not in the notebook will be missed.
- Consequences sections of ADRs vary in quality; generated issues depend on the clarity of the original ADR.
- The recipe does not check for duplicate issues in GitHub — always search before creating.
- ADRs in "Proposed" status may generate premature issues; filter these manually.
