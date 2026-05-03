# Security Policy

## Reporting a vulnerability

Please report security vulnerabilities using [GitHub private vulnerability disclosure](https://github.com/davidop/notebooklm-github-copilot/security/advisories/new).

Do not open a public GitHub issue for a security vulnerability.

We will acknowledge receipt within 5 business days and aim to provide a resolution timeline within 10 business days.

---

## What is in scope

- Security issues in the configuration files, scripts, and documentation in this repository.
- Misconfigurations that could expose credentials or sensitive data.
- Issues in the VS Code MCP configuration that could lead to unintended data exposure.

---

## What is out of scope

- Vulnerabilities in the upstream `notebooklm-mcp` package. Please report those to the `notebooklm-mcp` maintainers directly.
- Vulnerabilities in Google NotebookLM itself. Please report those to Google.
- Vulnerabilities in GitHub Copilot or VS Code. Please report those to GitHub and Microsoft respectively.

---

## Data handling warnings

This project integrates with Google NotebookLM, which processes documents through Google's infrastructure.

**Never upload the following to Google NotebookLM:**

- API keys, tokens, or credentials of any kind
- Private keys or certificates
- Passwords or secrets
- Personally identifiable information (PII) subject to GDPR, CCPA, or other privacy regulations
- Protected health information (PHI) subject to HIPAA or equivalent regulations
- Customer data that has not been approved by your organization for cloud storage and AI processing
- Confidential information covered by NDA unless Google's terms permit it

**Authentication:**

- The `notebooklm-mcp` server stores authentication in a local Chrome profile on the developer's machine.
- Do not commit Chrome profile data, cookies, or session tokens to this repository.
- The `.gitignore` in this repository excludes common local credential paths.

---

## Enterprise deployment

Before deploying this in an enterprise environment:

1. Review the [enterprise rollout guide](docs/enterprise-rollout.md).
2. Ensure your organization's data classification policy permits uploading relevant documents to Google NotebookLM.
3. Pin the `notebooklm-mcp` version in `.vscode/mcp.json` and review its changelog before upgrading.
4. Enable only the MCP tools required for your workflows.

---

## Supported versions

This is an open-source community project with no formal support SLA. See [SUPPORT.md](SUPPORT.md).
