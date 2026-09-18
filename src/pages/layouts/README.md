# `src/pages/layouts/` — complete layout examples

These pages show how the hand-written layout components compose into complete page shells. They are the best place to start when you need a page-level structure rather than one isolated component.

## Routes

- `/layouts/header-only` — Header, Main, and Footer without a sidebar
- `/layouts/secondary` — secondary TabNavigation above Main
- `/layouts/sidebar` — Sidebar beside Main
- `/layouts/full` — TabNavigation and Sidebar together

## Copy/paste starting points

### Simple page

Start with `header-only.tsx` when the page needs a header, one main content region, and a footer.

### Section navigation

Start with `secondary.tsx` when the page needs page-level navigation above the main content.

### Documentation or dashboard shell

Start with `sidebar.tsx` when the page needs persistent or contextual navigation.

### Full documentation shell

Start with `full.tsx` when the page needs both secondary navigation and a sidebar. This is the most complete `LayoutProvider` example.

## Important composition rules

- `PageShell` is the outermost wrapper and pins the footer on short pages.
- Put `LayoutProvider` outside `PageShell` when Header needs the shared navigation context for its mobile drawer.
- Use `PageBody` to keep Sidebar and Main aligned with the page chrome.
- Use `Main size="full"` inside a sidebar layout so the parent owns the width cap.
- Include `SkipLink` on page-level layouts and keep the `Main` target ID intact.

For the individual component APIs, see [`src/components/layout/README.md`](../../components/layout/README.md).
