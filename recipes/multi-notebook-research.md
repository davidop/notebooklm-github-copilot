# Recipe: Multi-Notebook Research

## Goal

Conduct a structured research workflow across two or more NotebookLM notebooks to produce a grounded, source-cited answer that draws on multiple knowledge domains.

---

## When to use

- Your question spans more than one knowledge domain (e.g., internal standards _and_ vendor documentation).
- You need to confirm that an answer is consistent across different source types.
- You are producing a deliverable (architecture review, proposal section, compliance report) that requires evidence from multiple authoritative sources.
- A single notebook does not contain enough context to answer the question fully.

---

## Prerequisites

- `notebooklm-mcp` configured and connected to your agent (GitHub Copilot, OpenCode, or Cursor).
- At least two relevant NotebookLM notebooks populated with source documents.
- A clear question or research goal written before you begin.

---

## Sources

Prepare the following notebook types depending on your research domain:

| Notebook | Typical contents |
|----------|-----------------|
| `internal-standards` | Policies, architecture principles, coding standards |
| `vendor-documentation` | Cloud provider or third-party product documentation |
| `architecture-decisions` | ADR log, historical design decisions |
| `meeting-notes` | Sprint notes, retrospectives, decision logs |
| `proposals` or `capability-library` | Past bids, reusable capability descriptions |

---

## Step-by-step workflow

1. **Define your research question** — Write a single, specific question before opening your agent. Vague questions produce vague answers.

2. **Identify the relevant notebooks** — List the two or three notebooks most likely to contain authoritative answers.

3. **Query notebook 1** — Ask the narrowest version of your question. Request citations.

4. **Query notebook 2** — Ask the same question (or a complementary version). Request citations.

5. **Query notebook 3 (if applicable)** — Repeat for any additional notebooks.

6. **Synthesise** — Ask your agent to compare the answers, identify agreements and conflicts, and produce a unified finding.

7. **Label outputs** — Categorise each finding as a fact (cited), assumption (inferred), or recommendation (generated).

8. **Document gaps** — Record where sources were silent or insufficient.

---

## Example prompts

```
Use NotebookLM. In the internal-standards notebook, answer with citations:
What are the mandatory controls for a production API? Return: control list, rationale, and source.
```

```
Use NotebookLM. In the vendor-documentation notebook, answer with citations:
What does [cloud provider] recommend for securing a production API?
Return: recommendations, rationale, and source section.
```

```
Given these two answers:
- From internal-standards: [paste answer]
- From vendor-documentation: [paste answer]

Synthesise a unified set of API security controls. For each control, indicate whether it comes
from internal standards, the vendor, or both. Flag any conflicts.
```

---

## Expected output

- A finding list or table with each item attributed to a specific notebook and source
- A synthesis section that reconciles agreements and flags conflicts
- A section for open questions where sources were insufficient
- A confidence rating per finding (high / medium / low)

---

## Quality checks

- [ ] Every finding has a citation to a specific notebook and source document
- [ ] Conflicts between notebooks are explicitly identified, not silently resolved
- [ ] Assumptions are separated from facts
- [ ] Open questions are documented for follow-up
- [ ] The research question was answered, not just described

---

## Common pitfalls

- **Asking too broad a question**: Break it into sub-questions before querying.
- **Querying only one notebook**: Always cross-check with a second source on high-stakes topics.
- **Treating synthesis as a fact**: The agent's synthesis is a recommendation, not a citation.
- **Skipping the gap documentation step**: Undocumented gaps lead to false confidence in the output.
- **Not labelling assumptions**: Mixed fact/assumption outputs are risky to act on without review.
