# Sample ADR Output — API Gateway Selection

**Note:** This is a fictional sample output generated from demo sources. It does not represent a real system or customer.

---

# ADR-001: API Gateway Technology Selection

**Status:** Accepted
**Date:** 2024-11-15
**Deciders:** Solution Architect, Platform Lead
**Source:** Generated from demo-notebook (architecture-principles.md, vendor-implementation-guide.md)

## Context

The Cloud Modernisation Programme requires a managed API gateway to expose the platform's microservices to both internal consumers and external partners. The gateway must support mutual TLS, rate limiting, and OAuth2 token validation without requiring custom middleware on every service.

Key constraints identified in the architecture principles:
- All external traffic must terminate at a managed edge layer (source: architecture-principles.md §3.1)
- The gateway must support policy-as-code for rate limiting and access control (source: architecture-principles.md §3.2)
- The solution must be deployable to both the primary Azure region and the DR region (source: architecture-principles.md §5)

## Decision

We will use a managed cloud-native API gateway with support for OAuth2/OIDC, mTLS termination, and declarative routing policies.

The selected approach satisfies the policy-as-code requirement via GitOps-managed configuration and supports multi-region active/passive deployment (source: vendor-implementation-guide.md §2.3).

## Rationale

| Option | Considered | Reason not selected |
|--------|-----------|---------------------|
| Self-managed reverse proxy | Yes | High operational burden; does not meet policy-as-code requirement |
| Cloud-native managed gateway | **Selected** | Meets all constraints; managed SLA reduces ops overhead |
| Service mesh with embedded ingress | Yes | Adds complexity without additional capability at this scale |

The managed gateway option was selected because it is the only option that satisfies all three architecture principles constraints without requiring custom operational tooling (source: architecture-principles.md §3).

## Consequences

### Positive
- Centralized policy enforcement reduces per-service boilerplate
- Managed SLA removes the need for a dedicated gateway operations team
- GitOps-compatible configuration enables auditability

### Negative / Risks
- Vendor lock-in for gateway-specific routing features
- Cold-start latency on auto-scaling may affect P99 response times under burst load
- DR failover testing must be scheduled separately

### Implementation tasks
- [ ] Configure mTLS between gateway and backend services (see: security-requirements.md §3.2)
- [ ] Implement OAuth2 token validation at the gateway layer
- [ ] Define rate limiting policies per client tier
- [ ] Set up GitOps pipeline for gateway configuration
- [ ] Document failover runbook for DR activation

## References

- architecture-principles.md §3.1, §3.2, §5
- vendor-implementation-guide.md §2.3
- security-requirements.md §3.2
