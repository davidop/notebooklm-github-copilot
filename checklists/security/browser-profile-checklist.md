# Browser Profile Security Checklist

## Purpose

This checklist ensures that the Chrome/Chromium browser profile used by the `notebooklm-mcp` server is set up, maintained, and decommissioned securely. The profile contains Google session credentials and must be treated as a sensitive credential asset.

---

## Owner

Developer (individual profile) / Platform team (service account profile)

---

## When to Use

- **Initial setup:** Before creating and first using the browser profile.
- **Periodic review:** At least quarterly.
- **Offboarding:** When a developer leaves the team or the integration is decommissioned.

---

## Checklist

### Profile Location and Encryption

- [ ] The browser profile directory path is known and documented in local setup notes.
- [ ] The profile is stored on a volume protected by full-disk encryption (FileVault, BitLocker, LUKS, or equivalent).
- [ ] Filesystem permissions on the profile directory restrict access to the owning user only (`chmod 700` or equivalent).

### Git Exclusion

- [ ] The profile directory is listed in `.gitignore`.
- [ ] `git status` confirms the profile directory is untracked and will not be accidentally committed.
- [ ] No profile files are present in the repository history (verify with `git log --all --full-history -- <profile-dir>`).

### No Profile Sharing

- [ ] The profile is not copied to shared drives, cloud storage, or team file shares.
- [ ] The profile is not included in container images or CI/CD artefacts.
- [ ] Each developer has their own individual profile; profiles are not shared between users.

### Rotation Schedule

- [ ] A profile rotation reminder is scheduled at least quarterly.
- [ ] Rotation procedure is documented: delete the profile directory, revoke active sessions in the Google security dashboard, and create a fresh profile.
- [ ] The Google account used for the profile has 2FA enabled.

### Offboarding Steps

- [ ] On developer offboarding, the profile directory on their machine is deleted.
- [ ] Active Google sessions for the profile account are revoked via `myaccount.google.com/security`.
- [ ] If a shared service account was used, credentials are rotated after offboarding.

### Incident Response Readiness

- [ ] Developer knows how to revoke Google sessions immediately if the profile is suspected compromised.
- [ ] Security team contact is known and documented for escalation.
- [ ] Incident log template is available for recording any profile exposure events.

---

## Evidence to Collect

- Confirmation that `.gitignore` excludes the profile path.
- Date of last profile rotation.
- Offboarding sign-off (where applicable).

---

## Approval Notes

| Field | Value |
|---|---|
| Profile path confirmed | |
| Disk encryption confirmed | |
| Last rotation date | |
| Reviewer | |
| Date of review | |
| Notes | |

---

## Review Cadence

- **Quarterly** operational review.
- **Immediately** on suspected profile compromise or developer offboarding.
