# Architecture Principles

> **FICTIONAL DEMO SOURCE** — This document does not represent a real organisation or project.

## Purpose

These principles govern all architecture decisions for the Cloud Modernisation Programme. Every significant design choice must be evaluated against these principles. Where a decision conflicts with a principle, an Architecture Decision Record (ADR) must document the conflict and the rationale for the exception.

## Principle 1: Managed services over self-managed infrastructure

Prefer cloud-managed services to self-managed equivalents wherever the operational overhead reduction justifies the vendor dependency. Exceptions require ADR approval.

**Implication:** Use managed API gateways, managed databases, and managed identity services rather than deploying and operating equivalent open-source solutions.

## Principle 2: ACID consistency for financial records

All writes to financial records (transactions, orders, invoices) must be ACID-compliant. Eventually-consistent stores are not permitted for financial data without explicit architectural review.

### §2.1 Transactional writes
Every financial record write must execute within a database transaction. Partial writes must roll back atomically.

### §2.2 Read replicas for reporting
Reporting and analytics queries must be routed to read replicas to prevent analytical workloads from degrading transactional performance.

## Principle 3: Policy as code

All access control, rate limiting, and routing policies must be defined as code in version control. No policy may be configured only through a GUI or CLI without a corresponding code representation.

### §3.1 Edge layer termination
All external traffic must terminate at a managed edge layer (API gateway). Backend services must not accept unauthenticated traffic from outside the platform boundary.

### §3.2 Rate limiting and quotas
Rate limits must be enforced at the gateway layer, defined as code, and configurable per client tier without a service restart.

## Principle 4: Zero standing privilege

No human operator may hold persistent administrative access to production systems. All production access must be:
- Time-limited (maximum 4-hour sessions)
- Audited (all access events logged)
- Approved (break-glass procedure with manager approval)

## Principle 5: Multi-region resilience

The platform must be deployable to a primary and a disaster-recovery region. The DR configuration must support:
- Recovery Time Objective (RTO): 4 hours
- Recovery Point Objective (RPO): 15 minutes

DR failover must be exercisable in a test environment without affecting production.

## Data principle: EU data residency

All production data, including backups, audit logs, and personal data, must be stored in EU-compliant cloud regions. Cross-region replication is permitted only between EU-compliant regions.

**Note:** The scope of this principle with respect to backup storage is currently under clarification with the customer (see meeting notes — open questions).

## Principle 6: Observability by default

All services must emit structured logs, metrics, and traces from day one. Observability must not be retrofitted. Minimum requirements:
- Structured JSON logs with correlation ID
- Request latency histogram (P50, P95, P99)
- Error rate counter per service and endpoint
- Distributed trace sampling at ≥ 10% in staging, 1% in production

## Principle 7: Security by design

Security controls must be designed in from the beginning, not added after the fact. Every new service or component must pass the security checklist before deployment to staging.
