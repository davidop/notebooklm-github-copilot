# Generate Epics, Features, and User Stories from NotebookLM

## Scenario

You have requirements documents, customer briefs, or architecture notes in NotebookLM and want to generate a complete backlog hierarchy — Epics > Features > User Stories — ready to import into Azure DevOps. Use this recipe at the start of a new programme or delivery phase.

## Required NotebookLM sources

- Customer requirements or scope document
- Architecture principles and constraints
- Security and compliance requirements
- Roadmap or programme brief

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, generate a backlog hierarchy for the project.

Structure the output as:
- Epic: a major programme outcome (≤ 5 epics)
  - Feature: a deliverable capability within the epic (2–5 per epic)
    - User Story: "As a [role], I want [goal] so that [benefit]" (2–4 per feature)
      - Acceptance criteria (checkbox list, ≥ 3 items)

Rules:
- Ground every Epic and Feature in a specific source document.
- Flag any User Story where the acceptance criteria cannot be derived from sources.
- Use the INVEST criteria: Independent, Negotiable, Valuable, Estimable, Small, Testable.
- Identify any security or compliance requirements that affect acceptance criteria and cite them.
```

## Expected output

```markdown
## Epic: Secure Identity and Access Management
Source: security-requirements.md §4, architecture-principles.md §Identity

### Feature: Federated authentication for all user-facing surfaces
Source: security-requirements.md §4.1

#### User Story: Corporate IdP login for admin users
As an admin user, I want to log in using my corporate identity provider
so that I don't need a separate password for the admin portal.

**Acceptance criteria:**
- [ ] SAML 2.0 or OIDC flow is supported
- [ ] Unauthenticated requests redirect to the IdP
- [ ] Session tokens expire after 8 hours of inactivity
- [ ] Login and logout events are written to the audit log

*Security note:* Requirement derived from security-requirements.md §4.1 — federated identity mandate.
```

## Suggested work item types

| Level | ADO Work Item Type | Description |
|-------|--------------------|-------------|
| Epic | Epic | Major programme outcome |
| Feature | Feature | Deliverable capability |
| User Story | User Story | User-facing behaviour |
| Task | Task | Implementation step under a story |

## Quality checklist

- [ ] Every Epic and Feature cites a source document
- [ ] User Stories follow the "As a / I want / so that" format
- [ ] Acceptance criteria are testable (checkbox list with ≥ 3 items per story)
- [ ] Security and compliance requirements are reflected in acceptance criteria
- [ ] The backlog has been reviewed by the product owner before import

## Limitations

- NotebookLM generates backlog items from uploaded sources only; verbal scope agreements not in documents will be missed.
- Epic decomposition is a starting point — adjust depth and granularity to match your team's velocity.
- INVEST quality depends on the completeness of the source documents.
- Large notebooks with conflicting requirements may produce inconsistent backlog items; review carefully.
