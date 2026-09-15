# `src/` — React application source

This directory contains the React source for the reference application.

## Directory and file map

- `components/` — reusable UI primitives and hand-written layout components.
- `pages/` — the route registry and reference pages, grouped into `components/`, `layouts/`, and `demos/`.
- `lib/` — small shared implementation utilities.
- `App.tsx` — history-based route selection and page rendering.
- `main.tsx` — browser entry point that mounts the React app.
- `index.css` — Tailwind entry point, theme tokens, and global styles.

## Component ownership

- `components/ui/` contains shadcn-generated primitives and may be regenerated.
- `components/layout/` contains hand-written layout and navigation behavior.
- `pages/` contains the reference app and is not a consumer API.

## Development

Run these commands from the repository root:

```bash
pnpm dev
pnpm lint
pnpm build
```

When a page or component changes, verify the affected route at a narrow width as well as a desktop width. Keep the route table and global navigation data in `pages/page-registry.tsx` accurate when adding or renaming a page. Keep each component guide's local area-navigation links aligned with its sibling guides.

## Continue

- [Component folders](./components/README.md)
- [Layout components](./components/layout/README.md)
- [Generated UI primitives](./components/ui/README.md)
- [Repository README](../README.md)
