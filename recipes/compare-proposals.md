# Recipe: Compare Proposals Against Requirements

## When to use

Use this recipe when evaluating multiple vendor proposals, internal solutions, or technology options against a defined set of requirements.

## Required NotebookLM sources

- Requirements document or RFP
- Proposal documents (one or more vendors/options)
- Evaluation criteria or scoring rubric (if available)
- Relevant past evaluations or decisions

## Prompt to use in Copilot Chat

```text
Use NotebookLM. In the <your-proposals-notebook> notebook, answer with citations:
1. What are the key functional requirements from the requirements document?
2. What are the key non-functional requirements (performance, security, compliance, cost)?
3. How does [Proposal A / Option A] address each requirement? Note any gaps.
4. How does [Proposal B / Option B] address each requirement? Note any gaps.
5. What criteria from past evaluations are relevant here?

Then produce a comparison table with columns: Requirement, Proposal A, Proposal B, Winner/Gap.
Summarize the recommendation with citations.
```

## Expected output

- Structured requirements list with sources
- Side-by-side comparison table
- Gap analysis per proposal
- Summary recommendation with citations
- List of clarifying questions for vendors/teams

## Notes and limitations

- Keep proposal documents in separate notebooks or sections to avoid cross-contamination of citations.
- NotebookLM works best when each source document is clearly structured.
- The recipe does not perform financial modelling — add TCO analysis separately.
