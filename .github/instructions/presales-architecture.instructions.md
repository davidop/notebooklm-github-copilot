---
applyTo: "**/*.md,**/*.bicep,**/*.tf,**/*.cs,**/*.yaml,**/*.yml"
---

# Presales and architecture workflow

For presales, architecture, and cloud design tasks:

- Use NotebookLM to retrieve customer context, requirements, assumptions, previous proposals, and constraints.
- Separate facts from recommendations.
- Make cost, timeline, and staffing assumptions explicit.
- Prefer Microsoft Cloud and Azure-native patterns unless the source material requires otherwise.
- For security-sensitive recommendations, include identity, network, data protection, monitoring, backup, and governance considerations.
- For implementation outputs, include a validation plan.

Recommended output structure:

1. Source-backed context
2. Assumptions
3. Proposed architecture
4. Risks and mitigations
5. Delivery plan
6. Open questions
