# Azure Architecture Review

**Project:** [Project name]
**Date:** YYYY-MM-DD
**Reviewer(s):** [Names]
**Environment(s):** [Dev / Staging / Production]
**Review type:** [Initial design | Periodic review | Pre-go-live | Incident-triggered]

---

## Executive Summary

[2–3 sentence summary of the workload and key findings.]

---

## Workload Overview

| Item | Detail |
|---|---|
| **Workload name** | |
| **Business criticality** | Low / Medium / High / Mission-critical |
| **Environment** | |
| **Azure region(s)** | |
| **Subscription(s)** | |
| **Key stakeholders** | |

---

## Well-Architected Framework Assessment

### Reliability

- **RTO:** [Recovery Time Objective]
- **RPO:** [Recovery Point Objective]
- **Availability SLA:** [Target, e.g., 99.9%]

Findings:

- [ ] Multi-region or availability zone strategy defined
- [ ] Backup and restore tested
- [ ] Health probes and alerting configured
- [ ] Circuit breakers and retry policies implemented

### Security

Findings:

- [ ] Identity: Managed identity used (no hardcoded credentials)
- [ ] Network: Private endpoints configured where applicable
- [ ] Secrets: Azure Key Vault integration in place
- [ ] Encryption: Data encrypted at rest and in transit
- [ ] RBAC: Least-privilege role assignments reviewed

### Cost Optimization

Findings:

- [ ] Reserved instances or savings plans evaluated
- [ ] Auto-scaling configured
- [ ] Unused resources identified and removed
- [ ] Cost alerts and budgets set

### Operational Excellence

Findings:

- [ ] Infrastructure as Code (Bicep/Terraform) in use
- [ ] Deployment pipelines (CI/CD) configured
- [ ] Monitoring and alerting set up (Azure Monitor / Log Analytics)
- [ ] Runbooks documented for common operational tasks

### Performance Efficiency

Findings:

- [ ] SKUs and tiers validated against load requirements
- [ ] Caching strategy defined
- [ ] Load testing completed

---

## Key Risks and Recommendations

| Risk | Severity | Recommendation | Owner | Target Date |
|---|---|---|---|---|
| | High / Medium / Low | | | |

---

## Architecture Diagram

[Insert diagram or link to diagram]

---

## NotebookLM Sources Used

- Source 1: [Document name and key finding]
- Source 2: [Document name and key finding]
