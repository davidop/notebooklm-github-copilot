# Create Azure DevOps Work Items from Meeting Notes

## Scenario

You have customer or team meeting notes loaded into NotebookLM and want to extract all action items and decisions as Azure DevOps work items. Use this recipe immediately after a discovery or design session to ensure nothing is lost.

## Required NotebookLM sources

- Customer meeting notes or session transcript
- Architecture principles document (to validate scope)
- Sprint capacity or velocity notes
- Existing backlog export (optional, to avoid duplicates)

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, extract all action items, decisions, and open questions from the meeting notes.

For each item, create an Azure DevOps work item with:
- Work item type: Task, User Story, or Bug (choose the most appropriate)
- Title (imperative, ≤ 80 chars)
- Description: context from the meeting, written in plain language
- Acceptance criteria: what "done" looks like for this item
- Area path suggestion (if derivable from the context)
- Assigned to (role, not name): e.g. "backend-engineer", "architect"
- Priority: 1 (critical) to 4 (low), based on the meeting discussion

Cite the meeting notes source for each item. Flag open questions as separate items with type "Impediment".
```

## Expected output

```markdown
## Work items from [Meeting date] — [Meeting name]

### Work Item: Configure authentication for the admin portal
- **Type:** User Story
- **Priority:** 2
- **Assigned to:** backend-engineer
- **Area path:** Platform / Identity
- **Description:** During the discovery session, the customer confirmed that
  all admin users must authenticate via their corporate IdP (source: meeting-notes-2024-11-01.md).
- **Acceptance criteria:**
  - [ ] Admin portal redirects unauthenticated requests to the corporate IdP
  - [ ] Session tokens expire after 8 hours of inactivity
  - [ ] Login events are written to the audit log

### Work Item: [Open question] Confirm data residency requirements for EU region
- **Type:** Impediment
- **Priority:** 1
- **Description:** Customer has not confirmed whether EU data residency applies
  to backup storage (source: meeting-notes-2024-11-01.md §Open questions).
```

## Suggested work item types

| Type | When to use |
|------|-------------|
| User Story | A deliverable feature or capability |
| Task | A technical implementation step |
| Bug | A defect identified in the meeting |
| Impediment | A blocking open question or dependency |
| Feature | A grouping of related user stories |

## Quality checklist

- [ ] Every work item cites the meeting notes source
- [ ] Open questions are captured as Impediments, not silently dropped
- [ ] Acceptance criteria use checkbox format
- [ ] No personal data (names, email addresses) appears in work item descriptions
- [ ] Area paths have been validated against the actual ADO project structure

## Limitations

- NotebookLM can only process sources that have been uploaded; verbal-only commitments not in notes will be missed.
- Area path assignments are suggestions only — verify against your ADO project hierarchy before importing.
- Meeting notes quality directly affects output quality; poorly structured notes yield less precise work items.
- NotebookLM cannot create work items directly; use the Azure DevOps CSV import or `az boards` CLI.
