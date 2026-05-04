# Delivery Risk Review with NotebookLM

## Scenario

You are approaching a milestone or release gate and want to produce a structured delivery risk register grounded in the project's architecture, requirements, and meeting notes. Use this recipe to identify, assess, and document delivery risks before they become incidents.

## Required NotebookLM sources

- Architecture principles and constraints
- Security and compliance requirements
- Customer meeting notes (especially open questions)
- Sprint velocity and capacity data
- Previous risk registers (if available)

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, perform a delivery risk review for [MILESTONE NAME].

For each risk you identify:
1. Risk title (≤ 10 words)
2. Description: what could go wrong and why
3. Likelihood: High / Medium / Low (with rationale from sources)
4. Impact: High / Medium / Low (with rationale from sources)
5. Risk score: Likelihood × Impact (H×H=Critical, H×M=High, M×M=Medium, L×*=Low)
6. Mitigation: specific, actionable steps
7. Owner role: who should own this risk
8. Source: cite the notebook document that surfaces this risk

Flag any risks that are security or compliance related separately.
```

## Expected output

```markdown
## Delivery risk register — [Milestone name] — [Date]

### RISK-001: EU data residency requirement unresolved
- **Likelihood:** High
- **Impact:** High
- **Risk score:** Critical
- **Description:** Customer has not confirmed the scope of EU data residency for backup storage. If the requirement applies, the current architecture does not comply (source: meeting-notes-2024-11-01.md §Open questions, architecture-principles.md §Data).
- **Mitigation:**
  - [ ] Schedule clarification call with customer by [date]
  - [ ] Prepare two architecture options (residency in-scope vs. out-of-scope)
  - [ ] Do not release the backup service until confirmed
- **Owner role:** solution-architect
- **Type:** Compliance risk

---

### RISK-002: mTLS certificate management not yet designed
- **Likelihood:** Medium
- **Impact:** High
- **Risk score:** High
- **Description:** ADR-009 requires mTLS for all inter-service communication but the certificate rotation mechanism has not been designed (source: adr-009-service-mesh.md §Consequences).
- **Mitigation:**
  - [ ] Design cert-manager integration in sprint 15
  - [ ] Add certificate rotation test to the Definition of Done
- **Owner role:** platform-engineer
- **Type:** Architecture risk
```

## Suggested work item types

| Risk item | ADO type |
|-----------|----------|
| Active risk | Risk (if enabled) or Impediment |
| Mitigation task | Task linked to the risk item |
| Resolved risk | Close with resolution note |

## Quality checklist

- [ ] Every risk cites a notebook source
- [ ] Critical risks have an assigned owner role and a mitigation deadline
- [ ] Compliance risks are reviewed by the security lead before the milestone
- [ ] Risk register is shared with the customer where contractually required
- [ ] Mitigations are added to the backlog as Tasks or Impediments

## Limitations

- NotebookLM can only surface risks that are evidenced in the uploaded sources; unknown unknowns are not covered.
- Risk scores are based on the information in the notebook, not on the team's lived experience; supplement with a team review.
- NotebookLM cannot track risk status over time; maintain the register in ADO or a spreadsheet.
- Compliance risk identification is not a substitute for a formal security or legal review.
