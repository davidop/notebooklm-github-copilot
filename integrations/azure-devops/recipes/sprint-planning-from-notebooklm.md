# Sprint Planning from NotebookLM

## Scenario

Your team is preparing for a sprint planning session and you want to use NotebookLM to suggest which backlog items to pull into the sprint, identify dependencies, and surface risks — all grounded in the project's architecture and requirements sources.

## Required NotebookLM sources

- Product backlog export (CSV or markdown)
- Architecture principles and constraints
- Security requirements (to flag compliance-gated items)
- Delivery risk register or meeting notes from the last retrospective

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, help plan sprint [SPRINT NUMBER] with a capacity of [CAPACITY POINTS] story points.

The candidate backlog items are:
[PASTE BACKLOG ITEMS WITH ESTIMATES]

For each item:
1. Recommend include / defer / block with a brief rationale grounded in the notebook sources.
2. Identify dependencies between items in this list.
3. Flag any item with a security or compliance gate that must be resolved before it can be released.
4. Suggest a sprint goal based on the highest-value items.

Cite the source for any recommendation involving a security or architecture constraint.
```

## Expected output

```markdown
## Sprint 14 planning recommendations
**Capacity:** 40 story points
**Suggested sprint goal:** Deliver authenticated admin portal with audit logging

### Recommended for sprint

| ID | Title | Points | Rationale |
|----|-------|--------|-----------|
| US-42 | Admin portal login via corporate IdP | 8 | P1; unblocks all admin workflows. Security req §4.1 (source: security-requirements.md) |
| US-51 | Audit log for login/logout events | 5 | Dependency of US-42; compliance gate (source: security-requirements.md §4.3) |
| US-67 | Rate limiting on public API | 8 | P1; required before external beta (source: security-requirements.md §3.2) |

**Total: 21 points**

### Deferred

| ID | Title | Reason |
|----|-------|--------|
| US-89 | NoSQL migration | Architecture conflict — ACID required for financial records (source: architecture-principles.md §2) |

### Blocked

| ID | Title | Blocker |
|----|-------|---------|
| US-103 | EU data residency configuration | Open question on backup storage scope — needs customer confirmation |
```

## Suggested work item types

| Item | ADO type |
|------|----------|
| Sprint goal | Sprint (description field) |
| Recommended item | User Story / Task |
| Blocked item | Impediment |
| Dependency note | Link: Predecessor/Successor |

## Quality checklist

- [ ] Sprint goal is agreed by the product owner before the session
- [ ] Blocked items have an owner assigned to resolve the blocker
- [ ] Security-gated items are not marked "Done" until the gate is cleared
- [ ] Capacity includes buffer for unplanned work (≥ 20%)
- [ ] Dependencies between sprint items are captured as ADO links

## Limitations

- NotebookLM cannot read live ADO backlog data; you must paste the backlog extract into the prompt.
- Story point estimates come from your team, not from NotebookLM.
- Sprint recommendations are advisory only — the team and product owner make the final call.
- Compliance gate identification is only as complete as the security requirements in the notebook.
