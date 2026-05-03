# Team Prompt Pack: Platform Engineering

## Team profile

Platform engineering teams own infrastructure, CI/CD pipelines, developer experience tooling, and internal platform standards. They often work with Terraform, Bicep, Helm, Kubernetes, and GitOps workflows. Their knowledge is spread across runbooks, ADRs, vendor documentation, and internal standards wikis.

This pack helps platform teams use NotebookLM-grounded prompts to generate IaC, write ADRs, and enforce platform standards—without hallucinating resource configurations or drifting from approved patterns.

---

## Common workflows

- **IaC generation from specs**: Generate Terraform or Bicep modules aligned to internal platform standards.
- **ADR creation**: Draft architecture decision records from meeting notes or design documents.
- **Platform standards documentation**: Turn informal knowledge into structured runbooks and guides.
- **Standards review**: Validate that a proposed design or configuration aligns with approved patterns.

---

## Required NotebookLM sources

- Internal platform standards and approved patterns (PDF or Markdown)
- IaC module library documentation
- Architecture decision log (past ADRs)
- Cloud provider documentation for approved services
- CI/CD pipeline design guides

---

## Recommended agent / client

**GitHub Copilot in VS Code** — best for inline IaC generation and code review directly in the editor.

---

## Copy-paste prompts

```
Use NotebookLM. In the platform-standards notebook, answer with citations:
What are the approved patterns for deploying a managed Kubernetes cluster?
Return: required configurations, naming conventions, and any mandatory tags.
```

```
Use NotebookLM. In the platform-standards notebook, generate a Terraform module
for an Azure Storage Account that follows our approved naming conventions,
tagging requirements, and network access controls. Cite the relevant standard for each decision.
```

```
Use NotebookLM. In the architecture-decisions notebook, review whether
the proposed use of [service or pattern] conflicts with any existing ADR.
Return: conflicting ADRs, the constraint they impose, and a recommended resolution.
```

```
Use NotebookLM. In the platform-standards notebook, draft an ADR for adopting
[technology or pattern] as part of our CI/CD pipeline. Include: context, decision,
consequences, and alternatives considered. Cite any relevant existing standards.
```

```
Use NotebookLM. In the platform-standards notebook, review this Terraform module
[paste module] against our approved resource configuration standards.
Return: compliant items, non-compliant items with the violated standard cited, and required changes.
```

```
Use NotebookLM. In the platform-standards notebook, generate a runbook for
rotating access credentials for [service type]. Include prerequisites, steps,
rollback procedure, and links to the relevant standards sections.
```

---

## Output format

- **IaC**: Working Terraform or Bicep with inline comments citing the standard applied
- **ADRs**: Structured Markdown with context, decision, status, consequences, alternatives
- **Review comments**: Numbered list of findings, each with the violated standard cited
- **Runbooks**: Step-by-step Markdown with prerequisites, steps, and rollback

---

## Quality checklist

- [ ] Every configuration decision cites a specific source from the notebook
- [ ] IaC uses approved naming conventions and tags
- [ ] ADRs include at least two alternatives and documented tradeoffs
- [ ] Non-compliant items include the exact standard that was violated
- [ ] Outputs do not reference unapproved cloud services or configurations

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| IaC drifts from specs if notebook sources are outdated | Keep IaC module docs and standards in sync; version-pin sources |
| Hallucinated resource configurations (unsupported arguments, wrong API versions) | Always validate generated IaC with `terraform validate` or `bicep build` before applying |
| ADRs that omit real constraints | Cross-reference generated ADRs against actual existing decisions in the notebook |
| Overconfident outputs when sources are thin | If the notebook returns low-confidence citations, escalate to a domain expert before merging |
