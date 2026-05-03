# Team Adoption Playbook

A step-by-step guide for rolling out **notebooklm-github-copilot** to your team. Work through each phase in order; do not skip the assessment and security steps.

---

## Overview and goals

This playbook guides teams from initial assessment through full rollout and ongoing optimization of the notebooklm-github-copilot integration. The goal is a safe, productive adoption that delivers measurable value while meeting your organization's security and governance requirements.

**Typical timeline:** 4–8 weeks from assessment to full rollout, depending on organizational approval processes.

---

## Phase 1: Assessment (Week 1–2)

### Pilot team selection
- Identify a volunteer pilot team of 3–6 developers with diverse roles (ideally including an architect, a senior engineer, and a developer who works with external documentation).
- Confirm the team lead or manager will act as pilot sponsor.

### Use case identification
- List 3–5 candidate use cases relevant to your team (e.g., querying architecture docs, grounding presales proposals, reviewing vendor APIs).
- Prioritize use cases where source grounding matters most — these deliver the clearest value.
- Confirm candidate use cases do not require loading prohibited data (see [AI-Assisted Engineering Policy](./ai-assisted-engineering-policy.md)).

### Security review
- Submit an MCP server approval request per the [MCP Server Governance](./mcp-server-governance.md) policy.
- Identify which document sources the team wants to load and classify them per the [Approved Sources Policy](./approved-sources-policy.md).
- Engage your security team early — their review will gate Phase 2.

---

## Phase 2: Setup (Week 2–3)

### MCP server approval
- Confirm the notebooklm MCP server is listed as **Approved** in your organization's registry, or initiate the approval process.
- Follow the configuration standards in [MCP Server Governance](./mcp-server-governance.md).
- Use the configuration templates in [`clients/`](../clients/) for your IDE.

### Notebook creation
- Create pilot notebooks in NotebookLM with approved sources only.
- Register all sources in your team's Source Registry per the [Approved Sources Policy](./approved-sources-policy.md).
- Restrict notebook sharing to pilot team members.

### Training
- Ensure all pilot team members complete required AI tools training.
- Walk the team through [Prompt and Output Review Policy](./prompt-and-output-review-policy.md) — particularly prompt standards and the review checklist.
- Review the [`prompts/`](../prompts/) and [`recipes/`](../recipes/) folders for ready-made prompts to start with.

---

## Phase 3: Pilot (Week 3–5)

### Select 2–3 use cases to test
- Choose the highest-priority use cases from Phase 1.
- Assign a champion for each use case who will track outcomes.

### Measure outcomes
- For each use case, capture: time saved, quality improvement (use the [evals/](../evals/) rubrics), and team satisfaction.
- Run at least 5–10 queries per use case before drawing conclusions.

### Collect feedback
- Run a short retrospective at the end of the pilot. Ask: What worked? What didn't? What data is missing from our notebooks?
- Document lessons learned; they will inform Phase 4 notebook governance.

---

## Phase 4: Rollout (Week 5–7)

### Expand to the full team
- Onboard remaining team members using the setup steps from Phase 2.
- Share pilot retrospective findings so the team starts with learned best practices.

### Establish notebook governance
- Assign notebook owners per the [Approved Sources Policy](./approved-sources-policy.md).
- Set up the Source Registry for ongoing tracking.
- Define which notebooks are shared team resources vs. individual workspaces.

### Set review cadence
- Schedule a quarterly review of notebook sources, approved MCP servers, and policy compliance.

---

## Phase 5: Optimization (Ongoing)

- Refine prompts based on output quality; contribute effective prompts to [`prompts/`](../prompts/).
- Build team-specific recipes in [`recipes/`](../recipes/) for repeated workflows.
- Use the evaluation rubrics in [`evals/`](../evals/) to measure and improve output quality over time.
- Share successful use cases with other teams to scale organizational value.

---

## Success metrics

| Metric | How to measure |
|--------|---------------|
| Time to first answer | Compare time to answer a question with and without the integration |
| Citation rate | % of outputs that include source citations (target: >80%) |
| Rework rate | % of AI outputs requiring significant correction before use |
| Team adoption rate | % of team using the integration at least weekly after rollout |
| Policy compliance | Source registry coverage, training completion rate |

---

## Common pitfalls and how to avoid them

| Pitfall | How to avoid |
|---------|-------------|
| Loading prohibited data into notebooks | Complete source classification before creating any notebook |
| Skipping output review | Make review a team norm; use the [evals/](../evals/) rubrics |
| Pinning MCP server version too loosely | Always pin exact versions; see [MCP Server Governance](./mcp-server-governance.md) |
| Notebooks going stale | Assign owners and schedule quarterly source reviews |
| Treating AI output as ground truth | Review every material output; train the team on hallucination detection |

---

## Resources and contacts

| Resource | Contact / Link |
|----------|---------------|
| Security review and MCP approval | [SECURITY TEAM CONTACT] |
| AI tools training | [TRAINING PLATFORM LINK] |
| Source registry template | [LINK TO REGISTRY] |
| Policy questions | [AI GOVERNANCE CONTACT] |
| Community and recipes | [`recipes/`](../recipes/), [`prompts/`](../prompts/) |
