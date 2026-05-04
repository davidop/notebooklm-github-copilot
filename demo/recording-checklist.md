# Demo Recording Checklist

Use this checklist before, during, and after recording a demo video.

## Pre-recording setup

### Environment

- [ ] NotebookLM notebook `demo-notebook` is loaded with all 6 sources from [sample-notebook-sources.md](sample-notebook-sources.md)
- [ ] VS Code is open with GitHub Copilot extension active
- [ ] MCP server is running: `npm run doctor` returns all green
- [ ] Browser zoom is set to 100% (or 125% for smaller screens)
- [ ] Font size in VS Code editor is ≥ 14pt
- [ ] Terminal font size is ≥ 14pt
- [ ] All browser notifications are disabled
- [ ] Do Not Disturb / Focus mode is enabled on the OS

### Layout

- [ ] VS Code is full-screen or maximised
- [ ] Copilot chat panel is visible and wide enough to read
- [ ] NotebookLM browser tab is open and ready to switch to
- [ ] No personal data, credentials, or sensitive files are visible anywhere on screen

### Fallback

- [ ] [sample-outputs/adr.md](sample-outputs/adr.md) is open in a VS Code tab
- [ ] [sample-outputs/architecture-review.md](sample-outputs/architecture-review.md) is open in a VS Code tab
- [ ] [sample-outputs/backlog.md](sample-outputs/backlog.md) is open in a VS Code tab
- [ ] [sample-outputs/presales-proposal.md](sample-outputs/presales-proposal.md) is open in a VS Code tab
- [ ] Fallback tabs are minimised (not visible) until needed

### Audio / video

- [ ] Screen recording software is configured (1920×1080 minimum)
- [ ] Microphone is tested; background noise is acceptable
- [ ] Headphones are worn to avoid mic feedback (if narrating live)
- [ ] A test 30-second recording has been reviewed for audio quality

## During recording

- [ ] Narrate what you are doing before you do it ("Now I'll paste the ADR prompt…")
- [ ] Pause after each output appears — allow 5–10 seconds of reading silence
- [ ] Highlight citations visually (mouse hover or brief selection)
- [ ] Say "source" out loud when pointing to a citation
- [ ] If an MCP call fails, switch to the fallback output naturally: "Here is a pre-generated example…"
- [ ] Do not read error messages aloud — switch to fallback
- [ ] Keep to the script timing (use a visible stopwatch if needed)

## Post-recording

### Review

- [ ] Watch the full recording before publishing
- [ ] Check for any personal data, credentials, or sensitive information visible on screen
- [ ] Check audio quality throughout
- [ ] Check that all citations are legible at the recorded resolution
- [ ] Verify that the recording matches the chosen script length (2 / 5 / 15 min)

### Editing

- [ ] Trim dead air longer than 3 seconds
- [ ] Add captions or subtitles if the recording will be published externally
- [ ] Add chapter markers for the 15-minute script

### Publishing

- [ ] Apply a title card with: title, date, version (e.g. "v0.4.0 demo")
- [ ] Confirm the thumbnail does not show any sensitive screen content
- [ ] Update the demo kit README with a link to the recording (if hosted internally)
- [ ] Share with the team for review before wider distribution
