# Recipe: Compare Notebook Answers

## Goal

Ask the same question to two different NotebookLM notebooks, then ask your agent to compare and synthesise the answers. Use this recipe to surface differences in perspective, identify gaps in individual sources, and produce a unified, balanced finding.

---

## When to use

- You want to understand how internal standards compare to vendor guidance on the same topic.
- You need to reconcile two bodies of knowledge before making a decision.
- You are validating that a proposed approach is consistent across multiple authoritative sources.
- You want to identify where one source is more detailed or more current than another.
- You are building a deliverable that requires balanced representation of multiple knowledge bases.

---

## Prerequisites

- `notebooklm-mcp` configured and connected to your agent.
- Two NotebookLM notebooks with relevant content on the topic you want to compare.
- A specific, well-scoped question written before you begin.

---

## Sources

This recipe works best when comparing notebooks with complementary (not identical) content:

| Comparison | Use case |
|-----------|---------|
| `internal-standards` vs `vendor-documentation` | Are our standards aligned with the vendor's guidance? |
| `architecture-decisions` vs `internal-standards` | Do past decisions reflect current principles? |
| `past-proposals` vs `capability-library` | Does our delivered work match our stated capabilities? |
| `compliance-frameworks` vs `security-standards` | Does our security posture meet the compliance requirement? |
| `meeting-notes` vs `project-specifications` | Are decisions made in meetings reflected in the spec? |

---

## Step-by-step workflow

1. **Write your comparison question** — State the question precisely. Example: *"What logging requirements apply to a production API?"*

2. **Query notebook A** — Ask the question and request a structured answer with citations.

3. **Collect answer A** — Copy the full answer including citations.

4. **Query notebook B** — Ask the identical question and request citations.

5. **Collect answer B** — Copy the full answer including citations.

6. **Ask for comparison** — Provide both answers to your agent and ask for a structured comparison.

7. **Review the synthesis** — Check that the comparison identifies real differences, not just paraphrasing.

8. **Document the result** — Record agreements, differences, and gaps for use in your deliverable.

---

## Example prompts

```
Use NotebookLM. In the internal-standards notebook, answer with citations:
What logging requirements apply to a production API?
Return: requirement, rationale, and source section.
```

```
Use NotebookLM. In the vendor-documentation notebook, answer with citations:
What logging requirements does [cloud provider] recommend for a production API?
Return: requirement, rationale, and source section.
```

```
I have two answers to the question "What logging requirements apply to a production API?":

Answer A (internal-standards notebook):
[Paste answer A here]

Answer B (vendor-documentation notebook):
[Paste answer B here]

Compare these two answers. Return:
1. Requirements that appear in both answers (with citations from each)
2. Requirements only in Answer A (with citation)
3. Requirements only in Answer B (with citation)
4. Any direct contradictions between the two answers
5. A synthesised recommendation that reconciles both sources
```

---

## Expected output

- A comparison table or structured list with four categories: in both, only in A, only in B, conflicting
- A citation for every item from its source notebook
- A synthesised recommendation section
- A list of open questions where sources diverged significantly

---

## Quality checks

- [ ] The same question was asked to both notebooks before comparing
- [ ] Every item in the comparison is attributed to a specific notebook and source
- [ ] Contradictions are reported as contradictions, not silently averaged
- [ ] The synthesis is labelled as a recommendation, not a fact
- [ ] Open questions from the comparison are documented for follow-up

---

## Common pitfalls

- **Asking different questions to each notebook**: The comparison is only valid if the same question was asked.
- **Paraphrasing answers before comparing**: Always paste the full answer with citations; paraphrasing loses nuance.
- **Treating the synthesis as ground truth**: The synthesised recommendation is agent-generated; it still requires human review.
- **Comparing notebooks with overlapping sources**: If both notebooks contain the same documents, the comparison will surface false agreement.
- **Skipping documentation of gaps**: Items that appear in only one notebook represent knowledge gaps that may need to be addressed.
