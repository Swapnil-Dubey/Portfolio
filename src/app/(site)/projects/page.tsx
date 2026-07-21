import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Technical projects spanning ML/MLOps, data engineering, applied statistics, and full-stack development.",
};

const projectGroups = [
  {
    category: "ML & MLOps",
    projects: [
      {
        title: "Fraud Detection MLOps Pipeline",
        year: "Mar 2026",
        description:
          "Framed the problem, defined success metrics (AUPRC, F2 threshold, drift triggers), and evaluated model tradeoffs (XGBoost vs. LR on imbalanced data) - achieved 0.874 AUPRC (21% above baseline) on 590K+ transactions. Decoupled model updates from API code via MLflow alias-based champion promotion; containerized inference with Docker, automated CI/CD via GitHub Actions, and monitored production drift with Evidently.",
        tags: ["Python", "XGBoost", "MLflow", "FastAPI", "Docker", "GitHub Actions", "Evidently"],
        github: "https://github.com/swapnil-dubey",
      },
      {
        title: "Understanding & Predicting Heart Disease",
        year: "Aug 2024",
        description:
          "Clinical risk prediction model using 15+ patient biomarkers; reduced false negatives 18% via threshold tuning for recall.",
        tags: ["R", "Logistic Regression", "LASSO"],
      },
      {
        title: "ML Research: Internet Usage & Mental Health",
        year: "2024",
        description:
          "Research project applying machine learning methods to study the relationship between internet usage patterns and mental health indicators.",
        tags: ["Python", "Scikit-learn", "Research"],
      },
      {
        title: "Water Potability Classification",
        year: "2024",
        description:
          "Classification model for water potability using multiple ML algorithms with cross-validation and feature engineering.",
        tags: ["Python", "Scikit-learn", "Decision Trees"],
      },
    ],
  },
  {
    category: "Data Engineering",
    projects: [
      {
        title: "Music Streaming Revenue Forecasting",
        year: "Feb 2026",
        description:
          "Scoped and built a revenue accrual forecasting engine for Finance - benchmarked ARIMA, Prophet, and Exponential Smoothing to justify an RPS-based approach given 8-month data constraints across 5 DSPs, 10 territories, 4 BUs. Eliminated forecast bias by detecting structural regime changes via CoV analysis; delivered Finance-ready output with conservative/aggressive scenarios.",
        tags: ["Python", "pandas", "Prophet", "ARIMA", "statsmodels", "matplotlib"],
      },
      {
        title: "Real-Time Financial Data Pipeline",
        year: "Jan 2026",
        description:
          "Ingested 7,840+ daily OHLCV records across 5 tickers into BigQuery. Scheduled 5-stage pipeline via Airflow DAG with Docker CeleryExecutor. Designed 3-layer dbt data model (raw → staging → fact → aggregate) with 6 automated schema tests.",
        tags: ["Python", "SQL", "PySpark", "Airflow", "dbt", "BigQuery", "Docker"],
      },
    ],
  },
  {
    category: "Applied Stats",
    projects: [
      {
        title: "Pet Pal",
        year: "2024",
        description:
          "Statistical analysis project applying hypothesis testing and regression methods to pet adoption data.",
        tags: ["R", "Statistical Modelling"],
      },
    ],
  },
  {
    category: "Full-Stack & Product",
    projects: [
      {
        title: "Prescripto - AI Healthcare Transcription",
        year: "Mar 2025",
        description:
          "Defined the product problem (language barriers + admin overhead in clinical settings), scoped AI-assisted solution, and shipped a speech-to-summary pipeline supporting 50+ languages - reducing SOAP note time 35% (143 ms/request). Cut critical medical hallucinations 40% by implementing a dual validation layer combining regex and Claude-3 semantic checks against ICD-11 codes.",
        tags: ["Python", "Whisper API", "Gemini 2.0 Flash", "Claude API"],
      },
      {
        title: "Advizr",
        year: "2024",
        description:
          "Full-stack advisory platform with user authentication, data visualization, and recommendation engine.",
        tags: ["JavaScript", "React", "Node.js"],
      },
      {
        title: "Happy Meal",
        year: "2024",
        description:
          "Full-stack application for meal planning and nutritional tracking.",
        tags: ["JavaScript", "HTML/CSS"],
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-24">
      <h1 className="mb-4">Projects</h1>
      <p className="text-text-muted text-sm leading-relaxed mb-16 max-w-[700px]">
        Technical projects spanning ML/MLOps, data engineering, applied
        statistics, and full-stack development. Grouped by theme.
      </p>

      <div className="space-y-16">
        {projectGroups.map((group) => (
          <section key={group.category}>
            <h2 className="mb-8 text-text-muted text-xs font-mono uppercase tracking-widest">
              {group.category}
            </h2>

            <div className="space-y-10">
              {group.projects.map((p) => (
                <article key={p.title}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <time className="text-text-muted text-xs font-mono whitespace-nowrap">
                      {p.year}
                    </time>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-2">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-surface px-2 py-0.5 text-xs font-mono text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-xs"
                      >
                        GitHub &rarr;
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
