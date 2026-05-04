# Sample Backlog Output

**Note:** This is a fictional sample output generated from demo sources. It does not represent a real customer backlog.

---

# Product Backlog — Cloud Modernisation Platform v1

**Generated from:** demo-notebook
**Sources:** architecture-principles.md, security-requirements.md, cloud-modernization-brief.md

---

## Epic 1: Secure Identity and Access Management

*Source: security-requirements.md §4, architecture-principles.md §Identity*

### Feature 1.1: Federated authentication for all user-facing surfaces

*Source: security-requirements.md §4.1*

#### US-001: Corporate IdP login for admin users

As an **admin user**, I want to log in using my corporate identity provider so that I do not need a separate password for the admin portal.

**Acceptance criteria:**
- [ ] SAML 2.0 or OIDC flow is supported
- [ ] Unauthenticated requests redirect to the IdP login page
- [ ] Session tokens expire after 8 hours of inactivity
- [ ] Login and logout events are written to the audit log

*Source: security-requirements.md §4.1*

#### US-002: Service-to-service authentication via mTLS

As a **platform engineer**, I want all inter-service communication to use mutual TLS so that no service can impersonate another.

**Acceptance criteria:**
- [ ] mTLS is enforced on all internal service-to-service routes
- [ ] A failing mTLS handshake returns a 503 with a structured error body
- [ ] Certificate rotation is automated and requires no service restart
- [ ] Certificate expiry events trigger an alert

*Source: security-requirements.md §3.2, architecture-principles.md §3*

#### US-003: API rate limiting per client tier

As a **platform operator**, I want per-client rate limits enforced at the API gateway so that no single client can degrade service for others.

**Acceptance criteria:**
- [ ] Rate limits are configurable per client tier (free / standard / enterprise)
- [ ] 429 responses include a `Retry-After` header
- [ ] Rate limit breach events are written to the audit log
- [ ] Limits can be updated via GitOps without a gateway restart

*Source: security-requirements.md §3.2*

---

### Feature 1.2: Audit logging for all security-relevant events

*Source: security-requirements.md §4.3*

#### US-004: Structured audit log for authentication events

As a **security officer**, I want a structured audit log of all login, logout, and failed authentication events so that I can investigate incidents.

**Acceptance criteria:**
- [ ] Log entries include: timestamp, user ID, event type, source IP, result
- [ ] Logs are written to an append-only store
- [ ] Logs are retained for a minimum of 90 days
- [ ] Log access is restricted to the security team role

*Source: security-requirements.md §4.3*

---

## Epic 2: Scalable Data Platform

*Source: architecture-principles.md §2, cloud-modernization-brief.md §Scope*

### Feature 2.1: Relational data tier with ACID guarantees

*Source: architecture-principles.md §2*

#### US-005: Transactional writes for financial records

As a **financial system**, I want all financial record writes to be transactional so that partial writes do not result in inconsistent data.

**Acceptance criteria:**
- [ ] All financial record writes are wrapped in a database transaction
- [ ] Failed transactions roll back atomically
- [ ] Rollback events are logged with the correlation ID
- [ ] A chaos test verifies rollback under simulated failure

*Source: architecture-principles.md §2.1*

#### US-006: Read-replica for reporting workloads

As a **reporting user**, I want reporting queries to run against a read replica so that analytical workloads do not degrade transactional performance.

**Acceptance criteria:**
- [ ] Reporting queries are routed to the read replica automatically
- [ ] Replication lag is monitored and alerts fire if lag exceeds 30 seconds
- [ ] Primary write performance is unaffected by replica load

*Source: architecture-principles.md §2.2, cloud-modernization-brief.md §Performance*

---

## Backlog summary

| Epic | Features | Stories | Total estimated points |
|------|----------|---------|----------------------|
| 1 — Identity and Access | 2 | 4 | 34 |
| 2 — Data Platform | 1 | 2 | 18 |
| **Total** | **3** | **6** | **52** |
