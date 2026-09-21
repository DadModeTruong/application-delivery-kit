# `src/pages/layouts/` — focused interactive layout demos

These routes are interactive previews of complete page shells. They are intentionally lighter than the decision guides: use them to resize the page, inspect navigation, test reading order, and replace the sample content with realistic content.

For the cross-functional decision guidance, use [`src/pages/examples/README.md`](../examples/README.md) and the matching detail guide. Do not treat the demo pages as the source of truth for when a pattern should be chosen.

## Routes

- `/layouts/header-only` — Header, Main, and Footer without contextual navigation
- `/layouts/secondary` — a short section-navigation row above Main
- `/layouts/sidebar` — grouped section navigation beside Main
- `/layouts/full` — section navigation and Sidebar together

## What to test in a demo

- Replace the sample cards with representative headings, labels, content length, and actions.
- Resize to a narrow viewport and verify the mobile navigation remains understandable.
- Check keyboard focus, skip-link behavior, current location, and reading order.
- Test long labels, deep links, permissions, localization, and likely future navigation growth.
- Return to the matching decision guide before approving the layout.

The route-owned files are thin wrappers around [`src/pages/demos/layout-demo.tsx`](../demos/layout-demo.tsx). The production primitives remain in [`src/components/layout/README.md`](../../components/layout/README.md).
