# Team Prompt Pack: Developer Enablement

## Team profile

Developer enablement teams include developer advocates, enablement leads, onboarding engineers, and developer experience (DX) engineers. They create and maintain onboarding materials, coding standards, API usage guides, tutorials, and inner-source documentation. Their knowledge lives in coding standards documents, API references, architecture guides, and onboarding wikis.

This pack helps enablement teams generate grounded, consistent developer documentation, onboarding guides, and code examples—without rewriting standards from scratch or producing content that contradicts existing guides.

---

## Common workflows

- **Onboarding documentation**: Generate structured onboarding guides for new developers joining a team or project.
- **Coding standard generation**: Turn informal conventions into formal, citable standards documents.
- **API usage guides**: Create practical usage examples from API documentation stored in a notebook.
- **Tutorial creation**: Draft step-by-step tutorials aligned to existing architecture and tooling guides.

---

## Required NotebookLM sources

- Coding standards and style guides
- API documentation and SDK references
- Architecture guides and system overviews
- Existing onboarding materials and getting-started guides
- Inner-source contribution guidelines

---

## Recommended agent / client

**GitHub Copilot** or **OpenCode** — GitHub Copilot for editor-integrated documentation alongside code; OpenCode for terminal-based documentation generation and scripted content workflows.

---

## Copy-paste prompts

```
Use NotebookLM. In the coding-standards notebook, generate an onboarding guide for
new developers joining [team or project name]. Include: development environment setup,
key conventions to follow, where to find standards, and common mistakes to avoid.
Cite the relevant standard for each convention listed.
```

```
Use NotebookLM. In the api-documentation notebook, create usage examples for
the [API name or endpoint group] API. Include: authentication, a basic request/response example,
error handling, and common patterns. Cite the API documentation for each example.
```

```
Use NotebookLM. In the coding-standards notebook, identify all standards that apply to
[language or framework, e.g., TypeScript, Python, Terraform]. Return: standard name,
rule, rationale, and an example. Cite each source section.
```

```
Use NotebookLM. In the architecture-guides notebook, draft a tutorial for
implementing [pattern or feature, e.g., event-driven messaging, token authentication]
using our approved stack. Include: prerequisites, steps, code snippets, and references
to the relevant architecture guide sections.
```

```
Use NotebookLM. In the coding-standards notebook, review this code sample for
adherence to our team standards. Return: compliant items, violations with the violated
standard cited, and suggested corrections.
[Paste code sample]
```

```
Use NotebookLM. In the onboarding-materials notebook, identify gaps in the current
onboarding guide for [team or technology area]. Return: topics that are missing or
unclear, suggested additions, and the source section that should be updated.
```

---

## Output format

- **Onboarding guides**: Structured Markdown with sections, steps, and cited conventions
- **API usage examples**: Code blocks with explanatory prose and citation to API docs
- **Coding standard documents**: Table or list format with rule, rationale, and example
- **Tutorials**: Numbered step format with prerequisites, code, and source references

---

## Quality checklist

- [ ] Every convention or rule in generated content cites a specific standards source
- [ ] Code examples are aligned to the approved stack documented in the architecture guides
- [ ] Onboarding guides do not contain assumptions about tooling not documented in sources
- [ ] API examples reflect the version documented in the notebook, not assumed current behaviour
- [ ] Generated content is reviewed by a team member before publishing

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Outdated API documentation leads to broken examples | Version-stamp all API docs in the notebook; regenerate examples at each API release |
| Inconsistent standards across teams | Use a single canonical coding-standards notebook shared across all enablement teams |
| Missing context for new team members in generated guides | Review generated onboarding guides with a recent joiner before publishing |
| Generated tutorials that contradict the architecture guide | Always query both the coding-standards and architecture-guides notebooks when generating tutorials |
