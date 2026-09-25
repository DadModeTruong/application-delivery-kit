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

## Canonical guide-page convention

The Header guide is the current reference model for new or substantially
refined component pages. Use its structure and level of detail as the
default, while adapting the content to the component rather than copying
Header-specific navigation language.

### Page-level structure

Keep the page in this order unless the component requires a clearly
justified variation:

1. **Page title and purpose** — explain the component's job and its
   application boundary in plain language.
2. **What is it?** — define the component, show a real production-backed
   preview, and provide a page-level Try it instruction. Explain any
   state intentionally shown in the preview.
3. **When to use it** — describe decision signals and appropriate product
   contexts.
4. **When not to use it** — name the boundary and better alternatives.
5. **Design considerations** — cover content, hierarchy, visual emphasis,
   spacing, sizing, and ownership decisions that affect implementation.
6. **Accessibility considerations** — cover semantics, names, keyboard
   behavior, focus, state communication, and assistive-technology
   relationships.
7. **Responsive behavior** — explain transformations, reading order,
   reflow, touch targets, overflow, and narrow-width behavior.
8. **Examples and variations** — show distinct implementation choices or
   states using the standard variation structure below.
9. **Questions to ask** — provide a practical cross-functional review
   checklist when the component involves product or architecture choices.

### Standard example variation

Each variation should answer why it exists, what the reader can interact
with, and what the team must verify. Use this order:

1. **Title**
2. **Short summary** — identify the one behavior or implementation choice
   this variation teaches.
3. **Live example** — render the real production component or composition.
4. **Try it** — use one shared callout style across the page. Give a
   concrete action and the observable result; do not use a generic
   instruction.
5. **Tabs** — keep the tab list outside the bounded content surface and
   place the active tab content inside the card, close enough that the
   relationship is obvious:
   - **Guidance** — why and when, design/content rationale, accessibility
     and responsive considerations, Do's, and Don'ts.
   - **Code** — exact copyable repository usage first, then representative
     rendered semantic/styled HTML, followed by only the props and
     attributes used by that example.
   - **Criteria** — a copyable User Story plus granular ordered
     Given/When/Then/And acceptance criteria describing what must be true.
   - **Verification** — named scenarios and test cases with ordered steps
     and precise expected results explaining how to prove the Criteria.

Do not wrap the entire variation in a card. Keep the title, summary, live
preview, and Try it instruction in the page flow. Use one consistent
Try it label, text size, line height, padding, background, radius, and
foreground/muted color hierarchy across the page. Headings and labels may
use foreground color; supporting prose should use muted foreground
consistently.

### Criteria and Verification standard

Treat these tabs as a delivery artifact, not a summary. A reader who sees
only Criteria should be able to visualize the intended experience. A reader
who sees only Verification should be able to execute the checks without
guessing missing steps.

Criteria must cover every behavior the live variation actually renders,
including small transitions:

- visible structure, content order, labels, destinations, and ownership;
- what happens when each meaningful link, trigger, child item, brand
  target, or action is selected;
- route or selected-state transitions and what changes afterward;
- pointer and keyboard activation, focus order, visible focus, Escape,
  dismissal, and focus restoration;
- desktop/mobile transformation, preserved hierarchy, and drawer/group
  behavior;
- accessible names, landmarks, ARIA state, decorative artwork, semantic
  elements, and non-color-only state communication;
- visual sizing, alignment, spacing, clear space, legibility, clipping,
  overlap, and overflow;
- sticky, scrolled, loading, or other states only when the live variation
  actually renders them.

Make each criterion atomic enough to accept or reject without interpretation.
State the observable outcome, not only an implementation detail. Keep
application-owned responsibilities explicit: if a reusable component
exposes a link and the consuming application owns routing, say that the
application navigates to the configured destination rather than claiming
the component performs route matching.

Verification must trace to Criteria without copying it verbatim. Every
meaningful behavior should have a named scenario and test case with setup,
exact interaction or inspection steps, and an expected result that states
what the reviewer should see, hear, inspect, reach, or observe. Avoid
vague results such as “works as expected” or “remains usable” without
naming the observable condition.

### Whole-page review

Before treating a guide as complete, read the page from top to bottom.
Confirm that the introduction names every variation, each variation has
one distinct teaching purpose, visible Try it text matches the actual
props and state, and Guidance, Code, Criteria, and Verification agree
with the live preview and production implementation. Remove stale API
names, old layout references, unexplained preview state, duplicated
explanations, and inconsistent text treatment.

The Header page is the reference for this convention; future component
pages should improve the shared pattern rather than introduce a competing
page anatomy.

## How to reuse a component

1. Read the matching guide’s **What is it?** and **When to use it** sections.
2. Find the production component in `src/components/ui/` or `src/components/layout/`.
3. Find the guide’s basic example or the variation that matches your need.
4. Copy the production component import and the smallest complete JSX example.
5. Replace example copy, route data, and IDs with application-specific values.
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
