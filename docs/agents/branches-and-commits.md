# Branches and commits

## Branches

This project uses GitFlow with Changesets for versioning and npm publication.

| Branch      | Purpose                                                      | Publication                    |
|-------------|--------------------------------------------------------------|--------------------------------|
| `feature/*` | Product and maintenance work                                 | None                           |
| `develop`   | Integration branch for the next release                      | Beta snapshot tagged `beta`    |
| `release/*` | Optional release stabilization branch created from `develop` | None                           |
| `main`      | Stable, production-ready releases                            | Stable release tagged `latest` |
| `hotfix/*`  | Urgent fix created from `main`                               | None                           |

## Branch naming

Branch names **must** match this pattern:

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert|release|hotfix)\/[a-z0-9._-]+$
```

**Rules:**

- All lowercase
- Use hyphens, dots, or underscores as separators (no spaces, no uppercase)
- Description must be short and descriptive

**Examples:** `feat/deck-search`, `fix/retry-timeout`, `docs/api-reference`, `release/2.2.0`, `hotfix/fix-publish`

## Commit convention

- **Types:** `feat`, `fix`, `docs`, `refactor`, `chore`, `style`, `perf`, `test`, `build`, `ci`, `revert`
- **Format:** `<type>(<optional-scope>)!: <description>`
- Add `!` and a `BREAKING CHANGE:` footer for breaking changes

## Husky / git hooks

- `pre-commit`: runs `bun lint-staged` (lints and auto-fixes all staged files)
- `pre-push`: runs `bun run test`, `bun run lint:fix`, and `bun run typecheck`
- `commit-msg`: runs `commitlint`
