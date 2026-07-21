import Link from "next/link";

const workExperience = [
  {
    role: "Technical Product Manager Intern",
    org: "Electronic Arts",
    team: "Production Infrastructure & Engineering",
    dates: "Sept – Dec 2026",
    badge: "Incoming",
    bullets: [
      "Internal platforms, tools, and services used by EA studios and engineering teams.",
    ],
  },
  {
    role: "Software Engineer Co-op",
    org: "British Columbia Investment Management Corporation (BCI)",
    dates: "Jan – Apr 2026",
    bullets: [
      "Owned end-to-end delivery of an internal platform serving 70+ Legal Affairs users — gathered requirements, defined acceptance criteria, and managed dev/staging/production releases across the full SDLC.",
      "Saved ~3 hrs/week for 100+ stakeholders by scoping and shipping a Python LLM/RAG pipeline on Azure — translated a manual summarization workflow into an automated, stakeholder-approved solution.",
      "Unified 3 siloed systems into a single access layer for 100+ Legal Affairs users by integrating external REST APIs and Azure SQL — cutting ad-hoc data requests and reducing sync prep time ~60%.",
    ],
  },
  {
    role: "Business and Cyber Risk Analyst Co-op",
    org: "Teck Resources Ltd.",
    dates: "May – Dec 2025",
    bullets: [
      "Served as primary PM/POC for a ServiceNow intake redesign for 10K+ employees — defined services, request types, SLAs, and evidence requirements.",
      "Lifted phishing report rate ~20% across 10K+ employees by designing A/B tests, applying send-time and segmentation analysis, and presenting findings at quarterly board readouts.",
    ],
  },
];

const selectedProjects = [
  {
    title: "Fraud Detection MLOps Pipeline",
    date: "Mar 2026",
    description:
      "End-to-end ML pipeline achieving 0.874 AUPRC on 590K+ transactions with MLflow model registry, Docker inference, and Evidently drift monitoring.",
    tags: ["Python", "XGBoost", "MLflow", "FastAPI", "Docker"],
  },
  {
    title: "Music Streaming Revenue Forecasting",
    date: "Feb 2026",
    description:
      "Revenue accrual forecasting engine benchmarking ARIMA, Prophet, and Exponential Smoothing across 5 DSPs, 10 territories, and 4 business units.",
    tags: ["Python", "Prophet", "ARIMA", "statsmodels"],
  },
  {
    title: "Real-Time Financial Data Pipeline",
    date: "Jan 2026",
    description:
      "5-stage Airflow pipeline ingesting 7,840+ daily OHLCV records into BigQuery with a 3-layer dbt data model and automated schema tests.",
    tags: ["PySpark", "Airflow", "dbt", "BigQuery", "Docker"],
  },
];

const skillGroups = [
  {
    label: "Languages & Databases",
    items: "Python, R, SQL (Azure SQL, PostgreSQL, Oracle), JavaScript, Git, REST APIs",
  },
  {
    label: "Product & Analytics",
    items: "Requirements gathering, User stories, A/B testing, KPI design, Stakeholder readouts, Jira, Confluence",
  },
  {
    label: "AI & ML",
    items: "Scikit-learn, XGBoost, MLflow, Evidently, LLMs (Claude, OpenAI), RAG pipelines, Prompt engineering",
  },
  {
    label: "Tools & Platforms",
    items: "Docker, GitHub Actions, FastAPI, Power BI, Power Automate, SharePoint, Azure, GCP",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-24">
      {/* ── Identity ── */}
      <section aria-labelledby="identity">
        <h1 id="identity" className="mb-3">
          Swapnil Dubey
        </h1>
        <p className="text-text-muted text-sm font-mono leading-relaxed">
          Computer Science + Statistics @ UBC&ensp;·&ensp;Incoming Technical
          Product Manager Intern @ Electronic Arts&ensp;·&ensp;Graduating May
          2027
        </p>

        <p className="mt-6 text-sm font-semibold text-accent">
          Open to new grad Technical Product Manager, Product Manager, Product
          Analyst, and Analytics Engineer roles starting mid-2027. Based in
          Vancouver, BC.
        </p>

        <div className="mt-8 max-w-[700px] space-y-4 text-base leading-relaxed">
          <p>
            I study computer science and statistics at UBC because the
            combination lets me sit at the intersection of engineering teams and
            business problems without hand-waving either side. At BCI I shipped
            an internal platform end-to-end — from requirements gathering
            through production releases — and built an LLM pipeline that
            replaced a manual workflow for 100+ stakeholders. At Teck I ran a
            ServiceNow redesign for 10K+ employees and designed the A/B testing
            framework that lifted phishing reporting by 20%.
          </p>
          <p>
            This fall I join Electronic Arts as a Technical Product Manager
            Intern on Production Infrastructure & Engineering, working on the
            internal platforms, tools, and services that EA studios depend on. I
            want to keep working on products where the hard part is deciding what
            to build, not just how to build it — and where the answer requires
            both data and judgment.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="mailto:sdubey14@student.ubc.ca">Email</a>
          <a
            href="https://linkedin.com/in/swapnildub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/swapnil-dubey"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/Swapnil_EA_PM_Resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </section>

      <hr className="my-16 border-border" />

      {/* ── Work ── */}
      <section id="work" aria-labelledby="work-heading">
        <h2 id="work-heading" className="mb-10 text-text-muted text-xs font-mono uppercase tracking-widest">
          Work
        </h2>

        <div className="space-y-12">
          {workExperience.map((job) => (
            <article key={job.role + job.org} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-semibold">
                    {job.role}
                    {job.badge && (
                      <span className="ml-2 inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent align-middle">
                        {job.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {job.org}
                    {job.team && (
                      <span className="text-text-muted">
                        {" "}
                        — {job.team}
                      </span>
                    )}
                  </p>
                </div>
                <time className="text-text-muted text-xs font-mono whitespace-nowrap">
                  {job.dates}
                </time>
              </div>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {job.bullets.map((b, i) => (
                  <li key={i} className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <hr className="my-16 border-border" />

      {/* ── Case Studies ── */}
      <section aria-labelledby="case-studies-heading">
        <h2 id="case-studies-heading" className="mb-10 text-text-muted text-xs font-mono uppercase tracking-widest">
          Case Studies
        </h2>

        <Link
          href="/case-studies/academic-os"
          className="group block rounded-lg border border-border p-6 md:p-8 no-underline hover:border-accent/40 transition-colors"
        >
          <h3 className="text-lg font-display font-normal mb-3 text-text group-hover:text-accent transition-colors">
            Academic OS
          </h3>
          <blockquote className="text-text-muted italic text-sm leading-relaxed border-l-2 border-accent/40 pl-4 mb-4">
            &ldquo;Students don&rsquo;t lack sources — they lack a single
            synthesized judgment they can trust.&rdquo;
          </blockquote>
          <p className="text-text-muted text-xs font-mono">
            Self-directed PM case study&ensp;·&ensp;12 min read&ensp;·&ensp;July
            2026
          </p>
        </Link>
      </section>

      <hr className="my-16 border-border" />

      {/* ── Selected Projects ── */}
      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="mb-10 text-text-muted text-xs font-mono uppercase tracking-widest">
          Selected Projects
        </h2>

        <div className="space-y-10">
          {selectedProjects.map((p) => (
            <article key={p.title}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <time className="text-text-muted text-xs font-mono whitespace-nowrap">
                  {p.date}
                </time>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-2">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-surface px-2 py-0.5 text-xs font-mono text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/projects" className="text-sm">
            View all projects &rarr;
          </Link>
        </div>
      </section>

      <hr className="my-16 border-border" />

      {/* ── Education & Skills ── */}
      <section aria-labelledby="education-heading">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 id="education-heading" className="mb-6 text-text-muted text-xs font-mono uppercase tracking-widest">
              Education
            </h2>
            <h3 className="text-base font-semibold">
              The University of British Columbia
            </h3>
            <p className="text-sm text-text-muted mt-1">
              BSc in Computer Science and Statistics
            </p>
            <p className="text-sm text-text-muted">
              Dean&rsquo;s Honour List&ensp;·&ensp;Science
              Co-op&ensp;·&ensp;GPA 3.7/4.0
            </p>
            <time className="text-xs font-mono text-text-muted mt-2 block">
              Sep 2022 – May 2027
            </time>
          </div>

          <div>
            <h2 className="mb-6 text-text-muted text-xs font-mono uppercase tracking-widest">
              Skills
            </h2>
            <dl className="space-y-3 text-sm">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <dt className="font-semibold text-xs uppercase tracking-wide text-text-muted mb-0.5">
                    {g.label}
                  </dt>
                  <dd className="text-text leading-relaxed">{g.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
