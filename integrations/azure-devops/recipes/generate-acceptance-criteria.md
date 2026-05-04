# Generate Acceptance Criteria with NotebookLM

## Scenario

You have a list of Azure DevOps User Stories that are lacking well-defined acceptance criteria. Use this recipe to generate grounded, testable acceptance criteria for each story by querying NotebookLM against the project's requirements and architecture sources.

## Required NotebookLM sources

- Security and compliance requirements
- Architecture principles and constraints
- API specifications or interface contracts (if applicable)
- Non-functional requirements (performance, availability, scalability)

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, generate acceptance criteria for each of the following User Stories.

For each story:
1. Write ≥ 3 testable acceptance criteria as a checkbox list.
2. Identify any non-functional requirements (performance, security, availability) that apply and cite the source.
3. Flag any criteria that cannot be grounded in the notebook sources as "Ungrounded — requires clarification".
4. Suggest a Definition of Done checklist item if the story has a security or compliance dimension.

User Stories:
[PASTE STORY TITLES AND DESCRIPTIONS HERE]
```

## Expected output

```markdown
### User Story: Display real-time inventory levels on the product page

**Acceptance criteria:**
- [ ] Inventory count updates within 5 seconds of a stock change event
- [ ] If inventory data is unavailable, display "Check availability" instead of a count
- [ ] Inventory count is not displayed for B2B-only SKUs to end consumers
- [ ] Page load time remains ≤ 2 s at P95 with inventory data included (source: nfr-document.md §Performance)

**Non-functional requirements:**
- Performance: inventory endpoint must respond in ≤ 200 ms at P99
  (source: nfr-document.md §3.1)

**Definition of Done (security):** N/A — no PII or financial data in scope.

---

### User Story: Export order history as CSV

**Acceptance criteria:**
- [ ] Exported CSV includes: order ID, date, items, total, status
- [ ] Export is limited to orders owned by the authenticated user (source: security-requirements.md §2.3)
- [ ] File download is served over HTTPS only
- [ ] Export of > 10 000 rows triggers an async job with email notification

**Non-functional requirements:**
- Security: user data export must be scoped to the authenticated session
  (source: security-requirements.md §2.3)

**Definition of Done (security):** Penetration test or security review required before release.
```

## Suggested work item types

| Work item | Use for |
|-----------|---------|
| User Story | Stories with well-defined criteria from this recipe |
| Task | Implementation sub-tasks derived from criteria |
| Test Case | Automated test cases derived from each criterion |

## Quality checklist

- [ ] Each criterion is independently testable
- [ ] Non-functional requirements cite a notebook source
- [ ] "Ungrounded" criteria have been reviewed and resolved before sprint start
- [ ] Definition of Done security items are linked to the security checklist
- [ ] Criteria have been reviewed by a QA engineer before publishing

## Limitations

- Acceptance criteria quality depends entirely on the completeness of the sources in the notebook.
- NotebookLM does not generate test code — criteria must be translated into automated tests manually.
- Performance figures in criteria are only as accurate as the NFR documents in the notebook.
- If sources are contradictory, NotebookLM may generate inconsistent criteria; review for conflicts.
