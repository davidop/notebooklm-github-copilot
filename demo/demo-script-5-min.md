# 5-Minute Demo Script

A standard demo for developer or architect audiences. Shows the full flow from source loading to structured output.

## Overview

**What you are showing:** The complete NotebookLM + GitHub Copilot + MCP flow, producing an ADR and a set of GitHub Issues from fictional project documents.

**Key messages:**
1. NotebookLM provides source-grounded context via MCP — Copilot does not hallucinate answers.
2. Output is structured and ready for downstream tools (GitHub Issues, ADO, etc.).
3. Any team member can use this workflow with no ML expertise.

## Setup assumptions

- NotebookLM notebook loaded with all sources from [sample-notebook-sources.md](sample-notebook-sources.md).
- VS Code with GitHub Copilot chat, MCP server active.
- Two browser tabs: NotebookLM, GitHub repository Issues page (or a blank new-issue form).
- `sample-outputs/adr.md` open as a fallback tab.

## Screen actions

| Time | Action |
|------|--------|
| 0:00 | Open with the problem: "Teams waste time writing documents that repeat what's already in project sources." |
| 0:30 | Show NotebookLM with the 6 sample sources loaded. Name each one briefly. |
| 1:00 | Switch to VS Code. Show Copilot chat. Paste prompt 1 (ADR query). |
| 1:15 | While waiting for output, explain: "Copilot is calling the NotebookLM MCP server. It does not guess." |
| 1:45 | Output appears. Point out: title, status, decision, rationale, citations. |
| 2:30 | Paste prompt 2 (GitHub Issues generation). |
| 2:45 | Output appears: 3–4 structured issues with acceptance criteria and labels. |
| 3:30 | Open the GitHub new-issue form. Paste one issue body. Show how it is ready to submit. |
| 4:00 | Point out: "This took 4 minutes. The same work used to take half a day." |
| 4:30 | Show the fallback sample outputs folder for audiences who want to read the full output. |
| 4:50 | Close with the call-to-action: "Try the setup wizard — `npm run setup` — and you are running in 5 minutes." |

## Prompts to use

**Prompt 1 — ADR:**
```
Use NotebookLM. In the demo-notebook, generate an Architecture Decision Record for API gateway selection. Include: title, status, context, decision, consequences, and cite all sources. Format as Markdown.
```

**Prompt 2 — GitHub Issues:**
```
Use NotebookLM. In the demo-notebook, extract the top 3 implementation tasks from the architecture principles and format each as a GitHub Issue with title, acceptance criteria (checkbox list), and labels. Cite sources.
```

## Voiceover notes

- Pause after each output appears. Let the audience read for 5–10 seconds before you speak.
- If asked "is this real data?" — answer "no, these are fictional demo sources — we never put real customer data into NotebookLM without explicit approval."
- Prepare for the question "can it make mistakes?" — answer honestly: "Yes. That's why every output includes citations, so you can verify before you act."
- Have the [sample-outputs/adr.md](sample-outputs/adr.md) fallback ready in a visible tab.

## Common objections and responses

| Objection | Response |
|-----------|----------|
| "This is just ChatGPT" | "Unlike a general LLM, every answer is grounded in the documents you loaded. If the source doesn't say it, Copilot says so." |
| "What about data security?" | "The notebook only contains what you upload. We have a security hardening guide covering browser isolation and data classification." |
| "Can it work with our existing tools?" | "Yes — we have integration recipes for GitHub Issues, Azure DevOps, and more." |
