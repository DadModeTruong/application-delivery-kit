type ContractCriterion = {
  id: string
  given: string
  when: string
  then: string
  and?: string[]
}

type ContractVerificationCase = {
  id: string
  title: string
  steps: string[]
  expected: string
}

type ContractVerificationScenario = {
  id: string
  title: string
  cases: ContractVerificationCase[]
}

export type PageContract = {
  userStory: string
  requirements: string[]
  criteria: ContractCriterion[]
  verification: ContractVerificationScenario[]
}

function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="mt-3 list-decimal space-y-3 pl-5 leading-7 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="pl-2">
          {item}
        </li>
      ))}
    </ol>
  )
}

export function PageContractPanel({ contract }: { contract: PageContract }) {
  return (
    <section aria-labelledby="page-contract-heading" className="space-y-10">
      <div className="space-y-3">
        <h2 id="page-contract-heading" className="text-2xl font-semibold tracking-tight">
          Requirements, Criteria, and Verification
        </h2>
        <p className="leading-7 text-muted-foreground">
          This contract describes what this page must provide, what a person should observe, and how
          to check it without guessing.
        </p>
        <p className="leading-7 text-muted-foreground">
          <strong className="text-foreground">User story:</strong> {contract.userStory}
        </p>
      </div>
      <section aria-labelledby="page-contract-requirements-heading">
        <h3
          id="page-contract-requirements-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Requirements
        </h3>
        <OrderedList items={contract.requirements} />
      </section>
      <section aria-labelledby="page-contract-criteria-heading">
        <h3 id="page-contract-criteria-heading" className="text-xl font-semibold tracking-tight">
          Criteria
        </h3>
        <ol className="mt-3 list-decimal space-y-6 pl-5 leading-7 text-muted-foreground">
          {contract.criteria.map((criterion) => (
            <li key={criterion.id} className="pl-2">
              <code className="text-sm font-medium text-foreground">{criterion.id}</code>
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
                {criterion.and?.map((statement) => (
                  <li key={statement}>
                    <strong className="text-foreground">And</strong> {statement}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </section>
      <section aria-labelledby="page-contract-verification-heading">
        <h3
          id="page-contract-verification-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Verification
        </h3>
        <div className="mt-3 space-y-8 text-muted-foreground">
          {contract.verification.map((scenario) => (
            <section key={scenario.id} aria-labelledby={`${scenario.id}-heading`}>
              <h4 id={`${scenario.id}-heading`} className="font-semibold text-foreground">
                {scenario.title} <code className="ml-2 text-sm font-medium">{scenario.id}</code>
              </h4>
              <div className="mt-5 space-y-6">
                {scenario.cases.map((testCase) => (
                  <article key={testCase.id} className="space-y-3">
                    <h5 className="font-medium text-foreground">
                      {testCase.title}{' '}
                      <code className="ml-2 text-sm font-medium">{testCase.id}</code>
                    </h5>
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
      </section>
    </section>
  )
}

export type { ContractCriterion, ContractVerificationCase, ContractVerificationScenario }
