# Markdown Executive Summary Output Format

Generate a structured executive summary in Markdown, grounded in NotebookLM sources.

## When to use

Use this prompt pack when you need:
- An executive summary for a presales proposal, project brief, or status report
- A consistently structured Markdown document that non-technical stakeholders can read
- A summary where every claim is traceable to a source document

Use the [JSON presales proposal schema](../../schemas/presales-proposal.schema.json) if you need machine-readable output instead.

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, draft an executive summary in Markdown.

Structure the output with these sections in order:
1. ## Engagement overview (2–3 sentences, plain language, cite the source brief)
2. ## Key constraints (bullet list; each constraint cites a source document and section)
3. ## Proposed approach (3–4 sentences describing phases or workstreams; ground in sources)
4. ## Risk summary (table with columns: Risk, Likelihood, Impact, Source)
5. ## Next steps (numbered list of 3–5 specific actions)

Rules:
- Maximum 500 words total.
- Every bullet point and risk row must cite a source document.
- Use plain language — avoid jargon not explained in the sources.
- Do not include any figures, estimates, or statistics not found in the sources.
- If a section cannot be grounded in sources, write "Insufficient source coverage — requires human input" for that section.
```

## Expected output shape

```markdown
## Engagement overview
The programme delivers a cloud-hosted API platform for the retail organisation,
replacing end-of-support on-premises infrastructure (source: cloud-modernization-brief.md §Background).
Phase 2 covers the API gateway, identity layer, and data tier migration.

## Key constraints
- All production data must remain within EU-compliant cloud regions at all times
  (source: security-requirements.md §7.1)
- The data tier must provide full ACID guarantees for financial records
  (source: architecture-principles.md §2)
- No production changes during the peak trading season (November–January)
  (source: cloud-modernization-brief.md §Constraints)

## Proposed approach
Phase 1 deploys the managed API gateway and security baseline.
Phase 2 delivers the identity integration and data tier migration.
Phase 3 hardens the platform and completes penetration testing.
(source: cloud-modernization-brief.md §Timeline)

## Risk summary
| Risk | Likelihood | Impact | Source |
|------|-----------|--------|--------|
| EU data residency scope unresolved | High | High | customer-meeting-notes.md §Open questions |
| Pen test vendor selection timeline | Medium | High | security-requirements.md §6.1 |

## Next steps
1. Confirm EU data residency scope for backup storage (customer action)
2. Initiate pen test vendor selection by 2024-11-30
3. Prepare architecture review document by end of Month 1
```

## Validation notes

Review the output against these criteria before sharing:

- [ ] Every bullet cites a source
- [ ] No invented figures or statistics
- [ ] Risk table has at least 2 rows
- [ ] Next steps are specific and actionable (not generic)
- [ ] Word count is within the 500-word limit
- [ ] No sensitive customer data is present if the document will be shared externally

## Limitations

- Executive summaries are constrained to 500 words; complex engagements may require multiple summaries by topic area.
- Source quality directly affects summary quality; poorly structured source documents yield vague summaries.
- The prompt cannot enforce corporate branding, tone of voice, or approved terminology; review before sending to customers.
- If sources conflict (e.g. different scope documents), Copilot may blend information; flag conflicts explicitly in your prompt.
