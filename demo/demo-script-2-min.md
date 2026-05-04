# 2-Minute Demo Script

A lightning demo for executive or stakeholder audiences. The goal is to show source-grounded output in under 2 minutes.

## Overview

**What you are showing:** GitHub Copilot producing an Architecture Decision Record grounded in documents loaded into NotebookLM — in seconds.

**Key message:** Copilot does not invent answers. Every output is traceable to a source document.

## Setup assumptions

- NotebookLM notebook is open in a browser tab with 3 sample sources loaded (see [sample-notebook-sources.md](sample-notebook-sources.md)).
- VS Code is open with GitHub Copilot chat visible.
- MCP server is running (green status in the Copilot chat panel).
- Screen resolution is 1920×1080 or larger.

## Screen actions

| Time | Action |
|------|--------|
| 0:00 | Show VS Code Copilot chat panel. Point out the MCP server connection. |
| 0:15 | Show the NotebookLM notebook in the browser tab briefly. Name the sources. |
| 0:25 | Switch back to VS Code. Paste the demo prompt into Copilot chat. |
| 0:30 | Press Enter and wait for output (≈ 15–20 seconds). |
| 0:50 | Highlight the citation in the output ("source: architecture-principles.md"). |
| 1:10 | Show one acceptance criterion in the output. Say "this came from the requirements doc". |
| 1:30 | Open the pre-generated [sample-outputs/adr.md](sample-outputs/adr.md) as a backup. |
| 1:50 | Close with: "Every word is grounded. No hallucinations. Ready for the 5-minute version?" |

## Prompts to use

```
Use NotebookLM. In the demo-notebook, answer with citations: What is the recommended API gateway technology and what are the top 3 architecture constraints we must respect? Return findings and source references.
```

## Voiceover notes

- Do not read the output aloud word-for-word. Point to the citation and say "notice the source reference here".
- If the MCP call fails, switch to the pre-generated output in `sample-outputs/adr.md` without breaking stride.
- Avoid jargon: say "source document" not "grounding context".
- Keep energy up — 2 minutes feels long if the pace is slow.
