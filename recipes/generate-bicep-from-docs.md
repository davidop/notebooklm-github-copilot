# Recipe: Generate Bicep Templates from Architecture Documentation

## When to use

Use this recipe to generate Azure Bicep IaC templates grounded in architecture specifications, constraints, and standards stored in NotebookLM.

## Required NotebookLM sources

- Architecture specification or design document
- Security and compliance requirements
- Azure naming and tagging conventions
- Network topology documentation

## Prompt to use in Copilot Chat

```text
Use NotebookLM. In the <your-architecture-notebook> notebook, answer with citations:
1. What Azure resources need to be deployed for [component/workload]?
2. What naming conventions apply?
3. What tagging standards are required?
4. What network configuration is specified (VNet, subnets, NSGs, private endpoints)?
5. What security constraints apply (RBAC, managed identity, key vault integration)?

Then generate a Bicep template that:
- Deploys the identified resources
- Follows the naming and tagging conventions
- Implements the specified network configuration
- Uses managed identity (no hardcoded credentials)
- Includes parameter files for dev, staging, and production environments

Return: Bicep template, parameter file structure, citations, and deployment instructions.
```

## Expected output

- Bicep main template with modules
- Parameter file structure (dev/staging/prod)
- Resource list with citations to spec documents
- Deployment instructions
- List of assumptions or manual steps required

## Notes and limitations

- Always validate generated Bicep with `az bicep build` before deployment.
- Review generated RBAC assignments carefully — least privilege must be verified by a human.
- This recipe generates a starting point, not a production-ready deployment. Add proper testing.
- Sensitive values (connection strings, passwords) must be stored in Key Vault, not in parameter files.
