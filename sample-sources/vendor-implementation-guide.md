# Managed API Gateway — Implementation Guide

> **FICTIONAL DEMO SOURCE** — This document is a fictional vendor implementation guide created for demo purposes. It does not represent a real vendor or product.

**Document version:** 3.1
**Applicable product version:** Gateway Platform 4.x

---

## §1 Overview

The Managed API Gateway Platform is a cloud-native, fully managed API gateway service. It provides:

- OAuth2/OIDC token validation at the edge
- Mutual TLS (mTLS) termination for upstream connections
- Declarative routing policy management (GitOps-compatible)
- Per-client rate limiting with configurable tiers
- Built-in audit logging to cloud storage or SIEM

The gateway is deployable to multiple cloud regions and supports active/passive disaster recovery.

---

## §2 Architecture

### §2.1 Deployment topology

The gateway is deployed as a managed cluster behind the cloud provider's load balancer. The managed control plane handles certificate issuance, policy distribution, and health monitoring.

### §2.2 Multi-region deployment

The gateway supports active/passive multi-region deployment:

- **Primary region:** Serves all live traffic.
- **Secondary (DR) region:** Receives a replicated configuration and is promoted to primary during failover.

Failover is initiated manually or via automation based on health check failure. Failover time is typically under 5 minutes from detection to traffic shift.

### §2.3 GitOps configuration

All routing policies, rate limits, and access control rules are defined in YAML configuration files stored in version control. The control plane polls the configuration repository and applies changes within 60 seconds of a commit to the main branch.

Example policy file:

```yaml
rateLimit:
  enabled: true
  tiers:
    free:
      requestsPerMinute: 100
    standard:
      requestsPerMinute: 1000
    enterprise:
      requestsPerMinute: 10000
  response:
    statusCode: 429
    headers:
      - name: Retry-After
        value: "60"
```

---

## §3 Authentication and authorisation

### §3.1 OAuth2/OIDC validation

The gateway validates OAuth2 Bearer tokens on every request:
- Token signature is verified against the IdP's JWKS endpoint.
- Token expiry is checked; expired tokens are rejected with a 401 response.
- The validated claims are forwarded to the upstream service in a signed header.

### §3.2 mTLS for upstream services

The gateway establishes mTLS connections to all upstream services:
- Client certificates are issued by the platform certificate authority.
- Certificates are rotated automatically every 90 days with zero-downtime rotation.
- A failed mTLS handshake returns a 503 to the caller with a structured error body.

---

## §4 Audit logging

All gateway events are written to a structured audit log:

| Event | Log fields |
|-------|-----------|
| Request received | timestamp, client_id, method, path, source_ip, protocol |
| Token validation | timestamp, client_id, token_issuer, result, failure_reason |
| Rate limit breach | timestamp, client_id, tier, limit, request_count |
| Policy change | timestamp, policy_name, change_type, committer |
| mTLS failure | timestamp, upstream_host, failure_reason |

Logs are written to a cloud storage bucket and optionally forwarded to a SIEM. Retention is configurable; default is 365 days.

---

## §5 Performance characteristics

| Metric | Value |
|--------|-------|
| Request latency added (P50) | < 2 ms |
| Request latency added (P99) | < 15 ms |
| Maximum throughput (single region) | 100 000 requests/second |
| Auto-scale trigger | 70% CPU or 80% connection pool utilisation |
| Cold-start latency (scale-out) | 30–90 seconds |

**Note on cold-start:** Auto-scale events introduce a 30–90 second cold-start period for new gateway instances. This may affect P99 response times during burst traffic events. Configure minimum replica count based on expected baseline traffic.

---

## §6 Limitations

- GitOps configuration changes take up to 60 seconds to propagate; this is not suitable for real-time policy updates.
- Rate limit counters are per-region and are not synchronised across regions in active/passive mode.
- mTLS certificate issuance requires the platform certificate authority to be accessible; CA downtime blocks new certificate issuance.
- The gateway does not natively support WebSocket connections in version 4.x; WebSocket support is planned for version 5.0.
