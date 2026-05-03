# Recipe: Generate an Architecture Decision Record (ADR)

## When to use

Use this recipe when you need to document an architecture decision and want to ground it in prior decisions, constraints, or principles stored in NotebookLM.

## Required NotebookLM sources

- Prior ADRs or architecture decision logs
- Architecture principles and guardrails document
- Technical constraints or non-functional requirements
- Relevant vendor or technology documentation

## Prompt to use in Copilot Chat

```text
Use NotebookLM. In the <your-architecture-notebook> notebook, answer with citations:
1. What prior decisions exist related to [topic, e.g., "API gateway selection"]?
2. What architecture principles apply to this decision?
3. What constraints (cost, security, compliance) are relevant?

Then generate an ADR in the standard format using the template at templates/adr-template.md.
The decision context is: [describe the decision you need to make].
Return: ADR draft, source citations, and any open questions.
```

## Expected output

- A complete ADR in standard format (Context, Decision, Consequences, Alternatives Considered)
- Citations to relevant prior decisions and constraints
- List of assumptions or open questions

## Notes and limitations

- The quality of the ADR depends on the quality and completeness of sources in NotebookLM.
- Review the citations manually — NotebookLM can occasionally misattribute source details.
- This recipe works best when you have existing ADRs or architecture documentation in the notebook.
- For new greenfield decisions with no prior context, the recipe will note the absence of relevant sources.
