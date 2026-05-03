# Contributing

Thank you for considering a contribution to this project. All contributions are welcome — bug reports, new recipes, documentation improvements, and code changes.

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

## Reporting issues

Use [GitHub Issues](https://github.com/davidop/notebooklm-github-copilot/issues) to report bugs or unexpected behaviour.

When reporting a bug, please include:

- OS and version
- Node.js version (`node --version`)
- VS Code version
- Chrome version
- `notebooklm-mcp` version (check `npm ls notebooklm-mcp` or the `npx` output)
- Steps to reproduce
- Expected vs actual behaviour
- Any relevant error messages or logs

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.yml) when opening the issue.

---

## Proposing recipes

Recipes are step-by-step workflow guides in the `recipes/` folder. A good recipe:

- Solves a real, recurring engineering problem.
- Uses the Copilot + NotebookLM MCP workflow.
- Includes a copy-paste ready Copilot Chat prompt.
- Lists the required NotebookLM sources.
- Describes expected output and known limitations.

To propose a recipe:

1. Open a [Recipe Request issue](.github/ISSUE_TEMPLATE/recipe_request.yml) describing the workflow.
2. If you want to implement it, fork the repo and create `recipes/your-recipe-name.md` following the structure of existing recipes.
3. Submit a pull request.

---

## Submitting pull requests

1. Fork the repository and create a branch from `main`.
2. Make your changes.
3. Run `npm run validate` and confirm it passes.
4. Commit with a clear message describing the change.
5. Open a pull request using the [PR template](.github/PULL_REQUEST_TEMPLATE.md).

Keep pull requests focused. One concern per PR is preferred.

---

## Style guidelines

### Markdown

- Use ATX headings (`##`, `###`).
- Use fenced code blocks with language identifiers.
- Keep lines reasonably short for diff readability.
- No trailing whitespace.

### Prompts

- Prompts should be practical and copy-paste ready.
- Use present-tense imperative style: "Use NotebookLM. In the \<notebook\> notebook, answer..."
- Always include expected output shape.

### Code (scripts)

- Scripts are ES module JavaScript (`type: module` in `package.json`).
- Prefer `node:` protocol for built-in imports.
- No new dependencies unless justified.

---

## What we do not accept

- Vendored or forked NotebookLM automation code.
- Claims of official affiliation with Google, GitHub, Microsoft, or OpenAI.
- Secrets, credentials, or real customer data in examples.
- Funding files (FUNDING.yml).

---

## Questions?

Open a [GitHub Discussion](https://github.com/davidop/notebooklm-github-copilot/discussions) for general questions or ideas.
