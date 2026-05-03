# Recipe: Create a Sprint Backlog from Meeting Notes

## When to use

Use this recipe to convert uploaded meeting notes, workshop outputs, or discovery session transcripts into structured user stories and a sprint backlog.

## Required NotebookLM sources

- Meeting notes or transcript (uploaded to NotebookLM)
- Product backlog or epic list (if available)
- Definition of Ready or acceptance criteria standards (if available)

## Prompt to use in Copilot Chat

```text
Use NotebookLM. In the <your-meeting-notes-notebook> notebook, answer with citations:
1. What action items or commitments were identified in the meeting?
2. What problems or pain points were described?
3. What features or capabilities were requested?
4. What decisions were made?

Then convert the findings into user stories in this format:
"As a [persona], I want [capability] so that [benefit]."

Group the stories by epic or theme. Add acceptance criteria for each story.
Return: user story list, epic groupings, source citations, and any ambiguities that need clarification.
```

## Expected output

- Structured user story list with acceptance criteria
- Epic or theme groupings
- Action items that are not user stories (e.g., technical spikes, decisions needed)
- Citations to specific meeting notes sections
- List of ambiguities or follow-up questions

## Notes and limitations

- Meeting transcript quality significantly affects output quality. Clean, well-formatted notes work best.
- Review all generated stories with the team before committing them to a sprint.
- This recipe does not estimate story points — add effort estimation in your sprint planning session.
- Sensitive meeting content (e.g., financial figures, personal details) should not be uploaded to NotebookLM.
