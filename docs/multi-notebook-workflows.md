# Multi-Notebook Workflows

## Overview

A single NotebookLM notebook works well for queries within one knowledge domain. But most real engineering and delivery workflows span multiple domains: a solution architect needs both vendor documentation and internal ADRs; a presales engineer needs both past proposals and the capability library; a security reviewer needs both the security standards and the architecture document under review.

Using multiple notebooks lets you separate concerns, manage access levels independently, and keep source types clean. This guide explains how to structure multi-notebook workflows and how to query across notebooks using GitHub Copilot, OpenCode, or Cursor with the `notebooklm-mcp` server.

---

## Common notebook taxonomy

| Notebook | Contents | Typical users |
|----------|----------|--------------|
| `internal-standards` | Architecture principles, coding standards, security policies | All technical teams |
| `vendor-documentation` | Cloud provider docs, SDK references, third-party product docs | Architects, platform teams |
| `architecture-decisions` | ADR log, design records, historical decisions | Architects, tech leads |
| `proposals` | Past proposals, capability library, bid materials | Presales, delivery teams |
| `meeting-notes` | Sprint notes, retrospectives, decision logs | Delivery, project management |
| `delivery-handover` | Handover packs, runbooks, transition documentation | Delivery, operations |
| `customer-requirements` | Discovery notes, RFP documents, customer specs (governed) | Presales, architects |

> Keep customer-specific notebooks separate from shared team notebooks. Apply your organisation's data governance policy before uploading customer data.

---

## Selecting the right notebook for a query

Before querying, identify what type of knowledge your question requires:

- **What should we do?** → `internal-standards` or `architecture-decisions`
- **How does this service work?** → `vendor-documentation`
- **Have we done this before?** → `proposals` or `meeting-notes`
- **What did the customer ask for?** → `customer-requirements`
- **What was agreed at handover?** → `delivery-handover`

When in doubt, query the most authoritative source first, then cross-check with a second notebook.

---

## Querying multiple notebooks sequentially

Ask your agent to query notebooks one at a time, then synthesise:

```
Step 1: Use NotebookLM. In the internal-standards notebook, answer: [question]. Return findings with citations.
Step 2: Use NotebookLM. In the vendor-documentation notebook, answer the same question. Return findings with citations.
Step 3: Compare the two answers. Identify agreements, conflicts, and gaps. Recommend a course of action.
```

This pattern keeps each query grounded in its own sources and makes conflicts visible.

---

## Comparing answers from different notebooks

When you receive answers from two notebooks, ask your agent to structure the comparison:

```
Given these two answers from different notebooks:
- Answer A (from internal-standards): [paste]
- Answer B (from vendor-documentation): [paste]

Identify: points of agreement, points of conflict, items only in A, items only in B,
and your recommended synthesis. Flag any claims that require escalation.
```

---

## Identifying and resolving conflicts between sources

When sources disagree:

1. Identify the specific conflicting claim in each source.
2. Check recency—which source is more recent?
3. Check authority—which source is more authoritative for this decision type?
4. If unresolvable by recency or authority, escalate to the relevant domain owner.
5. Document the conflict and its resolution in your output.

See the [conflict resolution recipe](../recipes/conflict-resolution-between-sources.md) for a step-by-step workflow.

---

## Separating facts, assumptions, and recommendations

When synthesising across notebooks, ask your agent to label each output item:

- **Fact**: directly stated and cited in a source
- **Assumption**: inferred but not explicitly stated in a source
- **Recommendation**: generated based on facts and assumptions

Outputs that mix these categories without labelling them are harder to review and riskier to act on.

---

## Documenting source confidence

When a notebook returns thin or ambiguous results, record this in your output:

```
Source confidence: LOW — the internal-standards notebook did not contain explicit guidance
on this topic. The following is inferred from adjacent standards. Escalate before acting.
```

---

## Escalating when sources disagree

If two notebooks return conflicting, authoritative, and equally recent information, do not let the AI pick a winner. Flag the conflict explicitly and route to the relevant domain owner or governance process.

---

## Example multi-notebook workflow

**Goal**: Review a proposed architecture for a new data platform against both internal standards and the cloud provider's Well-Architected framework.

1. Query `internal-standards`: *What are our mandatory controls for a production data platform?*
2. Query `vendor-documentation`: *What does the Well-Architected framework require for a data platform workload?*
3. Query `architecture-decisions`: *Have we made any decisions on data platform patterns that constrain this design?*
4. Combine: *Given the three answers above, identify gaps in the proposed design, categorised by source.*
5. Produce: A structured review with each finding attributed to its source notebook.
