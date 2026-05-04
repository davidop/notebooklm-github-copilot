# Frequently Asked Questions

## Setup and configuration

### What do I need to get started?

You need a GitHub Copilot subscription, a Google account for NotebookLM, Node.js 20+, and VS Code, Cursor, or OpenCode. Run `npm run setup` to configure everything.

### Which MCP clients are supported?

VS Code with the GitHub Copilot extension, Cursor, and OpenCode are fully supported. Any MCP-compatible client should work with appropriate configuration.

### Does this work without a GitHub Copilot subscription?

The MCP server can be used with any MCP-compatible AI client, but the recipes and prompts in this repository are optimised for GitHub Copilot.

### How long does setup take?

About 5–10 minutes for a single developer. Enterprise rollout with governance controls takes longer — see the adoption maturity model.

## NotebookLM

### What sources can I upload to NotebookLM?

NotebookLM supports PDF, Google Docs, Google Slides, web pages, and plain text/Markdown files. For demos, use the files in `sample-sources/`.

### How many sources can I have per notebook?

NotebookLM supports up to 50 sources per notebook (as of the last check — verify with the current NotebookLM documentation).

### Can I have multiple notebooks?

Yes. Use separate notebooks for separate projects or customers. Reference the correct notebook name in your Copilot prompts.

### How do I keep sources up to date?

Delete the old source from the notebook and re-upload the updated file. NotebookLM does not auto-sync with file system changes.

## Security and data handling

### Is it safe to upload customer documents to NotebookLM?

Only upload documents that have been approved under your data governance policy. Never upload personal data, credentials, or regulated data without explicit approval. See the security guide for the source approval checklist.

### Does NotebookLM store my sources?

Yes — sources are stored in your Google account. Review Google's privacy policy and your organisation's data classification policy before uploading any document.

### Can I use this in an enterprise environment?

Yes, with appropriate governance controls. See the enterprise rollout guide and the security hardening guide.

## Outputs and quality

### Can Copilot make mistakes using this setup?

Yes. NotebookLM can misinterpret sources, and Copilot can misformat outputs. Always review generated outputs before acting on them. Citations help — verify each one against the source.

### Why does Copilot sometimes say it cannot find information?

This usually means the relevant information is not in the sources loaded into the notebook. Add the missing document as a source and retry.

### How do I improve output quality?

Use more specific prompts, add better-structured sources, and review the prompt packs in `prompt-packs/`. Run evaluations regularly to measure improvement.

## Recipes and integrations

### Can I create GitHub Issues directly from Copilot?

Copilot generates the issue content, but it cannot create issues directly. Use the `gh issue create` CLI or the GitHub web UI to publish.

### Does this work with Azure DevOps?

Yes — see the Azure DevOps integration recipes for work items, sprint planning, and risk review workflows.

### Can I add my own recipes?

Yes — see the contributing guide in CONTRIBUTING.md for the recipe format and how to submit a pull request.
