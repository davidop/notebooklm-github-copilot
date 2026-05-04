# Security

This page summarises the security model for the NotebookLM + GitHub Copilot integration.

## Key principles

1. **No customer data in the MCP transport layer.** The MCP server only transfers query text and notebook responses — not raw source files.
2. **Browser profile isolation.** Use a dedicated browser profile for NotebookLM to prevent cross-account data leakage.
3. **Source classification before upload.** All sources must be classified before being uploaded to NotebookLM. Never upload personal data, credentials, or regulated data.
4. **No secrets in prompts.** Never paste API keys, tokens, or passwords into Copilot prompts.

## Security hardening

For the full security hardening guide, see [docs/security-hardening.md](../docs/security-hardening.md).

Topics covered:
- Browser profile isolation setup
- MCP server approval checklist
- Prompt injection defence
- Source approval workflow

## Checklists

Security checklists are available in the `checklists/security/` folder:

- Browser profile checklist
- Customer data review checklist
- Enterprise rollout security checklist
- MCP server approval checklist
- NotebookLM source approval checklist
- Prompt injection review checklist

## Governance policies

For enterprise governance policies and operating model, see [governance.md](governance.md).

## Compliance

For compliance considerations (GDPR, ISO 27001, SOC 2), see [docs/compliance-considerations.md](../docs/compliance-considerations.md).

## Threat model

For the full MCP threat model, see [docs/mcp-threat-model.md](../docs/mcp-threat-model.md).
