# 15-Minute Comprehensive Demo Script

A workshop-style demo for technical audiences. Covers setup, multiple use cases, and Q&A time.

## Overview

**What you are showing:** The complete NotebookLM + GitHub Copilot + MCP workflow across 4 use cases: ADR generation, backlog creation, presales proposal drafting, and delivery risk review.

**Key messages:**
1. Source grounding eliminates hallucinations on project-specific content.
2. The workflow is tool-agnostic — VS Code, Cursor, OpenCode all work.
3. Outputs integrate directly with GitHub Issues, Azure DevOps, and other delivery tools.
4. The setup takes under 5 minutes and requires no ML expertise.

## Setup assumptions

- NotebookLM notebook loaded with all 6 sources from [sample-notebook-sources.md](sample-notebook-sources.md).
- VS Code with GitHub Copilot chat, MCP server active and verified with doctor command.
- Browser tabs ready: NotebookLM, GitHub Issues, a blank ADO board.
- All sample outputs pre-generated as fallbacks.
- Screen resolution 1920×1080 or higher, font size ≥ 14pt for readability.

## Screen actions

### Part 1: Introduction (0:00–2:00)

| Time | Action |
|------|--------|
| 0:00 | Introduce the problem: "How much time does your team spend rewriting information that already exists in project documents?" |
| 0:30 | Briefly describe the three components: NotebookLM (source store), MCP (bridge), GitHub Copilot (interface). |
| 1:00 | Show the architecture diagram in `assets/demo-flow.svg`. Explain each component. |
| 1:30 | Open NotebookLM in the browser. Walk through the 6 loaded sources. Name and describe each one briefly. |

### Part 2: Use case 1 — ADR generation (2:00–5:00)

| Time | Action |
|------|--------|
| 2:00 | Switch to VS Code. Show the Copilot chat panel. Confirm MCP server is active. |
| 2:15 | Paste prompt 1 (ADR generation). |
| 2:30 | While waiting, explain what an ADR is and why source-grounding matters. |
| 3:00 | Output appears. Walk through each section: context, decision, rationale. Highlight 2 citations. |
| 4:00 | Say: "This ADR would have taken 45 minutes to write from scratch. It took 30 seconds with citations." |
| 4:30 | Open [sample-outputs/adr.md](sample-outputs/adr.md) to show the full expected format. |

### Part 3: Use case 2 — Backlog generation (5:00–8:00)

| Time | Action |
|------|--------|
| 5:00 | Paste prompt 2 (Epic/Feature/User Story generation). |
| 5:30 | Explain: "We're asking for a structured backlog hierarchy grounded in the requirements document." |
| 6:00 | Output appears. Show 2–3 user stories with acceptance criteria. |
| 6:45 | Open [sample-outputs/backlog.md](sample-outputs/backlog.md). Show the full backlog format. |
| 7:30 | Demonstrate pasting one issue body into a GitHub new-issue form. |

### Part 4: Use case 3 — Presales proposal section (8:00–11:00)

| Time | Action |
|------|--------|
| 8:00 | Paste prompt 3 (proposal executive summary). |
| 8:30 | While waiting: "This is the presales use case — generating proposal content grounded in the customer brief." |
| 9:00 | Output appears. Point out: cited constraints, no invented figures. |
| 9:45 | Open [sample-outputs/presales-proposal.md](sample-outputs/presales-proposal.md) as the full example. |
| 10:30 | Explain: "All numbers and constraints in this output came from the sources. We never fabricate." |

### Part 5: Use case 4 — Risk review (11:00–13:00)

| Time | Action |
|------|--------|
| 11:00 | Paste prompt 4 (delivery risk review). |
| 11:30 | Output appears. Walk through 2 risks with likelihood, impact, and citations. |
| 12:30 | Point out the compliance risk flagged from security requirements. |

### Part 6: Q&A and wrap-up (13:00–15:00)

| Time | Action |
|------|--------|
| 13:00 | Run the doctor command live: `npm run doctor`. Show green output. |
| 13:30 | Show `npm run setup` briefly (do not complete the wizard). |
| 14:00 | Direct audience to [sample-prompts.md](sample-prompts.md) and the recipes folder. |
| 14:30 | Open the floor for questions. |

## Prompts to use

**Prompt 1 — ADR:**
```
Use NotebookLM. In the demo-notebook, generate an Architecture Decision Record for API gateway selection. Include: title, status, context, decision, consequences. Cite all sources. Format as Markdown.
```

**Prompt 2 — Backlog:**
```
Use NotebookLM. In the demo-notebook, generate a backlog hierarchy with 2 Epics, 2 Features each, and 3 User Stories per Feature. Ground every item in a source. Acceptance criteria as checkbox lists.
```

**Prompt 3 — Presales proposal:**
```
Use NotebookLM. In the demo-notebook, draft an executive summary section for a presales proposal. Include: engagement overview, key constraints, proposed approach, and risk summary. Cite all sources. ≤ 400 words.
```

**Prompt 4 — Risk review:**
```
Use NotebookLM. In the demo-notebook, identify the top 5 delivery risks for the cloud modernisation programme. For each: title, description, likelihood, impact, mitigation steps. Cite sources.
```

## Voiceover notes

- Pause after each output appears. Allow 10 seconds of reading silence.
- Narrate the citation each time: "Notice — it says 'source: architecture-principles.md §2'. That's not ChatGPT guessing. That's a traceable claim."
- Keep a stopwatch visible to the presenter (not the audience) to stay on pace.
- If any live call fails, switch to sample outputs without apology — it is a useful demo of fallback behaviour.

## Common questions and answers

| Question | Answer |
|----------|--------|
| "How do I keep the notebook up to date?" | "You re-upload or replace sources as documents change. NotebookLM processes them automatically." |
| "Can this replace my architect?" | "No. It accelerates the first draft and ensures consistency. A human reviews and approves every output." |
| "What MCP clients are supported?" | "VS Code, Cursor, OpenCode — see the client configuration matrix in docs/." |
| "Is this compliant with our data governance policy?" | "Start with the security hardening guide and browser profile isolation docs." |
| "How do I get started?" | "Run `npm run setup` — it walks you through the entire configuration in under 5 minutes." |
