# Contributing to moxfield-api

Thank you for your interest in contributing to **moxfield-api** — A JavaScript library for moxfield.com

Before you dive in, please read this guide fully. We have a structured workflow to keep the project organized and maintainable.

---

## Table of Contents

- [Issue-First Workflow](#issue-first-workflow)
- [Label System](#label-system)
- [Development Setup](#development-setup)
- [Testing](#testing)
- [Commit Convention](#commit-convention)
- [Pull Request Rules](#pull-request-rules)
- [Code of Conduct](#code-of-conduct)

---

## Issue-First Workflow

**No PR without an issue. No exceptions.**

This project follows a strict issue-first workflow:

1. **Open an issue** using the appropriate template ([Bug Report](https://github.com/Gentleman-Programming/gentle-ai/issues/new?template=bug_report.yml) or [Feature Request](https://github.com/Gentleman-Programming/gentle-ai/issues/new?template=feature_request.yml))
2. **Wait for approval** — a maintainer will add the `status:approved` label when the issue is ready to be worked on
3. **Comment on the issue** to let others know you're working on it
4. **Open a PR** referencing the approved issue

PRs that are not linked to an approved issue will be **automatically rejected** by CI.

---

## Label System

### Type Labels (applied to PRs)

| Label                  | Description                             |
|------------------------|-----------------------------------------|
| `type:bug`             | Bug fix                                 |
| `type:feature`         | New feature or enhancement              |
| `type:docs`            | Documentation only                      |
| `type:refactor`        | Code refactoring, no functional changes |
| `type:chore`           | Build, CI, tooling changes              |

### Status Labels (applied to Issues)

| Label                 | Description                                     |
|-----------------------|-------------------------------------------------|
| `status:needs-review` | Newly opened, awaiting maintainer review        |
| `status:approved`     | Approved for implementation — work can begin    |
| `status:in-progress`  | Being worked on                                 |
| `status:blocked`      | Blocked by another issue or external dependency |
| `status:wont-fix`     | Out of scope or won't be addressed              |

### Priority Labels

| Label               | Description                               |
|---------------------|-------------------------------------------|
| `priority:critical` | Blocking issues, security vulnerabilities |
| `priority:high`     | Important, affects many users             |
| `priority:medium`   | Normal priority                           |
| `priority:low`      | Nice to have                              |

---

## Development Setup

### Prerequisites

- Node/Bun
- Git

### Clone and Build

```
git clone https://github.com/MarioMH8/proxystudio.app.git
cd proxystudio.app
bun run build
```

### Run Locally

```bash
bun run dev
```

---

## Testing

### Unit Tests

Run the full unit test suite:

```bash
bun test
```

Run tests for a specific package:

```bash
bun test ./test/specific-file.test.ts
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

Commit messages **must** match this pattern:

```
^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([a-z0-9\._-]+\))?!?: .+
```

### Format

```
<type>(<optional-scope>)!: <description>

[optional body]

[optional footer]
```

### Allowed Types

| Type       | Purpose                               |
|------------|---------------------------------------|
| `feat`     | New feature                           |
| `fix`      | Bug fix                               |
| `docs`     | Documentation only                    |
| `refactor` | Code change (no behavior change)      |
| `chore`    | Maintenance, dependencies, tooling    |
| `style`    | Formatting, linting (no logic change) |
| `perf`     | Performance improvement               |
| `test`     | Adding or updating tests              |
| `build`    | Build system or external deps         |
| `ci`       | CI configuration                      |
| `revert`   | Reverts a previous commit             |

### Examples

```
feat(tui): add progress bar to installation steps
fix(agent): correct Claude Code detection on macOS
docs: update contributing guide
chore(deps): bump bubbletea to v0.26
refactor(pipeline): extract step executor
style: fix linter warnings in catalog package
perf(system): cache OS detection result
test(installer): add coverage for catalog step execution
build: update goreleaser config for arm64
ci: split unit and e2e test jobs
revert: undo model picker redesign
```

### Breaking Changes

Add `!` after the type/scope and include a `BREAKING CHANGE:` footer:

```
feat(cli)!: rename --config flag to --config-file

BREAKING CHANGE: the --config flag has been renamed to --config-file.
Update your scripts and aliases accordingly.
```

Breaking changes map to the `type:breaking-change` label.

---

## Branch Naming

Branch names **must** match this pattern:

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$
```

**Rules:**
- All lowercase
- Use hyphens, dots, or underscores as separators (no spaces, no uppercase)
- Description must be short and descriptive

**Examples:** `feat/user-login`, `fix/crash-on-startup`, `docs/api-reference`, `ci/add-e2e-job`

---

## Pull Request Rules

### Work-Unit Commits

Structure commits by deliverable unit, not by file type. A good commit includes the code, tests, and docs needed to understand and verify one behavior or workflow.

- Prefer `feat(auth): validate tokens at login` over separate `models`, `services`, and `tests` commits.
- Keep rollback reasonable: reverting one commit should not remove unrelated work.
- When a PR grows near 400 changed lines, promote work-unit commits into chained or stacked PRs.

### Review Comments

Review feedback should be warm, direct, and useful quickly. Start with the actionable point, explain why when needed, and avoid recapping the PR before giving feedback.

### Before Opening a PR

- [ ] There is a linked approved issue (`Closes #<N>`)
- [ ] Commits are organized by deliverable work unit
- [ ] All unit tests pass (`bun test`)
- [ ] Commits follow Conventional Commits format
- [ ] Code is self-reviewed

### PR Title

Use the same Conventional Commits format as commit messages:

```
feat(tui): add keyboard shortcut help overlay
fix(agent): handle missing HOME env var gracefully
```

### Automated PR Checks

All PRs go through automated checks:

| Check                               | What It Verifies                                   |
|-------------------------------------|----------------------------------------------------|
| **Check Issue Reference**           | PR body contains `Closes/Fixes/Resolves #N`        |
| **Check Issue Has status:approved** | The linked issue has been approved by a maintainer |
| **Check PR Has type:* Label**       | Exactly one `type:*` label is applied              |
| **Unit Tests**                      | `bun test` passes                                  |
| **ESLint**                          | `bun run lint:fix` passes                          |
| **Typecheck**                       | `bun run typecheck` passes                         |

**All checks must pass** before a PR can be merged.

### Linking Your Issue

In the PR body, include one of:

```
Closes #42
Fixes #42
Resolves #42
```

---

## Code of Conduct

Be respectful. We're building something together.

- Critique code, not people
- Be constructive in reviews
- Welcome newcomers

Violations may result in removal from the project.

---

## Questions?

Use [GitHub Discussions](https://github.com/MarioMH8/proxystudio.app/discussions) — not issues — for questions, ideas, and general conversation.
