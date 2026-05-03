# Previous Engagement Proposal Summary

> **FICTIONAL DEMO SOURCE** — This document is a fictional summary of a previous proposal and does not represent a real customer, engagement, or vendor.

## Engagement reference

**Engagement name:** Cloud Modernisation Programme — Phase 1
**Proposal reference:** PROP-2023-047
**Delivery period:** Q1–Q3 2024 (completed)
**Summary prepared:** November 2024

---

## Phase 1 summary

Phase 1 delivered the foundational infrastructure for the Cloud Modernisation Programme:

- **CI/CD pipeline:** A GitOps-based CI/CD pipeline was deployed, enabling automated testing and deployment for all platform services. All pipelines are defined as code and stored in the customer's version control system.
- **Network connectivity:** Secure private connectivity between the on-premises data centre and the cloud environment was established using a managed VPN. Latency target of < 20 ms round-trip was achieved.
- **Identity foundation:** The corporate IdP (Azure AD) was connected to the cloud environment. Initial SAML-based SSO was configured for the developer toolchain. OIDC integration for user-facing applications is scheduled for Phase 2.
- **Security baseline:** The security baseline checklist was completed, including encryption at rest for all storage, audit logging for CI/CD events, and network segmentation.

## Architecture decisions from Phase 1

The following ADRs were agreed during Phase 1 and remain in effect for Phase 2:

| ADR | Title | Status |
|-----|-------|--------|
| ADR-001 (Phase 1) | GitOps as the primary delivery model | Accepted |
| ADR-002 (Phase 1) | Managed VPN over Direct Connect for initial phase | Accepted; review in Phase 3 |
| ADR-003 (Phase 1) | Azure AD as the corporate IdP | Accepted |
| ADR-004 (Phase 1) | AES-256 encryption at rest for all Confidential and Restricted data | Accepted |

## Lessons learned from Phase 1

1. **Configuration drift:** Early in Phase 1, manual gateway configuration diverged from the intended design. The GitOps policy-as-code approach was adopted mid-phase to prevent recurrence. All Phase 2 configuration must be GitOps-managed from day one.

2. **Certificate management complexity:** Managing certificates manually for the initial VPN connection created operational overhead. Phase 2 must use automated certificate management (cert-manager or equivalent) for all cryptographic credentials.

3. **Stakeholder alignment on scope:** Two scope changes were processed during Phase 1, each requiring a change request and approval cycle. Phase 2 should establish a clearer scope freeze process to reduce disruption.

## Commitments carried forward to Phase 2

The following commitments from Phase 1 are carried forward:

- The identity integration must be completed end-to-end (OIDC for user-facing surfaces) as agreed in the Phase 1 contract.
- The security penetration test deferred from Phase 1 must be completed before the Phase 2 go-live.
- The VPN architecture will be reviewed in Phase 3 for replacement with a direct connectivity option.

## Financial summary

Phase 1 was delivered within budget. The agreed Phase 2 budget is fixed; any scope additions require formal change control as established in Phase 1.

## Contacts

All Phase 1 contacts remain in role for Phase 2. No account or team changes are anticipated.
