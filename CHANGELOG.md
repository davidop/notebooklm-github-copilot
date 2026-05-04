# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.4.0] — Adoption-ready product experience

### Added

- **Setup wizard** — `scripts/setup-wizard.mjs` and `docs/setup-wizard.md`. Interactive CLI that generates MCP configs for VS Code, OpenCode, Cursor and generic clients. No NotebookLM login required.
- **Client config generator** — `scripts/generate-client-config.mjs` and `docs/client-config-generator.md`. Non-interactive config generation via CLI flags.
- **Doctor command** — `scripts/doctor.mjs` and `docs/doctor.md`. Local readiness checker for Node.js, npm, client configs, package scripts and Chrome. Clearly notes authentication must be tested manually.
- **GitHub Issues integration recipes** — Five prompt-driven workflow recipes in `integrations/github/recipes/`: create issues, triage issues, generate PR descriptions, generate release notes, convert ADRs to issues.
- **Azure DevOps integration recipes** — Five prompt-driven workflow recipes in `integrations/azure-devops/recipes/`: create work items from meeting notes, epics/features/user stories, acceptance criteria, sprint planning, delivery risk review.
- **Demo kit** — `demo/` folder with 2-min, 5-min and 15-min demo scripts, sample prompts, four sample outputs (ADR, architecture review, backlog, presales proposal), recording checklist, and sample notebook sources guide.
- **GitHub Pages documentation site** — `site/` folder with index, getting started, clients, recipes, security, governance, evaluations, demo and FAQ pages. `_config.yml` for Jekyll/GitHub Pages.
- **SVG diagram assets** — `assets/demo-flow.svg`, `assets/client-matrix.svg`, `assets/enterprise-adoption-flow.svg` using generic shapes only.
- **Sample sources** — `sample-sources/` with six fictional demo documents (cloud modernization brief, architecture principles, security requirements, customer meeting notes, vendor implementation guide, previous proposal summary). Clearly labelled as fictional.
- **Output schemas** — `schemas/` with five JSON Schema 2020-12 definitions (ADR, architecture review, backlog items, presales proposal, risk register) and four example JSON files.
- **Output format prompt packs** — `prompt-packs/output-formats/` with five structured prompt packs for JSON and Markdown output formats.
- **Adoption maturity model** — `docs/adoption-maturity-model.md` with 5-level framework from ad hoc experiments to evaluated enterprise workflows.
- **Client configuration matrix** — `docs/client-configuration-matrix.md` comparison table for all supported MCP clients.
- **Release notes helper** — `scripts/release-notes.mjs` and `docs/release-process.md`. Generates release notes from CHANGELOG.md locally without GitHub API calls.
- **Marketing launch material** — `marketing/v0.4-launch.md` with LinkedIn posts, X/Twitter post, blog outline, HN pitch, Product Hunt tagline, demo video script and suggested screenshots.

### Changed

- `package.json` — Version bumped to `0.4.0`. Added scripts: `setup:wizard`, `setup:vscode`, `setup:opencode`, `setup:cursor`, `doctor`, `check:schemas`, `check:site`, `release:notes`. Updated `check:repo` to include `check:schemas` and `check:site`.
- `scripts/validate.mjs` — Added v0.4 required file checks.
- `scripts/check-recipes.mjs` — Now also scans `integrations/` directory. Added `scenario` as a valid section heading pattern.
- `scripts/check-prompts.mjs` — Now handles `output-formats/` prompt packs with a separate set of required sections.
- `README.md` — Added v0.4 sections: What changed in v0.4, Try it in 5 minutes (updated), Guided setup, Client config generator, Doctor command, Demo kit, Sample sources, GitHub Pages docs, Integration recipes, Output schemas, Adoption maturity model, updated Repository map.
- `README.es.md` — Added Spanish sections for all v0.4 features.
- `ROADMAP.md` — Marked v0.4 complete, added v0.5 roadmap.

---

## [0.3.0] — Enterprise readiness, governance and evaluation

### Added

- **Security hardening docs** — `docs/security-hardening.md`, `docs/privacy-and-data-handling.md`, `docs/compliance-considerations.md`, `docs/browser-profile-security.md`, `docs/mcp-threat-model.md`
- **Security checklist pack** — Six operational checklists in `checklists/security/` covering MCP server approval, source approval, customer data review, browser profile management, prompt injection review, and enterprise rollout
- **Governance templates** — Eight policy templates in `governance/` including AI-assisted engineering policy, approved sources policy, NotebookLM usage policy, MCP server governance, prompt and output review policy, team adoption playbook, and exception request template
- **Multi-notebook workflow guidance** — `docs/multi-notebook-workflows.md` and four new recipes: multi-notebook research, source triangulation, compare notebook answers, and conflict resolution between sources
- **Team prompt packs** — Six team-specific prompt packs in `prompt-packs/team/` for platform engineering, cloud architecture, presales, security, delivery management, and developer enablement
- **Evaluation framework** — Six evaluation rubrics in `evals/` covering source grounding, architecture answers, presales outputs, code generation, security reviews, and a blank rubric template
- **Evaluation scenarios** — Five sample scenarios in `evals/scenarios/` for ADR generation, Azure architecture review, RFP review, security threat modeling, and code from vendor docs
- **Quality validation scripts** — `check-links.mjs`, `check-recipes.mjs`, `check-prompts.mjs`, `check-frontmatter.mjs`, `generate-doc-index.mjs`
- **Documentation indexes** — `docs/index.md`, `recipes/README.md`, `prompt-packs/README.md`, `templates/README.md`, `checklists/README.md`, `evals/README.md`
- **GitHub issue templates** — Security review, governance request, prompt pack request, client support request
- **Improved PR template** — Expanded checklist including data handling, affiliation claims, link checking, and security review
- **GitHub Actions improvements** — `validate.yml` now runs `check:repo`; new `docs-index.yml` workflow
- **Marketing launch material** — `marketing/v0.3-launch.md` with LinkedIn posts, X/Twitter post, blog outline, HN pitch, Product Hunt tagline, demo narrative
- **GitHub topics recommendation** — `docs/github-topics.md`
- **Package version** — Bumped to `0.3.0`

### Changed

- `scripts/validate.mjs` — Added v0.3 required file checks
- `package.json` — Added `check:links`, `check:recipes`, `check:prompts`, `check:frontmatter`, `docs:index`, `check:repo` scripts
- `README.md` — Added v0.3 sections: What changed in v0.3, Security hardening, Governance templates, Evaluation framework, Multi-notebook workflows, Team prompt packs, Recommended adoption path
- `README.es.md` — Added Spanish v0.3 sections
- `ROADMAP.md` — Marked v0.3 complete, added v0.4 roadmap

---

## [0.2.0] — Multi-client MCP toolkit

### Added

- **OpenCode support** — `clients/opencode/` with `opencode.jsonc` configuration and agent instruction files for researcher, architect, and presales workflows.
- **Cursor support** — `clients/cursor/` with `mcp.json` configuration and Cursor Rules for source-grounded research, code generation, and architecture review.
- **VS Code client reference** — `clients/vscode/` with reference `mcp.json`, `copilot-instructions.example.md`, and an explanation of VS Code MCP discovery and Copilot instruction loading.
- **Multi-client documentation** — `docs/mcp-clients.md` comparing GitHub Copilot, OpenCode, Cursor, and generic MCP clients with a Mermaid architecture diagram.
- **Dev Container documentation** — `docs/devcontainer.md` covering local VS Code Dev Containers usage, Codespaces caveats, browser automation limitations, and troubleshooting.
- **Dev Container improvements** — Added GitHub CLI feature and JSON VS Code extension to `.devcontainer/devcontainer.json`.

---

## [0.1.0] — Initial release

### Added

- **VS Code MCP configuration** — `.vscode/mcp.json` wiring GitHub Copilot to `notebooklm-mcp` via MCP stdio transport.
- **GitHub Copilot repository instructions** — `.github/copilot-instructions.md` and `.github/instructions/` teaching Copilot when and how to use NotebookLM tools.
- **Source-grounded research workflow** — Instruction files guiding Copilot to query NotebookLM before making architecture, presales, or implementation decisions.
- **Architecture and presales prompt recipes** — Pre-built prompts for ADR generation, architecture review, presales proposals, and code generation from vendor docs.
- **Validation scripts** — `scripts/validate.mjs` and `scripts/smoke-test.mjs` for local developer setup verification.
- **GitHub Actions CI workflow** — `.github/workflows/validate.yml` keeping the repository structure healthy.
- **Security documentation** — `security/threat-model.md`, `SECURITY.md`, and enterprise data handling guidance.
- **Enterprise rollout guide** — `docs/enterprise-rollout.md` with deployment checklist.
- **Community files** — `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SUPPORT.md`, `ROADMAP.md`.
- **Recipes** — Step-by-step workflow guides for ADRs, Azure architecture, proposals, RFPs, Bicep, Terraform, and meeting notes.
- **Templates** — Reusable document templates for ADRs, Azure architecture reviews, presales proposals, RFP analysis, cloud adoption plans, and Well-Architected reviews.
- **Worked examples** — Example prompts and expected outputs for common scenarios.
- **Dev container** — `.devcontainer/devcontainer.json` for Codespaces and local container development.
- **Spanish README** — `README.es.md` for Spanish-speaking technical audiences.
