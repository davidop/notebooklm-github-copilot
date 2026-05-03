# Sample Presales Proposal Output

**Note:** This is a fictional sample output generated from demo sources. It does not represent a real customer, engagement, or vendor.

---

# Proposal: Cloud Modernisation Platform — Executive Summary

**Prepared for:** Fictional Customer Organisation
**Date:** November 2024
**Version:** 1.0 (draft for review)
**Generated from:** demo-notebook (cloud-modernization-brief.md, architecture-principles.md, security-requirements.md, previous-proposal-summary.md)

---

## Engagement overview

This proposal responds to the customer's requirement to modernise their on-premises application platform to a cloud-hosted architecture, improving scalability, security posture, and operational efficiency. The engagement scope covers the core API platform, identity layer, and data tier as defined in the cloud modernisation brief (source: cloud-modernization-brief.md §Scope).

## Key constraints

The following constraints are non-negotiable and have been identified from the customer's project brief and security requirements:

- **EU data residency:** All production data and audit logs must remain within EU-compliant cloud regions (source: security-requirements.md §7.1).
- **ACID consistency for financial records:** The data tier must provide full ACID guarantees for all financial transactions (source: architecture-principles.md §2).
- **Zero standing privilege:** No human operator may hold persistent administrative access to production systems (source: security-requirements.md §5).
- **Policy-as-code:** All access control and rate-limiting policies must be managed as code in version control (source: architecture-principles.md §3.2).

## Proposed approach

We propose a three-phase delivery programme:

**Phase 1 (Months 1–3): Foundation**
Deploy the managed API gateway, federated identity layer, and CI/CD pipelines. Deliver the security baseline required by security-requirements.md §3 and §4.

**Phase 2 (Months 4–6): Core platform**
Migrate the relational data tier, implement audit logging, and validate ACID compliance for financial records (architecture-principles.md §2).

**Phase 3 (Months 7–9): Optimisation and hardening**
Implement read replicas for reporting, complete penetration testing (security-requirements.md §6.1), and transition to steady-state operations.

## Risk summary

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| EU data residency scope unclear for backup storage | High | High | Clarify in project kick-off; two architecture options prepared |
| Certificate rotation mechanism not yet designed | Medium | High | Design in Phase 1; automate with cert-manager |
| Database partitioning strategy undefined | Medium | Medium | Spike in Phase 1; decision by Phase 2 start |

*Sources: customer-meeting-notes.md §Open questions, architecture-principles.md §Data*

## Previous engagement alignment

This proposal builds on the findings of the previous engagement summary (source: previous-proposal-summary.md). The API gateway approach is consistent with the architectural direction agreed in the earlier phase; the identity and data tier recommendations are new for this phase.

## Next steps

1. Customer to confirm EU data residency scope for backup storage.
2. Agree delivery team composition and start date.
3. Schedule architecture review workshop for Phase 1 kick-off.
