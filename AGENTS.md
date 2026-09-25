# Operating rules

This repository contains the React reference application. Keep changes focused on the app, its source, styling, configuration, and the README files that explain them.

## Before changing files

- Work in the canonical checkout `/home/tommy/dev/react-ui-kit` on a focused feature, fix, docs, chore, or CI branch created from the latest `develop`. Do not edit `main` or `develop` directly.
- Read the root README and the relevant directory README first.
- Check `git status`, recent commits, and the current implementation.
- Do not add private, employer-specific, or proprietary material.

## Boundaries

- `src/components/ui/` is disposable shadcn-generated output. Put maintained behavior in hand-written components outside that directory.
- Keep the route manifest, route titles, navigation data, and directory READMEs accurate when pages are added or renamed.
- Prefer small, reviewable changes over broad rewrites or new dependencies.
- Keep the implementation limited to the React app; do not add unrelated framework implementations or a separate process/documentation system.

## Verification

For code changes, run `pnpm lint` and `pnpm build`. Run `git diff --check` for every change. Check the affected route at desktop and narrow widths. Keep each coherent change in a local commit. Do not push from an autonomous run.
