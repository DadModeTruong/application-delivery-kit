# Adding a page

Use this checklist whenever you add a route to the Application Delivery Kit. The goal is to make a new page easy to find, easy to review, and consistent with the pages that already exist.

## 1. Decide what kind of page it is

- Put a component guide in `src/pages/components/`.
- Put a standalone example decision guide in `src/pages/examples/`.
- Put a focused interactive layout example in `src/pages/layouts/` or a focused pattern demo in its own top-level page file such as `src/pages/search.tsx`.
- Put a small page-only helper or shared example composition in `src/pages/examples/` only when it is reused by a layout or guide page and is not a production component.
- Put reusable production behavior in `src/components/`, not in a page file.

## 2. Choose a predictable file name

Use lowercase kebab-case for files:

```text
src/pages/components/notification-banner.tsx
```

Export one clearly named route component from the file:

```tsx
export function ComponentsNotificationBannerPage() {
  return <ComponentGuideShell>{/* page content */}</ComponentGuideShell>
}
```

Keep page-specific examples and small helpers in the same file while they are only used by that page. Move a helper into `src/components/` or `src/lib/` only when it has a clear second consumer.

## 3. Follow the guide-page structure

A component guide normally follows this order:

1. Page title and purpose
2. What is it?
3. Basic example
4. When to use it
5. When not to use it
6. Design considerations
7. Accessibility considerations
8. Responsive behavior
9. Examples and variations
10. Questions to ask

Use real production primitives in the examples. Keep the documentation shell around the example, but make the example itself easy to copy.

## 4. Add the route

Import the page and add one entry to `src/routes/route-manifest.ts`:

```tsx
import { ComponentsNotificationBannerPage } from '@/pages/components/notification-banner'

// inside routes
{ path: '/components/notification-banner', component: ComponentsNotificationBannerPage },
```

The route manifest is the only place that maps a URL to a page component. Do not add route definitions to individual pages or navigation files.

## 5. Add the right navigation

Choose navigation based on where the page belongs:

- Add a broad site link to `src/config/site-navigation.tsx` only when the page should appear in the shared Header or Footer.
- Add a component-area or sibling-guide link to `src/config/component-navigation.tsx` when it belongs to an existing guide family.
- Add an Examples > Layouts link to `src/config/layout-navigation.tsx` when it belongs to the Layouts decision-guide family.
- Do not import the route manifest into navigation configuration.
- Do not create a second navigation list inside a page when the same links belong to a shared guide area.

## 6. Add the page to the directory guide

Update the nearest README, usually `src/pages/components/README.md`, `src/pages/examples/README.md`, or `src/pages/layouts/README.md`, with the new file and a one-line description. Keep decision-guide documentation separate from interactive example documentation.

## 7. Write comments that help the next developer

Add a short file-level comment that explains:

- what the page teaches
- which production component the example demonstrates
- what someone can copy from the page

Comment non-obvious accessibility or responsive decisions. Do not comment obvious JSX syntax, and do not add project-specific comments to generated files in `src/components/ui/`.

## 8. Verify locally

From the repository root, run:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm check:routes
pnpm test
pnpm build
git diff --check
```

Then open the new route and check it at a wide viewport and a narrow viewport. For navigation or interactive changes, also check keyboard focus, activation, Escape behavior where relevant, and focus return.

## Definition of done

A page is ready when:

- its file name, export name, route, and navigation placement agree
- its examples use the real production primitives
- its content follows the guide structure
- its accessibility and responsive behavior are explained
- the nearest README is updated
- local verification passes
- the working tree contains only the intended changes
