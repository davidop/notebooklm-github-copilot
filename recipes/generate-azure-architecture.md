# Recipe: Generate Azure Architecture from Documentation

## When to use

Use this recipe when you need to design or document an Azure architecture based on customer requirements, constraints, or vendor documentation stored in NotebookLM.

## Required NotebookLM sources

- Customer requirements or RFP document
- Architecture constraints (security, compliance, networking)
- Existing Azure environment documentation
- Relevant Azure service documentation or Well-Architected Framework guidance

## Prompt to use in Copilot Chat

```text
Use NotebookLM. In the <your-architecture-notebook> notebook, answer with citations:
1. What are the key requirements for this Azure architecture?
2. What security and compliance constraints apply?
3. What networking constraints are specified?
4. What existing Azure services or resources must be integrated?

Then generate an Azure architecture design that:
- Addresses all identified requirements
- Respects all constraints
- Follows Azure Well-Architected Framework principles
- Includes: resource groups, networking topology, identity and access, and high availability approach

Return: architecture description, component list, citations, and any assumptions made.
```

## Expected output

- Azure architecture description with component breakdown
- Networking topology description
- Identity and access design
- High availability and disaster recovery approach
- List of assumptions and open questions
- Citations to source documents

## Notes and limitations

- This recipe generates a design description, not a deployment-ready configuration. Use the Bicep or Terraform recipes to generate IaC.
- Always validate the generated architecture against current Azure service limits and pricing.
- The recipe does not replace a formal Azure Well-Architected Review.
