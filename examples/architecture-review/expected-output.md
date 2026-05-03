# Expected Output

The following is a representative example of the expected output.

---

## Requirements Retrieved from NotebookLM

- Data must be classified at ingestion (Source: data-governance-policy.pdf, §3.1)
- No public endpoints on any data service (Source: security-requirements.md)
- 99.9% availability required for the serving layer (Source: sla-requirements.doc)
- Monthly cost target: under £15,000 (Source: project-brief.pdf)

---

## Architecture Review Findings

### Reliability
✅ Synapse Analytics supports zone-redundant configuration — confirm enabled.
⚠️ No DR runbook documented for ADLS Gen2 recovery.

### Security
✅ Private endpoints configured for all services.
✅ Managed identity used throughout — no hardcoded credentials found.
⚠️ Purview scanning account requires review of minimum required permissions.

### Cost Optimization
⚠️ Synapse dedicated SQL pool provisioned at DW1000c — validate against actual workload before go-live.

[... continues for all pillars]

---

*Citations: data-governance-policy.pdf §3.1, security-requirements.md, sla-requirements.doc, project-brief.pdf*
