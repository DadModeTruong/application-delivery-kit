# `src/pages/` — routes and reference pages

This directory contains the pages rendered by the small history-based router in `src/App.tsx`.

## Where to start

- [Component guides](./components/README.md) — reusable component documentation and examples.
- [Layout guides](./layouts/README.md) — complete page-shell compositions.
- [Demo helpers](./demos/README.md) — small compositions used by layout or component pages.
- [`page-registry.tsx`](./page-registry.tsx) — the route table and global navigation data.

## Copy/paste rule

The files in `pages/` show how components are composed in the reference app. They are useful examples, but they are not a consumer-facing component library. When moving code into another project, copy the production primitive from `src/components/` first, then copy only the page composition or example you need.

Keep demo-only route data, reference navigation, and documentation wrappers out of the application feature you are building.

## Adding a page

1. Add the page under the directory that matches its role.
2. Export the page component.
3. Add its route to `page-registry.tsx`.
4. Add or update the relevant navigation entry.
5. Add the page to the nearest directory README.
6. Run `pnpm lint`, `pnpm build`, and `git diff --check`.
7. Check the route at a desktop width and a narrow width.
