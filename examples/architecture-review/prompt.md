# Prompt Used

```text
Use NotebookLM. In the "data-platform-requirements" notebook, answer with citations:
1. What are the key functional requirements for the data platform?
2. What security requirements apply (data classification, network isolation, identity)?
3. What SLA and availability requirements are defined?
4. What cost constraints or targets are specified?

Then review the following architecture against the Well-Architected Framework pillars:
- Azure Data Factory for ingestion
- Azure Data Lake Storage Gen2 for storage
- Azure Synapse Analytics for transformation and serving
- Azure Purview for governance
- All resources in a dedicated spoke VNet with private endpoints

Return: findings per WAF pillar, prioritised recommendations, source citations, and any open risks.
```
