# Roadmap

This roadmap describes the planned evolution of this project. It is aspirational and subject to change based on community feedback and contributions.

---

## v0.1 — Foundation ✅

- VS Code + GitHub Copilot support
- NotebookLM MCP starter configuration
- Research and architecture prompts
- Validation and smoke test scripts
- GitHub Actions CI workflow
- Security and enterprise rollout documentation
- Community files (CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, SUPPORT)
- Recipes folder with common workflow patterns
- Templates for ADRs, Azure architecture, presales, and RFPs
- Worked examples with prompts and expected outputs

---

## v0.2 — Broader editor support ✅

- OpenCode support (`clients/opencode/`)
- Cursor support (`clients/cursor/`)
- VS Code client reference (`clients/vscode/`)
- Multi-client documentation (`docs/mcp-clients.md`)
- Dev Container improvements (GitHub CLI, JSON extension)
- Dev Container documentation (`docs/devcontainer.md`)

---

## v0.3 — Enterprise readiness ✅

- Security hardening documentation (5 docs: security hardening, privacy and data handling, compliance considerations, browser profile security, MCP threat model)
- Security checklist pack (6 checklists in `checklists/security/`)
- Governance templates (8 policy templates in `governance/`)
- Multi-notebook workflow guidance (`docs/multi-notebook-workflows.md` + 4 recipes)
- Team prompt packs (6 team-specific packs in `prompt-packs/team/`)
- Evaluation framework (rubrics + scenarios in `evals/`)
- Quality validation scripts (`check:links`, `check:recipes`, `check:prompts`, `check:frontmatter`, `docs:index`)
- Documentation indexes for all major folders
- GitHub issue templates and improved PR template
- GitHub Actions quality gates (`validate.yml` runs `check:repo`; new `docs-index.yml`)

---

## v0.4 — Adoption-ready product experience ✅

- Setup wizard (`npm run setup:wizard`) for VS Code, OpenCode and Cursor
- Non-interactive client config generator
- Doctor command for local readiness checks
- GitHub Issues integration recipes (5 workflows)
- Azure DevOps integration recipes (5 workflows)
- Demo kit with 2/5/15-min scripts, sample outputs and recording checklist
- GitHub Pages documentation site (`site/`)
- Fictional sample sources for safe demos
- Output schemas (JSON Schema 2020-12) for ADRs, backlog, risk register, proposals
- Output format prompt packs
- Adoption maturity model (5 levels)
- Client configuration matrix
- Improved validation: `check:schemas`, `check:site`, updated `check:repo`
- Marketing launch material

---

## v0.5 — Community, polish and advanced validation

- Optional local UI for configuration and setup
- Community gallery of recipes with contribution process
- MCP client compatibility test suite
- Advanced schema-based output validation helpers
- Richer demo video examples and animated walkthroughs
- Optional GitHub Actions issue generation example (safe, local-only)
- Website polish and improved GitHub Pages theme
- Multi-language support improvements (French, German, Japanese)
- Telemetry-free usage analytics template for enterprise tracking
- HTTP transport mode examples and documentation

---

## Ideas backlog (not scheduled)

- HTTP transport mode examples
- Integration with Azure DevOps (instead of / alongside GitHub)
- Support for other notebook-style RAG tools via MCP
- Automated notebook health checks
- Community evaluation leaderboard
- Multi-language prompt packs
- Integration with GitHub Copilot Extensions API
- Advanced schema-based output validation
- Localization improvements for more languages

---

Contributions to any roadmap item are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).
