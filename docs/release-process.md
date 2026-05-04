# Release Process

This document describes how to cut a release for the notebooklm-github-copilot repository.

## Overview

Releases follow [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`.

- **PATCH:** Bug fixes, documentation corrections, recipe updates with no breaking changes
- **MINOR:** New recipes, new scripts, new integrations, new prompt packs
- **MAJOR:** Breaking changes to the MCP configuration format, schema changes, or workflow incompatibilities

## Prerequisites

- You are on the `main` branch with a clean working tree
- All CI checks pass on `main`
- The `CHANGELOG.md` has been updated with the changes for the new version

## Step 1: Update CHANGELOG.md

Add a new section to the top of `CHANGELOG.md` following the Keep a Changelog format:

```markdown
## [0.4.0] — 2024-11-15

### Added
- Setup wizard (`scripts/setup-wizard.mjs`)
- Client config generator (`scripts/generate-client-config.mjs`)
- Doctor command (`scripts/doctor.mjs`)

### Changed
- Updated recipe format to support both v0.3 and v0.4 section naming

### Fixed
- Schema validation error for empty `required` arrays
```

## Step 2: Update package.json version

```bash
npm version minor  # or patch or major
```

This updates `package.json` and creates a git commit and tag automatically.

## Step 3: Generate release notes

Use the release notes script to produce the GitHub release body:

```bash
node scripts/release-notes.mjs --version 0.4.0
```

The script reads `CHANGELOG.md` and produces a formatted Markdown release body.

Options:

| Flag | Description |
|------|-------------|
| `--version` | Version to generate notes for (e.g. `0.4.0`) |
| `--output` | Output file path (default: stdout) |
| `--dry-run` | Preview without writing |

## Step 4: Push the tag

```bash
git push origin main --tags
```

## Step 5: Create the GitHub release

1. Go to the repository Releases page on GitHub.
2. Click **Draft a new release**.
3. Select the tag you just pushed.
4. Paste the output of the release notes script into the release body.
5. Check **Set as the latest release** if this is the newest stable version.
6. Click **Publish release**.

## Step 6: Verify

- CI should run on the release tag.
- Check that the GitHub Pages site updates after the release (see `.github/workflows/pages.yml`).
- Post the release link to the team channel.

## Hotfix process

For urgent bug fixes that cannot wait for the next minor release:

1. Branch from the release tag: `git checkout -b hotfix/v0.4.1 v0.4.0`
2. Make the fix with a targeted commit.
3. Update `CHANGELOG.md`.
4. Run `npm version patch`.
5. Open a PR against `main`.
6. After merge, follow steps 3–6 above.

## Changelog format

Follow the Keep a Changelog convention. Sections in order: Added, Changed, Deprecated, Removed, Fixed, Security.
