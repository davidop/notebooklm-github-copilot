# Security Hardening Guide

This guide describes the attack surface of the notebooklm-github-copilot stack and provides practical mitigations for teams deploying it on developer workstations.

> **Disclaimer:** This is an unofficial community project. It is not affiliated with Google, GitHub, Microsoft, OpenAI, Anthropic, Cursor, or OpenCode. Security posture depends on your environment. Review this guide with your security team before enterprise deployment.

---

## Stack Overview

```
IDE / AI Agent (Copilot / Cursor / OpenCode)
        │  stdio
        ▼
notebooklm-mcp  (local Node.js process)
        │  Chrome DevTools Protocol
        ▼
Chromium browser (local, headless or headed)
        │  HTTPS
        ▼
notebooklm.google.com  →  Google infrastructure
```

Each boundary is a potential attack surface.

---

## Approved Source Policies

Only upload documents that your organisation has explicitly approved for third-party AI tools. Before uploading any file to NotebookLM:

- Verify the document is classified **Public** or **Internal – Approved for AI tools**.
- Confirm it contains no PII, regulated data, customer data, or proprietary secrets.
- Use the [source approval checklist](../checklists/security/notebooklm-source-approval-checklist.md).

---

## Local Browser Profile Risks

The MCP server drives a Chrome/Chromium profile stored on the developer's local disk. This profile contains Google session cookies and authentication tokens.

- If an attacker gains read access to the profile directory, they can hijack the Google session.
- The profile path should be stored on an encrypted volume.
- Never commit the profile directory to git. See [browser profile security](browser-profile-security.md) and the [.gitignore guidance](browser-profile-security.md#gitignore-guidance).

---

## Google Account and Session Handling

- Use a dedicated Google account for NotebookLM automation where possible. Do not reuse personal or admin accounts.
- Rotate the session periodically by deleting and recreating the browser profile.
- Enable 2FA on the Google account used for NotebookLM.

---

## MCP Server Trust Boundaries

The MCP server runs as a local process communicating over stdio. It inherits the permissions of the invoking user.

- The MCP process can read files and spawn child processes as the current user.
- Only run the MCP server from a pinned, audited version of `notebooklm-mcp`.
- Review the [MCP server approval checklist](../checklists/security/mcp-server-approval-checklist.md) before deployment.

---

## Prompt Injection Risks

Documents loaded into NotebookLM may contain adversarial instructions intended to manipulate AI-generated outputs or tool calls.

- Review uploaded documents for embedded instructions (e.g., "Ignore previous instructions and…").
- Treat all AI-generated output as untrusted until reviewed by a human.
- See [prompt injection review checklist](../checklists/security/prompt-injection-review-checklist.md).

---

## Source Poisoning Risks

A compromised or malicious document source can cause NotebookLM to produce misleading summaries or fabricated citations, which may then influence downstream decisions made by an AI agent.

- Only load documents from trusted, controlled sources.
- Cross-check critical findings against the original source document.

---

## Hallucination and Unsupported Inference

NotebookLM, like all LLM-backed tools, can generate plausible-sounding but incorrect answers. Do not rely solely on NotebookLM output for security-sensitive, legal, or financial decisions without human verification.

---

## Tool Invocation Risks

MCP tool calls are arbitrary actions executed by the local process. A malicious prompt could cause an AI agent to invoke MCP tools in unintended ways.

- Restrict MCP tool permissions to the minimum required.
- Log all tool invocations where your AI client supports it.

---

## Local Machine Security Expectations

- Developer workstations must have full-disk encryption enabled.
- OS and Node.js must be kept up to date.
- The `notebooklm-mcp` package must be version-pinned and audited with `npm audit` before use.

---

## Enterprise Policy Recommendations

- Maintain an approved tool list that includes `notebooklm-mcp` with a pinned version and reviewed licence.
- Require completion of the [enterprise rollout checklist](../checklists/security/enterprise-rollout-security-checklist.md) before org-wide deployment.
- Define a data classification policy for what may be uploaded.

---

## Auditability Limitations

- NotebookLM does not currently expose a machine-readable audit log.
- MCP tool call logs depend on the AI client's logging capabilities.
- Document all notebook sources and queries in your own records for audit purposes.

---

## Recommended Mitigations Summary

| Risk | Mitigation |
|---|---|
| Browser profile theft | Encrypted disk, dedicated Google account, periodic rotation |
| Prompt injection | Document vetting checklist, human review of outputs |
| Source poisoning | Trusted sources only, cross-check citations |
| Session hijacking | 2FA on Google account, profile lifecycle management |
| Supply chain (npm) | Pin package version, run `npm audit`, review licence |
| Tool invocation abuse | Minimum permissions, enable client-side tool call logging |
| Hallucination | Human-in-the-loop for all critical decisions |
| Data leakage | Source approval policy, no PII / regulated data |
