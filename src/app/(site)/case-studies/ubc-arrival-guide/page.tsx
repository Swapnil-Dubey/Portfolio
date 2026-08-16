import type { Metadata } from "next";
import { TableOfContents } from "@/components/table-of-contents";

export const metadata: Metadata = {
  title: "The UBC Arrival Guide - Case Study",
  description:
    "A CPSC 344 team case study on a weekly newsletter paired with an interactive task tracker for newly arrived international students at UBC - need-finding, a shipped prototype, a ten-session usability study, and a critique of my own study design.",
};

const needFindingStats = [
  {
    figure: "7 / 10",
    label: "Had difficulty or failed to locate Compass Card / SIN information in existing UBC resources",
  },
  {
    figure: "10 / 10",
    label: "Named official UBC branding and links to official pages as a trust signal",
  },
  {
    figure: "3.4 / 5",
    label: "Average rating for “feeling confident acting on the information found”",
  },
  {
    figure: "80%",
    label: "Reported asking a friend for help with arrival or admin tasks",
  },
];

const requirements = [
  {
    id: "R1",
    name: "Task Self-Sufficiency",
    type: "Design goal (usability)",
    statement:
      "A user must be able to complete a single arrival task from one consolidated set of steps without switching to a separate, unconnected source.",
    pass: "Binary heuristic: the task is completable from a single consolidated location, or it is not. Evaluated as the proportion of users who finish a target task without consulting an outside source.",
  },
  {
    id: "R2",
    name: "Task Prioritization",
    type: "Design goal (efficiency)",
    statement:
      "The design should make the urgency and ordering of arrival tasks clear so users know what to do first.",
    pass: "Binary heuristic: tasks appear in an explicit priority order, or they do not. Evaluated as the percentage of users who correctly identify the intended highest-priority task.",
  },
  {
    id: "R3",
    name: "Confidence in Information",
    type: "Design goal (trust)",
    statement:
      "The design should distinguish official guidance from peer advice and indicate how current each item is.",
    pass: "Proportion of items labelled with both a source type (official vs. peer) and a last-updated date. Evaluated as the average rating for “I feel confident acting on this information”, scored against the 3.4/5 need-finding baseline.",
  },
  {
    id: "R4",
    name: "Low-Exposure Peer Access",
    type: "Design constraint (privacy) — binary",
    statement:
      "A user must be able to reach relevant peer advice without publicly posting or identifying themselves.",
    pass: "Pass/fail: can a user reach peer advice without any step that publicly posts or identifies them? Verified at both entry points, with a comfort rating alongside it.",
  },
];

const approaches = [
  {
    id: "DA1",
    name: "Interactive Task Tracker",
    mine: true,
    summary:
      "A web tracker that consolidates scattered guidance into prioritized tasks, each carrying its own steps and task-specific peer notes.",
    strength:
      "Answers on demand and in any order, and attaches peer validation to the exact task a student is stuck on (R1, R4).",
    weakness:
      "Priority is not legible on a populated board, and a full task list is heavier than one clear next step for someone who landed yesterday (R2).",
  },
  {
    id: "DA2",
    name: "Physical Newsletter",
    mine: false,
    summary:
      "A printed arrival guide delivered on a schedule - weekly for the first month, then monthly - with tasks broken into a to-do structure.",
    strength:
      "Sequencing and timing do the prioritization work, and anonymised peer quotes carry institutional credibility (CT1, CT2).",
    weakness:
      "Static: no on-demand lookup, no retrieval, no tailoring to an individual student’s situation.",
  },
  {
    id: "DA3",
    name: "Guided Group Orientation",
    mine: false,
    summary:
      "A multi-day in-person orientation where a trained leader walks a small group through onboarding tasks at each physical location.",
    strength:
      "No information architecture to navigate at all, and confidence comes from a real person doing it with you (strongest on R3).",
    weakness:
      "Does not scale, has no catch-up path, misses tasks that arise later in the year, and a group setting still exposes socially anxious students (weak on R4).",
  },
];

const fidelity = [
  {
    component: "UBC branding and visual identity",
    build: "Fully functional",
    polish: "Polished",
    why: "Every earlier study named institutional identity as the top trust cue (R3, RQ2).",
  },
  {
    component: "Dated priority ordering (“First 1-2 days”), this-week and coming-up groups",
    build: "Fully functional",
    polish: "Rough",
    why: "RQ1 measures behaviour, and an order can only be misread if it actually exists.",
  },
  {
    component: "Click-to-expand steps, sources, and last-updated dates",
    build: "Fully functional",
    polish: "Rough",
    why: "Self-sufficiency only fails if leaving the design is a real option.",
  },
  {
    component: "Checkboxes with state that persists into a progress bar",
    build: "Fully functional",
    polish: "Rough",
    why: "Tests whether visible progress keeps a student moving to the next task.",
  },
  {
    component: "Newsletter-to-tracker link",
    build: "Fully functional",
    polish: "Rough",
    why: "RQ1 spans both components, so the handoff had to be a real click.",
  },
  {
    component: "Mail client around the newsletter",
    build: "Simulated",
    polish: "Rough",
    why: "The issue arrives realistically without standing up a live email system.",
  },
  {
    component: "Peer notes on task cards",
    build: "Simplified - team-written, labelled peer-verified",
    polish: "Realistic text",
    why: "Testing whether a peer voice changes confidence does not need a real community.",
  },
  {
    component: "Anonymous Q&A board",
    build: "Wizard-of-Oz - static board of pre-written questions and answers; posting and search unbuilt",
    polish: "Rough",
    why: "RQ3 needed only discoverability and felt exposure, not a working forum.",
  },
];

const researchQuestions = [
  {
    id: "RQ1",
    text: "To what extent can a newly arrived international student identify the highest-priority arrival task and complete it without consulting sources outside the design, across both prototype components?",
    main: "Observed priority picks, outside-source attempts, assists",
    support: "Likert self-sufficiency and prioritization",
    req: "R1, R2",
  },
  {
    id: "RQ2",
    text: "How confident do users feel acting on the information the design presents, and what cues shape that confidence?",
    main: "Likert confidence and verify-elsewhere; open responses on cues",
    support: "Observed hesitation, attention to trust cues",
    req: "R3",
  },
  {
    id: "RQ3",
    text: "Can users reach peer advice relevant to a specific arrival task without publicly posting or identifying themselves at either entry point, and does that access feel low-exposure to them?",
    main: "Observed pass/fail reaching peer advice unidentified",
    support: "Likert comfort, debrief comments",
    req: "R4",
  },
];

const findingStats = [
  { figure: "4.5 / 5", label: "Confidence acting on the information, up from the 3.4/5 baseline" },
  { figure: "3.1 / 5", label: "“Before acting on this I would want to check elsewhere”" },
  { figure: "3.6 / 5", label: "Self-sufficiency - the lowest score in the study" },
  { figure: "3.9 / 5", label: "Prioritization - the second lowest" },
  { figure: "4 of 10", label: "Could not reach the tracker from the newsletter without a nudge" },
];

const recommendations = [
  {
    n: 1,
    title: "Fix the newsletter-to-tracker link",
    tag: "RQ1",
    body: [
      "Four participants could not get from the newsletter to the tracker on their own, because the link sat at the bottom of the email underneath all the tasks. We later added a second link near the top - but only on issues that carry a “what changed” section, so the first issue a student ever receives still has the layout that failed.",
      "Every issue needs a link near the top, and each task in the email should link to that task in the tracker rather than to the home page.",
    ],
  },
  {
    n: 2,
    title: "Test the changes we made after the study",
    tag: "RQ1-RQ3",
    body: [
      "After testing we changed the deadline badges, added search to the Q&A board, and put an anonymous-question link on each task. Each one responds to something we saw. None of them has been tested.",
      "A 15-minute follow-up with five participants covering only two steps - reaching the tracker from the newsletter, and finding the Q&A - would show whether they help. Success is completing both without an assist, measured against the 4-of-10 and near-half failure rates we recorded.",
    ],
  },
  {
    n: 3,
    title: "Work out where the peer content actually comes from",
    tag: "RQ2, RQ3",
    body: [
      "Participants liked the peer notes and described the Q&A as a more trustworthy version of Reddit. But our team wrote that content, and nothing sits behind the “verified” label.",
      "A real version needs a way for students to submit answers, a rule for who checks them, and moderation. That is also what would replace the AI-written text participants said felt less credible.",
    ],
  },
  {
    n: 4,
    title: "Resolve the fixed schedule against the arrival date",
    tag: "RQ1, R2",
    body: [
      "Our deadlines are written relative to arrival - “first 1-2 days” - but the newsletter goes out on a fixed schedule. A student arriving partway through the cycle gets an order built around someone else’s arrival date.",
      "Personalizing the send means storing an arrival date and completion state against each subscriber. Right now the Q&A is anonymous because nothing is stored server-side at all; once that profile exists, anonymity depends on policy rather than architecture. Before building it, we would want to know whether students will supply an arrival date, and whether keeping it in local storage gets the ordering benefit without the profile.",
    ],
  },
];

const tocItems = [
  { id: "problem-framing", label: "Problem framing" },
  { id: "my-role", label: "My role" },
  { id: "need-finding", label: "Need-finding study" },
  { id: "tasks-requirements", label: "Tasks & requirements" },
  { id: "design-approaches", label: "Design approaches" },
  { id: "prototype", label: "Prototype scope" },
  { id: "evaluation", label: "Evaluation" },
  { id: "findings", label: "Findings" },
  { id: "recommendations", label: "Recommendations" },
  { id: "process-critique", label: "Process critique" },
];

export default function UBCArrivalGuidePage() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-24">
      {/* ── Header ── */}
      <header className="mb-12 max-w-[700px]">
        <h1 className="mb-4">The UBC Arrival Guide</h1>
        <p className="text-lg text-text-muted leading-relaxed">
          A weekly newsletter email paired with an interactive task tracker, for
          international students in their first weeks at UBC.
        </p>
        <p className="mt-4 text-xs font-mono text-text-muted">
          CPSC 344 (HCI Methods), UBC&ensp;·&ensp;Five-person team, group
          C-G2&ensp;·&ensp;May &ndash; Aug 2026&ensp;·&ensp;15 min read
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
        {/* ── Main content ── */}
        <article className="max-w-[700px]">
          {/* Prototype links */}
          <div className="mb-8 rounded-lg border border-border bg-surface p-5">
            <p className="text-xs font-mono text-accent mb-3 uppercase tracking-wide">
              The prototype
            </p>
            <p className="text-sm leading-relaxed mb-4">
              The prototype was built and deployed, then tested end to end -
              inbox, newsletter issue, handoff, tracker, and anonymous Q&A. It is
              still live. Open the inbox, read the week&rsquo;s email, follow it
              to the tracker, expand a task and check it off.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a
                href="https://onboard-design.vercel.app/#/inbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live prototype &rarr;
              </a>
              <a
                href="https://github.com/KuanKongy/OnboardDesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prototype code (team repo) &rarr;
              </a>
            </div>
          </div>

          {/* Research integrity note */}
          <div className="mb-12 rounded-lg border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed">
            <p className="font-semibold text-accent mb-2">Research note</p>
            <ul className="space-y-2">
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                The peer notes and Q&A answers inside the prototype were written
                by the team. They were not collected from students.
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                The anonymous Q&A was Wizard-of-Oz. The button opened a static
                board of pre-written questions and answers; posting and search
                were never built.
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Participants were UBC international students or recent grads
                role-playing a first arrival from a scenario handout. None was a
                genuine first-time arrival.
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Both studies ran under a signed course ethics protocol. No
                participant names, quotes, transcripts, or raw responses appear
                on this page - aggregate numbers only.
              </li>
            </ul>
          </div>

          {/* ── Problem Framing ── */}
          <section id="problem-framing" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Problem framing
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                  Naive framing
                </p>
                <p className="text-sm leading-relaxed">
                  Newly arrived international students at UBC don&rsquo;t have
                  the information they need to get set up.
                </p>
              </div>

              <div className="flex justify-center text-text-muted text-lg">
                &darr;
              </div>

              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                  Why it&rsquo;s wrong
                </p>
                <p className="text-sm leading-relaxed">
                  The information exists and students find the right sites. In
                  our need-finding study, participants reached the official UBC
                  International Student Guide and still could not extract what to
                  actually do - the friction came from information
                  architecture and a lack of actionable structure, not from
                  missing content.
                </p>
              </div>

              <div className="flex justify-center text-text-muted text-lg">
                &darr;
              </div>

              <div className="rounded-lg border-2 border-accent/50 bg-accent/5 p-5">
                <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
                  Sharpened framing
                </p>
                <p className="text-sm leading-relaxed">
                  Arrival information isn&rsquo;t missing - it&rsquo;s
                  scattered across dozens of UBC webpages, Government of Canada
                  sites, emails, and word of mouth, with nothing telling a
                  student what is urgent or what to do first. And the fallback
                  students actually reach for - asking someone - means
                  posting publicly, which they avoid.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                Who it&rsquo;s for
              </p>
              <p className="text-sm leading-relaxed">
                International students at UBC in the weeks around arrival, when
                they have limited local knowledge and no established support
                network, and later whenever a new administrative task appears -
                a study permit renewal, taxes, health coverage.
              </p>
            </div>
          </section>

          {/* ── My Role ── */}
          <section id="my-role" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              My role
            </h2>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              This was a five-person team project, and it ran like one. We worked
              across each other&rsquo;s sections through every milestone -
              reviewing drafts, filling gaps, and picking up whatever was behind
              - so very little below was done alone. The split records where
              each piece was owned and driven, not a boundary anyone stayed
              inside.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-accent/50 bg-accent/5 p-5">
                <p className="text-xs font-mono text-accent mb-3 uppercase tracking-wide">
                  What I led
                </p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Project manager</strong> for the group per the group
                    contract - agendas, deadline tracking, escalation.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Milestone 2:</strong> qualitative analysis, the
                    design requirements and metrics section, interviews.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Milestone 3:</strong> authored Design Approach 1, the
                    Interactive Task Tracker.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Checkpoint A:</strong> design requirements section;
                    co-owned the tracker wireframes and the tracker code.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Checkpoint B:</strong> wrote the three evaluation
                    research questions.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Build:</strong> tracker interactions, peer quotes
                    into task cards, and pilot fixes (with Ayush).
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Evaluation:</strong> ran two of the ten usability
                    sessions.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    <strong>Milestone 4:</strong> Recommendations and Process
                    Critique.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-text-muted mb-3 uppercase tracking-wide">
                  What teammates led
                </p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    Running the need-finding study - protocol, script,
                    coding sheets, questionnaire.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    The affinity diagram and every visualization in both reports.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    Newsletter design, layout, and content writing.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    Ethics documentation, consent forms, and study materials.
                  </li>
                  <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    The remaining eight usability sessions - ten in total,
                    two per team member - plus the pilot studies and the
                    analysis section.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Need-finding ── */}
          <section id="need-finding" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              Need-finding study
            </h2>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              Ten participants: seven UBC international students and two
              international TAs - all of whom had been through the
              transition - and one domestic student. Two methods - think-aloud
              observation with a semi-structured interview while participants
              navigated existing UBC resources, and a questionnaire for broader
              quantitative comparison.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {needFindingStats.map((s) => (
                <div
                  key={s.figure + s.label}
                  className="rounded-lg border border-border p-5"
                >
                  <p className="font-display text-2xl mb-2 text-accent">
                    {s.figure}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-accent/30 pl-5">
              <p className="font-semibold text-base mb-1">
                Credibility and confidence are not the same thing.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Every participant named official UBC branding and links to
                official pages as a trust signal, and yet confidence acting on
                what they found averaged 3.4/5. Institutional credibility was
                already established; it just wasn&rsquo;t converting into
                willingness to act. That gap is what pushed students into
                cross-validation - checking Reddit for lived experience,
                opening multiple sources, filtering for recency - and it is
                the insight the rest of the project is built on. The design
                problem was never &ldquo;make this look official&rdquo;. It
                already looked official.
              </p>
            </div>
          </section>

          {/* ── Tasks & Requirements ── */}
          <section id="tasks-requirements" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Central tasks & requirements
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
                  Central task 1
                </p>
                <p className="text-sm font-semibold mb-2">
                  Navigating actionable logistics
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Follow one clear, prioritized, step-by-step path for immediate
                  arrival logistics without consulting multiple disconnected
                  sources.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
                  Central task 2
                </p>
                <p className="text-sm font-semibold mb-2">
                  Accessing verified peer experiences
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Locate and read validated peer advice tied to a specific
                  administrative task, without having to post publicly.
                </p>
              </div>
            </div>

            <p className="text-sm text-text-muted mb-6 leading-relaxed">
              Four requirements came out of those tasks. Each one had to carry a
              measurable pass condition, not a sentiment - what would count
              as met, and how it would be checked.
            </p>

            <div className="space-y-4">
              {requirements.map((r) => (
                <div
                  key={r.id}
                  className="rounded-lg border border-border overflow-hidden"
                >
                  <div className="bg-surface px-5 py-3 border-b border-border">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="font-mono text-xs font-semibold text-accent">
                        {r.id}
                      </span>
                      <h3 className="text-base font-semibold">{r.name}</h3>
                      <span className="text-xs font-mono text-text-muted">
                        {r.type}
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-sm leading-relaxed">{r.statement}</p>
                    <div>
                      <p className="text-xs font-mono text-text-muted mb-1 uppercase tracking-wide">
                        Pass condition
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {r.pass}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm leading-relaxed">
              <p>
                Three of these deserve their reasoning stated. R1 started life
                as a functional constraint and was{" "}
                <strong>reclassified as a goal</strong> when feedback pointed
                out that centralizing information is a usability outcome, not a
                capability the system either has or doesn&rsquo;t - which is
                also when it was renamed Task Self-Sufficiency. That left
                exactly one constraint on the list.
              </p>
              <p>
                That one is R4, designated a{" "}
                <strong>binary constraint rather than a graded goal</strong>{" "}
                after a TA flagged that it wasn&rsquo;t clear which requirement
                was the constraint. Privacy doesn&rsquo;t average - a design
                that exposes a student some of the time has failed, so R4 is
                pass/fail and verified at both entry points.
              </p>
              <p>
                R3&rsquo;s metric was written directly against the 3.4/5
                baseline. The requirement is not &ldquo;users feel
                confident&rdquo;; it is &ldquo;confidence acting on the
                information beats 3.4/5&rdquo;. The need-finding number stopped
                being a finding and became the bar the design had to clear.
              </p>
              <p>
                At Checkpoint B we made R1 and R2 the primary evaluation targets,
                on TA feedback that the prototype realistically would not satisfy
                all four requirements completely - so we picked the two the
                MVP most depended on rather than spreading the study thin.
              </p>
            </div>
          </section>

          {/* ── Design approaches ── */}
          <section id="design-approaches" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              Three design approaches, and why we merged two
            </h2>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              We took three approaches into the Shark Tank presentation. I
              authored the first.
            </p>

            <div className="space-y-4">
              {approaches.map((a) => (
                <div
                  key={a.id}
                  className="rounded-lg border border-border overflow-hidden"
                >
                  <div className="bg-surface px-5 py-3 border-b border-border">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-accent">
                        {a.id}
                      </span>
                      <h3 className="text-base font-semibold">{a.name}</h3>
                      {a.mine && (
                        <span className="inline-block rounded-full border border-accent/50 px-2.5 py-0.5 text-[10px] font-mono uppercase text-accent">
                          Mine
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="px-5 py-4">
                      <p className="text-sm leading-relaxed">{a.summary}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                        Strength
                      </p>
                      <p className="text-sm leading-relaxed">{a.strength}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wide">
                        Weakness
                      </p>
                      <p className="text-sm leading-relaxed">{a.weakness}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border-2 border-accent/50 bg-accent/5 p-5">
              <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
                The decision
              </p>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  We did not pick a winner. Reading the strengths and weaknesses
                  side by side, each approach&rsquo;s weakness was the
                  other&rsquo;s strength: the newsletter sequences and
                  prioritizes but can&rsquo;t be searched or personalized, and
                  the tracker answers anything on demand but overwhelms a
                  jet-lagged student on day one. Neither hit all four
                  requirements alone, and the Shark Tank feedback said the same.
                  So DA1 and DA2 became one two-component system rather than two
                  candidates.
                </p>
                <p>
                  That gave us the split the final design runs on:{" "}
                  <strong>the newsletter answers &ldquo;what should I
                  do?&rdquo;</strong> and{" "}
                  <strong>the tracker answers &ldquo;how do I do it?&rdquo;</strong>{" "}
                  - orientation separated from action, without separating
                  the experience.
                </p>
                <p className="text-text-muted">
                  DA3 was dropped. It doesn&rsquo;t scale, has no catch-up path
                  for a missed session, and - as the Shark Tank pointed out
                  - had no computing component to build.
                </p>
              </div>
            </div>
          </section>

          {/* ── Prototype scope ── */}
          <section id="prototype" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              Prototype scope
            </h2>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              Fidelity was assigned per component, with a reason attached to each
              one. The rule: build it for real where a research question measures
              behaviour, fake it where the question only measures
              discoverability, and leave everything else deliberately rough.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Component
                    </th>
                    <th className="py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Build
                    </th>
                    <th className="py-3 pr-4 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Polish
                    </th>
                    <th className="py-3 font-semibold text-xs uppercase tracking-wide text-text-muted">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fidelity.map((f) => (
                    <tr key={f.component} className="border-b border-border/50">
                      <td className="py-3 pr-4 leading-relaxed">
                        {f.component}
                      </td>
                      <td className="py-3 pr-4 font-mono text-xs text-text-muted">
                        {f.build}
                      </td>
                      <td className="py-3 pr-4 font-mono text-xs text-text-muted whitespace-nowrap">
                        {f.polish}
                      </td>
                      <td className="py-3 leading-relaxed text-text-muted">
                        {f.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {fidelity.map((f) => (
                <div
                  key={f.component}
                  className="rounded-lg border border-border p-4"
                >
                  <p className="text-sm font-semibold mb-2">{f.component}</p>
                  <p className="text-xs font-mono text-text-muted mb-2">
                    {f.build} · {f.polish}
                  </p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {f.why}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm leading-relaxed">
              <p>
                <strong>Out of scope, stated as such:</strong> real email
                delivery, ongoing content maintenance, and real peer content -
                which is exactly why the report carries a long-term accuracy
                limitation rather than a claim we couldn&rsquo;t support.
              </p>
              <p>
                <strong>Why polish was restricted.</strong> Our early tracker
                sketches were close to high fidelity because they were
                AI-generated. A TA flagged that AI-driven polish adds
                &ldquo;secondary persuasion&rdquo; and undercuts confidence in
                intentional design choices - a participant reacting to a
                slick surface isn&rsquo;t telling you whether your ordering or
                your trust cues work. So polish went only where a research
                question needed it: UBC branding, official links, attribution,
                and last-updated dates, because every earlier study named
                institutional identity the top trust cue; and realistic task and
                peer text, because urgency and credibility cannot be judged from
                placeholders. Everything else stayed rough on purpose.
              </p>
            </div>
          </section>

          {/* ── Evaluation ── */}
          <section id="evaluation" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              Evaluation
            </h2>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              Ten one-on-one sessions, 30 minutes each, two per team member,
              recruited through class, workshops, and Slack DMs. Each session ran
              one protocol: consent, the newsletter (identify the most urgent
              task, explain how you would start it, follow the link into the
              tracker), the tracker (find a task, open its steps and peer note,
              check it off, find where to ask a question anonymously), then
              questionnaire and debrief. Participants thought aloud; the
              researcher only stepped in after a long stall, and logged each
              nudge as an assist.
            </p>

            <div className="space-y-4 mb-8">
              {researchQuestions.map((q) => (
                <div
                  key={q.id}
                  className="rounded-lg border border-border overflow-hidden"
                >
                  <div className="bg-surface px-5 py-3 border-b border-border flex items-baseline gap-2">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {q.id}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {q.req}
                    </span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm leading-relaxed mb-3">{q.text}</p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      <span className="font-mono uppercase tracking-wide">
                        Main data:
                      </span>{" "}
                      {q.main}
                      <br />
                      <span className="font-mono uppercase tracking-wide">
                        Supporting:
                      </span>{" "}
                      {q.support}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Two methods, deliberately paired so that no claim rests on one
                source. A think-aloud walkthrough coded on a structured sheet
                captured what participants could <em>do</em>; a Qualtrics
                questionnaire (5-point Likert plus open responses) and a short
                debrief captured confidence, trust, and felt exposure, which
                observation cannot reach. R1 and R2 are behavioural, so we
                watched task performance. R3 is subjective, so it was rated and
                compared against the M2 baseline. R4 is pass/fail, so it was
                verified at both entry points.
              </p>
              <p>
                Two things changed from the Checkpoint B plan. The newsletter
                became an on-screen email rather than a printed handout, because
                the handoff is part of RQ1 and the link had to be clickable -
                and email is the final design&rsquo;s channel anyway. And we
                added the debrief, because open follow-ups turned out to be the
                only way to trace which cues shaped confidence.
              </p>
            </div>
          </section>

          {/* ── Findings ── */}
          <section id="findings" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              Findings
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {findingStats.map((s) => (
                <div
                  key={s.figure + s.label}
                  className="rounded-lg border border-border p-5"
                >
                  <p className="font-display text-2xl mb-2 text-accent">
                    {s.figure}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <ol className="space-y-6 list-none">
              <li className="border-l-2 border-accent/30 pl-5">
                <p className="font-semibold text-base mb-1">
                  Confidence rose, but the urge to double-check didn&rsquo;t go
                  away.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Confidence acting on the information averaged 4.5/5, well above
                  the 3.4/5 baseline the requirement was written against. But
                  &ldquo;before acting on this I would want to check
                  elsewhere&rdquo; still averaged 3.1/5. UBC branding, official
                  links, and the peer-verified notes were what participants named
                  as making the steps feel accurate; internal inconsistencies and
                  the suspicion that text was AI-generated were what pulled
                  credibility back down. Confidence went up. It did not fully
                  convert into acting without checking.
                </p>
                <p className="mt-2 text-xs font-mono text-text-muted">
                  (RQ2 - confidence in the claim: high, quantitative and
                  qualitative data agreed)
                </p>
              </li>

              <li className="border-l-2 border-accent/30 pl-5">
                <p className="font-semibold text-base mb-1">
                  The handoff was the weak point, and the two primary
                  requirements scored lowest.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Self-sufficiency (3.6) and prioritization (3.9) were the lowest
                  scores in the study - the two requirements we had made
                  primary. Two different four-of-ten counts sit underneath those
                  scores, measuring two different failures. Four
                  participants could not navigate from the newsletter to the
                  tracker without a nudge, because the link sat at the bottom of
                  the email under all the tasks - that is the handoff. And
                  only four identified the most urgent task unprompted once they
                  were in front of the content - that is the ordering. On top
                  of both, participants who found the steps too thin to act on
                  left the design to search elsewhere, which is exactly what R1
                  was written to prevent.
                </p>
                <p className="mt-2 text-xs font-mono text-text-muted">
                  (RQ1 - confidence in the claim: medium, limited by
                  Wizard-of-Oz content)
                </p>
              </li>

              <li className="border-l-2 border-accent/30 pl-5">
                <p className="font-semibold text-base mb-1">
                  Anonymity held. Discoverability didn&rsquo;t.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  No participant was ever publicly identified, so R4 passed as a
                  constraint at both entry points, and comfort with the path was
                  generally high once found - participants described it as a
                  more trustworthy version of Reddit. But almost half missed the
                  Q&A button initially, and search was the single most requested
                  improvement. A privacy guarantee nobody can find is not
                  delivering the requirement.
                </p>
                <p className="mt-2 text-xs font-mono text-text-muted">
                  (RQ3 - confidence in the claim: medium, all peer content was
                  Wizard-of-Oz)
                </p>
              </li>

              <li className="border-l-2 border-accent/30 pl-5">
                <p className="font-semibold text-base mb-1">
                  Dates communicated urgency. Urgency tags did not.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Dated ordering - &ldquo;First 1-2 days&rdquo; - read
                  as urgent. The on-screen urgency tags meant to do that job went
                  unnoticed. We reordered the tasks by dated deadline afterwards
                  so the ordering itself carries the priority signal rather than
                  a badge next to it.
                </p>
              </li>
            </ol>
          </section>

          {/* ── Recommendations ── */}
          <section id="recommendations" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              Recommendations
            </h2>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              I wrote this section and the one that follows for the final report.
              Each recommendation names the failure rate it is answering.
            </p>

            <div className="space-y-4">
              {recommendations.map((r) => (
                <div
                  key={r.n}
                  className="rounded-lg border border-border overflow-hidden"
                >
                  <div className="bg-surface px-5 py-3 border-b border-border">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-accent">
                        {r.n}
                      </span>
                      <h3 className="text-base font-semibold">{r.title}</h3>
                      <span className="text-xs font-mono text-text-muted">
                        {r.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    {r.body.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Process critique ── */}
          <section id="process-critique" className="mb-16 scroll-mt-24">
            <h2 className="mb-4 text-text-muted text-xs font-mono uppercase tracking-widest">
              Process critique
            </h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                I wrote the three research questions. One per design requirement:
                RQ1 for self-sufficiency and prioritization, RQ2 for confidence,
                RQ3 for low-exposure peer access. It looked complete because
                every requirement had a question pointing at it.
              </p>
              <p>
                It was the wrong structure, and the study paid for it. The design
                is a two-component system whose entire value is the pairing -
                the newsletter hands off to the tracker. That handoff was not a
                requirement, so under my scheme it never became a question of its
                own. It had no success criterion and no questionnaire item. We
                watched for problems at that step and logged them, but the
                clearest failure in the whole study - four of ten
                participants unable to reach the tracker unaided - got
                reported inside RQ1 rather than as a finding in its own right. A
                structural flaw in the design surfaced as a sub-detail of a
                question about something else.
              </p>
              <p>
                It is probably also part of why prioritization and
                self-sufficiency scored lowest. A question that spans two
                components and their junction measures all three badly. Mapping
                questions to requirements is a defensible default; it just
                doesn&rsquo;t hold when the thing you built is a seam between two
                artifacts, and I should have written a question about the seam.
              </p>
              <p>
                One decision worth recording on the other side. Treating the
                newsletter and tracker as two parts of one process, rather than
                picking one, was the best call we made. And keeping most of the
                interface rough after the TA&rsquo;s feedback mattered more than
                we expected: because so little was polished, the AI-written text
                stood out to participants as a trust problem instead of blending
                in. That is a finding we would have missed entirely if we had
                polished everything - it surfaced because of a scoping
                constraint, not because we planned for it.
              </p>
              <p>
                If we kept going: test the handoff with paper sketches before
                building it, write a research question about how the two
                components connect, and freeze the prototype once testing begins
                so that later changes get their own round of testing instead of
                shipping untested, which is what Recommendation 2 exists to
                clean up.
              </p>
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
