# Markdown Architecture Review Output Format

Generate a structured architecture review document in Markdown, grounded in NotebookLM sources.

## When to use

Use this prompt pack when you need:
- A structured architecture review for a design gate or milestone
- Consistent review format across multiple reviewers or projects
- A document where every finding is traceable to a source

Use the [JSON architecture review schema](../../schemas/architecture-review.schema.json) if you need machine-readable output for tooling.

## Prompt

```
Use NotebookLM. In the [notebook-name] notebook, produce an architecture review in Markdown.

Structure the output with these sections:
1. ## Review summary (1–2 sentences: overall assessment, scope, date)
2. ## Fitness for purpose (per-area table: Area | Assessment | Source)
3. ## Security posture
   - ### Strengths (bullet list with source citations)
   - ### Concerns (bullet list with severity: CRITICAL / HIGH / MEDIUM / LOW, description, source)
4. ## Scalability concerns (bullet list with source citations; write "None identified" if none)
5. ## Compliance gaps (table: Requirement | Status | Source)
6. ## Open questions (numbered list)
7. ## Recommendations (numbered list; specific and actionable)

Rules:
- Every finding must cite a specific source document and section.
- Security concerns must include a severity label.
- Open questions must be genuinely unanswered in the sources — do not fabricate answers.
- Use "Insufficient source coverage" if a section cannot be assessed from the loaded sources.
```

## Expected output shape

```markdown
## Review summary
Architecture review of the Cloud Modernisation Platform core services (API layer,
identity, data tier), conducted 2024-11-15 against architecture-principles.md and
security-requirements.md. No blocking concerns identified; three medium-priority
items require resolution before go-live.

## Fitness for purpose
| Area | Assessment | Source |
|------|-----------|--------|
| API layer | Managed gateway satisfies policy-as-code and multi-region requirements | architecture-principles.md §3 |
| Identity | Federated IdP meets zero-standing-privilege requirement | security-requirements.md §4.1 |
| Data tier | ACID compliance confirmed for financial records | architecture-principles.md §2 |

## Security posture
### Strengths
- mTLS between all internal services (source: security-requirements.md §3.2)
- OAuth2/OIDC at the gateway layer (source: security-requirements.md §4)

### Concerns
- **MEDIUM** — EU data residency scope for backup storage is unresolved
  (source: customer-meeting-notes.md §Open questions)
- **LOW** — Certificate rotation mechanism not yet designed
  (source: vendor-implementation-guide.md §3.2)

## Scalability concerns
- Read-heavy reporting workloads may saturate the primary database replica at
  projected peak load (source: architecture-principles.md §2.2)

## Compliance gaps
| Requirement | Status | Source |
|-------------|--------|--------|
| EU data residency for backup | Open | security-requirements.md §7.1 |
| Penetration test schedule | Not specified | security-requirements.md §6.1 |

## Open questions
1. Does EU data residency apply to backup storage volumes?
2. What is the contractual RTO/RPO for DR?

## Recommendations
1. Resolve EU data residency question before designing backup architecture.
2. Design mTLS certificate rotation in next sprint.
3. Define penetration test schedule to satisfy security-requirements.md §6.1.
```

## Validation notes

Before sharing the review:

- [ ] Every finding cites a source document and section
- [ ] Security concerns have severity labels (CRITICAL / HIGH / MEDIUM / LOW)
- [ ] Open questions are genuinely open (not answered elsewhere in the review)
- [ ] Recommendations are specific and assigned to a role or sprint
- [ ] A human architect has reviewed and approved the output

## Limitations

- The review is only as complete as the sources in the notebook; if key design documents are not loaded, significant areas may have "Insufficient source coverage".
- NotebookLM may not identify implicit design assumptions not stated in the sources.
- Architecture reviews produced by this workflow should always be reviewed and approved by a qualified architect before being used as a gate decision.
- Compliance gap identification is not a substitute for a formal compliance or legal review.
