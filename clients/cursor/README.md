# Cursor + NotebookLM MCP

Use NotebookLM as a grounded knowledge layer from Cursor via the Model Context Protocol.

> **Unofficial community project.** Not affiliated with Google, Cursor, or any other vendor.

---

## What this does

Connects Cursor to `notebooklm-mcp` so the AI can query your NotebookLM notebooks before generating code or architecture recommendations. Answers are grounded in your documents and include source citations.

---

## Prerequisites

- [Cursor](https://cursor.sh) installed
- Node.js 18+ installed
- Chrome stable installed (required by `notebooklm-mcp` for browser automation)
- A Google account with NotebookLM access
- At least one populated NotebookLM notebook

---

## Setup

### 1. Add the MCP server configuration

Copy `mcp.json` to your Cursor MCP config location:

**Workspace-level** (shared with the team, committed to the repo):

```bash
cp clients/cursor/mcp.json .cursor/mcp.json
```

**User-level** (private, applies to all your Cursor projects):

- macOS: `~/.cursor/mcp.json`
- Windows: `%APPDATA%\Cursor\mcp.json`
- Linux: `~/.cursor/mcp.json`

The configuration:

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "npx",
      "args": ["-y", "notebooklm-mcp@latest"],
      "env": {
        "NOTEBOOKLM_ACCOUNT": "work"
      }
    }
  }
}
```

### 2. Enable the MCP server in Cursor

1. Open **Cursor Settings** → **Features** → **MCP**.
2. Verify the `notebooklm` server appears in the list.
3. Click **Enable** if it is not already active.

Alternatively, restart Cursor after placing `mcp.json` — it auto-discovers the server on startup.

### 3. Authenticate NotebookLM

In a Cursor chat session, ask:

```text
Use the NotebookLM MCP server to run setup_auth. Open the browser visibly so I can log in.
```

Complete the Google login in the browser window that opens. This step is required once per machine.

### 4. Verify the connection

```text
Use NotebookLM to list my notebooks. Confirm authentication is working.
```

---

## Cursor Rules

This folder includes Cursor rule files that instruct the AI to use NotebookLM before generating output:

| Rule file | Purpose |
|---|---|
| [rules/notebooklm-research.mdc](rules/notebooklm-research.mdc) | Ground research queries in NotebookLM sources |
| [rules/source-grounded-codegen.mdc](rules/source-grounded-codegen.mdc) | Generate code aligned to docs in NotebookLM |
| [rules/architecture-review.mdc](rules/architecture-review.mdc) | Review architecture against NotebookLM knowledge base |

To use these rules, copy them to your project's `.cursor/rules/` directory:

```bash
cp -r clients/cursor/rules/ .cursor/rules/
```

---

## How to ask Cursor to use NotebookLM

Always include an explicit instruction in your prompt:

```text
Before answering, use NotebookLM to retrieve relevant context from my notebooks.
Cite your sources. Do not invent information not found in the notebooks.
```

### Example prompts

**Research:**

```text
Use NotebookLM to find what requirements exist for [feature or topic]. Summarize only what the sources say.
```

**Code generation from vendor docs:**

```text
Use NotebookLM to retrieve the vendor API specification for [product].
Generate implementation code aligned to the retrieved documentation.
Note any assumptions.
```

**Architecture review:**

```text
Use NotebookLM to retrieve prior architecture decisions for [project].
Review the proposed design against those decisions and list any conflicts or gaps.
```

**ADR generation:**

```text
Use NotebookLM to find context on [decision topic].
Generate an Architecture Decision Record. Cite every section.
```

---

## Limitations

- **Browser automation** — `notebooklm-mcp` drives a local Chrome session. NotebookLM UI changes can break it until the package is updated.
- **No headless mode** — Authentication requires a visible browser. Container and SSH environments without a display are not supported for initial auth.
- **Per-developer authentication** — No shared service account. Each developer authenticates independently.
- **NotebookLM limits** — Google imposes source count and size limits per notebook.
- **Internet required** — NotebookLM is a cloud service. Offline use is not supported.
- **Not an official integration** — This relies on the community `notebooklm-mcp` package.

---

## Security

- Never include secrets, credentials, or personal data in your NotebookLM notebooks.
- Documents uploaded to NotebookLM are subject to Google's terms of service and privacy policy.
- Only upload documents your organization has approved for cloud AI processing.

See [security/threat-model.md](../../security/threat-model.md) for full details.
