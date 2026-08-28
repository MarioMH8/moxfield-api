# Release process

## Daily development

1. Create a `feature/*` branch from `develop`.
2. Add a changeset for every package behavior change with `bun changeset add`.
3. Open and merge the pull request into `develop`.
4. After CI passes, each push to `develop` that adds or modifies a changeset publishes a unique beta version to npm under the `beta` dist-tag.

Install the current beta explicitly when testing it:

```bash
bun add moxfield-api@beta
```

Snapshot releases do not modify or commit version files. They use the pending changesets to calculate a version such as `2.1.1-beta-20260828143000`. Documentation, tooling, and other changes without a changeset do not publish a beta.

## Stable release

1. When `develop` contains non-empty changesets, `release-prepare.yml` creates or updates the draft `changeset-release/main` pull request targeting `main`.
2. Validate the current beta. When it is ready, mark the generated release pull request ready for review and merge it into `main`.
3. `release.yml` on `main` publishes the stable package to npm under the `latest` dist-tag.
4. `sync-to-develop.yml` opens or rebases the automated pull request `internal/sync-from-main-to-develop` → `develop`. **Merge it with a merge commit** to synchronize the generated changelog, package version, and consumed changesets while keeping the full history of `main`.

The generated release pull request contains the pending changes, calculated stable version, changelog entry, and consumed changesets. Changesets release pull requests and their version commits use `chore: release v<version>`. They do not publish packages; publication remains exclusive to `main`.

## Release stabilization

Use a `release/*` branch only when a release needs a stabilization period. It freezes the release scope while new work continues on `develop`; do not merge the automatically generated release pull request while that stabilization is in progress.

1. Create `release/<version>` from `develop`.
2. Allow only release-critical fixes, documentation updates, and QA changes on the release branch.
3. Merge the release branch into `main` when it is approved.
4. `release-prepare.yml` opens the version pull request on `main`; merge it to publish the stable package.
5. Merge the `internal/sync-from-main-to-develop` pull request from `main` to `develop` so the stabilization fixes and generated release files return to the integration branch.

GitHub Actions must be allowed to create pull requests for the automated release and sync workflows to work.

The `internal:sync` label exempts automated branch synchronization pull requests from issue and type validation. They must not include changeset files.
