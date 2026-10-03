/**
 * Shared contract tabs for the focused layout composition examples.
 *
 * The decision guides explain when to choose a layout. These contracts explain
 * how the live composition is assembled and how a team can evaluate it.
 */
import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type LayoutVariant = 'header-only' | 'secondary' | 'sidebar' | 'full'

type Guidance = {
  explanation: string
  doItems: string[]
  dontItems: string[]
  considerations: string[]
}

type RequirementGroup = { id: string; title: string; items: string[] }
type Criterion = {
  id: string
  requirementRefs: string[]
  given: string
  when: string
  then: string
  and: string[]
}
type VerificationCase = {
  id: string
  criterionRefs: string[]
  role: string
  title: string
  steps: string[]
  expected: string
}
type VerificationScenario = { id: string; title: string; cases: VerificationCase[] }
type Contract = {
  userStory: string
  guidance: Guidance
  requirements: RequirementGroup[]
  criteria: Criterion[]
  verification: VerificationScenario[]
  source: string
  html: string
}

const labels: Record<LayoutVariant, string> = {
  'header-only': 'Header Only',
  secondary: 'Secondary',
  sidebar: 'Sidebar',
  full: 'Full',
}

const sharedGuidance = (
  explanation: string,
  doItems: string[],
  dontItems: string[],
  considerations: string[],
): Guidance => ({
  explanation,
  doItems,
  dontItems,
  considerations,
})

const headerHtml = `<header data-slot="header" data-scrolled="false" data-size="contained">
  <div data-slot="container" data-size="2xl">
    <a href="/">Application Delivery Kit</a>
    <nav aria-label="Global navigation">
      <button type="button" aria-haspopup="true" aria-expanded="false">Components</button>
      <button type="button" aria-haspopup="true" aria-expanded="false">Examples</button>
    </nav>
    <button type="button" aria-label="Open navigation menu" aria-expanded="false">Open navigation menu</button>
  </div>
</header>`

const footerHtml = `<footer data-slot="footer" data-size="contained">
  <div data-slot="container" data-size="2xl">
    <div>© 2026 Tommy Truong</div>
    <nav aria-label="Footer">
      <a href="https://github.com/RealityTommy/application-delivery-kit" target="_blank" rel="noopener noreferrer">GitHub<span class="sr-only"> (opens in new window)</span></a>
    </nav>
  </div>
</footer>`

const cardHtml = Array.from(
  { length: 6 },
  (_, index) => `<div data-slot="card" data-size="default">
  <div data-slot="card-header">
    <div data-slot="card-title">Content ${index + 1}</div>
  </div>
  <div data-slot="card-content">
    <p>Placeholder content demonstrating the card body area.</p>
  </div>
</div>`,
).join('\n')

function pageMainHtml(title: string, purpose: string): string {
  return `<main id="main-content" tabindex="-1" data-slot="main" data-size="contained">
  <div data-slot="container" data-size="2xl">
    <div>
      <section aria-labelledby="${title.toLowerCase().replaceAll(' ', '-')}-example-heading">
        <p>Interactive example</p>
        <h1 id="${title.toLowerCase().replaceAll(' ', '-')}-example-heading">${title}</h1>
        <p>${purpose}</p>
      </section>
      <section aria-labelledby="${title.toLowerCase().replaceAll(' ', '-')}-inspect-heading">
        <h2 id="${title.toLowerCase().replaceAll(' ', '-')}-inspect-heading">What to look for</h2>
        <ul>
          <li>Can a person understand the page purpose as soon as it opens?</li>
          <li>Does the navigation structure remain understandable as content grows?</li>
          <li>Can a person use the layout at a narrow viewport?</li>
        </ul>
        <p><strong>Watch for:</strong> Replace this sample content with representative production content before approving the layout.</p>
        <p>For the full decision guidance, open the <a href="/examples/layouts/${title.toLowerCase().replaceAll(' ', '-')}">detail guide</a>.</p>
      </section>
      <section aria-labelledby="${title.toLowerCase().replaceAll(' ', '-')}-example-content-heading">
        <h2 id="${title.toLowerCase().replaceAll(' ', '-')}-example-content-heading">Example content</h2>
        <p>This content is intentionally simple. Replace it with representative production content when evaluating width, hierarchy, navigation density, reading order, and responsive behavior.</p>
        <div data-slot="columns" data-responsive="viewport" data-cols-base="1" data-cols-sm="2" data-cols-lg="3">
          ${cardHtml}
        </div>
      </section>
    </div>
  </div>
</main>`
}

const headerOnlyHtml = `${headerHtml}
${pageMainHtml('Header Only', 'Inspect the smallest complete shell and confirm that Main can provide enough orientation without contextual navigation.')}
${footerHtml}`

const secondaryHtml = `${headerHtml}
<nav aria-label="Example sections">
  <a href="/layouts/secondary" aria-current="page">Overview</a>
  <a href="/layouts/secondary#example-content-heading">Example content</a>
  <a href="/examples/layouts/secondary">Decision guide</a>
</nav>
${pageMainHtml('Secondary', 'Inspect a short set of peer destinations and verify that the row remains understandable, usable, and distinguishable from primary navigation.')}
${footerHtml}`

const sidebarHtml = `${headerHtml}
<aside data-slot="sidebar" data-size="default">
  <nav aria-label="Example pages">
    <a href="/layouts/sidebar" aria-current="page">Overview</a>
    <div data-slot="nav-group">
      <h2>Explore this example</h2>
      <a href="/layouts/sidebar#sidebar-inspect-heading">What to look for</a>
      <a href="/layouts/sidebar#example-content-heading">Example content</a>
    </div>
    <div data-slot="nav-group">
      <h2>Continue</h2>
      <a href="/examples/layouts/sidebar">Decision guide</a>
    </div>
  </nav>
</aside>
${pageMainHtml('Sidebar', 'Inspect a grouped section map beside Main and test whether the navigation helps orientation without stealing too much content width.')}
${footerHtml}`

const fullHtml = `${headerHtml}
<nav aria-label="Example sections">
  <a href="/layouts/full" aria-current="page">Overview</a>
  <a href="/layouts/full#example-content-heading">Example content</a>
  <a href="/examples/layouts/full">Decision guide</a>
</nav>
<aside data-slot="sidebar" data-size="default">
  <nav aria-label="Example pages">
    <a href="/layouts/full" aria-current="page">Overview</a>
    <div data-slot="nav-group">
      <h2>Explore this example</h2>
      <a href="/layouts/full#full-inspect-heading">What to look for</a>
      <a href="/layouts/full#example-content-heading">Example content</a>
    </div>
    <div data-slot="nav-group">
      <h2>Continue</h2>
      <a href="/examples/layouts/full">Decision guide</a>
    </div>
  </nav>
</aside>
${pageMainHtml('Full', 'Inspect the combined shell and verify that the section row and Sidebar have genuinely different jobs.')}
${footerHtml}`

const contracts: Record<LayoutVariant, Contract> = {
  'header-only': {
    userStory:
      'As an application team, I want to compose a focused page shell so that the page has clear global navigation, one primary Main region, and supporting footer content without inventing contextual navigation.',
    guidance: sharedGuidance(
      'This example is the smallest complete shell. Use it to evaluate whether the page can provide orientation through its heading, content structure, and task flow rather than through another persistent navigation layer.',
      [
        'Keep global destinations in Header and page purpose in Main.',
        'Use the production shell primitives so skip-link, landmark, focus, and responsive behavior remain shared.',
        'Replace the sample cards with realistic content before making a layout decision.',
      ],
      [
        'Do not put page-specific navigation into the global Header to fill the available space.',
        'Do not treat the absence of a Sidebar as permission to remove headings, landmarks, or a clear next step.',
        'Do not use this example to prove how a growing section navigation system will behave.',
      ],
      [
        'The consuming application owns route matching and the active destination.',
        'At narrow widths, the Header navigation moves into the shared mobile navigation; Main remains the primary reading region.',
        'A Footer supports the page but should not become a second primary navigation system.',
      ],
    ),
    requirements: [
      {
        id: 'REQ-HO-01',
        title: 'Shell structure',
        items: [
          'Provide SkipLink, Header, Main, and Footer in a coherent page shell.',
          'Keep one primary Main region for the page task and content.',
        ],
      },
      {
        id: 'REQ-HO-02',
        title: 'Navigation and semantics',
        items: [
          'Give global navigation a clear accessible name and use real links.',
          'Keep one clear h1 in Main and preserve visible focus for interactive elements.',
        ],
      },
      {
        id: 'REQ-HO-03',
        title: 'Responsive behavior',
        items: [
          'Move global navigation into the shared mobile navigation at narrow widths.',
          'Keep Main readable without horizontal scrolling or a second page-specific navigation system.',
        ],
      },
    ],
    criteria: [
      {
        id: 'CRIT-HO-01',
        requirementRefs: ['REQ-HO-01'],
        given: 'the Header Only example is rendered',
        when: 'a person uses the skip link',
        then: 'focus moves to the Main landmark',
        and: [
          'Main remains the primary content region.',
          'Header and Footer remain outside the page content reading flow.',
        ],
      },
      {
        id: 'CRIT-HO-02',
        requirementRefs: ['REQ-HO-02'],
        given: 'the page is rendered with the sample navigation',
        when: 'a person inspects the document structure',
        then: 'the page exposes one clear h1 and a named global navigation landmark',
        and: [
          'links and buttons have visible focus styles.',
          'navigation state is not communicated by color alone.',
        ],
      },
      {
        id: 'CRIT-HO-03',
        requirementRefs: ['REQ-HO-03'],
        given: 'the viewport becomes narrow',
        when: 'a person opens the mobile navigation',
        then: 'the global navigation remains available in the shared mobile menu',
        and: [
          'the menu has a clear accessible label.',
          'the page content does not require horizontal scrolling.',
        ],
      },
    ],
    verification: [
      {
        id: 'VER-HO-01',
        title: 'Focused shell and responsive navigation',
        cases: [
          {
            id: 'CASE-HO-01',
            criterionRefs: ['CRIT-HO-01'],
            role: 'Functional QA',
            title: 'Skip-link destination',
            steps: [
              'Open `/layouts/header-only`.',
              'Activate the Skip to content link with the keyboard.',
              'Inspect the focused element.',
            ],
            expected:
              'Focus moves to `main#main-content`, and the Main content is ready to read or operate.',
          },
          {
            id: 'CASE-HO-02',
            criterionRefs: ['CRIT-HO-02'],
            role: 'Accessibility QA',
            title: 'Landmarks and focus',
            steps: [
              'Use the accessibility tree or DOM inspector.',
              'Tab through the Header links, Main links, and Footer links.',
            ],
            expected:
              'The page has one clear heading hierarchy, named navigation, and a visible focus indicator for each interactive target.',
          },
          {
            id: 'CASE-HO-03',
            criterionRefs: ['CRIT-HO-03'],
            role: 'Responsive QA',
            title: 'Mobile global navigation',
            steps: [
              'Set a narrow viewport.',
              'Open the Header mobile menu.',
              'Tab through its links and close it.',
            ],
            expected:
              'Global links remain available, focus stays usable, and the menu closes without leaving duplicate or unreachable navigation content.',
          },
        ],
      },
    ],
    source: `import { Footer } from '@/components/layout/footer'\nimport { Header, SkipLink } from '@/components/layout/header'\nimport { Main } from '@/components/layout/main'\nimport { PageShell } from '@/components/layout/page-shell'

<PageShell>
  <SkipLink />
  <Header logo={logo} nav={globalNavigation} />
  <Main>
    <h1>Page title</h1>
    {/* Page-specific content belongs in Main. */}
  </Main>
  <Footer links={footerLinks} />
</PageShell>`,
    html: headerOnlyHtml,
  },
  secondary: {
    userStory:
      'As an application team, I want to expose a short set of peer destinations above Main so that people can move within a small section without introducing a deeper navigation hierarchy.',
    guidance: sharedGuidance(
      'This example demonstrates a flat section-navigation row. It is appropriate only when the destinations are true peers and the set can remain short, understandable, and usable as labels or permissions change.',
      [
        'Give the row its own navigation name and keep it separate from the page heading.',
        'Provide explicit current-route input so the consuming application controls active state.',
        'Test long labels, removed links, localization, and the narrow-screen replacement before adopting the pattern.',
      ],
      [
        'Do not use a flat row for grouped or multi-level information architecture.',
        'Do not rely on color or position alone to show the current page.',
        'Do not assume a desktop row is automatically usable on a small screen.',
      ],
      [
        'The example composes `TabNavigation` above Main and the shared mobile navigation for the example shell.',
        'The application owns route changes; the navigation component exposes links and current-state input.',
        'If the row cannot remain short, revisit Sidebar or another pattern instead of adding exceptions.',
      ],
    ),
    requirements: [
      {
        id: 'REQ-SE-01',
        title: 'Section navigation',
        items: [
          'Provide a distinct, named section-navigation landmark above Main.',
          'Represent the section destinations as real peer links with an explicit current-page state.',
        ],
      },
      {
        id: 'REQ-SE-02',
        title: 'Page relationship',
        items: [
          'Keep the section navigation separate from the page h1 and Main content.',
          'Preserve logical link order and visible focus when the navigation changes presentation.',
        ],
      },
      {
        id: 'REQ-SE-03',
        title: 'Responsive behavior',
        items: [
          'Keep the section destinations available through the shared mobile navigation at narrow widths.',
          'Ensure labels remain understandable without horizontal scrolling or duplicate competing navigation.',
        ],
      },
    ],
    criteria: [
      {
        id: 'CRIT-SE-01',
        requirementRefs: ['REQ-SE-01'],
        given: 'the Secondary example is rendered',
        when: 'a person inspects the section navigation',
        then: 'it has its own accessible name and exposes the peer destinations as links',
        and: [
          'the configured current destination exposes `aria-current="page"`.',
          'the page h1 remains in Main rather than becoming the navigation label.',
        ],
      },
      {
        id: 'CRIT-SE-02',
        requirementRefs: ['REQ-SE-02'],
        given: 'a person moves through the page with a keyboard',
        when: 'focus enters and leaves the section navigation',
        then: 'links follow their visual and reading order',
        and: [
          'each focused link has a visible indicator.',
          'Main remains the next meaningful content region.',
        ],
      },
      {
        id: 'CRIT-SE-03',
        requirementRefs: ['REQ-SE-03'],
        given: 'the viewport becomes narrow',
        when: 'a person opens the shared mobile navigation',
        then: 'the section destinations remain available in a labelled contextual group',
        and: [
          'the current destination remains identifiable.',
          'the desktop row does not remain as a duplicate inaccessible navigation.',
        ],
      },
    ],
    verification: [
      {
        id: 'VER-SE-01',
        title: 'Peer navigation and narrow layout',
        cases: [
          {
            id: 'CASE-SE-01',
            criterionRefs: ['CRIT-SE-01'],
            role: 'Functional QA',
            title: 'Current section destination',
            steps: [
              'Open `/layouts/secondary`.',
              'Inspect the section navigation links and current route state.',
              'Activate a peer destination.',
            ],
            expected:
              'The selected link navigates to its configured destination, and the consuming application can expose the resulting route as `aria-current="page"`.',
          },
          {
            id: 'CASE-SE-02',
            criterionRefs: ['CRIT-SE-02'],
            role: 'Accessibility QA',
            title: 'Section row keyboard order',
            steps: [
              'Press Tab from the Header through the section navigation.',
              'Activate a section link with Enter.',
              'Continue into Main.',
            ],
            expected:
              'Focus is visible, follows the visual order, and reaches Main without skipping the section navigation or trapping focus.',
          },
          {
            id: 'CASE-SE-03',
            criterionRefs: ['CRIT-SE-03'],
            role: 'Responsive QA',
            title: 'Mobile contextual group',
            steps: [
              'Set a narrow viewport.',
              'Open the mobile navigation.',
              'Find the contextual section group and activate one link.',
            ],
            expected:
              'The contextual links are grouped and labelled, the drawer closes after navigation, and the destination receives focus through the application shell.',
          },
        ],
      },
    ],
    source: `import { Header } from '@/components/layout/header'\nimport { LayoutProvider } from '@/components/layout/layout-provider'\nimport { Main } from '@/components/layout/main'\nimport { TabNavigation } from '@/components/layout/tab-navigation'

<LayoutProvider
  tabNavigation={sectionLinks}
  tabNavigationLabel="Example sections"
  activeHref={currentHref}
>
  <Header nav={globalNavigation} />
  <TabNavigation aria-label="Example sections" />
  <Main>
    <h1>Section page</h1>
  </Main>
</LayoutProvider>`,
    html: secondaryHtml,
  },
  sidebar: {
    userStory:
      'As an application team, I want to keep grouped section navigation beside Main so that people can understand where they are while reading or completing work in a larger area.',
    guidance: sharedGuidance(
      'This example demonstrates a grouped, persistent section map. Evaluate whether the groups reflect the reader’s mental model and whether Main retains enough width for the actual content.',
      [
        'Group destinations by user-facing purpose and give the Sidebar a distinct accessible name.',
        'Keep navigation data-driven so labels, permissions, and current state can change without rewriting page markup.',
        'Test deep links, long labels, localization, and the mobile drawer with realistic content.',
      ],
      [
        'Do not turn the Sidebar into a list of every possible destination.',
        'Do not let visual indentation carry the only meaning of groups.',
        'Do not preserve a desktop Sidebar as hidden, duplicate content when the mobile menu is the active replacement.',
      ],
      [
        'Main remains first in the logical page reading order even when Sidebar appears beside it visually.',
        'The consuming application owns route matching, permission filtering, and current-state input.',
        'The mobile presentation must preserve group labels and link order rather than flattening the information architecture.',
      ],
    ),
    requirements: [
      {
        id: 'REQ-SB-01',
        title: 'Grouped navigation',
        items: [
          'Provide a named Sidebar with meaningful groups and real destination links.',
          'Expose current-page state without relying on visual indentation or color alone.',
        ],
      },
      {
        id: 'REQ-SB-02',
        title: 'Content relationship',
        items: [
          'Keep Main as the primary reading and task region.',
          'Preserve an understandable relationship between the Sidebar, its groups, and the current page.',
        ],
      },
      {
        id: 'REQ-SB-03',
        title: 'Responsive behavior',
        items: [
          'Replace the desktop Sidebar with a labelled mobile navigation group at narrow widths.',
          'Preserve group boundaries, link order, focus management, and dismissal behavior.',
        ],
      },
    ],
    criteria: [
      {
        id: 'CRIT-SB-01',
        requirementRefs: ['REQ-SB-01'],
        given: 'the Sidebar example is rendered',
        when: 'a person inspects the navigation',
        then: 'the Sidebar has a distinct accessible name and grouped destinations',
        and: [
          'the current destination is communicated semantically.',
          'group meaning remains understandable without indentation alone.',
        ],
      },
      {
        id: 'CRIT-SB-02',
        requirementRefs: ['REQ-SB-02'],
        given: 'the page is read or operated with a keyboard or assistive technology',
        when: 'the person moves from navigation into content',
        then: 'Main is a coherent primary region',
        and: [
          'the visual Sidebar relationship does not create an illogical reading order.',
          'focus remains visible and does not become clipped.',
        ],
      },
      {
        id: 'CRIT-SB-03',
        requirementRefs: ['REQ-SB-03'],
        given: 'the viewport becomes narrow',
        when: 'a person opens the mobile navigation',
        then: 'Sidebar destinations appear in a labelled contextual group',
        and: [
          'group boundaries and link order are preserved.',
          'the drawer closes and focus is restored or moved to the resulting Main content after navigation.',
        ],
      },
    ],
    verification: [
      {
        id: 'VER-SB-01',
        title: 'Grouped section map and mobile replacement',
        cases: [
          {
            id: 'CASE-SB-01',
            criterionRefs: ['CRIT-SB-01'],
            role: 'Functional QA',
            title: 'Grouped destinations and current page',
            steps: [
              'Open `/layouts/sidebar`.',
              'Inspect the Sidebar name, groups, links, and current destination.',
              'Activate a destination link.',
            ],
            expected:
              'Groups and links are understandable, the destination is reachable, and the application can update the current-page state after navigation.',
          },
          {
            id: 'CASE-SB-02',
            criterionRefs: ['CRIT-SB-02'],
            role: 'Accessibility QA',
            title: 'Sidebar-to-Main reading order',
            steps: [
              'Use the accessibility tree and keyboard Tab sequence.',
              'Move through the Header, Sidebar, Main, and Footer.',
            ],
            expected:
              'Landmarks have useful names, focus is visible, and the reading order gives Main a coherent primary position.',
          },
          {
            id: 'CASE-SB-03',
            criterionRefs: ['CRIT-SB-03'],
            role: 'Responsive QA',
            title: 'Mobile Sidebar group',
            steps: [
              'Set a narrow viewport.',
              'Open the mobile navigation.',
              'Expand or inspect the contextual group, then activate a destination.',
            ],
            expected:
              'The mobile group preserves the Sidebar hierarchy, the drawer closes after selection, and the resulting page receives the expected focus.',
          },
        ],
      },
    ],
    source: `import { Main } from '@/components/layout/main'\nimport { PageBody } from '@/components/layout/page-body'\nimport { Sidebar } from '@/components/layout/sidebar'

<PageBody>
  <Sidebar
    aria-label="Example pages"
    items={sidebarItems}
    activeHref={currentHref}
  />
  <Main>
    <h1>Section page</h1>
  </Main>
</PageBody>`,
    html: sidebarHtml,
  },
  full: {
    userStory:
      'As an application team, I want to combine peer-level and grouped contextual navigation only when both layers have distinct jobs so that a complex area remains understandable without making every page unnecessarily heavy.',
    guidance: sharedGuidance(
      'This example combines Secondary and Sidebar. It is an architectural commitment, not a visual preset: each layer must answer a different navigation need and both must remain understandable as the product changes.',
      [
        'Name the responsibility of each navigation layer before implementation.',
        'Keep both layers data-driven and test them together with realistic depth, labels, permissions, and localization.',
        'Protect Main’s width and hierarchy so navigation supports the task rather than competing with it.',
      ],
      [
        'Do not add the second layer when one contextual navigation pattern is sufficient.',
        'Do not repeat the same destinations in both layers without a clear reason.',
        'Do not leave mobile users to reconstruct two desktop navigation systems from unrelated or duplicate menus.',
      ],
      [
        'Secondary communicates peer-level movement; Sidebar communicates deeper grouped orientation.',
        'The consuming application owns route matching, active state, permissions, analytics, and content growth.',
        'The mobile replacement must preserve both responsibilities without exposing confusing duplicate landmarks.',
      ],
    ),
    requirements: [
      {
        id: 'REQ-FU-01',
        title: 'Distinct navigation layers',
        items: [
          'Provide named Secondary and Sidebar landmarks with different responsibilities.',
          'Keep peer-level and grouped destinations understandable and non-redundant.',
        ],
      },
      {
        id: 'REQ-FU-02',
        title: 'Main content priority',
        items: [
          'Keep one clear h1 and Main region as the primary task and reading area.',
          'Preserve visible focus, current-page state, and logical reading order across both layers.',
        ],
      },
      {
        id: 'REQ-FU-03',
        title: 'Responsive behavior',
        items: [
          'Provide a labelled mobile replacement for both contextual navigation responsibilities.',
          'Preserve hierarchy, avoid duplicate competing links, and support dismissal and focus movement.',
        ],
      },
    ],
    criteria: [
      {
        id: 'CRIT-FU-01',
        requirementRefs: ['REQ-FU-01'],
        given: 'the Full example is rendered',
        when: 'a person inspects its contextual navigation',
        then: 'Secondary and Sidebar have distinct accessible names and jobs',
        and: [
          'peer destinations are not confused with grouped destinations.',
          'current state is communicated in each applicable navigation context.',
        ],
      },
      {
        id: 'CRIT-FU-02',
        requirementRefs: ['REQ-FU-02'],
        given: 'a person reads or operates the page',
        when: 'focus and attention move through both navigation layers into Main',
        then: 'Main remains the primary task region',
        and: [
          'the reading order is coherent.',
          'focus indicators and current state remain visible and understandable.',
        ],
      },
      {
        id: 'CRIT-FU-03',
        requirementRefs: ['REQ-FU-03'],
        given: 'the viewport becomes narrow',
        when: 'a person opens the mobile navigation',
        then: 'both contextual responsibilities remain available through labelled groups',
        and: [
          'the groups do not create confusing duplicate destinations.',
          'selection closes the drawer and moves focus according to the shared shell behavior.',
        ],
      },
    ],
    verification: [
      {
        id: 'VER-FU-01',
        title: 'Combined contextual navigation',
        cases: [
          {
            id: 'CASE-FU-01',
            criterionRefs: ['CRIT-FU-01'],
            role: 'Functional QA',
            title: 'Distinct navigation responsibilities',
            steps: [
              'Open `/layouts/full`.',
              'Inspect the Secondary row and Sidebar groups.',
              'Compare their labels, destinations, and current-state treatment.',
            ],
            expected:
              'Each layer has a distinct purpose, and the example does not rely on unexplained duplicate destinations.',
          },
          {
            id: 'CASE-FU-02',
            criterionRefs: ['CRIT-FU-02'],
            role: 'Accessibility QA',
            title: 'Landmarks and focus sequence',
            steps: [
              'Use the accessibility tree.',
              'Tab from Header through contextual navigation into Main.',
              'Inspect focus indicators and the page heading.',
            ],
            expected:
              'Landmarks are named distinctly, the sequence is understandable, Main remains primary, and focus is visible.',
          },
          {
            id: 'CASE-FU-03',
            criterionRefs: ['CRIT-FU-03'],
            role: 'Responsive QA',
            title: 'Mobile contextual hierarchy',
            steps: [
              'Set a narrow viewport.',
              'Open the mobile navigation.',
              'Inspect both contextual groups and activate a destination.',
            ],
            expected:
              'Both navigation responsibilities remain findable without confusing duplication; the drawer dismisses and focus follows the shared navigation behavior.',
          },
        ],
      },
    ],
    source: `import { Header } from '@/components/layout/header'\nimport { LayoutProvider } from '@/components/layout/layout-provider'\nimport { Main } from '@/components/layout/main'\nimport { PageBody } from '@/components/layout/page-body'\nimport { Sidebar } from '@/components/layout/sidebar'\nimport { TabNavigation } from '@/components/layout/tab-navigation'

<LayoutProvider tabNavigation={sectionLinks} activeHref={currentHref}>
  <Header nav={globalNavigation} />
  <TabNavigation aria-label="Example sections" />
  <PageBody>
    <Sidebar aria-label="Example pages" items={sidebarItems} />
    <Main>
      <h1>Section page</h1>
    </Main>
  </PageBody>
</LayoutProvider>`,
    html: fullHtml,
  },
}

function GuidancePanel({ guidance }: { guidance: Guidance }) {
  return (
    <div className="space-y-6 text-muted-foreground">
      <p className="leading-7">{guidance.explanation}</p>
      <div>
        <h4 className="font-semibold text-foreground">Considerations</h4>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          {guidance.considerations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="font-semibold text-foreground">Do</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            {guidance.doItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Don&apos;t</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            {guidance.dontItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function RequirementsPanel({ contract }: { contract: Contract }) {
  return (
    <div className="space-y-8 text-muted-foreground">
      <p className="leading-7">
        <strong className="text-foreground">User story:</strong> {contract.userStory}
      </p>
      {contract.requirements.map((group) => (
        <section key={group.id}>
          <h4 className="font-semibold text-foreground">
            {group.title} <code className="ml-2 text-sm">{group.id}</code>
          </h4>
          <ol className="mt-3 list-decimal space-y-3 pl-5 leading-7">
            {group.items.map((item, index) => (
              <li key={item} className="pl-2">
                <code className="mr-2 text-sm">
                  {group.id}-{String(index + 1).padStart(2, '0')}
                </code>
                {item}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}

function CriteriaPanel({ contract }: { contract: Contract }) {
  return (
    <div className="space-y-6 text-muted-foreground">
      <p className="leading-7">
        <strong className="text-foreground">User story:</strong> {contract.userStory}
      </p>
      <ol className="list-decimal space-y-5 pl-5 leading-7">
        {contract.criteria.map((criterion) => (
          <li key={criterion.id} className="pl-2">
            <code className="text-sm font-medium text-foreground">{criterion.id}</code>
            <span className="ml-3 text-sm">Satisfies: {criterion.requirementRefs.join(', ')}</span>
            <div className="mt-2">
              <strong className="text-foreground">Given</strong> {criterion.given}
            </div>
            <ol type="a" className="mt-2 list-[lower-alpha] space-y-2 pl-6">
              <li>
                <strong className="text-foreground">When</strong> {criterion.when}
              </li>
              <li>
                <strong className="text-foreground">Then</strong> {criterion.then}
              </li>
              {criterion.and.map((statement) => (
                <li key={statement}>
                  <strong className="text-foreground">And</strong> {statement}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  )
}

function VerificationPanel({
  scenarios,
  idPrefix,
}: {
  scenarios: VerificationScenario[]
  idPrefix: string
}) {
  return (
    <div className="space-y-8 text-muted-foreground">
      {scenarios.map((scenario) => (
        <section key={scenario.id} aria-labelledby={`${idPrefix}-${scenario.id}`}>
          <h4 id={`${idPrefix}-${scenario.id}`} className="font-semibold text-foreground">
            {scenario.title} <code className="ml-2 text-sm">{scenario.id}</code>
          </h4>
          <div className="mt-5 space-y-8">
            {scenario.cases.map((testCase) => (
              <article key={testCase.id} className="space-y-4">
                <h5 className="font-medium text-foreground">
                  {testCase.title} <code className="ml-2 text-sm">{testCase.id}</code>
                </h5>
                <p className="text-sm">
                  Primary role: {testCase.role} · Verifies: {testCase.criterionRefs.join(', ')}
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  {testCase.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="border-l-2 border-primary/40 pl-4 leading-7">
                  <strong className="font-medium text-foreground">Expected result:</strong>{' '}
                  {testCase.expected}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function CodePanel({ contract }: { contract: Contract }) {
  return (
    <div className="space-y-8">
      <section>
        <h4 className="font-semibold text-foreground">Application Delivery Kit composition</h4>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          This is the smallest useful composition for the pattern. The complete maintained example
          remains in the shared layout example source.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6 text-foreground">
          <code>{contract.source}</code>
        </pre>
      </section>
      <section>
        <h4 className="font-semibold text-foreground">Complete rendered HTML structure</h4>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          This shows the meaningful landmark and relationship structure to preserve when adapting
          the composition.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6 text-foreground">
          <code>{contract.html}</code>
        </pre>
      </section>
    </div>
  )
}

export function LayoutExampleContract({ variant }: { variant: LayoutVariant }) {
  const contract = contracts[variant]
  const idPrefix = React.useId().replaceAll(':', '')
  const tabs = {
    guidance: `${idPrefix}-guidance`,
    requirements: `${idPrefix}-requirements`,
    criteria: `${idPrefix}-criteria`,
    verification: `${idPrefix}-verification`,
    code: `${idPrefix}-code`,
  }
  return (
    <section className="space-y-6" aria-labelledby={`${idPrefix}-heading`}>
      <div className="space-y-2">
        <h2 id={`${idPrefix}-heading`} className="text-2xl font-semibold tracking-tight">
          How to build and verify this layout
        </h2>
        <p className="leading-7 text-muted-foreground">
          Use the tabs to understand the composition, define what must be true, and run the checks
          for the {labels[variant]} example.
        </p>
      </div>
      <Tabs defaultSelectedKey={tabs.guidance} className="min-w-0 gap-2">
        <TabsList aria-label={`${labels[variant]} contract`} className="max-w-full flex-wrap">
          <TabsTrigger id={tabs.guidance}>Guidance</TabsTrigger>
          <TabsTrigger id={tabs.requirements}>Requirements</TabsTrigger>
          <TabsTrigger id={tabs.criteria}>Criteria</TabsTrigger>
          <TabsTrigger id={tabs.verification}>Verification</TabsTrigger>
          <TabsTrigger id={tabs.code}>Code</TabsTrigger>
        </TabsList>
        <div className="rounded-lg border bg-card p-4 sm:p-6">
          <TabsContent id={tabs.guidance}>
            <GuidancePanel guidance={contract.guidance} />
          </TabsContent>
          <TabsContent id={tabs.requirements}>
            <RequirementsPanel contract={contract} />
          </TabsContent>
          <TabsContent id={tabs.criteria}>
            <CriteriaPanel contract={contract} />
          </TabsContent>
          <TabsContent id={tabs.verification}>
            <VerificationPanel scenarios={contract.verification} idPrefix={idPrefix} />
          </TabsContent>
          <TabsContent id={tabs.code}>
            <CodePanel contract={contract} />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}

export type { LayoutVariant }
