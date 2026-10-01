import type { PageContract } from '@/components/layout/page-contract'

function areaContract(area: string, purpose: string, linkExpectation: string): PageContract {
  return {
    userStory: `As a person using the ${area} area, I want the page to explain ${purpose} and provide trustworthy links to the right next page so that I can choose, inspect, and verify the correct example without guessing.`,
    requirements: [
      `The ${area} page shall state its purpose in plain language and explain the boundary of the content it contains.`,
      'The page shall present every listed destination with a visible, specific label and a real registered route.',
      `The page shall make the next action clear: ${linkExpectation}.`,
      'The page shall preserve heading hierarchy, landmark structure, reading order, visible focus, keyboard reachability, and readable content at narrow widths and increased zoom.',
      'The page shall not claim behavior, examples, or routes that are not present in the current application.',
    ],
    criteria: [
      {
        id: `PAGE-${area.toUpperCase().replaceAll(' ', '-')}-01`,
        given: `a person opens the ${area} page`,
        when: 'the page finishes rendering',
        then: 'the page has one clear main heading and a plain-language explanation of its purpose',
        and: [
          'the visible page title matches the navigation label',
          'the first paragraph tells the person what they can do next',
        ],
      },
      {
        id: `PAGE-${area.toUpperCase().replaceAll(' ', '-')}-02`,
        given: 'the person reviews the page links',
        when: 'they read each link label and activate a link',
        then: 'each link leads to the intended registered destination',
        and: [
          'the label describes the destination',
          'the browser does not show a dead route or unexpected not-found page',
          'the original page remains usable when the link opens a new tab',
        ],
      },
      {
        id: `A11Y-${area.toUpperCase().replaceAll(' ', '-')}-01`,
        given: 'the person uses a keyboard or assistive technology',
        when: 'they move through headings, links, and navigation landmarks',
        then: 'the content can be understood and operated without a pointer',
        and: [
          'focus is visible',
          'headings and landmarks follow a logical order',
          'meaning is not conveyed by color alone',
        ],
      },
      {
        id: `RESP-${area.toUpperCase().replaceAll(' ', '-')}-01`,
        given: 'the person uses a narrow viewport or increased browser zoom',
        when: 'they scroll through the complete page and activate a destination',
        then: 'all text and controls remain readable and reachable',
        and: [
          'no content is clipped or overlapped',
          'the page does not require unintended horizontal scrolling',
        ],
      },
      {
        id: `NEG-${area.toUpperCase().replaceAll(' ', '-')}-01`,
        given: 'a person looks for a destination or claim that is not provided by the page',
        when: 'they inspect the complete page',
        then: 'the page does not imply that missing destination or behavior exists',
        and: [
          'there are no placeholder links',
          'the page identifies the correct neighboring guide instead of duplicating its content',
        ],
      },
    ],
    verification: [
      {
        id: `PAGE-${area.toUpperCase().replaceAll(' ', '-')}-CONTENT`,
        title: 'Purpose and destination coverage',
        cases: [
          {
            id: `PAGE-${area.toUpperCase().replaceAll(' ', '-')}-CONTENT-01`,
            title: 'Read the page as a first-time visitor',
            steps: [
              'Open the route in a fresh browser tab.',
              'Read the main heading and opening explanation.',
              'Read every visible destination label.',
              'Activate each destination and return to the page.',
            ],
            expected: `The ${area} page explains its purpose, every destination is specific and reachable, and the available next step is clear without requiring prior product knowledge.`,
          },
        ],
      },
      {
        id: `PAGE-${area.toUpperCase().replaceAll(' ', '-')}-A11Y`,
        title: 'Keyboard, zoom, and responsive review',
        cases: [
          {
            id: `PAGE-${area.toUpperCase().replaceAll(' ', '-')}-A11Y-01`,
            title: 'Scan the complete page',
            steps: [
              'Use Tab from the start of the page.',
              'Check every focus indicator.',
              'Increase browser zoom and repeat the scan.',
              'Set the narrowest supported viewport and scroll through all content.',
              'Look for clipping, overlap, unreadable text, or horizontal scrolling.',
            ],
            expected:
              'The page remains understandable and operable, focus is visible, every destination is reachable, and no content is clipped, overlapped, or hidden by the layout.',
          },
        ],
      },
    ],
  }
}

export const homeContract = areaContract(
  'home',
  'what the Application Delivery Kit provides and where to begin',
  'choose a component or layout guide that matches the work you need to do',
)
export const userInterfaceContract = areaContract(
  'User Interface',
  'how to find guides for reusable shell and presentation components',
  'choose the guide whose component job matches the interface decision',
)
export const interactionContract = areaContract(
  'Interaction',
  'how to find guides for controls and interaction patterns',
  'choose the guide that matches the user action and state you need to support',
)
export const formsContract = areaContract(
  'Forms',
  'how to choose the correct form control guide and understand its data, state, and accessibility responsibilities',
  'choose the control guide that matches the value or decision the person must provide',
)
export const layoutsContract = areaContract(
  'Layouts',
  'how to compare complete page-shell patterns before committing to one',
  'open a decision guide and then inspect its matching interactive example',
)

export const notFoundContract: PageContract = {
  userStory:
    'As a person who reaches an unknown URL, I want a clear explanation and a reliable way home so that I can recover without guessing or becoming trapped.',
  requirements: [
    'The not-found page shall identify that the requested path does not match a registered route.',
    'The page shall display the unknown path in a readable, non-ambiguous way.',
    'The page shall provide a real, keyboard-operable link to the home route.',
    'The page shall preserve the application shell, heading hierarchy, visible focus, and responsive readability.',
  ],
  criteria: [
    {
      id: '404-01',
      given: 'a person opens an unknown route',
      when: 'the application finishes rendering',
      then: 'the page clearly identifies that the route was not found',
      and: [
        'the unknown path is readable',
        'the page does not pretend that a valid example loaded',
      ],
    },
    {
      id: '404-02',
      given: 'the person wants to recover',
      when: 'they select the home link with a pointer or keyboard',
      then: 'the application navigates to the registered home route',
      and: ['the link has a visible accessible name', 'focus remains visible during activation'],
    },
    {
      id: '404-03',
      given: 'the person uses a narrow viewport, zoom, or keyboard only',
      when: 'they inspect and operate the page',
      then: 'the message and recovery link remain readable and reachable',
      and: ['no content is clipped or overlapped', 'no horizontal scrolling is required'],
    },
  ],
  verification: [
    {
      id: '404-CONTENT',
      title: 'Unknown route and recovery',
      cases: [
        {
          id: '404-CONTENT-01',
          title: 'Confirm the error state',
          steps: [
            'Open a path that is not registered.',
            'Read the main heading and unknown path.',
            'Use Tab to focus the recovery link.',
            'Activate the link with Enter.',
          ],
          expected:
            'The page identifies the missing route and the recovery link reaches the home route.',
        },
      ],
    },
    {
      id: '404-RESPONSIVE',
      title: 'Responsive and keyboard behavior',
      cases: [
        {
          id: '404-RESPONSIVE-01',
          title: 'Check the smallest usable presentation',
          steps: [
            'Set a narrow viewport.',
            'Increase browser zoom.',
            'Tab through the page.',
            'Inspect the message and recovery link.',
          ],
          expected:
            'The error message remains readable, focus is visible, and the recovery link remains reachable without clipping or horizontal scrolling.',
        },
      ],
    },
  ],
}
