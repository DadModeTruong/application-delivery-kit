# `src/pages/` — routes and reference pages

This directory contains the pages rendered by the small history-based router in `src/App.tsx`.

## Where to start

- [Component guides](./components/README.md) — reusable component documentation and examples.
- [Layouts decision guides](./examples/README.md) — cross-functional guidance for choosing a page-shell pattern.
- [Interactive layout examples](./layouts/README.md) — focused previews for resizing and inspecting each composition.
- [Example helpers](./examples/README.md) — small compositions used by layout or component pages.
- [`../routes/route-manifest.ts`](../routes/route-manifest.ts) — the route table. Shared site navigation lives in [`../config/site-navigation.tsx`](../config/site-navigation.tsx), while component-area navigation lives in [`../config/component-navigation.tsx`](../config/component-navigation.tsx) and Layouts navigation lives in [`../config/layout-navigation.tsx`](../config/layout-navigation.tsx).

## Copy/paste rule

The files in `pages/` show how components are composed in the reference app. They are useful examples, but they are not a consumer-facing component library. When moving code into another project, copy the production primitive from `src/components/` first, then copy only the page composition or example you need.

Keep example-only route data, reference navigation, and documentation wrappers out of the application feature you are building.

## Adding a page

Follow the complete [adding-a-page checklist](./adding-a-page.md). The short version is:

1. Add the page under the directory that matches its role (`components/` for component guides, `examples/` for decision guides, `layouts/` for focused layout examples).
2. Export the page component.
3. Add its route to `../routes/route-manifest.ts`.
4. Add or update the relevant navigation entry.
5. Add the page to the nearest directory README.
6. Run `pnpm lint`, `pnpm build`, and `git diff --check`.
7. Check the route at a desktop width and a narrow width.
