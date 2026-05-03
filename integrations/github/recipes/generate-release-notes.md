# Generate Release Notes with NotebookLM

## Scenario

You are preparing a release and want to generate user-facing and technical release notes that are grounded in the ADRs, requirements, and changelogs stored in your NotebookLM notebook. Use this recipe to produce consistent, source-backed release notes for each version.

## Required NotebookLM sources

- CHANGELOG.md or a draft change list
- Relevant ADRs merged in this release cycle
- Security requirements (to flag security-relevant changes)
- Roadmap or milestone document

## Prompt for GitHub Copilot

```
Use NotebookLM. In the [notebook-name] notebook, generate release notes for version [VERSION] using the following merged changes:

[PASTE MERGED PR TITLES AND ISSUE REFERENCES]

The release notes should include:
- ## What's new (user-facing features, plain language)
- ## Bug fixes (list with issue references)
- ## Security and compliance (any security-relevant changes, cite requirements)
- ## Breaking changes (if any, with migration instructions)
- ## Architecture changes (ADR references)
- ## Contributors
- ## Upgrade instructions

Cite the ADR or requirement source for any security or architecture change.
Flag any breaking changes that require migration steps.
```

## Expected output

```markdown
## v0.4.0 — Release notes

### What's new
- **Setup wizard**: Interactive CLI for first-time configuration (`scripts/setup-wizard.mjs`)
- **Client config generator**: Generate validated MCP config for VS Code, Cursor, and OpenCode
- **Doctor command**: Diagnose MCP connection issues with a single command

### Bug fixes
- Fixed token leak in browser profile isolation (closes #88)
- Corrected schema validation error for empty `required` arrays (closes #91)

### Security and compliance
- Improved browser profile isolation per security requirements §5.1
  (source: security-requirements.md)
- Added prompt injection review checklist to checklists/security/

### Breaking changes
None in this release.

### Architecture changes
- ADR-012: Selected JSON Schema Draft 2020-12 for all output validation schemas

### Contributors
- @maintainer, @contributor-a, @contributor-b

### Upgrade instructions
Run `npm install` to pick up updated dependencies. No configuration changes required.
```

## Recommended GitHub labels

| Label | Use |
|-------|-----|
| `release` | Tag the release PR |
| `breaking-change` | If migration steps are required |
| `security` | Release contains security fixes |

## Quality checklist

- [ ] All security changes cite a requirements source
- [ ] Breaking changes include migration instructions
- [ ] ADR references use the agreed ADR numbering scheme
- [ ] Release notes have been reviewed by the tech lead before publishing
- [ ] No internal project names or customer data appear in public release notes

## Limitations

- NotebookLM cannot access GitHub's API to pull merged PRs automatically; you must paste the change list into the prompt.
- ADR references are only as accurate as the ADR files uploaded to the notebook.
- If the notebook sources are stale, security citation accuracy will degrade.
- The `## Contributors` section requires manual completion from the GitHub contributor list.
