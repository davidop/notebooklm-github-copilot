# NotebookLM + GitHub Copilot + MCP

> **GitHub Copilot + NotebookLM + MCP = grounded AI engineering inside VS Code.**

Turn GitHub Copilot into a source-grounded AI engineering agent using NotebookLM + MCP. Stop hallucinating architecture. Start citing documents.

[![Stars](https://img.shields.io/github/stars/davidop/notebooklm-github-copilot?style=flat-square)](https://github.com/davidop/notebooklm-github-copilot/stargazers)
[![Forks](https://img.shields.io/github/forks/davidop/notebooklm-github-copilot?style=flat-square)](https://github.com/davidop/notebooklm-github-copilot/network/members)
[![CI](https://img.shields.io/github/actions/workflow/status/davidop/notebooklm-github-copilot/validate.yml?style=flat-square&label=CI)](https://github.com/davidop/notebooklm-github-copilot/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-compatible-purple?style=flat-square)](https://modelcontextprotocol.io)
[![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-ready-black?style=flat-square&logo=github)](https://github.com/features/copilot)
[![NotebookLM](https://img.shields.io/badge/NotebookLM-powered-orange?style=flat-square)](https://notebooklm.google.com)

> **Unofficial community project.** Not affiliated with Google, GitHub, Microsoft, or OpenAI.
> A Claude Code Skills alternative for GitHub Copilot users.

---

**Other languages:** [Español](README.es.md)

---

## Why this exists

GitHub Copilot is excellent at writing code. It is not designed to reason over your private documents — customer proposals, architecture specs, meeting notes, vendor docs.

Claude Code Skills solves this for Anthropic users. This project solves the same problem for **GitHub Copilot** users, using **NotebookLM as the document intelligence layer** and **MCP as the integration protocol**.

The result: Copilot Chat can query your NotebookLM notebooks directly, ground answers in your sources, and cite them — all inside VS Code.

---

## Architecture

```mermaid
flowchart TD
    A[Developer in VS Code] -->|types question| B[GitHub Copilot Chat\nAgent Mode]
    B -->|MCP tool call over stdio| C[notebooklm-mcp\nvia npx]
    C -->|browser automation| D[Google NotebookLM]
    D -->|source-grounded answer\nwith citations| C
    C -->|structured response| B
    B -->|cited answer| A

    subgraph "Your Documents"
        E[Architecture Specs]
        F[Proposals & RFPs]
        G[Meeting Notes]
        H[Vendor Docs]
        E & F & G & H --> D
    end
```

Other supported clients (OpenCode, Cursor) connect to the same `notebooklm-mcp` server using the same stdio transport. See [docs/mcp-clients.md](docs/mcp-clients.md) for a full comparison.

---

## What changed in v0.3

v0.3 adds enterprise rollout guidance, security hardening, governance templates, multi-notebook workflows, team prompt packs and an evaluation framework for source-grounded AI engineering.

| Area | What's new |
|---|---|
| **Security hardening** | Threat model, privacy guide, compliance considerations, browser profile security |
| **Governance** | Policy templates, approved sources policy, MCP server governance, team adoption playbook |
| **Multi-notebook workflows** | Query patterns across multiple notebooks, conflict resolution, source triangulation |
| **Team prompt packs** | Ready-to-use prompts for platform engineering, cloud architecture, presales, security, delivery and developer enablement |
| **Evaluation framework** | Scoring rubrics for architecture answers, presales outputs, code generation, and security reviews |
| **Security checklists** | Operational checklists for MCP server approval, source approval, browser profile management, and enterprise rollout |
| **Quality validation** | New scripts: `check:links`, `check:recipes`, `check:prompts`, `check:frontmatter`, `docs:index` |

See [CHANGELOG.md](CHANGELOG.md) for the full list.

---

## 5-minute quickstart

**Prerequisites:** GitHub Copilot, VS Code, Node.js 18+, Chrome stable, Google account with NotebookLM access.

```bash
git clone https://github.com/davidop/notebooklm-github-copilot.git
cd notebooklm-github-copilot
npm install
npm run validate
```

1. Open the repo in VS Code.
2. Open `.vscode/mcp.json` — click the **Start** CodeLens to launch the MCP server.
3. Open Copilot Chat → select **Agent** mode → enable `notebooklm` tools.
4. Authenticate once:
   ```
   Use the NotebookLM MCP server to run setup_auth. Open the browser visibly so I can log in.
   ```
5. Verify it works:
   ```
   Use NotebookLM to list my available notebooks and confirm whether I am authenticated.
   ```

See [docs/setup.md](docs/setup.md) for a complete setup walkthrough.

---

## How it works

1. **MCP bridge** — `.vscode/mcp.json` wires VS Code to `notebooklm-mcp` via the Model Context Protocol stdio transport.
2. **Copilot instructions** — `.github/copilot-instructions.md` and `.github/instructions/` teach Copilot when and how to call NotebookLM tools.
3. **NotebookLM as RAG** — `notebooklm-mcp` drives a local Chrome session to query your notebooks, returning source-grounded answers with citations.
4. **Recipes and prompts** — Pre-built prompt patterns for ADRs, architecture reviews, presales, and more.

No documents leave your Google account. No NotebookLM code is vendored in this repo. The MCP server is managed by the `notebooklm-mcp` community package.

---

## Copilot + NotebookLM MCP vs Claude Code Skills

| Feature | This project | Claude Code Skills |
|---|---|---|
| **AI assistant** | GitHub Copilot | Claude Code |
| **Editor** | VS Code (any plan) | Terminal / any editor |
| **Document grounding** | NotebookLM via MCP | Anthropic RAG tools |
| **Source citations** | ✅ via NotebookLM | ✅ |
| **Notebook management** | Google NotebookLM UI | Custom |
| **Protocol** | MCP (stdio/HTTP) | Custom skill API |
| **Copilot Business/Enterprise** | ✅ (with org MCP policy) | ❌ |
| **Setup complexity** | Low (npx + Chrome) | Medium |
| **Offline use** | ❌ (requires Google) | Depends on setup |
| **Cost** | Copilot + NotebookLM plans | Claude subscription |

---

## Use cases

| Use case | What Copilot does |
|---|---|
| **Architecture Decision Records** | Queries prior decisions, generates ADR drafts grounded in your docs |
| **Presales proposals** | Reuses existing proposal language, cites past wins |
| **RFP analysis** | Extracts requirements, maps to capabilities from your knowledge base |
| **Azure architecture** | Generates Bicep/Terraform from vendor docs loaded into NotebookLM |
| **Meeting notes → backlog** | Turns action items from uploaded meeting notes into user stories |
| **Code from vendor docs** | Generates code aligned to vendor specifications in your notebooks |
| **Technical documentation** | Produces consistent docs by reusing your existing templates and style guides |

---

## Recipes

Step-by-step workflows for common engineering tasks:

| Recipe | Description |
|---|---|
| [Generate an ADR](recipes/generate-adr.md) | Create an Architecture Decision Record from prior decisions in NotebookLM |
| [Azure architecture](recipes/generate-azure-architecture.md) | Generate Azure architecture from vendor or customer docs |
| [Compare proposals](recipes/compare-proposals.md) | Compare two proposals against requirements |
| [Backlog from meeting notes](recipes/create-backlog-from-meeting.md) | Turn uploaded meeting notes into a sprint backlog |
| [Bicep from docs](recipes/generate-bicep-from-docs.md) | Generate Bicep templates grounded in architecture specs |
| [Terraform from docs](recipes/generate-terraform-from-docs.md) | Generate Terraform modules grounded in architecture specs |
| [Review an RFP](recipes/review-rfp.md) | Analyse an RFP against your capability library |

---

## Security and privacy

- **No secrets in NotebookLM.** Never upload API keys, credentials, connection strings, or regulated personal data to Google NotebookLM.
- **Authentication is local.** The MCP server stores a Chrome profile on your machine. It is not committed to this repository.
- **Google's data processing applies.** Documents uploaded to NotebookLM are subject to Google's terms of service and privacy policy.
- **Scope documents carefully.** Only upload documents your organization has approved for cloud storage and AI processing.

See [security/threat-model.md](security/threat-model.md) and [SECURITY.md](SECURITY.md) for full details.

---

## Enterprise rollout

For organizations deploying this to multiple developers:

1. **Enable MCP in Copilot policy** — Copilot Business/Enterprise requires explicit org policy for MCP servers.
2. **Pin the MCP server version** — Set a specific `notebooklm-mcp@x.y.z` in `.vscode/mcp.json` rather than `@latest`.
3. **Document approved notebooks** — Maintain an internal registry of approved NotebookLM notebooks per team.
4. **Train on data classification** — Ensure engineers know what is safe to upload.

See [docs/enterprise-rollout.md](docs/enterprise-rollout.md) for a full checklist.

---

## Security hardening

See dedicated documentation for security, privacy and compliance:

- [Security hardening guide](docs/security-hardening.md)
- [Privacy and data handling](docs/privacy-and-data-handling.md)
- [Compliance considerations](docs/compliance-considerations.md)
- [Browser profile security](docs/browser-profile-security.md)
- [MCP threat model](docs/mcp-threat-model.md)

---

## Governance templates

Generic, reusable policy templates for enterprise teams adopting AI-assisted engineering:

- [AI-assisted engineering policy](governance/ai-assisted-engineering-policy.md)
- [Approved sources policy](governance/approved-sources-policy.md)
- [NotebookLM usage policy](governance/notebooklm-usage-policy.md)
- [MCP server governance](governance/mcp-server-governance.md)
- [Team adoption playbook](governance/team-adoption-playbook.md)

See [governance/](governance/) for the full collection.

---

## Evaluation framework

Scoring rubrics and scenarios for reviewing the quality of AI-assisted engineering outputs:

- [Source grounding scorecard](evals/source-grounding-scorecard.md)
- [Architecture answer evaluation](evals/architecture-answer-evaluation.md)
- [Presales output evaluation](evals/presales-output-evaluation.md)
- [Code generation evaluation](evals/code-generation-from-docs-evaluation.md)

See [evals/](evals/) for all rubrics and scenarios.

---

## Multi-notebook workflows

Work with multiple specialized notebooks in a single workflow — combining customer requirements, internal standards, vendor docs, and prior proposals:

- [Multi-notebook workflows guide](docs/multi-notebook-workflows.md)
- [Multi-notebook research recipe](recipes/multi-notebook-research.md)
- [Source triangulation](recipes/source-triangulation.md)
- [Conflict resolution between sources](recipes/conflict-resolution-between-sources.md)

---

## Team prompt packs

Copy-paste-ready prompt collections for specific teams and roles:

| Team | Prompt pack |
|---|---|
| Platform engineering | [prompt-packs/team/platform-engineering.md](prompt-packs/team/platform-engineering.md) |
| Cloud architecture | [prompt-packs/team/cloud-architecture.md](prompt-packs/team/cloud-architecture.md) |
| Presales | [prompt-packs/team/presales.md](prompt-packs/team/presales.md) |
| Security | [prompt-packs/team/security.md](prompt-packs/team/security.md) |
| Delivery management | [prompt-packs/team/delivery-management.md](prompt-packs/team/delivery-management.md) |
| Developer enablement | [prompt-packs/team/developer-enablement.md](prompt-packs/team/developer-enablement.md) |

---

## Limitations

- **Browser automation fragility** — `notebooklm-mcp` uses browser automation against the NotebookLM UI. Google UI changes can break it until the package is updated.
- **No offline mode** — Requires an active Google session and internet connection.
- **Authentication is per-developer** — No centralized service account for NotebookLM (Google does not expose a public API).
- **NotebookLM source limits** — Notebooks have source count and size limits imposed by Google.
- **Codespaces caveat** — Interactive browser authentication works best from a local VS Code environment, not GitHub Codespaces.
- **Auditability gaps** — NotebookLM does not expose audit logs. Track notebook queries through your coding agent's conversation history.
- **No centralized policy enforcement** — Governance templates are advisory. Enforcement depends on organizational controls.
- **Evaluation framework is manual** — The evals/ rubrics require human reviewers. There is no automated grading.

---

## Disclaimer

This is an **unofficial community project**. It is not affiliated with, endorsed by, or supported by Google, GitHub, Microsoft, or OpenAI. Use it at your own risk.

The `notebooklm-mcp` server is a third-party package. Review its license and security posture before enterprise deployment.

---

## Repository layout

```text
.github/
  copilot-instructions.md
  instructions/
  workflows/
  ISSUE_TEMPLATE/
  PULL_REQUEST_TEMPLATE.md
.vscode/
  mcp.json
  settings.json
  extensions.json
.devcontainer/
  devcontainer.json
  README.md
assets/
  social-preview.svg
clients/
  vscode/
    mcp.json
    copilot-instructions.example.md
    README.md
  opencode/
    opencode.jsonc
    agent-researcher.md
    agent-architect.md
    agent-presales.md
    README.md
  cursor/
    mcp.json
    rules/
    README.md
docs/
  setup.md
  usage.md
  troubleshooting.md
  operating-model.md
  enterprise-rollout.md
  faq.md
  mcp-clients.md
  devcontainer.md
examples/
  prompts.md
  adr-from-notebooklm/
  architecture-review/
  presales-proposal/
  code-from-vendor-docs/
  meeting-notes-to-backlog/
prompts/
recipes/
security/
  threat-model.md
governance/
  README.md
  ai-assisted-engineering-policy.md
  approved-sources-policy.md
  notebooklm-usage-policy.md
  mcp-server-governance.md
  prompt-and-output-review-policy.md
  team-adoption-playbook.md
  exception-request-template.md
checklists/
  README.md
  security/
    mcp-server-approval-checklist.md
    notebooklm-source-approval-checklist.md
    customer-data-review-checklist.md
    browser-profile-checklist.md
    prompt-injection-review-checklist.md
    enterprise-rollout-security-checklist.md
evals/
  README.md
  source-grounding-scorecard.md
  architecture-answer-evaluation.md
  presales-output-evaluation.md
  code-generation-from-docs-evaluation.md
  security-review-evaluation.md
  rubric-template.md
  scenarios/
    adr-generation.md
    azure-architecture-review.md
    rfp-review.md
    security-threat-model.md
    code-from-vendor-docs.md
prompt-packs/
  README.md
  team/
    README.md
    platform-engineering.md
    cloud-architecture.md
    presales.md
    security.md
    delivery-management.md
    developer-enablement.md
marketing/
  v0.3-launch.md
templates/
scripts/
  validate.mjs
  smoke-test.mjs
CHANGELOG.md
CONTRIBUTING.md
ROADMAP.md
SECURITY.md
SUPPORT.md
README.es.md
package.json
```

---

## Recommended adoption path

**New users:**
1. Follow the [5-minute quickstart](#5-minute-quickstart)
2. Pick a recipe from [recipes/](recipes/) that matches your workflow
3. Review [docs/security-hardening.md](docs/security-hardening.md) before uploading documents

**Teams adopting for the first time:**
1. Read the [team adoption playbook](governance/team-adoption-playbook.md)
2. Complete the [enterprise rollout security checklist](checklists/security/enterprise-rollout-security-checklist.md)
3. Choose prompt packs from [prompt-packs/team/](prompt-packs/team/)
4. Establish evaluation cadence using [evals/](evals/)

**Enterprise / governed deployments:**
1. Adapt the [governance templates](governance/) to your organization
2. Complete the [MCP server approval checklist](checklists/security/mcp-server-approval-checklist.md)
3. Set up approved notebook registry per [approved-sources-policy.md](governance/approved-sources-policy.md)
4. Train developers on [privacy and data handling](docs/privacy-and-data-handling.md)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All contributions welcome — especially new recipes and real-world examples.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Roadmap

See [ROADMAP.md](ROADMAP.md).

## License

MIT. See [LICENSE](LICENSE).
