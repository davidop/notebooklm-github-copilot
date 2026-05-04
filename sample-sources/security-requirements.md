# Security Requirements

> **FICTIONAL DEMO SOURCE** — This document does not represent a real organisation, project, or regulatory framework.

## Document information

**Document ID:** SEC-REQ-001
**Version:** 2.1
**Status:** Approved
**Owner:** Security Lead

---

## §1 Scope

These requirements apply to all components of the Cloud Modernisation Programme platform, including the API gateway, identity layer, data tier, and audit logging infrastructure. Third-party managed services must be evaluated against these requirements as part of the vendor approval process.

---

## §2 Data protection

### §2.1 Data classification

All data processed by the platform must be classified into one of four tiers:

| Tier | Definition | Example |
|------|-----------|---------|
| Public | Suitable for unrestricted disclosure | Product catalogue, public API docs |
| Internal | Business use only | Operational metrics, employee data |
| Confidential | Restricted to named roles | Customer PII, financial records |
| Restricted | Highest protection; legal or regulatory requirement | Payment card data, health records |

### §2.2 Data at rest

- Confidential and Restricted data must be encrypted at rest using AES-256 or equivalent.
- Encryption keys must be managed by a dedicated key management service; application code must not have direct access to key material.

### §2.3 Data in transit

- All data in transit must use TLS 1.2 or higher.
- Internal service-to-service communication must use mutual TLS (mTLS).
- User data exports must be scoped to the authenticated user's session.

---

## §3 API and network security

### §3.1 Edge protection

All external-facing API endpoints must be placed behind the managed API gateway. Direct access to backend services from outside the platform boundary is prohibited.

### §3.2 Rate limiting

All public API endpoints must enforce per-client rate limiting:
- Default limit: 1 000 requests per minute per authenticated client
- Burst allowance: 200% of the standard limit for up to 10 seconds
- Responses for rate-exceeded requests must include a `Retry-After` header
- Rate limit breach events must be logged to the audit log

---

## §4 Identity and access management

### §4.1 Federated identity mandate

All user-facing surfaces (admin portal, developer portal, reporting dashboard) must authenticate users via the corporate identity provider (IdP). Local username/password accounts are not permitted for user-facing surfaces.

### §4.2 Service identity

Services must authenticate to each other using short-lived cryptographic credentials (certificates or tokens). Long-lived shared secrets between services are prohibited.

### §4.3 Audit logging for authentication events

All of the following events must be written to the audit log:
- Successful login
- Failed login (including reason code)
- Logout
- Privilege escalation
- Break-glass access activation

Audit log entries must include: timestamp (UTC), user ID, event type, source IP, client type, result.

---

## §5 Operational security

### §5.1 Browser and endpoint isolation

Production system access from developer endpoints must use dedicated browser profiles or virtual machines with no access to personal accounts or unapproved browser extensions.

### §5.2 Zero standing privilege

No human operator may hold persistent production access. All production access must follow the break-glass procedure and be logged.

---

## §6 Testing and assurance

### §6.1 Penetration testing

An independent penetration test must be completed before the Phase 2 go-live. Scope must include: API gateway, identity integration, and data tier. All critical and high findings must be remediated before go-live; medium findings must have accepted mitigations.

---

## §7 Compliance

### §7.1 EU data residency

All data classified as Confidential or Restricted must be stored in EU-compliant cloud regions. This includes:
- Primary storage
- Backup storage
- Audit logs
- Encryption key material (if managed externally)

Cross-region replication to non-EU regions is prohibited without explicit legal approval.
