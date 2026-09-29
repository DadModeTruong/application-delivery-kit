/**
 * Footer guide.
 *
 * Teaches supporting destinations, landmarks, visible labels, external links,
 * and responsive footer layout using the production Footer composition.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { TryIt } from '@/components/layout/try-it'
import { ExampleVariation } from '@/components/layout/example-variation'
import { Footer } from '@/components/layout/footer'
import { userInterfaceSidebarLinks } from '@/config/component-navigation'
import { footerLinks } from '@/config/site-navigation'

const footerProps = [
  {
    name: 'copyright',
    type: 'React.ReactNode',
    example: 'copyright={<>© 2026 Example Co.</>}',
    description: 'Caller-owned ownership or copyright content rendered before the link navigation.',
  },
  {
    name: 'links',
    type: 'NavLeaf[]',
    example: 'links={footerLinks}',
    description:
      'Optional application-owned leaf links. Omit or pass an empty list for a copyright-only Footer.',
  },
  {
    name: 'size',
    type: '"contained" | "full"',
    example: 'size="contained"',
    description:
      'Controls the outer Container alignment while preserving the Footer content order.',
  },
  {
    name: 'bordered',
    type: 'boolean',
    example: 'bordered={false}',
    description:
      'Controls the optional top boundary without changing the semantic footer landmark.',
  },
]

const footerAttributes = [
  {
    name: 'data-slot',
    type: 'component hook',
    example: 'data-slot="footer"',
    description: 'Identifies the semantic Footer root for inspection and targeted styling.',
  },
  {
    name: 'data-size',
    type: 'layout state',
    example: 'data-size="contained"',
    description: 'Identifies the selected outer Container alignment behavior.',
  },
  {
    name: 'aria-label',
    type: 'accessible-name attribute',
    example: 'aria-label="Footer"',
    description: 'Names the nested Footer navigation landmark when links are present.',
  },
  {
    name: 'target / rel',
    type: 'external-link attributes',
    example: 'target="_blank" rel="noopener noreferrer"',
    description:
      'Marks an intentional new-window destination and pairs with the visible screen-reader hint.',
  },
]

const basicSupplemental = {
  guidance: {
    explanation:
      'Use the basic Footer when a page needs a small, secondary set of same-site destinations and caller-owned copyright content at the end of the page.',
    doItems: [
      'Keep labels specific, ordered, and useful after the main page task is complete.',
      'Pass real application destinations and place Footer after Main.',
      'Use the named Footer navigation landmark when links are present.',
    ],
    dontItems: [
      'Do not use placeholder anchors with no destination.',
      'Do not make Footer the only way to reach an important task action.',
      'Do not duplicate broad primary navigation in a small supporting link list.',
    ],
  },
  code: {
    language: 'tsx',
    props: footerProps,
    attributes: footerAttributes,
    source: `<Footer
  copyright={<>© 2026 Example Co.</>}
  links={[
    { href: '/privacy', label: 'Privacy' },
    { href: '/accessibility', label: 'Accessibility' },
  ]}
/>`,
    html: `<footer data-slot="footer" data-size="contained" class="w-full border-t border-border py-6">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl flex flex-wrap items-center justify-between gap-4">
    <div class="text-sm text-muted-foreground">© 2026 Example Co.</div>
    <nav aria-label="Footer" class="flex flex-wrap items-center gap-1">
      <a href="/privacy" class="inline-flex items-center gap-2 rounded-md px-3 py-2">Privacy</a>
      <a href="/accessibility" class="inline-flex items-center gap-2 rounded-md px-3 py-2">Accessibility</a>
    </nav>
  </div>
</footer>`,
  },
  requirements: {
    userStory:
      'As a person finishing a page, I want a small set of supporting destinations so that I can find legal, support, or ownership information without confusing it with primary navigation.',
    groups: [
      {
        id: 'BR-BASIC',
        title: 'Business requirements',
        items: [
          'People can identify Footer as supporting page-ending content rather than primary navigation.',
          'People can find the caller-provided ownership or copyright information.',
        ],
      },
      {
        id: 'FR-BASIC',
        title: 'Functional requirements',
        items: [
          'Footer renders each supplied destination as a normal link in supplied order.',
          'Footer omits the nested navigation landmark when no links are supplied.',
        ],
      },
      {
        id: 'NFR-BASIC',
        title: 'Non-functional requirements',
        items: [
          'The Footer remains visually secondary and aligned with the surrounding page content.',
          'Copyright content and links wrap without creating unintended horizontal scrolling.',
        ],
      },
      {
        id: 'A11Y-BASIC',
        title: 'Accessibility requirements',
        items: [
          'The semantic footer landmark remains after the page main content.',
          'The link navigation has a distinct name, visible focus, and logical keyboard order.',
        ],
      },
      {
        id: 'TR-BASIC',
        title: 'Technical requirements',
        items: [
          'The consuming application supplies copyright content and NavLeaf link data.',
          'Footer does not infer routes or require router context to render.',
        ],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['BR-BASIC-01', 'A11Y-BASIC-01'],
        given: 'Footer is rendered after the page main content with two supporting links',
        when: 'the page landmarks are inspected',
        then: 'one semantic footer landmark appears after Main without presenting itself as primary navigation',
        and: [
          'the footer boundary is visually distinguishable',
          'the Footer does not replace Header or Sidebar',
        ],
      },
      {
        id: 'AC-BASIC-02',
        requirementRefs: ['BR-BASIC-02', 'TR-BASIC-01'],
        given: 'the caller supplies copyright content',
        when: 'Footer renders',
        then: 'the supplied ownership content appears before the link navigation',
        and: ['Footer does not replace or rewrite the caller-provided content'],
      },
      {
        id: 'AC-BASIC-03',
        requirementRefs: ['FR-BASIC-01', 'TR-BASIC-01'],
        given: 'the caller supplies Privacy and Accessibility NavLeaf items',
        when: 'Footer renders',
        then: 'two real anchors appear in the supplied order with their configured hrefs',
        and: ['each visible label identifies its destination'],
      },
      {
        id: 'AC-BASIC-04',
        requirementRefs: ['FR-BASIC-02', 'TR-BASIC-02'],
        given: 'the caller supplies no links',
        when: 'Footer renders',
        then: 'the semantic footer remains but no empty Footer navigation landmark appears',
      },
      {
        id: 'AC-BASIC-05',
        requirementRefs: ['NFR-BASIC-01'],
        given: 'Footer is viewed beside the page content at a supported width',
        when: 'the layout is inspected',
        then: 'the Footer uses the selected Container alignment and remains visually secondary',
        and: ['the content is not presented as a second main region'],
      },
      {
        id: 'AC-BASIC-06',
        requirementRefs: ['NFR-BASIC-02'],
        given: 'the available width becomes narrow or text is enlarged',
        when: 'copyright and links reflow',
        then: 'the content wraps within the Footer without page-level horizontal scrolling',
        and: ['source order remains copyright followed by links'],
      },
      {
        id: 'AC-BASIC-07',
        requirementRefs: ['A11Y-BASIC-02'],
        given: 'a keyboard user moves through the Footer links',
        when: 'focus reaches each destination',
        then: 'the links are reachable in source order with a visible focus indicator',
        and: ['Enter follows the focused href'],
      },
      {
        id: 'AC-BASIC-08',
        requirementRefs: ['TR-BASIC-02'],
        given: 'Footer is rendered outside router context',
        when: 'the component receives explicit content and links',
        then: 'it renders from the supplied data without fetching or inferring routes',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Confirm the basic Footer landmark and placement',
        description:
          'Checks that the Footer is a page-ending region distinct from primary navigation.',
        criterionRefs: ['AC-BASIC-01'],
        cases: [
          {
            id: 'VC-BASIC-01',
            role: 'Functional QA',
            title: 'Inspect the page-ending landmark',
            description:
              'Confirms the rendered Footer appears after Main and has the expected semantic boundary.',
            criterionRefs: ['AC-BASIC-01'],
            steps: [
              'Render the Basic example after a page Main region.',
              'Inspect the landmark order and visible top boundary.',
            ],
            expected:
              'One footer landmark appears after Main; Header and any Sidebar remain separate navigation regions.',
          },
        ],
      },
      {
        id: 'VR-BASIC-02',
        role: 'Functional QA',
        title: 'Check caller content and destination order',
        description:
          'Checks that supplied copyright content and NavLeaf data are rendered without inference.',
        criterionRefs: ['AC-BASIC-02', 'AC-BASIC-03', 'AC-BASIC-08'],
        cases: [
          {
            id: 'VC-BASIC-02',
            role: 'Functional QA',
            title: 'Verify copyright and exact hrefs',
            description:
              'Confirms the caller-owned content and both configured links are preserved.',
            criterionRefs: ['AC-BASIC-02', 'AC-BASIC-03', 'AC-BASIC-08'],
            steps: [
              'Render the example with the shown copyright node and Privacy/Accessibility items.',
              'Inspect visible text, link order, and each anchor href.',
            ],
            expected:
              'The copyright text appears first; Privacy then Accessibility render as real anchors with `/privacy` and `/accessibility` hrefs.',
          },
        ],
      },
      {
        id: 'VR-BASIC-03',
        role: 'Functional QA',
        title: 'Check the no-links boundary',
        description: 'Checks that an empty link list does not create an empty navigation landmark.',
        criterionRefs: ['AC-BASIC-04'],
        cases: [
          {
            id: 'VC-BASIC-03',
            role: 'Functional QA',
            title: 'Render Footer without links',
            description: 'Confirms the copyright-only boundary explicitly.',
            criterionRefs: ['AC-BASIC-04'],
            steps: [
              'Render Footer with the same copyright node and `links={[]}`.',
              'Inspect the footer and navigation landmarks.',
            ],
            expected: 'The footer landmark remains, but no navigation named Footer is rendered.',
          },
        ],
      },
      {
        id: 'VR-BASIC-04',
        role: 'Responsive QA',
        title: 'Check alignment and wrapping',
        description: 'Checks the contained layout and narrow-width wrap behavior.',
        criterionRefs: ['AC-BASIC-05', 'AC-BASIC-06'],
        cases: [
          {
            id: 'VC-BASIC-04',
            role: 'Responsive QA',
            title: 'Measure the contained Footer at narrow width',
            description:
              'Confirms content wraps inside the Footer rather than forcing page overflow.',
            criterionRefs: ['AC-BASIC-05', 'AC-BASIC-06'],
            steps: [
              'Render the Basic example at desktop width, then at the narrowest supported width and with enlarged text.',
              'Inspect the Container alignment, wrap points, source order, and document scroll width.',
            ],
            expected:
              'Content remains aligned, copyright precedes links, links wrap as needed, and the page does not gain unintended horizontal scrolling.',
          },
        ],
      },
      {
        id: 'VR-BASIC-05',
        role: 'Accessibility QA',
        title: 'Check keyboard and landmark naming',
        description: 'Checks the named Footer navigation and visible keyboard focus.',
        criterionRefs: ['AC-BASIC-07'],
        cases: [
          {
            id: 'VC-BASIC-05',
            role: 'Accessibility QA',
            title: 'Navigate the Footer with the keyboard',
            description: 'Confirms keyboard order, focus visibility, and normal anchor activation.',
            criterionRefs: ['AC-BASIC-07'],
            steps: [
              'Start before the Footer and press Tab until the Privacy and Accessibility links receive focus.',
              'Inspect the accessible landmark name and focus indicator, then press Enter on one link.',
            ],
            expected:
              'The Footer navigation is named Footer, links receive visible focus in order, and Enter follows the focused destination.',
          },
        ],
      },
    ],
  },
  tabLayout: 'requirements' as const,
}

const externalSupplemental = {
  guidance: {
    explanation:
      'Use external links when a supporting destination intentionally leaves the application, and make the new-window behavior explicit without making the icon the only name.',
    doItems: [
      'Keep the visible label meaningful and include the external-link hint supplied by Footer.',
      'Use the same application-owned NavLeaf data in the shell and guide example.',
      'Confirm the destination and new-window choice are intentional product decisions.',
    ],
    dontItems: [
      'Do not use an external link for an available same-site route.',
      'Do not rely on an icon alone to name the destination.',
      'Do not omit the target and rel protection when using external behavior.',
    ],
  },
  code: {
    language: 'tsx',
    props: footerProps,
    attributes: footerAttributes,
    source: `<Footer
  copyright={<>© 2026 Example Co.</>}
  links={footerLinks}
/>`,
    html: `<nav aria-label="Footer" class="flex flex-wrap items-center gap-1">
  <a href="https://github.com/RealityTommy/application-delivery-kit" target="_blank" rel="noopener noreferrer">
    GitHub<span class="sr-only"> (opens in new window)</span>
  </a>
</nav>`,
  },
  requirements: {
    userStory:
      'As a person using a supporting destination outside the application, I want the Footer to explain the destination and new-window behavior so that I can choose the link with the right expectation.',
    groups: [
      {
        id: 'BR-EXTERNAL',
        title: 'Business requirements',
        items: [
          'People can identify an external supporting destination.',
          'People understand that activating it opens a new window or tab.',
        ],
      },
      {
        id: 'FR-EXTERNAL',
        title: 'Functional requirements',
        items: [
          'Footer renders external NavLeaf items as real anchors with their configured href.',
          'Footer applies the external-link target and rel behavior only to external items.',
        ],
      },
      {
        id: 'NFR-EXTERNAL',
        title: 'Non-functional requirements',
        items: [
          'External treatment remains visually consistent with other Footer links.',
          'The link remains usable when the Footer wraps at narrow widths.',
        ],
      },
      {
        id: 'A11Y-EXTERNAL',
        title: 'Accessibility requirements',
        items: [
          'The visible label remains the link’s meaningful accessible name.',
          'Assistive technology receives a clear new-window hint.',
        ],
      },
      {
        id: 'TR-EXTERNAL',
        title: 'Technical requirements',
        items: [
          'The consuming application marks external destinations explicitly in NavLeaf data.',
          'Footer preserves safe target and rel attributes for external links.',
        ],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-EXTERNAL-01',
        requirementRefs: ['BR-EXTERNAL-01', 'FR-EXTERNAL-01'],
        given: 'the caller supplies a GitHub item with `external: true`',
        when: 'Footer renders',
        then: 'GitHub appears as a real Footer anchor with its configured external href',
        and: ['the visible label remains GitHub'],
      },
      {
        id: 'AC-EXTERNAL-02',
        requirementRefs: ['BR-EXTERNAL-02', 'FR-EXTERNAL-02', 'TR-EXTERNAL-02'],
        given: 'the GitHub link is external',
        when: 'the anchor attributes are inspected',
        then: 'the link uses `target="_blank"` and `rel="noopener noreferrer"`',
        and: ['same-site links do not receive those attributes'],
      },
      {
        id: 'AC-EXTERNAL-03',
        requirementRefs: ['NFR-EXTERNAL-01'],
        given: 'the external link is displayed beside ordinary Footer links',
        when: 'the Footer is viewed',
        then: 'the link uses the same spacing, focus, and text treatment as other Footer links',
        and: ['external behavior does not depend on the icon'],
      },
      {
        id: 'AC-EXTERNAL-04',
        requirementRefs: ['NFR-EXTERNAL-02'],
        given: 'the Footer width becomes constrained',
        when: 'the link row wraps',
        then: 'the GitHub link remains visible and reachable without horizontal scrolling',
      },
      {
        id: 'AC-EXTERNAL-05',
        requirementRefs: ['A11Y-EXTERNAL-01'],
        given: 'a person inspects the external link name',
        when: 'the link is announced',
        then: 'GitHub remains the meaningful accessible name',
        and: ['the decorative icon, when supplied, is hidden from assistive technology'],
      },
      {
        id: 'AC-EXTERNAL-06',
        requirementRefs: ['A11Y-EXTERNAL-02'],
        given: 'a person uses assistive technology',
        when: 'the external link is announced',
        then: 'the announcement includes that it opens in a new window',
      },
      {
        id: 'AC-EXTERNAL-07',
        requirementRefs: ['TR-EXTERNAL-01', 'TR-EXTERNAL-02'],
        given: 'the consuming application provides the external NavLeaf flag',
        when: 'Footer renders',
        then: 'Footer uses the supplied flag to determine external attributes without guessing from the URL',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        id: 'VR-EXTERNAL-01',
        role: 'Functional QA',
        title: 'Check external destination attributes',
        description: 'Checks that explicit external data produces the expected anchor behavior.',
        criterionRefs: ['AC-EXTERNAL-01', 'AC-EXTERNAL-02', 'AC-EXTERNAL-07'],
        cases: [
          {
            id: 'VC-EXTERNAL-01',
            role: 'Functional QA',
            title: 'Inspect the GitHub anchor',
            description: 'Confirms href, target, rel, and same-site separation.',
            criterionRefs: ['AC-EXTERNAL-01', 'AC-EXTERNAL-02', 'AC-EXTERNAL-07'],
            steps: [
              'Render the External example with the shown GitHub NavLeaf.',
              'Inspect the GitHub anchor href, target, rel, and the attributes of any ordinary same-site Footer link.',
            ],
            expected:
              'GitHub preserves its external href and has target `_blank` plus rel `noopener noreferrer`; only the explicitly external item receives those attributes.',
          },
        ],
      },
      {
        id: 'VR-EXTERNAL-02',
        role: 'Responsive QA',
        title: 'Check external-link wrapping',
        description: 'Checks that external links remain reachable when the Footer wraps.',
        criterionRefs: ['AC-EXTERNAL-03', 'AC-EXTERNAL-04'],
        cases: [
          {
            id: 'VC-EXTERNAL-02',
            role: 'Responsive QA',
            title: 'Resize the external-link Footer',
            description: 'Confirms consistent treatment and no page overflow.',
            criterionRefs: ['AC-EXTERNAL-03', 'AC-EXTERNAL-04'],
            steps: [
              'Render the External example beside a same-site Footer link.',
              'Resize to the narrowest supported width and inspect link visibility, focus treatment, and document scroll width.',
            ],
            expected:
              'The external link keeps the same link treatment, remains reachable after wrapping, and does not create unintended horizontal scrolling.',
          },
        ],
      },
      {
        id: 'VR-EXTERNAL-03',
        role: 'Accessibility QA',
        title: 'Check the new-window announcement',
        description: 'Checks the accessible name and explicit new-window hint.',
        criterionRefs: ['AC-EXTERNAL-05', 'AC-EXTERNAL-06'],
        cases: [
          {
            id: 'VC-EXTERNAL-03',
            role: 'Accessibility QA',
            title: 'Inspect the announced link name',
            description:
              'Confirms the label and hidden hint are available without exposing decorative icon content.',
            criterionRefs: ['AC-EXTERNAL-05', 'AC-EXTERNAL-06'],
            steps: [
              'Inspect the GitHub link’s accessible name with browser accessibility tooling or a screen reader.',
              'Confirm the visible label is GitHub and the new-window hint is announced.',
            ],
            expected:
              'The link is named GitHub and its announcement communicates that it opens in a new window; decorative icons are not announced separately.',
          },
        ],
      },
    ],
  },
  tabLayout: 'requirements' as const,
}

const wrappingSupplemental = {
  guidance: {
    explanation:
      'Use a contained Footer with realistic long labels when the guide or page Main area has limited width and the content must reflow without clipping.',
    doItems: [
      'Keep the Footer contained when it sits inside a limited Main column, and use full width only when the page shell owns the wider boundary.',
      'Test long copyright and link labels at narrow widths and enlarged text.',
      'Preserve source order and keep links reachable when the row stacks.',
    ],
    dontItems: [
      'Do not use full width inside a constrained content example when it makes the Footer surface harder to scan.',
      'Do not make the Footer sticky or fixed without a separate interaction and accessibility design.',
      'Do not allow long labels to create page-level horizontal scrolling.',
    ],
  },
  code: {
    language: 'tsx',
    props: footerProps,
    attributes: footerAttributes,
    source: `<Footer
  bordered
  copyright={<>© 2026 Example Organization — Accessibility first</>}
  links={[
    { href: '/privacy', label: 'Privacy and data practices' },
    { href: '/accessibility', label: 'Accessibility statement' },
    { href: '/components/user-interface', label: 'Component documentation' },
  ]}
/>`,
    html: `<footer data-slot="footer" data-size="contained" class="w-full border-t border-border py-6">
  <div data-slot="container" data-size="contained" class="mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
    <div class="text-sm text-muted-foreground">© 2026 Example Organization — Accessibility first</div>
    <nav aria-label="Footer" class="flex flex-wrap items-center gap-1">…</nav>
  </div>
</footer>`,
  },
  requirements: {
    userStory:
      'As a person using a page at different widths, I want the Footer boundary and supporting links to reflow predictably so that no content becomes clipped or unreachable.',
    groups: [
      {
        id: 'BR-WRAP',
        title: 'Business requirements',
        items: [
          'People can recognize the page-ending boundary across the available width.',
          'People can reach every supporting destination after the Footer wraps.',
        ],
      },
      {
        id: 'FR-WRAP',
        title: 'Functional requirements',
        items: [
          'Footer preserves the selected Container alignment while the contained example keeps its surface appropriate for the page column.',
          'Footer preserves the supplied copyright and link order while wrapping.',
        ],
      },
      {
        id: 'NFR-WRAP',
        title: 'Non-functional requirements',
        items: [
          'The Footer remains content-driven rather than fixed or sticky.',
          'Long realistic labels do not create unintended horizontal scrolling.',
        ],
      },
      {
        id: 'A11Y-WRAP',
        title: 'Accessibility requirements',
        items: [
          'Source order remains understandable when content stacks.',
          'Focus remains visible and links remain operable after reflow.',
        ],
      },
      {
        id: 'TR-WRAP',
        title: 'Technical requirements',
        items: [
          'The consuming application supplies realistic long labels and chooses full width only when the surrounding shell has room for it.',
          'Footer uses flex wrapping rather than a breakpoint that hides required links.',
        ],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-WRAP-01',
        requirementRefs: ['BR-WRAP-01', 'FR-WRAP-01'],
        given: 'Footer is rendered with a border and realistic long copyright and link labels',
        when: 'the page is viewed at a wide width',
        then: 'the Footer remains visually appropriate inside the available content width while its content uses the contained Container alignment',
        and: ['the footer remains after Main'],
      },
      {
        id: 'AC-WRAP-02',
        requirementRefs: ['BR-WRAP-02', 'FR-WRAP-02'],
        given: 'the caller supplies a long copyright node and ordered links',
        when: 'Footer renders',
        then: 'copyright and links preserve their supplied content and source order',
      },
      {
        id: 'AC-WRAP-03',
        requirementRefs: ['NFR-WRAP-01'],
        given: 'the page is scrolled or resized',
        when: 'Footer remains in the document flow',
        then: 'Footer is content-driven and does not become sticky or fixed',
      },
      {
        id: 'AC-WRAP-04',
        requirementRefs: ['NFR-WRAP-02', 'TR-WRAP-02'],
        given: 'the viewport is narrowed and text is enlarged to 200%',
        when: 'the long labels reflow',
        then: 'the Footer wraps links and copyright without unintended horizontal scrolling',
        and: ['no required link is hidden'],
      },
      {
        id: 'AC-WRAP-05',
        requirementRefs: ['A11Y-WRAP-01'],
        given: 'copyright and links occupy multiple rows',
        when: 'the reflowed Footer is read in source order',
        then: 'the copyright remains understandable before the supporting links',
      },
      {
        id: 'AC-WRAP-06',
        requirementRefs: ['A11Y-WRAP-02'],
        given: 'a keyboard user reaches the wrapped links',
        when: 'focus moves through the navigation',
        then: 'every link remains focusable with a visible focus indicator',
      },
      {
        id: 'AC-WRAP-07',
        requirementRefs: ['TR-WRAP-01'],
        given: 'the consuming application supplies realistic long labels for a contained Footer',
        when: 'Footer renders',
        then: 'the component preserves the requested content and wrapping behavior without modifying the supplied data',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        id: 'VR-WRAP-01',
        role: 'Design QA',
        title: 'Check contained long-label alignment',
        description:
          'Checks the contained Footer surface while preserving alignment and readable wrapping.',
        criterionRefs: ['AC-WRAP-01', 'AC-WRAP-07'],
        cases: [
          {
            id: 'VC-WRAP-01',
            role: 'Design QA',
            title: 'Inspect contained Footer at desktop width',
            description:
              'Confirms the contained surface and selected Container mode are appropriate for the guide column.',
            criterionRefs: ['AC-WRAP-01', 'AC-WRAP-07'],
            steps: [
              'Render the Long labels and wrapping example at desktop width.',
              'Inspect the footer boundary, data-size state, content alignment, and document position after Main.',
            ],
            expected:
              'The border spans the available Footer width, content uses full Container alignment, and the Footer remains after Main in normal flow.',
          },
        ],
      },
      {
        id: 'VR-WRAP-02',
        role: 'Responsive QA',
        title: 'Check long-label reflow',
        description: 'Checks the explicit narrow-width and enlarged-text boundary.',
        criterionRefs: ['AC-WRAP-02', 'AC-WRAP-03', 'AC-WRAP-04'],
        cases: [
          {
            id: 'VC-WRAP-02',
            role: 'Responsive QA',
            title: 'Resize and enlarge the long-label example',
            description: 'Confirms long labels wrap without clipping or page overflow.',
            criterionRefs: ['AC-WRAP-02', 'AC-WRAP-03', 'AC-WRAP-04'],
            steps: [
              'Render the example with its long copyright and link labels.',
              'Resize to the narrowest supported width and set browser zoom/text enlargement to 200%.',
              'Inspect source order, clipping, hidden links, and document scroll width.',
            ],
            expected:
              'Content wraps in source order, all links remain visible and reachable, Footer stays in normal flow, and the page does not gain unintended horizontal scrolling.',
          },
        ],
      },
      {
        id: 'VR-WRAP-03',
        role: 'Accessibility QA',
        title: 'Check keyboard operation after reflow',
        description: 'Checks focus visibility and operability when the Footer stacks.',
        criterionRefs: ['AC-WRAP-05', 'AC-WRAP-06'],
        cases: [
          {
            id: 'VC-WRAP-03',
            role: 'Accessibility QA',
            title: 'Tab through the wrapped Footer',
            description:
              'Confirms every link remains in the keyboard sequence after layout reflow.',
            criterionRefs: ['AC-WRAP-05', 'AC-WRAP-06'],
            steps: [
              'At the narrowed and enlarged-text state, start before the Footer and press Tab through every Footer link.',
              'Inspect focus visibility and activate one focused link with Enter.',
            ],
            expected:
              'The copyright remains first in source order, every link receives visible focus, and Enter activates the focused destination.',
          },
        ],
      },
    ],
  },
  tabLayout: 'requirements' as const,
}

function ComponentsFooterPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/footer"
      tabActiveHref="/components/user-interface"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      sidebarAriaLabel="User Interface"
    >
      <div className="space-y-12">
        <section className="space-y-5" aria-labelledby="navigation-footer-heading">
          <h1 id="navigation-footer-heading" className="text-4xl font-semibold tracking-tight">
            Footer navigation
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Footer for supporting information and destinations at the end of a page, without
            competing with the page&apos;s main task or primary navigation.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-footer-what-heading">
          <h2 id="navigation-footer-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Footer is the page-ending region for secondary destinations such as privacy,
            accessibility, help, contact, status, and ownership information. Place it after the
            page&apos;s main content, not inside the main content area.
          </p>
          <p className="leading-7 text-muted-foreground">
            When links are present, Footer adds a named navigation landmark and keeps the links as
            normal keyboard-reachable anchors. Its wrapping layout keeps supporting content
            available when space is limited.
          </p>
          <TryIt>
            Tab through the links and resize the preview. The links should remain ordinary anchors
            with visible focus, and the row should wrap rather than scroll horizontally.
          </TryIt>
          <div className="-mt-2 overflow-hidden rounded-xl border [&_[data-slot=footer]]:!border-0 [&_[data-slot=footer]]:!py-2">
            <Footer
              bordered={false}
              copyright={<>© 2026 Tommy Truong</>}
              links={[
                { href: '/privacy', label: 'Privacy' },
                { href: '/accessibility', label: 'Accessibility' },
              ]}
            />
          </div>
        </section>

        <section
          className="grid gap-10 lg:grid-cols-2"
          aria-labelledby="navigation-footer-use-heading"
        >
          <div className="space-y-5">
            <h2
              id="navigation-footer-use-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Use Footer when a destination is useful at the end of a page but does not need
              persistent prominence during the main task.
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
              <li>For a short set of legal, support, accessibility, or organizational links.</li>
              <li>For copyright or ownership information shared across pages.</li>
              <li>
                For destinations that should be easy to find without becoming primary navigation.
              </li>
            </ul>
          </div>
          <div className="space-y-5" aria-labelledby="navigation-footer-not-heading">
            <h2
              id="navigation-footer-not-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              When not to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Do not use Footer as a second site map or as a substitute for navigation needed while
              someone is completing the main task.
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
              <li>Keep frequently used product areas in Header, Sidebar, or Tab navigation.</li>
              <li>
                Do not hide required actions, progress, or important alerts only at the bottom of
                the page.
              </li>
              <li>
                Do not turn a small footer into dense grouped navigation without a clear
                information-architecture need.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-footer-design-heading">
          <h2
            id="navigation-footer-design-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Design considerations
          </h2>
          <p className="leading-7 text-muted-foreground">
            Keep Footer visually secondary while making its destinations easy to scan. The component
            supports contained or full-width layout, optional borders, caller-owned copyright React
            content, and links with optional icons and external-link treatment.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>
              Use <code>contained</code> when the footer aligns with page content and{' '}
              <code>full</code> when its layout spans the available width.
            </li>
            <li>
              Use a border or background change to establish the page-ending boundary without making
              a second content area.
            </li>
            <li>
              Keep link labels specific and ordered consistently; do not add a familiar icon when
              text already communicates the destination.
            </li>
            <li>
              Use shared application link data for the production shell so examples do not drift
              from the real Footer.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-footer-accessibility-heading">
          <h2
            id="navigation-footer-accessibility-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Accessibility considerations
          </h2>
          <p className="leading-7 text-muted-foreground">
            Place Footer after the page&apos;s main content so the native{' '}
            <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">footer</code> element
            represents the page&apos;s content-info landmark. When links are provided, the component
            supplies a named{' '}
            <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">Footer</code> navigation
            landmark.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>
              Use real anchors with meaningful names; do not use generic clickable text or icon-only
              links.
            </li>
            <li>
              Keep visible focus indicators, logical keyboard order, and enough spacing for touch
              activation.
            </li>
            <li>
              Treat leading icons as decorative when the visible label is the accessible name.
            </li>
            <li>
              If an external link opens a new tab, make that behavior clear to assistive technology
              and users.
            </li>
            <li>
              Test link purpose, text and focus contrast, forced-colors behavior, and landmark order
              in the complete page.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-footer-responsive-heading">
          <h2
            id="navigation-footer-responsive-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Footer uses wrapping flex layouts: the copyright content and link navigation wrap as
            space becomes limited. It is not a fixed or sticky control, and links should remain
            available without horizontal scrolling.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>Test contained and full-width layouts at narrow widths and browser zoom.</li>
            <li>Use the longest realistic copyright and link labels when checking wrap points.</li>
            <li>
              Preserve source order so copyright content and links remain understandable when they
              wrap.
            </li>
            <li>
              If a complex footer needs mobile disclosure, use an accessible disclosure pattern
              rather than hiding links with CSS.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-footer-examples-heading">
          <h2
            id="navigation-footer-examples-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Examples and variations
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Compare the basic text-link pattern with an intentional external destination and a
            full-width wrapping layout. Each preview uses the reusable Footer component; only its
            supported data and layout options change.
          </p>
          <div className="space-y-8 [&_*:has(>footer)]:!p-0 [&_*:has(>footer)]:overflow-hidden [&_[data-slot=footer]]:!py-2">
            <ExampleVariation
              title="Basic"
              summary="A compact text-link Footer for a few supporting destinations."
              tryIt="Tab through Privacy and Accessibility, then render the empty-links boundary and resize the populated example."
              articleClassName="rounded-none border-0 p-0 sm:p-0"
              exampleClassName="p-0 sm:p-0"
              supplemental={basicSupplemental}
            >
              <Footer
                copyright={<>© 2026 Tommy Truong</>}
                links={[
                  { href: '/privacy', label: 'Privacy' },
                  { href: '/accessibility', label: 'Accessibility' },
                ]}
              />
            </ExampleVariation>
            <ExampleVariation
              title="External link"
              summary="An explicitly external supporting destination keeps its label and new-window announcement."
              tryIt="Inspect the external attributes and accessible name, then resize until the link wraps."
              articleClassName="rounded-none border-0 p-0 sm:p-0"
              exampleClassName="p-0 sm:p-0"
              supplemental={externalSupplemental}
            >
              <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
            </ExampleVariation>
            <ExampleVariation
              title="Long labels and wrapping"
              summary="Realistic long labels remain content-driven and wrap safely inside the guide column."
              tryIt="Resize to the narrowest supported width, enlarge text to 200%, and tab through every link."
              articleClassName="rounded-none border-0 p-0 sm:p-0"
              exampleClassName="p-0 sm:p-0"
              supplemental={wrappingSupplemental}
            >
              <Footer
                copyright={
                  <>
                    © 2026 Tommy Truong — Application Delivery Kit accessibility and documentation
                  </>
                }
                links={[
                  { href: '/privacy', label: 'Privacy and data practices' },
                  { href: '/accessibility', label: 'Accessibility statement' },
                  { href: '/components/user-interface', label: 'Component documentation' },
                ]}
              />
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsFooterPage }
