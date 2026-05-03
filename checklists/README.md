# Checklists

This folder contains operational and security checklists for using NotebookLM with MCP safely and responsibly. The checklists cover approval processes, browser isolation, data handling, prompt safety, and enterprise rollout governance.

## Who should use this folder

| Audience | Recommended checklist |
|---|---|
| Developer (new to MCP) | [`security/browser-profile-checklist.md`](security/browser-profile-checklist.md) |
| Platform / DevEx team rolling out to the org | [`security/enterprise-rollout-security-checklist.md`](security/enterprise-rollout-security-checklist.md) |
| Security team reviewing an MCP server | [`security/mcp-server-approval-checklist.md`](security/mcp-server-approval-checklist.md) |
| Compliance team reviewing data handling | [`security/customer-data-review-checklist.md`](security/customer-data-review-checklist.md) |
| Anyone adding sources to a notebook | [`security/notebooklm-source-approval-checklist.md`](security/notebooklm-source-approval-checklist.md) |
| Anyone using AI-generated prompts in an automated pipeline | [`security/prompt-injection-review-checklist.md`](security/prompt-injection-review-checklist.md) |

## Recommended starting points

- **Enterprise rollout**: Start with [`security/enterprise-rollout-security-checklist.md`](security/enterprise-rollout-security-checklist.md). It references the other checklists and provides the full approval workflow for enabling NotebookLM + MCP across a team or organisation.
- **New developers**: Start with [`security/browser-profile-checklist.md`](security/browser-profile-checklist.md). It covers the minimum browser isolation steps before connecting NotebookLM to an MCP client.

## Security checklist index

| Checklist | Description |
|---|---|
| [`security/mcp-server-approval-checklist.md`](security/mcp-server-approval-checklist.md) | Steps to approve and register a new MCP server before use |
| [`security/notebooklm-source-approval-checklist.md`](security/notebooklm-source-approval-checklist.md) | Steps to review and approve source documents before loading them into a notebook |
| [`security/customer-data-review-checklist.md`](security/customer-data-review-checklist.md) | Review steps to ensure no customer PII or regulated data enters a notebook |
| [`security/browser-profile-checklist.md`](security/browser-profile-checklist.md) | Browser profile isolation steps to prevent session cross-contamination |
| [`security/prompt-injection-review-checklist.md`](security/prompt-injection-review-checklist.md) | Review steps for detecting and mitigating prompt injection in notebook-sourced content |
| [`security/enterprise-rollout-security-checklist.md`](security/enterprise-rollout-security-checklist.md) | End-to-end security approval checklist for enterprise-wide NotebookLM + MCP rollout |

## Using checklists in a PR

If your pull request introduces a new MCP server configuration, notebook source, or workflow that handles sensitive data, complete the relevant checklist and paste a summary into your PR description. Use the [Security Review Request](../.github/ISSUE_TEMPLATE/security_review.yml) issue template if you need a security review before merging.
