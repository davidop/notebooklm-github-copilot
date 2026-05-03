# Browser Profile Security

The notebooklm-mcp server drives a local Chrome/Chromium browser profile to authenticate with and interact with NotebookLM. This profile stores session credentials and must be protected with the same care as any other long-lived credential.

---

## What the Browser Profile Contains

- Google account session cookies and authentication tokens.
- Cached credentials that allow access to NotebookLM without re-authentication.
- Browsing state, local storage, and IndexedDB data related to the Google session.

An attacker with read access to the profile directory can use these artefacts to impersonate the signed-in Google account.

---

## Where the Profile Is Stored

The profile path is configurable in your MCP server settings (typically via an environment variable or config file). By default it is a directory on the local filesystem, often under the user's home directory.

Check your configuration and know exactly where the profile lives before continuing.

---

## Risks If the Profile Is Compromised

- An attacker can replay session cookies to access the Google account, including NotebookLM notebooks.
- They can read, modify, or delete notebook sources and contents.
- If the Google account has broader permissions (Google Drive, Gmail), those may also be accessible.

---

## Never Commit the Browser Profile to Git

The profile directory must be excluded from version control. Add it to `.gitignore` **before** your first commit.

### .gitignore Guidance {#gitignore-guidance}

Add a line like the following to your project `.gitignore`, adjusted to match your configured profile path:

```gitignore
# NotebookLM browser profile – contains session credentials
.browser-profile/
chrome-profile/
notebooklm-profile/
```

Verify with `git status` that the directory is not tracked. If it was accidentally staged, remove it with `git rm -r --cached <profile-dir>`.

---

## Never Share the Browser Profile

- Do not copy the profile to shared drives, cloud storage, or team file shares.
- Do not include the profile in container images or deployment artefacts.
- Each developer should maintain their own isolated profile.

---

## Secure Storage Recommendations

- Store the profile on a volume protected by full-disk encryption (e.g., FileVault, BitLocker, LUKS).
- If additional isolation is needed, create a dedicated OS user account with a separate home directory exclusively for running the MCP server.
- Set filesystem permissions so only the owning user can read the profile directory (`chmod 700 <profile-dir>`).

---

## Profile Lifecycle Management

| Stage | Action |
|---|---|
| **Create** | Create a fresh profile with a dedicated Google account; enable 2FA on that account. |
| **Use** | Keep the profile on an encrypted volume; do not share credentials. |
| **Rotate** | Delete and recreate the profile (and revoke sessions) at least quarterly or after any suspected exposure. |
| **Retire** | On offboarding, delete the profile directory and revoke the Google account's active sessions from the Google security dashboard. |

---

## Team vs Individual Profiles

Prefer **individual profiles** per developer. Shared profiles make attribution impossible and increase the blast radius of a compromise. If a shared service account is required, treat it as a privileged credential and store it in your secrets manager, not on a shared filesystem.

---

## Incident Response If Profile Is Exposed

1. **Revoke active sessions** immediately via the Google account security dashboard (`myaccount.google.com/security`).
2. Delete the compromised profile directory.
3. Create a new profile with a fresh login.
4. Notify your security team and log the incident.
5. Audit NotebookLM notebooks for unauthorised changes.
