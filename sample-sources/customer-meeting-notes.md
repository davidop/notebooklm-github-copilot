# Customer Meeting Notes — Discovery Session

> **FICTIONAL DEMO SOURCE** — These meeting notes do not represent a real customer, organisation, or meeting.

## Meeting details

**Meeting name:** Cloud Modernisation Phase 2 — Discovery Session
**Date:** 2024-11-01
**Duration:** 2 hours
**Location:** Video call
**Attendees:** Solution Architect (delivery), Security Lead (delivery), Programme Sponsor (customer), Platform Engineering Lead (customer), Security Officer (customer)

---

## Agenda items discussed

### 1. Phase 2 scope confirmation

The Programme Sponsor confirmed that Phase 2 scope is as documented in the cloud-modernization-brief.md. No additions to scope were requested.

**Action:** Delivery team to prepare the architecture review document by end of Month 1. **Owner:** Solution Architect.

### 2. API gateway technology review

The customer's Platform Engineering Lead expressed a preference for a managed cloud-native gateway over a self-hosted reverse proxy, citing operational capacity constraints. The customer confirmed they do not have a team to manage a self-hosted gateway long term.

The delivery team presented two options:
- Option A: Managed cloud-native API gateway (aligns with architecture principle §3.1)
- Option B: Self-managed reverse proxy (lower cost, higher operational burden)

The customer agreed to proceed with Option A (managed gateway). An ADR will be created to document this decision.

**Action:** Create ADR-001 for API gateway selection. **Owner:** Solution Architect.

### 3. Identity integration

The customer's Security Officer confirmed that all admin and developer portal users must authenticate via the corporate IdP (Azure AD). The IdP supports SAML 2.0 and OIDC.

The Security Officer confirmed that local accounts are not permitted for any user-facing surface (consistent with security-requirements.md §4.1).

**Action:** Delivery team to design IdP integration using OIDC. **Owner:** Platform Engineering Lead.

### 4. Data tier requirements

The Platform Engineering Lead confirmed that the data tier must support ACID-compliant writes for the order management and financial reporting systems. NoSQL was discussed and ruled out for these workloads.

The customer asked about read replicas for the quarterly financial reporting workload. The delivery team confirmed this is in scope for Phase 2 (architecture principle §2.2).

**Action:** Include read-replica configuration in the data tier design. **Owner:** Solution Architect.

### 5. Security and compliance

The Security Officer raised the following points:
- Annual penetration test is required before go-live (security-requirements.md §6.1). The customer's procurement process for the pen test vendor takes approximately 6 weeks. **Action:** Delivery team to initiate pen test vendor selection in Month 2. **Owner:** Security Lead.
- mTLS for inter-service communication was confirmed as required (security-requirements.md §3.2). The customer asked about certificate management. The delivery team recommended cert-manager; the customer asked for a design to be included in the architecture review.

---

## Open questions

The following questions were raised but not resolved during the session:

1. **EU data residency for backup storage:** The security requirements state that all Confidential and Restricted data must be stored in EU-compliant regions (§7.1). The customer's Security Officer was not certain whether this requirement applies to backup storage volumes. The Security Officer will seek clarification from the legal team.

   **Status:** Open. Customer to confirm by 2024-11-15.

2. **RTO/RPO for DR:** The architecture principles state RTO 4 hours / RPO 15 minutes, but the customer has not confirmed whether these are contractual SLAs or internal targets. Contractual SLAs would require additional DR testing scope.

   **Status:** Open. Programme Sponsor to confirm.

3. **Caching layer scope:** The delivery team asked whether a caching layer (e.g. for the product catalogue API) is in scope for Phase 2 or deferred to Phase 3. No decision was made.

   **Status:** Open. Product Owner to confirm scope.

---

## Agreed next steps

| Action | Owner | Due |
|--------|-------|-----|
| Create ADR-001 (API gateway selection) | Solution Architect | 2024-11-08 |
| Design OIDC IdP integration | Platform Engineering Lead | 2024-11-15 |
| Include read-replica config in data tier design | Solution Architect | 2024-11-15 |
| Initiate pen test vendor selection | Security Lead | 2024-11-30 |
| Confirm EU data residency scope for backups | Customer Security Officer | 2024-11-15 |
| Confirm RTO/RPO SLA status | Customer Programme Sponsor | 2024-11-15 |
| Confirm caching layer scope | Customer Product Owner | 2024-11-22 |
