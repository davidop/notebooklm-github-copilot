# Generate Pull Request Descriptions with NotebookLM

## Scenario

You have made a code change and want to write a PR description that is grounded in the architecture decisions, requirements, or ADRs that motivated the change. Use this recipe to produce reviewable, traceable PR descriptions without starting from a blank page.

## Required NotebookLM sources

- Relevant Architecture Decision Record (ADR)
- Architecture principles or constraints document
- Security requirements (if the change has a security dimension)
- Sprint or milestone planning notes

## Prompt for GitHub Copilot

```
Use NotebookLM. In the [notebook-name] notebook, help me write a GitHub pull request description for the following change:

Change summary: [ONE-SENTENCE DESCRIPTION OF WHAT CHANGED]
Files changed: [LIST KEY FILES OR MODULES]

The description should include:
- ## Summary (2–3 sentences, plain language)
- ## Motivation (cite the ADR or requirement that drives this change)
- ## Changes (bullet list of what changed and why)
- ## Testing notes (what was verified)
- ## Related issues (link format: #issue-number)
- ## Reviewer checklist (checkbox list of what reviewers should verify)

Cite all motivation points to specific notebook sources.
```

## Expected output

```markdown
## Summary
Adds per-client rate limiting to all public REST endpoints using a token-bucket
algorithm. This change is required to meet the API protection controls defined
in the security requirements.

## Motivation
Security requirements §3.2 mandate rate limiting on all public-facing API
endpoints (source: security-requirements.md). ADR-007 selected the token-bucket
algorithm as the preferred approach for its predictable burst behaviour
(source: adr-007-rate-limiting.md).

## Changes
- Added `RateLimiterMiddleware` to the Express middleware stack
- Configured per-client limits via environment variables
- Emits `rate_limit_exceeded` events to the audit log

## Testing notes
- Unit tests cover limit enforcement and 429 response format
- Integration test verifies Retry-After header is present

## Related issues
Closes #42

## Reviewer checklist
- [ ] Rate limit values match security requirements §3.2
- [ ] Audit log event schema matches the agreed format
- [ ] No credentials or keys are hardcoded
```

## Recommended GitHub labels

| Label | When to apply |
|-------|---------------|
| `security` | PR addresses a security requirement |
| `architecture` | PR implements or modifies an ADR |
| `needs-review` | Default for new PRs |
| `documentation` | PR only changes docs |

## Quality checklist

- [ ] Summary is written in plain language understandable by non-engineers
- [ ] Every motivation point cites a notebook source
- [ ] Reviewer checklist covers security and compliance items where applicable
- [ ] Related issues are linked with `#` prefix
- [ ] No sensitive customer data in the PR description

## Limitations

- NotebookLM does not have access to your code diff; you must provide the change summary manually.
- Generated motivation text should be verified against the actual ADR or requirement before publishing.
- The reviewer checklist is a starting point — add team-specific items before submitting.
- NotebookLM may not be aware of the latest version of an ADR if the notebook sources are stale.
