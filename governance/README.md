# Governance

This folder contains policy templates, governance frameworks, and operational playbooks for organizations adopting AI-assisted engineering tools — specifically the **notebooklm-github-copilot** integration.

These documents are generic and reusable starting points. Adapt each one to your organization's legal, compliance, and security requirements before use.

---

## Who should use this folder

| Role | Recommended starting point |
|------|---------------------------|
| **Platform and DevOps teams** | `mcp-server-governance.md` |
| **Security and compliance teams** | `ai-assisted-engineering-policy.md`, `notebooklm-usage-policy.md` |
| **Team leads and engineering managers** | `team-adoption-playbook.md`, `ai-assisted-engineering-policy.md` |
| **AI/ML governance leads** | `approved-sources-policy.md`, `prompt-and-output-review-policy.md` |
| **Any individual contributor** | `team-adoption-playbook.md` |

---

## Contents

| File | Description |
|------|-------------|
| [`ai-assisted-engineering-policy.md`](./ai-assisted-engineering-policy.md) | Comprehensive policy template covering approved/prohibited use cases, data handling, and developer responsibilities for AI-assisted engineering tools. **Start here if your org is new to AI tools.** |
| [`notebooklm-usage-policy.md`](./notebooklm-usage-policy.md) | Usage policy specific to Google NotebookLM — acceptable use, prohibited data types, account requirements, and compliance monitoring. |
| [`approved-sources-policy.md`](./approved-sources-policy.md) | Framework for classifying and approving document sources loaded into NotebookLM notebooks. |
| [`mcp-server-governance.md`](./mcp-server-governance.md) | Governance framework for approving, configuring, and maintaining MCP servers in developer tooling. |
| [`prompt-and-output-review-policy.md`](./prompt-and-output-review-policy.md) | Policy for reviewing AI prompts and outputs, including grounding verification and citation checking. |
| [`team-adoption-playbook.md`](./team-adoption-playbook.md) | Step-by-step phased playbook for rolling out notebooklm-github-copilot to a team. |
| [`exception-request-template.md`](./exception-request-template.md) | Structured template for requesting exceptions to any policy in this folder. |

---

## How to use these templates

1. Review each template with your security, legal, and compliance stakeholders.
2. Replace all `[ORGANIZATION]` and `[PLACEHOLDER]` tokens with your specific details.
3. Version-control your adopted policies alongside this repository.
4. Schedule periodic reviews — suggested cadence is noted in each document.

These templates do not constitute legal advice. Consult qualified legal and compliance professionals before formal adoption.
