# Adding a page

Use this checklist whenever you add a route to the Application Delivery Kit. The goal is to make a new page easy to find, easy to review, and consistent with the pages that already exist.

## 1. Decide what kind of page it is

- Put a component guide in `src/pages/components/`.
- Put a Layouts decision guide in `src/pages/examples/`.
- Put a focused interactive layout example in `src/pages/layouts/`.
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

## 3. Follow the canonical component-guide structure

Use `src/pages/components/header.tsx` as the current reference model for
page anatomy, visual rhythm, and role-based example detail. Adapt its
content to the new component; do not copy Header-specific concepts.

A component guide normally follows this order:

1. Page title and purpose
2. What is it? with a real preview and page-level Try it guidance
3. When to use it
4. When not to use it
5. Design considerations
6. Accessibility considerations
7. Responsive behavior
8. Examples and variations
9. Questions to ask

Each standardized variation follows this order:

1. Title
2. Short summary of the distinct teaching purpose
3. Live production-backed example
4. Specific Try it instruction with an observable expected result
5. Tabs for `Guidance`, `Code`, `Criteria`, and `Verification`

Keep the variation title, summary, live example, and Try it instruction in
the page flow rather than wrapping the entire variation in a card. Place
the tab list outside the bounded card and put only the active tab content
inside it. Use one consistent Try it treatment and typography/color
hierarchy across the whole page.

Use the tabs as delivery artifacts:

- **Guidance** explains why and when, including Do's and Don'ts.
- **Code** shows exact copyable TSX, representative rendered
  semantic/styled HTML, and only the props and attributes used by that
  variation.
- **Criteria** contains a copyable User Story and granular
  Given/When/Then/And acceptance criteria.
- **Verification** contains named scenarios and test cases with ordered
  steps and precise expected results.

Criteria and Verification must be exhaustive for the behavior the live
example actually demonstrates. Cover selection outcomes, state changes,
keyboard and focus behavior, accessibility semantics, responsive
transformation, visual boundaries, and relevant edge conditions. Keep
Criteria focused on what must be true and Verification focused on how to
prove it; do not copy one into the other.

Read the complete page after editing. Confirm that every example has one
distinct purpose, every visible Try it instruction matches its actual
props/state, the tabs agree with the live preview and production
implementation, and no stale API or layout references remain. See
[`src/pages/components/README.md`](./components/README.md) for the full
convention.

## 4. Add the route

Import the page and add one entry, including its hierarchical browser title, to `src/routes/route-manifest.ts`:

```tsx
import { ComponentsNotificationBannerPage } from '@/pages/components/notification-banner'

// inside routes
{
  path: '/components/notification-banner',
  component: ComponentsNotificationBannerPage,
  title: 'Application Delivery Kit | Components | User Interface | Notification Banner',
},
```

The route manifest is the only place that maps a URL to a page component and its browser title. Do not add route definitions to individual pages or navigation files. Keep the title hierarchy consistent with the visible area and guide navigation.

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

- its file name, export name, route, browser title, and navigation placement agree
- its examples use the real production primitives
- its content follows the canonical guide structure
- each variation has a distinct purpose and standardized tabs
- Criteria and Verification are granular, traceable, and grounded in the
  actual example
- its accessibility and responsive behavior are explained
- the nearest README is updated
- local verification passes
- the working tree contains only the intended changes
