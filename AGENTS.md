# Festapp repository agent rules

Read `CLAUDE.md` and `docs/architecture/ai_context.md` before changing the
repository.

## Tenant branch and Flutter build scope

- By default, work on `main` and at most one currently selected tenant or
  production branch.
- Treat requests to update, build, release, deploy, or fix "the app", "the
  current version", or "the current branch" as single-tenant scope.
- Do not merge, push, deploy, publish, or trigger Flutter builds for any other
  `prod/*` branch merely because shared code or a version changed on `main`.
- Propagate changes to multiple tenants or branches only when the user
  explicitly names them or explicitly requests all variants. That permission
  applies only to the requested rollout and does not become the default for
  later work.
- Before an explicitly requested multi-tenant rollout, state the exact branches
  in scope and keep versions consistent within that approved set.
- Read-only inventory and drift checks across branches are allowed when needed
  to assess impact; they do not authorize writes, builds, or deployments.
