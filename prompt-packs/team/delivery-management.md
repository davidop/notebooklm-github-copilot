# Team Prompt Pack: Delivery Management

## Team profile

Delivery management teams include project managers, delivery managers, scrum masters, and programme managers. They track delivery progress, manage risks, facilitate retrospectives, and produce status reports. Their knowledge is distributed across meeting notes, project specifications, risk registers, and handover documents.

This pack helps delivery teams extract structured output from unstructured meeting notes, identify risks from project documents, and generate consistent status reporting—grounded in actual project documentation rather than recalled summaries.

---

## Common workflows

- **Meeting notes to backlog**: Extract action items, decisions, and backlog items from sprint or project meeting notes.
- **Status reporting**: Generate structured status updates from project documentation.
- **Risk identification**: Identify and categorise risks from project specifications and delivery artefacts.
- **Retrospective insights**: Summarise patterns and themes from multiple retrospective notes.

---

## Required NotebookLM sources

- Sprint and project meeting notes (uploaded after each meeting)
- Project specifications and scope documents
- Risk register and issue log
- Delivery handover documentation
- Previous status reports (for consistency reference)

---

## Recommended agent / client

**GitHub Copilot** — effective for structured text generation, status report drafting, and backlog item formatting directly in Markdown or project tooling.

---

## Copy-paste prompts

```
Use NotebookLM. In the meeting-notes notebook, extract all action items and owners
from the last sprint review. Return: action item, owner, due date if mentioned,
and the meeting where it was raised. Cite the source note for each item.
```

```
Use NotebookLM. In the project-specifications notebook, identify risks for
the upcoming [milestone or phase]. Return: risk description, likelihood, impact,
affected workstream, and a suggested mitigation. Cite the relevant specification section.
```

```
Use NotebookLM. In the meeting-notes notebook, generate a weekly status report
for the week ending [date]. Include: progress summary, decisions made, blockers,
action items outstanding, and risks raised. Cite source notes for each section.
```

```
Use NotebookLM. In the meeting-notes notebook and the risk-register notebook,
identify all open risks and blockers raised in the last two weeks that have not been resolved.
Return: risk or blocker, date raised, owner, and current status. Cite each source.
```

```
Use NotebookLM. In the meeting-notes notebook, summarise retrospective themes
from the last three sprints. Return: recurring positives, recurring blockers,
action items raised, and action items not yet closed. Cite the retrospective notes.
```

```
Use NotebookLM. In the delivery-handover notebook, identify all outstanding dependencies
and assumptions documented at handover for [workstream or phase].
Return: dependency or assumption, owner, status, and the handover section it came from.
```

---

## Output format

- **Action item lists**: Table with item, owner, due date, and source citation
- **Status reports**: Structured Markdown with sections for progress, decisions, blockers, and risks
- **Risk summaries**: Table with risk, likelihood, impact, mitigation, and citation
- **Retrospective summaries**: Categorised list with themes and supporting evidence from notes

---

## Quality checklist

- [ ] Every action item is attributed to a specific meeting note source
- [ ] Risks are grounded in project documentation, not generated assumptions
- [ ] Status reports distinguish between completed items and items in progress
- [ ] Retrospective summaries cite at least two source notes per theme
- [ ] Outputs flag where information was absent or unclear in the sources

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Meeting notes are incomplete or missing context | Encourage consistent note-taking format; upload notes within 24 hours of the meeting |
| Confidential discussions appear in shared outputs | Review generated outputs before sharing; apply audience-appropriate filtering |
| Action items attributed to the wrong owner | Cross-reference with the original note before distributing action item lists |
| Stale risk register leads to missed mitigations | Update the risk register notebook at least weekly and before each review |
