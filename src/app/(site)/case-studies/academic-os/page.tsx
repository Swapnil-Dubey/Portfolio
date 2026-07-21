import type { Metadata } from "next";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "Academic OS — Case Study",
  description:
    "A PM case study on building a course planning tool that synthesizes what UBC CS students already look up separately.",
};

const researchData = [
  { person: "Student 1", year: "4th year", program: "Computer Science", date: "Jul 10", pain: "Can\u2019t tell if a course satisfies a specific requirement bucket without manually cross-checking the calendar" },
  { person: "Student 2", year: "3rd year", program: "Statistics (CS Concentration)", date: "Jul 10", pain: "Worried about missing a graduation requirement discovered too late" },
  { person: "Student 3", year: "2nd year", program: "Computer Science", date: "Jul 10", pain: "Registers for a schedule that looks fine on paper but is unsustainable in practice" },
  { person: "Student 4", year: "3rd year", program: "Data Science Minor", date: "Jul 10", pain: "No way to gauge weekly time commitment before the term starts" },
  { person: "Student 5", year: "1st year", program: "Computer Science", date: "Jul 10", pain: "Can\u2019t distinguish a well-taught course from a rough one before enrolling" },
  { person: "Student 6", year: "4th year", program: "Statistics (CS Concentration)", date: "Jul 11", pain: "Reviews exist but are scattered and inconsistent in how they rate difficulty" },
  { person: "Student 7", year: "2nd year", program: "Computer Science", date: "Jul 11", pain: "Has to manually combine requirement info, workload rumors, and quality reviews from separate places every term" },
  { person: "Student 8", year: "3rd year", program: "Computer Science", date: "Jul 11", pain: "Mental fatigue from re-verifying the same plan every registration cycle" },
  { person: "Student 9", year: "2nd year", program: "Psychology + CS Minor", date: "Jul 11", pain: "Optimizing for degree progress accidentally overloads a term" },
  { person: "Student 10", year: "4th year", program: "Computer Science", date: "Jul 11", pain: "Wants one synthesized recommendation instead of raw data to interpret themselves" },
];

const insights = [
  {
    title: "Requirement fit is a trust problem, not an access problem.",
    body: "Students aren\u2019t missing sources like the Academic Calendar or Workday \u2014 they don\u2019t trust their own manual cross-checking enough to be confident a course counts or a plan is complete.",
    refs: "S1, S2",
  },
  {
    title: "Course quality information is fragmented, not absent.",
    body: "Reviews exist across UBCGrades and RateMyProf, but inconsistency between sources \u2014 not lack of data \u2014 is what prevents students from confidently gauging course quality before enrolling.",
    refs: "S5, S6",
  },
  {
    title: "Workload risk is invisible until it\u2019s too late.",
    body: "A schedule that satisfies every requirement on paper can still be unsustainable in practice, and this risk compounds specifically when students optimize for requirement progress without workload visibility.",
    refs: "S3, S4",
  },
  {
    title: "Manual synthesis is an additional cost of combining all three every term.",
    body: "Students already know where to look; what exhausts them even more is re-deriving the same cross-checked answer every registration cycle.",
    refs: "S7, S8, S10",
  },
];

const tocItems = [
  { id: "problem-framing", label: "Problem framing" },
  { id: "user-research", label: "User research" },
  { id: "key-insights", label: "Key insights" },
  { id: "core-problem", label: "Core problem" },
  { id: "okrs", label: "Objective & key results" },
  { id: "solution", label: "Solution & scope" },
  { id: "design-decisions", label: "Design decision log" },
];

export default function AcademicOSPage() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-24">
      {/* ── Header ── */}
      <header className="mb-12 max-w-[700px]">
        <h1 className="mb-4">Academic OS</h1>
        <p className="text-lg text-text-muted leading-relaxed">
          A course planning tool that synthesizes what UBC CS students already
          look up separately.
        </p>
        <p className="mt-4 text-xs font-mono text-text-muted">
          Self-directed case study&ensp;·&ensp;July 2026&ensp;·&ensp;12 min read
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
        {/* ── Main content ── */}
        <article className="max-w-[700px]">
          {/* Research integrity note */}
          <div className="mb-12 rounded-lg border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed">
            <p className="font-semibold text-accent mb-2">Research note</p>
            <p>
              The ten interviews below are constructed research personas built
              for a self-directed case study &mdash; not real user interviews.
              The synthesis, framing, and prioritization decisions are the actual
              work being shown here.
            </p>
          </div>

          {/* ── Problem Framing ── */}
          <section id="problem-framing" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Problem framing
            </h2>

            <div className="space-y-4">
              {/* Step 1: Naive */}
              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                  Naive framing
                </p>
                <p className="text-sm leading-relaxed">
                  UBC CS students don&rsquo;t have access to the sources that
                  inform their course schedule planning.
                </p>
              </div>

              <div className="flex justify-center text-text-muted text-lg">
                &darr;
              </div>

              {/* Step 2: Why wrong */}
              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                  Why it&rsquo;s wrong
                </p>
                <p className="text-sm leading-relaxed">
                  It&rsquo;s not that students don&rsquo;t have access to the
                  information. Platforms like UBC Academic Calendar, UBCGrades,
                  and RateMyProfessor offer that information. The problem is
                  elsewhere.
                </p>
              </div>

              <div className="flex justify-center text-text-muted text-lg">
                &darr;
              </div>

              {/* Step 3: Sharpened */}
              <div className="rounded-lg border-2 border-accent/50 bg-accent/5 p-5">
                <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
                  Sharpened framing
                </p>
                <p className="text-sm leading-relaxed">
                  UBC CS students have to consult various different sources of
                  information to guide their course planning objectives, often
                  causing them to manually synthesize it themselves, while making
                  sure it fits their program requirements, personal workload
                  capacity, and career goals.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                Target market
              </p>
              <p className="text-sm leading-relaxed">
                UBC CS students with available elective/non-requirement credits
                to choose from, who need their course selection to fit their
                program requirements and workload capacity, while also aligning
                with their career direction.
              </p>
            </div>
          </section>

          {/* ── User Research ── */}
          <section id="user-research" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              User research
            </h2>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Person
                    </th>
                    <th className="py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Year
                    </th>
                    <th className="py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Program
                    </th>
                    <th className="py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Date
                    </th>
                    <th className="py-3 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Pain points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.map((s) => (
                    <tr key={s.person} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-mono text-xs whitespace-nowrap">
                        {s.person}
                      </td>
                      <td className="py-3 pr-4 text-text-muted whitespace-nowrap">
                        {s.year}
                      </td>
                      <td className="py-3 pr-4 text-text-muted">
                        {s.program}
                      </td>
                      <td className="py-3 pr-4 font-mono text-xs text-text-muted whitespace-nowrap">
                        {s.date}
                      </td>
                      <td className="py-3 leading-relaxed">{s.pain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {researchData.map((s) => (
                <div
                  key={s.person}
                  className="rounded-lg border border-border p-4"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs font-semibold">
                      {s.person}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {s.date}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mb-2">
                    {s.year} · {s.program}
                  </p>
                  <p className="text-sm leading-relaxed">{s.pain}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Key Insights ── */}
          <section id="key-insights" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Key insights
            </h2>

            <ol className="space-y-6 list-none">
              {insights.map((ins, i) => (
                <li key={i} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-semibold text-base mb-1">
                    {i + 1}. {ins.title}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {ins.body}
                  </p>
                  <p className="mt-2 text-xs font-mono text-text-muted">
                    ({ins.refs})
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Core Problem Statement ── */}
          <section id="core-problem" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Core problem statement
            </h2>

            <blockquote className="border-l-4 border-accent pl-6 py-4 text-lg font-display italic leading-relaxed">
              UBC CS students must satisfy program requirements, personal
              workload capacity, and course quality every registration cycle, but
              no consistent source holds course quality information, estimates
              workload in advance, or synthesizes across these three dimensions
              &mdash; forcing students to manually cross-reference scattered
              sources and re-derive the same integrated judgment from scratch
              every term, which costs them significant mental effort.
            </blockquote>
          </section>

          {/* ── OKRs ── */}
          <section id="okrs" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Objective & key results
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
                  Objective
                </p>
                <p className="text-sm leading-relaxed">
                  UBC CS students can do their course schedule planning with
                  accurate information synthesized with less mental strain, while
                  making sure it fits their program requirements, personal
                  workload capacity, and course quality/difficulty.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    id: "KR1",
                    text: "% of synthesized requirement and quality statements that match source-of-truth documents when audited \u2014 assessed via two criteria: (a) requirement statements checked for deterministic correctness against Academic Calendar/Workday rules, (b) quality statements checked for faithfulness to what UBCGrades/RateMyProf sources actually say, not for objective truth.",
                  },
                  {
                    id: "KR2",
                    text: "Reduction in time and/or number of sources consulted per planning session vs. self-reported manual baseline \u2014 does accurate synthesis actually translate to faster/less effortful planning, not just correct output.",
                  },
                  {
                    id: "KR3",
                    text: "Predictive accuracy of workload estimates \u2014 % of courses where estimated weekly hours (self-reported by prior students) falls within [X hours] of a subsequent student\u2019s actual reported hours, validated and refined via an ongoing feedback loop rather than a fixed launch-day number.",
                    phase2: true,
                  },
                  {
                    id: "KR4",
                    text: 'NPS ("How likely are you to recommend Academic OS to a friend?"), reported only alongside KR1\u2019s accuracy rate.',
                  },
                ].map((kr) => (
                  <div key={kr.id} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block font-mono text-xs font-semibold text-accent">
                        {kr.id}
                      </span>
                      {kr.phase2 && (
                        <span className="ml-1.5 inline-block rounded bg-text-muted/20 px-1.5 py-0.5 text-[10px] font-mono uppercase text-text-muted">
                          Phase 2
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed">{kr.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Solution & Scope ── */}
          <section id="solution" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Solution & scope
            </h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Academic OS aggregates and cross-references the sources UBC CS
                students already consult separately &mdash; Academic Calendar
                and Workday for program requirements, UBCGrades and RateMyProf
                for course quality &mdash; into a single synthesized output,
                replacing the manual cross-checking students currently do
                themselves every registration cycle.
              </p>
              <p>
                A student provides their program, year, credits remaining, and
                requirement gaps once. Academic OS returns a single synthesized
                recommendation: a set of courses with the reasoning for each
                shown alongside it &mdash; which requirement bucket it satisfies
                and why, and what its quality signal is across sources &mdash;
                rather than raw data the student has to interpret themselves.
              </p>
              <p>
                At launch, Academic OS synthesizes only what already exists
                across these four sources; requirement fit and quality fit are
                the two dimensions the Core Problem Statement treats as co-equal
                and immediately actionable, and together they&rsquo;re what KR1
                (synthesis accuracy) and KR2 (time/sources reduction) are built
                to measure. This is a complete, working product on its own, not a
                partial slice of a larger one.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-accent mb-3 uppercase tracking-wide">
                  Deliberately out of scope
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Workload capacity (Phase 2):</strong> No consistent
                    source-of-truth exists yet. Academic OS needs to generate
                    that data itself through self-reported hours.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Swap/edit individual recommendations:</strong>{" "}
                    Deferred, not necessary for the core flow.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Career-goal course mapping:</strong> Every candidate
                    data source failed the product&rsquo;s verifiability
                    standard. See Design Decision Log.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-accent mb-3 uppercase tracking-wide">
                  In scope at launch
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    Requirement fit synthesis (Academic Calendar + Workday)
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    Quality fit synthesis (UBCGrades + RateMyProf)
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    Per-course reasoning shown alongside each recommendation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Design Decision Log ── */}
          <section id="design-decisions" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              Design decision log
            </h2>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              The decisions below document scope and framing choices that shaped
              the product. Each records what was considered, why it went the
              other way, and what that implies.
            </p>

            {/* Decision 1 */}
            <div className="mb-10 rounded-lg border border-border overflow-hidden">
              <div className="bg-surface px-5 py-3 border-b border-border">
                <h3 className="text-base font-semibold">
                  Career-goal course mapping deferred to Phase 2/3
                </h3>
                <p className="text-xs font-mono text-text-muted mt-1">
                  Reaffirmed
                </p>
              </div>

              <div className="divide-y divide-border">
                <div className="px-5 py-4">
                  <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                    Considered
                  </p>
                  <p className="text-sm leading-relaxed">
                    Re-including career-goal alignment in MVP scope, prompted by
                    re-reading raw user research and finding roughly equal
                    representation (3 of 10 entries) alongside course-quality
                    insights.
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                    Why it stayed deferred
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    Every candidate data source for grounding a
                    course-to-career mapping fails the product&rsquo;s core
                    standard &mdash; verified, live synthesis rather than
                    plausible guessing:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                      <strong>Self-authored mapping</strong> &mdash; opinion,
                      not verifiable data; inconsistent across authors
                    </li>
                    <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                      <strong>LLM-generated mapping</strong> &mdash;
                      pattern-matched plausibility, not grounded fact; the exact
                      failure mode Academic OS is positioned against
                    </li>
                    <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                      <strong>Self-labeled &ldquo;personal advice&rdquo;</strong>{" "}
                      &mdash; doesn&rsquo;t resolve the credibility gap, just
                      relocates it
                    </li>
                    <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                      <strong>Real professor interviews</strong> &mdash;
                      highest-quality option, but still opinion (professors lack
                      labor-market outcome data), inconsistent with the case
                      study&rsquo;s existing research-integrity boundary
                    </li>
                  </ul>
                </div>

                <div className="px-5 py-4">
                  <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                    Why frequency didn&rsquo;t override this
                  </p>
                  <p className="text-sm leading-relaxed">
                    Evidence volume (how many students mentioned a pain point)
                    answers a different question than feasibility (whether the
                    product can ground a solution to it in verifiable data).
                    Insights 1 & 3 map cleanly to existing structured sources;
                    career-goal mapping does not.
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                    Implication
                  </p>
                  <p className="text-sm leading-relaxed">
                    Reinforces the product&rsquo;s differentiation thesis
                    &mdash; Academic OS competes on grounded, verifiable
                    synthesis, not on capability breadth. Including an
                    ungrounded feature to chase completeness would undercut the
                    exact claim the product is built on.
                  </p>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-surface px-5 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">
                    Trust-in-tool-output excluded from Core Problem Statement
                  </h3>
                  <span className="inline-block rounded-full border border-accent/50 px-2.5 py-0.5 text-[10px] font-mono uppercase text-accent">
                    Open question
                  </span>
                </div>
              </div>

              <div className="divide-y divide-border">
                <div className="px-5 py-4">
                  <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                    Reasoning
                  </p>
                  <p className="text-sm leading-relaxed">
                    Research (S1, S2) shows distrust in students&rsquo; own
                    manual cross-checking &mdash; not distrust in a hypothetical
                    automated tool&rsquo;s output. No interview data exists on
                    whether students would trust a system&rsquo;s synthesized
                    recommendation. Claiming this as a solved or unsolved problem
                    would be unsupported by evidence.
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                    Status
                  </p>
                  <p className="text-sm leading-relaxed">
                    Flagged for future user testing, not assumed either way.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* ── Sticky TOC (desktop) ── */}
        <aside className="hidden lg:block" aria-label="Table of contents">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  );
}
