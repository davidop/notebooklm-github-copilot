# Team Prompt Pack: Cloud Architecture

## Team profile

Cloud architecture teams include solution architects, enterprise architects, and cloud specialists across Azure, AWS, and GCP. They design systems, lead architecture reviews, produce ADRs, and assess workloads against Well-Architected frameworks. Their knowledge lives in design documents, prior ADRs, vendor documentation, and internal architecture standards.

This pack helps cloud architects produce source-grounded architecture reviews, generate well-structured ADRs, and run Well-Architected assessments—without missing documented constraints or repeating previous decisions.

---

## Common workflows

- **Architecture reviews**: Evaluate a proposed design against internal standards and prior decisions.
- **ADR generation**: Draft architecture decision records from design notes or alignment discussions.
- **Well-Architected reviews**: Assess workloads against reliability, security, cost, performance, and operational excellence pillars.
- **Vendor evaluation**: Compare cloud services using vendor documentation stored in a notebook.

---

## Required NotebookLM sources

- Internal architecture standards and design principles
- Prior architecture decision log (ADRs)
- Cloud provider Well-Architected framework documentation (Azure, AWS, or GCP)
- Approved cloud service catalog and constraints
- Landing zone and network topology documentation

---

## Recommended agent / client

**GitHub Copilot** or **OpenCode** — use GitHub Copilot for editor-integrated reviews, OpenCode for terminal-based workflows and scripted architecture checks.

---

## Copy-paste prompts

```
Use NotebookLM. In the azure-standards notebook, review this architecture for
compliance with our internal design principles.
Return: compliant areas, gaps with the violated principle cited, and recommended changes.
[Paste architecture description or diagram notes]
```

```
Use NotebookLM. In the vendor-documentation notebook, generate an ADR for adopting
[service or technology] for [use case]. Include: context, decision drivers,
considered alternatives, pros and cons of each, and the recommended decision. Cite vendor docs.
```

```
Use NotebookLM. In the architecture-decisions notebook, check whether a decision
on [topic or pattern] has already been made. If yes, return the ADR reference,
the decision, and any constraints it imposes on the current design.
```

```
Use NotebookLM. In the well-architected notebook, conduct a reliability pillar review
of this workload design. Return: assessment per sub-pillar, gaps with citations,
and prioritized recommendations.
[Paste workload description]
```

```
Use NotebookLM. In the azure-standards notebook, identify all constraints that apply
to deploying a [workload type] in a production landing zone.
Return: mandatory controls, conditional controls, and any open questions.
```

```
Use NotebookLM. In the vendor-documentation notebook and the architecture-decisions notebook,
compare the two options for [decision topic]. Return: a comparison table,
source-backed recommendation, and any known risks from either source.
```

---

## Output format

- **Architecture reviews**: Structured finding list with pillar/principle, finding, citation, and recommendation
- **ADRs**: Structured Markdown with context, decision, status, consequences, alternatives
- **Well-Architected assessments**: Per-pillar table with RAG status, gap, and action
- **Vendor comparisons**: Side-by-side table with citations from each notebook

---

## Quality checklist

- [ ] Every finding or recommendation cites a specific source
- [ ] ADRs include at least two alternatives with documented tradeoffs
- [ ] Well-Architected reviews cover all five pillars
- [ ] Outputs identify open questions where sources were insufficient
- [ ] No vendor-specific claims are made without a citation from vendor documentation

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Outdated vendor documentation in the notebook | Add version dates to source documents; refresh at each major cloud provider release |
| Missed architectural constraints from prior ADRs | Always query the architecture-decisions notebook as a second step in any review |
| ADRs that do not reflect actual team consensus | Treat generated ADRs as drafts; require architect sign-off before committing |
| Well-Architected gaps missed due to thin notebook content | Supplement notebook with official framework PDFs for each cloud provider |
