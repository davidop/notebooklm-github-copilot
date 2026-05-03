# Prompt Injection Review Checklist

## Purpose

This checklist helps reviewers identify and mitigate prompt injection risks when using the notebooklm-github-copilot integration. Prompt injection occurs when adversarial instructions embedded in document sources or query responses manipulate AI agent behaviour in unintended ways.

---

## Owner

Developer / Team lead / Security reviewer

---

## When to Use

- **Before loading new document sources** into a NotebookLM notebook.
- **When reviewing AI-generated outputs** that will be acted upon by an AI agent or developer.
- **Periodically** as a general review of active notebooks and their sources.

---

## Checklist

### Document Source Vetting

- [ ] All documents to be uploaded as sources have been reviewed by a human before upload.
- [ ] Documents have been scanned (manually or with tooling) for instruction-like phrases such as:
  - "Ignore previous instructions"
  - "You are now a different assistant"
  - "Output the following text verbatim"
  - "Do not mention X" or "Always say Y"
- [ ] Documents originating from untrusted or externally controlled sources (e.g., public web pages, third-party files) have received additional scrutiny.
- [ ] Only documents from trusted, controlled sources are loaded. See [source approval checklist](notebooklm-source-approval-checklist.md).

### Output Review

- [ ] AI-generated outputs (summaries, answers, citations) are reviewed by a human before being acted upon.
- [ ] Outputs are compared against the original source document to detect fabricated or manipulated content.
- [ ] Outputs that recommend actions (e.g., "run this command", "upload this file") are treated with heightened suspicion and verified independently.

### Untrusted Document Warnings

- [ ] Developers and AI agents are trained to treat outputs from notebooks containing externally sourced documents as potentially untrusted.
- [ ] A clear label or note is added to notebooks that contain documents from external or third-party sources.

### Instruction Injection Detection

- [ ] Any AI output that appears to instruct the user or agent to deviate from expected workflow is flagged and escalated.
- [ ] Unexpected tool calls triggered by AI agent responses (e.g., file uploads, API calls) are logged and reviewed.
- [ ] The AI client's tool call logging is enabled where available.

### Output Sandboxing

- [ ] AI-generated code or commands from NotebookLM are reviewed before execution.
- [ ] AI-generated content is not automatically forwarded to other systems or APIs without human approval.

### User Training

- [ ] All users of this integration have been briefed on prompt injection risks.
- [ ] Users know to report suspicious AI outputs to the security team.

---

## Evidence to Collect

- Notes from manual document review (any suspicious patterns found and how they were handled).
- Log of unexpected tool calls (if available from AI client).
- Date and reviewer for each review.

---

## Approval Notes

| Field | Value |
|---|---|
| Notebooks / sources reviewed | |
| Suspicious content found | ☐ Yes (describe in notes)  ☐ No |
| Date of review | |
| Reviewer | |
| Notes | |

---

## Review Cadence

- **Before each new document source is added** to any notebook.
- **Quarterly** review of all active notebooks and their sources.
- **After any incident** involving unexpected AI agent behaviour.
