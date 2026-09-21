# `src/pages/examples/shared/` — shared example compositions

These small compositions support the Layouts examples and component guides without becoming production components:

- `example-card.tsx` shows a realistic card composition.
- `split-pane-example.tsx` shows content inside the SplitPane layout primitive.
- `layout-example.tsx` owns the focused interactive layout examples rendered at `/layouts/*`; it keeps example content intentionally small and links back to the decision guide under `/examples/layouts/*`.

Keep these compositions close to the pages that use them. Consumers should import the production primitives from `src/components/`, not these reference-only compositions.
