# Recipe: Source Triangulation

## Goal

Verify a claim or finding by querying two or more independent NotebookLM notebooks and confirming that the answer is consistent across sources. Use this recipe when a single source is not sufficient to act with confidence.

---

## When to use

- The decision has significant consequences (architecture choices, compliance commitments, security controls).
- A claim appears in one source but is not confirmed elsewhere.
- You have received conflicting information and need to determine which source is authoritative.
- You are preparing a deliverable where every key claim must be traceable to multiple independent sources.
- A novel or unexpected claim appears in the output that was not anticipated.

---

## Prerequisites

- `notebooklm-mcp` configured and connected to your agent.
- Two or more notebooks containing independent sources on the topic (not the same document uploaded twice).
- The specific claim or question you want to triangulate, written clearly before you begin.

---

## Sources

For effective triangulation, the notebooks should contain genuinely independent sources:

| Notebook pair | Why independent |
|--------------|----------------|
| `internal-standards` + `vendor-documentation` | Internal policy vs. external provider guidance |
| `architecture-decisions` + `internal-standards` | Historical decisions vs. current principles |
| `past-proposals` + `capability-library` | Delivered work vs. formally described capabilities |
| `compliance-frameworks` + `security-standards` | External framework vs. internal implementation guidance |

Avoid triangulating two notebooks that contain the same underlying document.

---

## Step-by-step workflow

1. **State the claim to verify** — Write the exact claim or question before querying. Example: *"Our platform mandates encryption at rest for all storage accounts."*

2. **Query source 1** — Ask the first notebook whether the claim is supported, and request the exact citation.

3. **Query source 2** — Ask the second notebook the same question. Request the exact citation.

4. **Query source 3 (optional)** — If available, query a third independent notebook.

5. **Compare** — Ask your agent to compare the responses and categorise them as: confirmed by both, confirmed by one only, contradicted, or not found.

6. **Assign confidence** — Use a simple scale: HIGH (confirmed by two or more independent sources), MEDIUM (confirmed by one source), LOW (inferred, not cited).

7. **Act accordingly** — Only proceed with HIGH or MEDIUM confidence. Escalate LOW confidence findings before acting.

---

## Example prompts

```
Use NotebookLM. In the internal-standards notebook, answer with citations:
Is encryption at rest mandatory for all storage resources in our platform?
Return: the exact rule, any exceptions, and the source section.
```

```
Use NotebookLM. In the vendor-documentation notebook, answer with citations:
What does [cloud provider] require or recommend for encryption at rest on storage services?
Return: the requirement or recommendation, scope, and source section.
```

```
Given these two answers:
- Source 1 (internal-standards): [paste]
- Source 2 (vendor-documentation): [paste]

Triangulate the claim: "Encryption at rest is mandatory for all storage resources."
Return: confirmed (both agree), partially confirmed (one agrees), contradicted, or not found.
Include the citation from each source that supports your assessment.
```

---

## Expected output

- A structured triangulation table: claim, source 1 finding, source 2 finding, verdict, confidence
- A citation for each source finding
- Any exceptions or conditions identified in the sources
- A clear confidence rating: HIGH / MEDIUM / LOW

---

## Quality checks

- [ ] Each source queried is genuinely independent (not the same document)
- [ ] The claim was stated precisely before querying, not inferred from output
- [ ] Every finding includes a citation to a specific source
- [ ] Contradictions are surfaced explicitly, not silently resolved
- [ ] LOW confidence findings are escalated before being acted on

---

## Common pitfalls

- **Triangulating from dependent sources**: Two notebooks containing the same document do not provide independent confirmation.
- **Treating absence of contradiction as confirmation**: If a notebook does not mention a claim, that is not confirmation—it is a gap.
- **Accepting AI synthesis as a third source**: The agent's synthesis is not an independent source; it is derived from the sources you queried.
- **Skipping the confidence rating**: Undifferentiated output obscures which claims are solid and which are weak.
- **Acting on MEDIUM confidence for high-stakes decisions**: Always seek a second independent source before committing to irreversible actions.
