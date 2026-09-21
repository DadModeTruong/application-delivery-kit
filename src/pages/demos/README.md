# `src/pages/demos/` — shared demo compositions

These files contain small, reusable compositions used by reference pages. They are not production components and should not be copied into an application as a component API. Copy the underlying primitive from `src/components/` and recreate application-specific content instead.

- `demo-card.tsx` shows a realistic card composition.
- `split-pane-demo.tsx` shows content inside the SplitPane layout primitive.
- `layout-demo.tsx` owns the focused interactive previews rendered at `/layouts/*`; it keeps demo content intentionally small and links back to the decision guide under `/examples/layouts/*`.

The distinction matters:

- `/examples/layouts/*` explains how a team should choose and govern a layout.
- `/layouts/*` lets the team resize the composition, inspect navigation, and test representative content.
