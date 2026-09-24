# `src/` — React application source

This directory contains the React source for the reference application.

## Directory and file map

- `components/` — reusable UI primitives and hand-written layout components.
- `pages/` — reference pages grouped into `components/`, `examples/`, and `layouts/`.
- `lib/` — small shared implementation utilities.
- `App.tsx` — history-based route selection, page rendering, and active document-title updates.
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

When a page or component changes, verify the affected route at a narrow width as well as a desktop width. Keep the route table and its browser-title metadata in `routes/route-manifest.ts`, along with the appropriate navigation config in `config/`, accurate when adding or renaming a page. Keep each component guide's local area-navigation links aligned with its sibling guides.

## Continue

- [Page and route guide](./pages/README.md)
- [Adding a page](./pages/adding-a-page.md)
- [Component guide pages](./pages/components/README.md)
- [Layouts decision guides](./pages/examples/README.md)
- [Interactive layout examples](./pages/layouts/README.md)
- [Shared example compositions](./pages/examples/shared/README.md)
- [Component folders](./components/README.md)
- [Layout components](./components/layout/README.md)
- [Generated UI primitives](./components/ui/README.md)
- [Repository README](../README.md)
