# Pull requests

## Issue-first workflow

**No PR without an approved issue.**

1. Open an issue using the [Bug Report](https://github.com/MarioMH8/moxfield-api/issues/new?template=bug_report.yml) or [Feature Request](https://github.com/MarioMH8/moxfield-api/issues/new?template=feature-request.yml) template.
2. Wait for a maintainer to add the `status:approved` label.
3. Comment on the issue to claim it.
4. Open a PR referencing the approved issue.

PRs without a linked approved issue are rejected by CI.

## PR title

Use Conventional Commits format:

```
feat(decks): add commander-aware search
fix(fetcher): handle missing Retry-After header gracefully
```

## PR checklist

Before opening a PR:

- [ ] Linked approved issue (`Closes #<N>`)
- [ ] Commits organized by deliverable work unit
- [ ] Conventional Commits format used
- [ ] Changeset added for any package behavior change (`bun changeset add`)
- [ ] Code self-reviewed

## Changesets

If the PR changes package behavior, add a changeset:

```bash
bun changeset add
```

## Automated checks

PRs targeting `main` are gated by:

- **Check Issue Reference** — body contains `Closes/Fixes/Resolves #N`
- **Check Issue Has `status:approved`** — the linked issue is approved
- **Check PR Has `type:*` Label** — exactly one `type:*` label
- **Check PR Changeset** — a `.changeset/*.md` file exists when the type requires one (`type:bug`, `type:feature`, `type:refactor`)
- **Tests**, **ESLint**, **Typecheck** — via `ci.yml`

Exceptions: Renovate PRs and PRs labeled `release` / `internal:sync` skip the issue and type requirements.
