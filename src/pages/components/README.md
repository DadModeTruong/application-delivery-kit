# `src/pages/components/` — component guides

These pages explain how the production components in `src/components/` are intended to be used. They are written as copy/paste-friendly reference pages for a beginner React developer: first learn the component’s job, then inspect the real implementation and its smallest useful example.

## Component areas

### User Interface

These components organize, display, or navigate information:

- [`user-interface.tsx`](./user-interface.tsx) — area overview
- [`header.tsx`](./header.tsx) — application identity and primary navigation
- [`tab-navigation.tsx`](./tab-navigation.tsx) — navigation within an area
- [`sidebar.tsx`](./sidebar.tsx) — persistent or contextual navigation
- [`footer.tsx`](./footer.tsx) — supporting page-level links
- [`split-view.tsx`](./split-view.tsx) — responsive two-region layout
- [`cards.tsx`](./cards.tsx) — bounded content groups

### Interaction

These components change something or trigger a process:

- [`interaction.tsx`](./interaction.tsx) — area overview
- [`buttons.tsx`](./buttons.tsx) — actions, states, icons, loading, forms, and menus

### Forms

The form guide uses a shared renderer and control-specific examples:

- [`forms.tsx`](./forms.tsx) — shared form-guide implementation and Forms overview
- `/components/input` — text and email input
- `/components/select` — native select
- `/components/textarea` — multiline text
- `/components/checkbox` — single checkbox
- `/components/checkbox-group` — independent multi-select choices
- `/components/radio` — single-choice group
- `/components/combobox` — searchable selection
- `/components/datepicker` — date selection

## How to reuse a component

1. Read the matching guide’s **What is it?** and **When to use it** sections.
2. Find the production component in `src/components/ui/` or `src/components/layout/`.
3. Find the guide’s basic example or the variation that matches your need.
4. Copy the production component import and the smallest complete JSX example.
5. Replace demo copy, route data, and IDs with application-specific values.
6. Preserve the semantic element, accessible name, keyboard behavior, visible focus, and responsive classes.

The guide page itself includes the full application shell. Do not copy `PageShell`, `Header`, `Sidebar`, or guide-navigation code unless you are building another page with the same shell.

## Page anatomy to look for

Most guide pages follow this order:

1. Page title and purpose
2. What is it?
3. Basic example and example-specific Try it guidance
4. When to use it
5. Variations and states
6. Content, usage, accessibility, and responsive guidance
7. Questions to ask

Use the nearest complete guide as the structural model rather than copying a page literally.
