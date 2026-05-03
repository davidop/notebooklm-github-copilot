# MCP Server Approval Checklist

## Purpose

This checklist documents the review and approval of the `notebooklm-mcp` package for use on developer workstations within the organisation. It ensures that the package has been assessed for security, licence compliance, and data handling risks before deployment.

---

## Owner

Security team / Platform team

---

## When to Use

Complete this checklist before deploying `notebooklm-mcp` to any developer workstation for the first time, and repeat at each major version upgrade or quarterly review.

---

## Checklist

### Package Review

- [ ] Package name is `notebooklm-mcp` from the official npm registry (confirm, do not rely on indirect resolution).
- [ ] Package version is pinned to an exact version in `package.json` (no `^` or `~` ranges for production use).
- [ ] `package-lock.json` or equivalent lockfile is committed and used for all installs.
- [ ] `npm audit` has been run against the pinned version; all critical and high vulnerabilities are resolved or risk-accepted with documented justification.
- [ ] Changelog / release notes for the pinned version have been reviewed for breaking changes or security notices.

### Licence Review

- [ ] Package licence is identified and is compatible with your organisation's open-source policy.
- [ ] All transitive dependency licences have been reviewed (e.g., using `license-checker`).
- [ ] Legal team has confirmed licence acceptability if required by policy.

### Source Code Review

- [ ] Source code for the pinned version has been reviewed or a trusted third-party review has been obtained.
- [ ] No unexpected outbound network calls beyond `notebooklm.google.com`.
- [ ] No hardcoded credentials or secrets in the package source.

### Network Access Review

- [ ] The MCP process only communicates with `notebooklm.google.com` via the Chrome browser; no direct outbound calls to other endpoints.
- [ ] Firewall or egress filtering rules are in place if required by your network policy.

### Data Flow Review

- [ ] Data flow from IDE → MCP → Chrome → NotebookLM has been documented.
- [ ] Data classification policy for what may be uploaded has been communicated to developers.
- [ ] [Privacy and data handling guide](../../docs/privacy-and-data-handling.md) has been reviewed.

### Incident Response

- [ ] Incident response plan for a compromised browser profile is documented.
- [ ] Incident response plan for accidental sensitive data upload is documented.
- [ ] Security contact for this integration is identified and communicated to users.

---

## Evidence to Collect

- Screenshot or log of `npm audit` output.
- Licence report from `license-checker` or equivalent.
- Notes from source code review.
- Sign-off from approver(s).

---

## Approval Notes

| Field | Value |
|---|---|
| Package version approved | |
| Date of review | |
| Reviewer(s) | |
| Approval status | ☐ Approved  ☐ Conditionally approved  ☐ Rejected |
| Conditions / notes | |

---

## Review Cadence

Repeat this review:
- **Quarterly**, or
- When upgrading to a new major or minor version of `notebooklm-mcp`, or
- After any security incident involving this package or its dependencies.
