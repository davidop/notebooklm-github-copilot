# Recipe: Generate Terraform Modules from Architecture Documentation

## When to use

Use this recipe to generate Terraform IaC modules grounded in architecture specifications, constraints, and naming standards stored in NotebookLM.

## Required NotebookLM sources

- Architecture specification or design document
- Security and compliance requirements
- Terraform module standards or naming conventions
- Network topology documentation

## Prompt to use in Copilot Chat

```text
Use NotebookLM. In the <your-architecture-notebook> notebook, answer with citations:
1. What Azure/AWS/GCP resources need to be deployed for [component/workload]?
2. What naming conventions and tagging standards apply?
3. What network configuration is specified?
4. What security constraints apply (IAM roles, managed identity, secrets management)?
5. What existing Terraform modules or patterns should be reused?

Then generate a Terraform module that:
- Deploys the identified resources
- Follows the naming and tagging standards
- Implements the specified network configuration
- Uses managed identity or IAM roles (no hardcoded credentials)
- Is structured with variables.tf, outputs.tf, and main.tf
- Includes a tfvars example for each environment

Return: Terraform module files, variable definitions, citations, and usage instructions.
```

## Expected output

- `main.tf` with resource definitions
- `variables.tf` with typed and documented variables
- `outputs.tf` with relevant outputs
- Example `terraform.tfvars` per environment
- Citations to spec documents
- Usage and deployment instructions

## Notes and limitations

- Always run `terraform validate` and `terraform plan` before applying.
- Review generated IAM/RBAC assignments — least privilege must be verified by a human.
- Sensitive values must be stored in a secrets manager (Vault, Key Vault, Secrets Manager), not in tfvars files.
- This recipe generates a starting point. Add `terraform-docs`, linting, and testing before production use.
