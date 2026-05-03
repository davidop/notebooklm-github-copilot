# MCP Server Governance

**Template — adapt to your organization's legal, compliance, and security requirements.**

---

## 1. Purpose

This framework defines how [ORGANIZATION] evaluates, approves, configures, and maintains Model Context Protocol (MCP) servers used in developer tooling — including integrations with GitHub Copilot, OpenCode, Cursor, and other AI-assisted engineering environments. MCP servers extend AI tools with external capabilities (web search, document retrieval, API access); appropriate governance reduces the risk of data leakage, supply chain compromise, and unauthorized access.

---

## 2. MCP server classification

| Status | Definition |
|--------|-----------|
| **Approved** | Has passed security, license, and configuration review. Listed in the [ORGANIZATION] Approved MCP Server Registry. May be used by developers without additional approval. |
| **Under review** | Security or license review is in progress. Must not be used in production developer environments until review is complete. |
| **Prohibited** | Failed review, violates policy, or poses unacceptable risk. Must not be used in any [ORGANIZATION] environment. |

The current registry is maintained at [LINK TO REGISTRY / WIKI PAGE].

---

## 3. Approval requirements

A new MCP server must pass all of the following before it may be added to the Approved registry:

### Security review
- Source code or binary reviewed for suspicious network calls, credential harvesting, or data exfiltration patterns
- Network destinations audited; all external endpoints documented and approved
- Permissions and scopes limited to the minimum required

### License review
- Open-source license compatible with [ORGANIZATION]'s software usage policy
- Third-party dependency licenses reviewed

### Vendor assessment (for commercial or hosted MCP servers)
- Vendor's data processing agreement reviewed by [LEGAL / PROCUREMENT]
- Data residency and retention policies confirmed acceptable
- Vendor security certifications reviewed (e.g., SOC 2, ISO 27001)

### Version pinning
- Approved version must be explicitly pinned in configuration
- Automatic updates to unpinned versions are prohibited

---

## 4. Configuration standards

All MCP server configurations in `.vscode/mcp.json` or equivalent files must follow these standards:

- Use only servers listed as **Approved** in the registry
- Pin server versions explicitly — do not use `latest` or unversioned references
- Store secrets (API keys, tokens) in environment variables or a secrets manager; do not hardcode in configuration files
- Configuration files containing secrets must not be committed to version control; use `.gitignore` or equivalent
- Reference the shared template at [`clients/vscode/mcp.json`](../clients/vscode/mcp.json) as the baseline for approved server definitions

---

## 5. Update and patching policy

- MCP server updates must pass the same approval process as initial installation.
- Security patches for critical vulnerabilities must be assessed within [5 / 10] business days of public disclosure.
- The platform team will publish approved updated versions to the registry; developers must update to approved versions within [30] days of publication.
- Outdated versions that have known critical vulnerabilities may be added to the Prohibited list.

---

## 6. Developer responsibilities

- Use only MCP servers with **Approved** status.
- Pin versions as specified in approved configuration templates.
- Do not modify MCP server binaries or wrap them with additional code without platform team review.
- Report suspected malicious behavior or unexpected network activity to [SECURITY INCIDENT CONTACT] immediately.

---

## 7. Platform team responsibilities

- Maintain the Approved MCP Server Registry and keep it current.
- Conduct security reviews for new approval requests within [10] business days.
- Publish configuration templates and communicate approved updates to engineering teams.
- Conduct annual review of all approved servers to confirm continued compliance.

---

## 8. Audit requirements

The platform team will audit MCP server usage on a [QUARTERLY / ANNUAL] basis, verifying that:

- Only approved servers are in use
- Versions match approved pinned versions
- Secrets are stored per configuration standards
- No prohibited servers are present in developer environments

---

## 9. Exception process

Requests to use a server that is under review or to deviate from configuration standards must be submitted via the [Exception Request Template](./exception-request-template.md). Exceptions are time-limited and require platform team and security team approval.

---

*This template does not constitute legal advice. Consult qualified legal and compliance professionals before formal adoption.*
