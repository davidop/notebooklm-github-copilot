# Adoption Maturity Model

A 5-level model for adopting NotebookLM + GitHub Copilot across a team or enterprise. Use this model to assess where your organisation is today and plan the next step.

---

## Level 0 — Ad hoc local experiments

### Description

Individual contributors are experimenting with NotebookLM or GitHub Copilot independently, without shared prompts, governance, or documented practices. Results vary widely and are not reproducible.

### Required assets

- A GitHub account
- A NotebookLM account
- VS Code, Cursor, or another MCP-compatible client

### Recommended practices

- Follow the getting started guide to complete a verified setup
- Use the sample sources in `sample-sources/` for safe experimentation
- Do not upload real customer data during this phase

### Risks

- Inconsistent or hallucinated outputs used without verification
- Real customer data uploaded without governance approval
- No mechanism to share learnings with the team

### Exit criteria

- At least one complete end-to-end flow (query → cited output) demonstrated
- MCP server configured and verified with `npm run doctor`

---

## Level 1 — Individual developer setup

### Description

A single developer has a stable, verified setup and is using NotebookLM + Copilot regularly for personal productivity. Outputs are reviewed before use, but there is no team coordination.

### Required assets

- Verified MCP configuration (`npm run doctor` all-green)
- At least one personal notebook with project sources
- Familiarity with 2–3 core recipes

### Recommended practices

- Use the output format prompt packs to produce consistent results
- Review all outputs before acting on them
- Keep notebook sources up to date

### Risks

- Knowledge siloed in one person
- No peer review of generated outputs
- No version control of prompts or notebooks

### Exit criteria

- Developer uses at least 3 different recipe types regularly
- At least one generated output has been reviewed and acted on in a work context

---

## Level 2 — Team-shared prompts and recipes

### Description

A small team (2–8 people) is using shared prompt packs and recipes from this repository. Prompts are version-controlled, outputs are peer-reviewed, and the team has agreed on naming conventions for notebooks.

### Required assets

- Shared repository with team-specific prompt packs (see `prompt-packs/team/`)
- Team notebook naming convention documented
- At least one integration recipe in use (GitHub Issues or Azure DevOps)
- Peer review process for significant outputs (ADRs, proposals, risk registers)

### Recommended practices

- Add team-specific prompts to `prompt-packs/team/`
- Use the integration recipes for GitHub Issues or Azure DevOps work items
- Run `npm run validate` in CI to enforce prompt and recipe format
- Hold a brief retrospective after each major output

### Risks

- Inconsistent source quality across team members
- Unreviewed outputs merged into project artefacts
- Team grows beyond 8 without formalising governance

### Exit criteria

- All team members have verified MCP setups
- At least one shared prompt pack is in version control
- At least one output type (e.g. ADRs) uses a consistent template

---

## Level 3 — Governed enterprise rollout

### Description

The toolchain is deployed across multiple teams with formal governance: a source approval workflow, browser profile isolation, a data classification policy, and a designated AI practices owner.

### Required assets

- Enterprise rollout guide followed (see `docs/enterprise-rollout.md`)
- Security checklists completed (see `checklists/security/`)
- Data classification policy published
- Source approval workflow in place
- Designated AI practices owner or working group
- Incident response procedure for data or security events

### Recommended practices

- Enforce source classification before any upload to NotebookLM
- Use the enterprise rollout security checklist for each new team onboarding
- Run the prompt injection review checklist before publishing new prompt packs
- Review the operating model quarterly

### Risks

- Governance process becomes a bottleneck and teams work around it
- Source quality varies across teams, leading to inconsistent outputs
- Incident response plan exists but has not been tested

### Exit criteria

- All active notebooks have been approved under the source classification policy
- At least one security incident simulation has been run
- Governance documents are reviewed and owned

---

## Level 4 — Evaluated and continuously improved workflows

### Description

Outputs are systematically evaluated against baselines, evaluation results are tracked over time, and the prompt library is improved based on evaluation findings. The organisation treats AI-generated outputs as a measurable, improvable process.

### Required assets

- Evaluation baselines for each major output type (see `evals/`)
- Automated smoke tests in CI (`npm run smoke-test`)
- Evaluation results tracked (in ADO, GitHub Issues, or a spreadsheet)
- Regular evaluation review cadence (e.g. monthly)
- Prompt improvement process: propose → test → review → merge

### Recommended practices

- Run evaluations after every significant change to sources, prompts, or the MCP server version
- Track citation accuracy, completeness, and consistency as separate metrics
- Publish evaluation results internally so teams can learn from each other
- Pin the MCP server version in production and test upgrades before rolling out

### Risks

- Evaluation becomes a compliance checkbox rather than a genuine quality signal
- Evaluation baselines become stale if source documents are not updated

### Exit criteria

- Evaluation metrics show stable or improving trends over 3+ months
- At least one prompt or recipe has been improved based on evaluation findings
- Evaluation cadence is owned and scheduled, not ad hoc
