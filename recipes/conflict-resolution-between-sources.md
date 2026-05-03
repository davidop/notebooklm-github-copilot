# Recipe: Conflict Resolution Between Sources

## Goal

Identify, characterise, and resolve conflicts between information in two or more NotebookLM notebooks. Produce a structured conflict report with a clear recommendation or escalation path, so that downstream decisions are made on documented evidence rather than silent AI synthesis.

---

## When to use

- Two notebooks return contradictory answers to the same question.
- An internal standard conflicts with vendor guidance.
- A past architecture decision conflicts with the current standards document.
- A compliance requirement appears to contradict an implementation guide.
- Source documents have different versions and you need to determine which takes precedence.

---

## Prerequisites

- `notebooklm-mcp` configured and connected to your agent.
- At least two notebooks that contain conflicting or potentially conflicting information.
- The specific topic or claim where a conflict is suspected, stated clearly before querying.
- Knowledge of the relative authority and recency of each source (who owns it, when was it last updated).

---

## Sources

Conflicts typically arise between:

| Source pair | Common conflict type |
|------------|---------------------|
| `internal-standards` vs `vendor-documentation` | Vendor recommends X; internal policy requires Y |
| `architecture-decisions` vs `internal-standards` | Old ADR permits pattern that current standards prohibit |
| `compliance-frameworks` vs `security-standards` | Framework requires control; internal guide does not implement it |
| `meeting-notes` vs `project-specifications` | A meeting decision contradicts the written spec |
| Two versions of the same standards document | Superseded vs. current version both present in notebook |

---

## Step-by-step workflow

1. **State the suspected conflict** — Write the conflict hypothesis before querying. Example: *"Source A says TLS 1.2 is acceptable; Source B says TLS 1.3 is required."*

2. **Query source 1** — Ask for the exact rule or recommendation on the topic. Request the verbatim text and citation.

3. **Query source 2** — Ask the same question. Request verbatim text and citation.

4. **Identify the conflict** — Ask your agent to state explicitly whether the two answers conflict, and if so, how.

5. **Check recency** — Determine which source is more recent. A more recent standard typically supersedes an older one.

6. **Check authority** — Determine which source is more authoritative for this decision type (e.g., an internal security policy overrides a vendor default recommendation).

7. **Apply resolution rules** — In order: recency → authority → escalation. If recency and authority do not resolve the conflict, escalate.

8. **Document the resolution** — Record the conflict, the resolution rationale, and the source that was followed.

---

## Example prompts

```
Use NotebookLM. In the internal-standards notebook, answer with citations:
What TLS version is required for production API endpoints?
Return: the exact requirement, any exceptions, and the source section.
```

```
Use NotebookLM. In the vendor-documentation notebook, answer with citations:
What TLS version does [cloud provider] require or recommend for API endpoints?
Return: the exact requirement or recommendation, and the source section.
```

```
I have two answers that may conflict on the topic of TLS requirements for production APIs:

Source 1 (internal-standards, updated [date]):
[Paste answer 1]

Source 2 (vendor-documentation, version [version]):
[Paste answer 2]

Analyse this conflict. Return:
1. Statement of the conflict (what exactly disagrees)
2. Recency assessment (which source is more recent)
3. Authority assessment (which source is more authoritative for this decision type)
4. Recommended resolution with rationale
5. Whether escalation is required (yes/no, and why)
6. Draft documentation of the resolution for the ADR or decision log
```

---

## Expected output

A structured conflict report containing:

- **Conflict statement**: The exact disagreement between sources
- **Source A finding**: Verbatim or near-verbatim text with citation
- **Source B finding**: Verbatim or near-verbatim text with citation
- **Recency**: Which source is more recent, and by how much
- **Authority**: Which source is more authoritative, and why
- **Resolution**: The recommended position, with rationale
- **Escalation required**: Yes / No, with reason
- **Decision log entry**: A draft entry suitable for an ADR or decision record

---

## Quality checks

- [ ] The conflict is stated as a specific disagreement, not a vague inconsistency
- [ ] Both sources are cited with verbatim or near-verbatim text, not paraphrases
- [ ] The resolution cites the more authoritative or more recent source explicitly
- [ ] Conflicts that cannot be resolved by recency or authority are escalated, not silently resolved
- [ ] The resolution is documented in a decision log or ADR before downstream work continues

---

## Common pitfalls

- **Accepting AI synthesis over a clear conflict**: If two sources genuinely disagree, the agent's synthesised "middle ground" is not a valid resolution. Identify the conflict and resolve it explicitly.
- **Treating absence of conflict as agreement**: If one source is silent on a topic, that is not agreement—it is a gap.
- **Not checking source recency**: An older internal standard may have been superseded; always check the document date.
- **Escalating too late**: Conflicts that are discovered after a design is implemented are much more expensive to resolve.
- **Documenting the resolution only in output, not in a decision record**: Unrecorded resolutions are rediscovered and re-debated; always capture the outcome in a durable artefact.
