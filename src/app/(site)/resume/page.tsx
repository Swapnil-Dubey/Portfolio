import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Swapnil Dubey — resume. Computer Science + Statistics @ UBC, incoming TPM Intern @ Electronic Arts.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[700px] px-6 py-16 md:py-24">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-12">
        <h1>Resume</h1>
        <a
          href="/Swapnil_EA_PM_Resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent no-underline hover:bg-accent/20 transition-colors"
        >
          Download PDF &darr;
        </a>
      </div>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-6 text-text-muted text-xs font-mono uppercase tracking-widest">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <div>
            <h3 className="text-base font-semibold">The University of British Columbia</h3>
            <p className="text-sm text-text-muted italic">
              BSc in Computer Science and Statistics (Dean&rsquo;s Honour List), Science Co-op, GPA: 3.7/4.0
            </p>
          </div>
          <time className="text-xs font-mono text-text-muted whitespace-nowrap">Sep 2022 – May 2027</time>
        </div>
      </section>

      <hr className="my-8 border-border" />

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="mb-6 text-text-muted text-xs font-mono uppercase tracking-widest">
          Work experience
        </h2>

        <div className="space-y-10">
          {/* BCI */}
          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-base font-semibold">Software Engineer Co-op</h3>
                <p className="text-sm text-text-muted italic">British Columbia Investment Management Corporation (BCI)</p>
              </div>
              <time className="text-xs font-mono text-text-muted whitespace-nowrap">Jan – Apr 2026</time>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Owned end-to-end delivery of an internal platform serving 70+ Legal Affairs users — gathered requirements, defined acceptance criteria, and managed dev/staging/production releases across the full SDLC using Python, SQL, PowerApps
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Saved ~3 hrs/week for 100+ stakeholders by scoping and shipping a Python LLM/RAG pipeline on Azure — translated a manual summarization workflow into an automated, stakeholder-approved solution
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Eliminated manual data entry across 2 legal trackers by building an email parsing pipeline that extracted structured JSON via Claude API and wrote classified records directly to SharePoint
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Unified 3 siloed systems into a single access layer for 100+ Legal Affairs users by integrating external REST APIs and Azure SQL — cutting ad-hoc data requests to the team and reducing sync prep time ~60%
              </li>
            </ul>
          </article>

          {/* Teck */}
          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-base font-semibold">Business and Cyber Risk Analyst Co-op</h3>
                <p className="text-sm text-text-muted italic">Teck Resources Ltd.</p>
              </div>
              <time className="text-xs font-mono text-text-muted whitespace-nowrap">May – Dec 2025</time>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Served as primary PM/POC for a ServiceNow intake redesign for 10K+ employees — defined services, request types, SLAs, and evidence requirements; managed backlog and documentation in Jira and Confluence
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Lifted phishing report rate ~20% across 10K+ employees by designing A/B tests, applying send-time and segmentation analysis, and presenting findings at quarterly board readouts for VP, CFO, and CISO
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Cut report prep ~4 hrs/month for VP and Board governance cycles by joining LMS, phishing, and finance datasets via SQL and Power Query to produce KPI roll-ups and MoM variance analyses
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Eliminated 10+ manual entries/week and improved enterprise audit traceability by shipping a Power Automate workflow that mirrored ServiceNow intake fields directly to SharePoint risk tracking lists
              </li>
            </ul>
          </article>
        </div>
      </section>

      <hr className="my-8 border-border" />

      {/* Technical Projects */}
      <section className="mb-12">
        <h2 className="mb-6 text-text-muted text-xs font-mono uppercase tracking-widest">
          Technical projects
        </h2>

        <div className="space-y-8">
          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold">Fraud Detection MLOps Pipeline</h3>
              <time className="text-xs font-mono text-text-muted whitespace-nowrap">Mar 2026</time>
            </div>
            <p className="text-xs text-text-muted font-mono mb-2">Python, XGBoost, MLflow, FastAPI, Docker, GitHub Actions, Evidently</p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Framed the problem, defined success metrics (AUPRC, F2 threshold, drift triggers), and evaluated model tradeoffs — achieved 0.874 AUPRC (21% above baseline) on 590K+ transactions
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Decoupled model updates from API code via MLflow alias-based champion promotion; containerized inference with Docker, automated CI/CD via GitHub Actions, and monitored production drift with Evidently
              </li>
            </ul>
          </article>

          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold">Music Streaming Revenue Forecasting</h3>
              <time className="text-xs font-mono text-text-muted whitespace-nowrap">Feb 2026</time>
            </div>
            <p className="text-xs text-text-muted font-mono mb-2">Python, pandas, Prophet, ARIMA, statsmodels, matplotlib</p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Scoped and built a revenue accrual forecasting engine for Finance — benchmarked ARIMA, Prophet, and Exponential Smoothing across 5 DSPs, 10 territories, 4 BUs
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Eliminated forecast bias by detecting structural regime changes via CoV analysis; delivered Finance-ready output with conservative/aggressive scenarios and 3 strategic insights
              </li>
            </ul>
          </article>

          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold">Prescripto — AI Healthcare Transcription</h3>
              <time className="text-xs font-mono text-text-muted whitespace-nowrap">Mar 2025</time>
            </div>
            <p className="text-xs text-text-muted font-mono mb-2">Python, Whisper API, Gemini 2.0 Flash, Claude API</p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Defined the product problem, scoped AI-assisted solution, and shipped a speech-to-summary pipeline supporting 50+ languages — reducing SOAP note time 35%
              </li>
              <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
                Cut critical medical hallucinations 40% by implementing a dual validation layer combining regex and Claude-3 semantic checks against ICD-11 codes
              </li>
            </ul>
          </article>
        </div>
      </section>

      <hr className="my-8 border-border" />

      {/* Leadership */}
      <section className="mb-12">
        <h2 className="mb-6 text-text-muted text-xs font-mono uppercase tracking-widest">
          Leadership
        </h2>
        <article>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-base font-semibold">Section Leader</h3>
              <p className="text-sm text-text-muted italic">Stanford University Code in Place</p>
            </div>
            <time className="text-xs font-mono text-text-muted whitespace-nowrap">Apr – May 2024</time>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted">
              Achieved 90% retention rate mentoring 20+ students in Python; boosted cohort engagement 15% through collaborative curriculum refinements with fellow instructors
            </li>
          </ul>
        </article>
      </section>

      <hr className="my-8 border-border" />

      {/* Skills */}
      <section>
        <h2 className="mb-6 text-text-muted text-xs font-mono uppercase tracking-widest">
          Skills
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-xs uppercase tracking-wide text-text-muted mb-0.5">Languages & Databases</dt>
            <dd>Python; R; SQL (Azure SQL, PostgreSQL, Oracle, MySQL); JavaScript; HTML/CSS; REST APIs; Git</dd>
          </div>
          <div>
            <dt className="font-semibold text-xs uppercase tracking-wide text-text-muted mb-0.5">Product & Analytics</dt>
            <dd>Requirements gathering; User stories; A/B testing; KPI design; Stakeholder readouts; Jira; Confluence; Agile/Scrum</dd>
          </div>
          <div>
            <dt className="font-semibold text-xs uppercase tracking-wide text-text-muted mb-0.5">AI & ML</dt>
            <dd>Scikit-learn; XGBoost; MLflow; Evidently; LLMs (Claude, OpenAI, Cohere); RAG pipelines; Prompt engineering</dd>
          </div>
          <div>
            <dt className="font-semibold text-xs uppercase tracking-wide text-text-muted mb-0.5">Tools & Platforms</dt>
            <dd>Docker; GitHub Actions; FastAPI; Power Automate; Power BI; Power Apps; SharePoint; Microsoft Azure; GCP</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
