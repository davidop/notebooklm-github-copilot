# Cloud Modernisation Programme Brief

> **FICTIONAL DEMO SOURCE** — This document does not represent a real customer or project.

## Engagement overview

**Programme name:** Cloud Modernisation Programme
**Organisation:** Fictional Retail Organisation
**Engagement phase:** Phase 2 — Core platform migration
**Document version:** 1.2
**Date:** November 2024

## Background

The organisation operates a portfolio of on-premises applications supporting retail operations, financial reporting, and customer-facing e-commerce. The current infrastructure is reaching end-of-support and the organisation has committed to migrating to a cloud-hosted platform over a 24-month programme.

Phase 1 (completed) delivered the CI/CD foundation and network connectivity. Phase 2 covers the core API platform, identity layer, and data tier migration.

## Objectives

1. **Reduce operational overhead** by migrating from self-managed infrastructure to cloud-managed services, targeting a 40% reduction in unplanned downtime within 12 months of go-live.
2. **Improve security posture** by implementing zero-standing-privilege access, federated identity, and policy-as-code controls.
3. **Enable scalability** to support 5× current peak traffic without architectural changes.
4. **Maintain compliance** with existing regulatory requirements, including EU data residency for all personally identifiable information.

## Scope — Phase 2

In scope:
- Managed API gateway deployment and configuration
- Federated identity integration (corporate IdP)
- Relational data tier migration (financial records and order management)
- Audit logging infrastructure
- Developer toolchain update (CI/CD pipeline integration)

Out of scope for Phase 2:
- Customer-facing mobile application (Phase 3)
- Data warehouse and analytics platform (Phase 3)
- Legacy document management system (decommission decision pending)

## Key stakeholders

| Role | Responsibility |
|------|---------------|
| Programme Sponsor | Budget approval and executive escalation |
| Solution Architect | Technical design and ADR decisions |
| Security Lead | Security requirements and compliance sign-off |
| Platform Engineering Lead | Infrastructure delivery |
| Product Owner | Backlog prioritisation and acceptance |

## Constraints

- Delivery must not disrupt existing e-commerce operations during the peak trading season (November–January).
- All production data must remain within EU-compliant cloud regions at all times.
- The organisation's change management process requires a minimum 5-business-day review window for production changes.
- The total Phase 2 budget is fixed; any scope additions require formal change control.

## Success criteria

- API gateway live with mTLS and OAuth2/OIDC, tested and signed off by security lead
- Financial records migrated to cloud data tier with ACID compliance verified
- Audit logging operational and passing the security team's acceptance test
- All Phase 2 work items closed in Azure DevOps
- Handover documentation complete

## Timeline

| Milestone | Target date |
|-----------|------------|
| Architecture review complete | Month 1 |
| API gateway live in staging | Month 3 |
| Identity integration complete | Month 4 |
| Data tier migration complete | Month 6 |
| Security acceptance test | Month 7 |
| Phase 2 go-live | Month 9 |
