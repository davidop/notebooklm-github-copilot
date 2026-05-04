# Triage GitHub Issues with NotebookLM

## Scenario

Your backlog contains a large number of open issues and you want to prioritise, label, and assign them using grounded context from your architecture documents and project requirements. Use this recipe to perform a structured triage pass without losing traceability.

## Required NotebookLM sources

- Architecture principles and constraints document
- Security and compliance requirements
- Roadmap or prioritisation framework
- Sprint capacity notes (if available)

## Prompt for GitHub Copilot

```
Use NotebookLM. In the [notebook-name] notebook, review the following GitHub Issue titles and bodies.
For each issue:
1. Assign a priority (P0 / P1 / P2 / P3) based on the architecture principles and security requirements in the notebook.
2. Suggest labels from: bug, enhancement, security, architecture, documentation, wont-fix, needs-clarification.
3. Identify any issues that conflict with architecture principles and flag them.
4. Note any issues that lack sufficient context to triage.

Issues to triage:
[PASTE ISSUE TITLES AND BODIES HERE]

Cite the notebook source for each priority decision.
```

## Expected output

```markdown
## Triage results

### Issue #42 — "Add OAuth2 support to admin panel"
- **Priority:** P1
- **Labels:** `enhancement`, `security`
- **Rationale:** Aligns with security requirements §4.1 — all admin surfaces must use federated identity (source: security-requirements.md).
- **Conflicts:** None identified.

### Issue #51 — "Migrate database to NoSQL"
- **Priority:** P2
- **Labels:** `architecture`, `needs-clarification`
- **Rationale:** Architecture principles require ACID compliance for financial records (source: architecture-principles.md §2). Needs clarification on which data domains are in scope.
- **Conflicts:** Potential conflict with data-consistency principle.
```

## Recommended GitHub labels

| Label | Triage use |
|-------|-----------|
| `P0` | Critical — blocks release or violates compliance |
| `P1` | High — required for next milestone |
| `P2` | Medium — important but deferrable |
| `P3` | Low — nice-to-have |
| `needs-clarification` | Issue lacks enough context to triage |
| `architecture` | Touches structural decisions |

## Quality checklist

- [ ] Each priority decision is backed by a notebook source citation
- [ ] Conflicting issues have been flagged for human review
- [ ] Labels have been applied consistently across the batch
- [ ] Sensitive customer data has been stripped before pasting into the prompt
- [ ] A human reviewer has approved the triage before updating issues

## Limitations

- NotebookLM only has access to sources you have uploaded; it cannot read live GitHub Issues.
- Triage is only as accurate as the sources in the notebook — outdated docs yield outdated priorities.
- NotebookLM may miss implicit dependencies between issues.
- Do not use this recipe as the sole basis for P0 decisions; always involve the team lead.
