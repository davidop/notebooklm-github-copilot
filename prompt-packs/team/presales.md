# Team Prompt Pack: Presales

## Team profile

Presales teams include solution engineers, presales architects, and bid managers. They respond to RFPs, build proposals, map capabilities to customer requirements, and conduct win/loss analysis. Their knowledge is stored in past proposals, capability libraries, certification records, and customer discovery notes.

This pack helps presales teams use NotebookLM-grounded prompts to draft proposal responses, identify reusable content, and map capabilities to requirements—without mixing customer data or citing outdated capabilities.

---

## Common workflows

- **RFP analysis**: Extract and categorise requirements from RFP documents.
- **Proposal drafting**: Draft responses to specific RFP sections using past proposals as grounding.
- **Capability mapping**: Match internal capabilities to stated customer requirements.
- **Win/loss analysis**: Extract patterns and themes from past bids stored in a notebook.

---

## Required NotebookLM sources

- Past proposals (anonymised or approved for use)
- Internal capability library (service descriptions, differentiators)
- Customer requirements (from discovery sessions or RFP documents, approved for upload)
- Vendor certifications and partnership documentation
- Approved case studies and reference materials

> **Important**: Only upload customer data to NotebookLM after confirming it is approved for that system. Never mix data from different customers in the same notebook without explicit governance controls.

---

## Recommended agent / client

**GitHub Copilot** or **Cursor** — Cursor's multi-file context is useful for drafting long proposal documents; GitHub Copilot integrates well into structured writing workflows.

---

## Copy-paste prompts

```
Use NotebookLM. In the past-proposals notebook, identify how we have addressed
[requirement type, e.g., data residency, disaster recovery, SLA commitments] in past bids.
Return: approaches used, specific proposal references, and reusable language. Cite each source.
```

```
Use NotebookLM. In the capability-library notebook, draft a response to this RFP section:
[Paste RFP requirement text]
Return: a draft response of 150-200 words that maps our capabilities to the stated requirement,
with citations from the capability library.
```

```
Use NotebookLM. In the past-proposals notebook, extract the win themes
from proposals in the [sector or deal type] category.
Return: recurring themes, differentiators cited, and any patterns that correlate with wins.
```

```
Use NotebookLM. In the capability-library notebook, identify all capabilities
relevant to a requirement for [topic, e.g., managed security operations, cloud migration].
Return: capability name, description, maturity level, and any supporting evidence. Cite sources.
```

```
Use NotebookLM. In the past-proposals notebook, review this draft proposal section
for consistency with how we have described [capability or service] in previous winning proposals.
Return: inconsistencies, suggested revisions, and the source proposal for each suggestion.
[Paste draft section]
```

```
Use NotebookLM. In the vendor-certifications notebook, identify all certifications
and partnerships relevant to a customer requirement for [compliance or technology area].
Return: certification name, scope, expiry if available, and citation.
```

---

## Output format

- **Proposal sections**: Structured prose (150–300 words per section) with citations
- **Capability maps**: Table with requirement, capability, evidence, and citation
- **Win theme summaries**: Bullet list with source proposal references
- **RFP analysis**: Categorised requirement list with suggested owner and approach

---

## Quality checklist

- [ ] All capability claims are backed by a citation from the capability library or past proposal
- [ ] No confidential customer data from one customer appears in output for another
- [ ] Certifications cited are current (check expiry dates)
- [ ] Proposal language matches approved messaging from the capability library
- [ ] Open questions are flagged where sources were insufficient

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Customer data mixing across notebooks | Use one notebook per customer; enforce strict source governance |
| Outdated capability descriptions | Version-date all capability library documents; review quarterly |
| Citations pointing to stale or superseded proposals | Mark superseded proposals in the notebook with a status header |
| Overconfident claims unsupported by evidence | Require a citation for every differentiating claim before submission |
