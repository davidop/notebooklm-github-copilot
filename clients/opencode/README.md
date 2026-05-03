# OpenCode + NotebookLM MCP

Use NotebookLM as a grounded knowledge layer from OpenCode via the Model Context Protocol.

> **Unofficial community project.** Not affiliated with Google, OpenCode, or any other vendor.

---

## What this does

Connects OpenCode to `notebooklm-mcp` so the agent can query your NotebookLM notebooks before generating architecture, code, or proposals. Answers are grounded in your documents and include source citations.

---

## Prerequisites

- [OpenCode](https://opencode.ai) installed and configured
- Node.js 18+ installed
- Chrome stable installed (required by `notebooklm-mcp` for browser automation)
- A Google account with NotebookLM access
- At least one populated NotebookLM notebook

---

## Setup

### 1. Install or update OpenCode

Follow the [OpenCode installation guide](https://opencode.ai/docs/installation).

### 2. Configure the MCP server

Copy `opencode.jsonc` to your OpenCode configuration directory and merge it with any existing config:

```bash
# macOS / Linux
cp clients/opencode/opencode.jsonc ~/.config/opencode/config.jsonc

# Windows (PowerShell)
Copy-Item clients\opencode\opencode.jsonc "$env:APPDATA\opencode\config.jsonc"
```

If you already have a config file, add the `mcpServers` block manually:

```jsonc
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

### 3. Authenticate NotebookLM

Start an OpenCode session and run the authentication setup:

```text
Use the NotebookLM MCP server to run setup_auth. Open the browser visibly so I can log in.
```

Complete the Google login in the browser window that opens. The MCP server stores authentication in a local Chrome profile. This step is required once per machine.

### 4. Verify the connection

```text
Use NotebookLM to list my available notebooks. Confirm that authentication is working.
```

---

## Agent instructions

This folder includes ready-to-use agent instruction files:

| File | Purpose |
|---|---|
| [agent-researcher.md](agent-researcher.md) | Source-grounded research workflows |
| [agent-architect.md](agent-architect.md) | Architecture review and ADR generation |
| [agent-presales.md](agent-presales.md) | Presales proposal drafting |

Copy the relevant file content into your OpenCode session context or reference it in your agent configuration.

---

## Practical prompts

### List notebooks

```text
Use NotebookLM to list my notebooks. Show the names and a brief description of each.
```

### Source-grounded research

```text
Use NotebookLM to search my notebooks for requirements related to [topic].
Summarize only what the sources say. Cite each source.
```

### Architecture review

```text
Use NotebookLM to retrieve architecture constraints and prior decisions for [project].
Then review the proposed design against those constraints and list any gaps.
```

### ADR generation

```text
Use NotebookLM to find prior architecture decisions relevant to [decision topic].
Draft an Architecture Decision Record using the standard ADR format.
Ground every section in the retrieved sources and cite them.
```

### Presales proposal

```text
Use NotebookLM to find prior proposals and capability documentation relevant to [opportunity].
Draft a proposal section that reuses approved language and cites the sources.
Do not invent capabilities. Flag any gaps.
```

### Implementation guidance from vendor docs

```text
Use NotebookLM to retrieve the relevant vendor documentation for [product or API].
Generate implementation code aligned to the retrieved specifications.
Note any assumptions made where documentation was ambiguous.
```

---

## Limitations

- **Browser automation** — `notebooklm-mcp` drives a local Chrome session. NotebookLM UI changes can break it until the package is updated.
- **No headless mode** — Authentication requires a visible browser window. Container and SSH environments without a display are not supported for initial auth.
- **Per-developer authentication** — There is no service account option. Each developer authenticates independently.
- **NotebookLM limits** — Google imposes source count and size limits per notebook.
- **Internet required** — NotebookLM is a cloud service. Offline use is not supported.
- **Not an official integration** — This configuration relies on the community `notebooklm-mcp` package. Review its license before enterprise deployment.

---

## Security

- Never include secrets, credentials, or personal data in your NotebookLM notebooks.
- Documents uploaded to NotebookLM are subject to Google's terms of service and privacy policy.
- Only upload documents your organization has approved for cloud AI processing.

See the repository [security/threat-model.md](../../security/threat-model.md) for full details.
