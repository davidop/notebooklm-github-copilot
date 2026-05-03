# Recipe: Review and Analyse an RFP

## When to use

Use this recipe to analyse a Request for Proposal (RFP) against your organization's capability library, past proposals, and service catalogue stored in NotebookLM.

## Required NotebookLM sources

- The RFP document (uploaded to NotebookLM)
- Service catalogue or capability descriptions
- Past proposals for similar work
- Team availability or resource constraints (if applicable)

## Prompt to use in Copilot Chat

```text
Use NotebookLM. In the <your-rfp-notebook> notebook, answer with citations:
1. What are the key functional requirements in the RFP?
2. What are the non-functional requirements (performance, security, compliance, SLA)?
3. What evaluation criteria does the RFP specify?
4. What are the submission deadlines and format requirements?
5. What capabilities from our service catalogue directly address these requirements?
6. What gaps exist between our capabilities and the RFP requirements?
7. Are there similar past proposals we can reuse?

Then produce:
a) A requirements summary table: Requirement | Type | Our Coverage | Gap
b) A list of reusable proposal sections from past work
c) A list of open questions for the client/customer
d) A go/no-go recommendation with justification

Return all findings with source citations.
```

## Expected output

- Requirements summary table with coverage assessment
- Gap analysis identifying areas requiring new capability or partnerships
- List of reusable proposal sections with citations
- Open questions for clarification with the client
- Go/no-go recommendation with cited justification
- Suggested proposal outline

## Notes and limitations

- Confidential RFP documents must only be uploaded to NotebookLM if permitted by the client's NDA and your organization's data classification policy.
- Never upload documents containing personal data about named individuals.
- Review the citation quality manually — especially for past proposal reuse.
- This recipe aids analysis; the final go/no-go decision requires human judgment.
