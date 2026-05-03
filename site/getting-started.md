# Getting Started

This guide walks you through configuring NotebookLM + GitHub Copilot from scratch.

## Prerequisites

- GitHub Copilot subscription (individual or business)
- Node.js 20 or later
- A NotebookLM account (Google account required)
- VS Code, Cursor, or OpenCode

## Step 1: Clone the repository

```bash
git clone https://github.com/davidop/notebooklm-github-copilot
cd notebooklm-github-copilot
npm install
```

## Step 2: Run the setup wizard

```bash
npm run setup
```

The wizard will prompt you for your MCP server URL and guide you through configuring your MCP client. For full documentation of the wizard, see [docs/setup-wizard.md](../docs/setup-wizard.md).

## Step 3: Configure your MCP client

See the [client configuration guide](clients.md) for instructions specific to VS Code, Cursor, and OpenCode.

## Step 4: Create a NotebookLM notebook

1. Open NotebookLM in your browser.
2. Create a new notebook and add your project documents as sources.
3. Note the notebook name — you will use it in your Copilot prompts.

## Step 5: Verify the connection

Run the doctor command to verify that all components are connected:

```bash
npm run doctor
```

All checks should return green. For troubleshooting, see [docs/troubleshooting.md](../docs/troubleshooting.md).

## Step 6: Try your first query

In your MCP-connected Copilot client, paste the following:

```
Use NotebookLM. In the [your-notebook-name] notebook, answer with citations:
What are the top 3 constraints I must respect in this project?
```

If you see a response with source citations, you are set up correctly.

## Next steps

- Browse the [recipes](recipes.md) for common workflow patterns
- Read the [security guide](security.md) before sharing with your team
- See [docs/setup.md](../docs/setup.md) for the full setup reference
