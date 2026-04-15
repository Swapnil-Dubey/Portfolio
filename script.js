const output = document.getElementById('output');
const input = document.getElementById('terminalInput');
const promptLabel = "swapnil@portfolio:~$ ";
let commandHistory = [];
let historyIndex = -1;
let outputQueue = Promise.resolve();

const responses = {
  help: `Available commands:\nhelp - list available commands\nabout - info about me\nexperience - my work experience\nprojects - featured projects\nskills - technical skills\neducation - my academic background\ncontact - how to reach me\nclear - clear terminal`,
  about: `Hey, I’m Swapnil Dubey.\n4th-year CS & Statistics student @ UBC (Dean’s Honour List, GPA 3.7/4.0).\nSoftware Engineer Co-op @ BCI (Jan–Apr 2026).\nBusiness & Cyber Risk Analyst Co-op @ Teck Resources (May–Dec 2025).\nI build ML/data engineering pipelines, GenAI tools, and internal automation — LLM pipelines, ETL systems, fraud detection, forecasting.`,
  experience: `[1] British Columbia Investment Management Corporation (BCI) — Software Engineer Co-op (Jan–Apr 2026)\n• Automated weekly news briefings for 100+ Legal stakeholders at a $250B+ AUM firm via Python + LLM pipeline — saving ~3 hrs/week.\n• Eliminated manual data entry across 3 legal trackers by engineering an email parsing pipeline extracting structured JSON via Claude API.\n• Built a Python/SQL ETL pipeline querying Azure SQL → SharePoint, cutting Legal Affairs sync prep time ~60%.\n• Developed an internal CRUD app with dev/staging/production releases serving 100+ Legal Affairs users enterprise-wide.\n\n[2] Teck Resources Ltd. — Business & Cyber Risk Analyst Co-op (May–Dec 2025)\n• Lifted phishing reporting rate by 20% for 10K+ employees via send-time analysis, A/B testing, and board-level readouts.\n• Cut report prep ~4 hrs/month for VP, CFO, and Board by joining LMS, phishing, and finance datasets with SQL & Power Query.\n• Built Power BI dashboards consolidating training, phishing, and compliance KPIs across 3 leadership tiers.\n• Eliminated 10+ manual entries/week with a Power Automate workflow mirroring ServiceNow fields to SharePoint.`,
  projects: `[1] Fraud Detection MLOps Pipeline (Python, XGBoost, MLflow, FastAPI, Docker, Evidently) — Mar 2026\n• F2 score 0.71, AUPRC 0.75 on severely imbalanced dataset (3.5% fraud rate) using XGBoost + optimal threshold tuning.\n• Engineered preprocessing pipeline across 400+ sparse features (log transform, null indicators, target encoding).\n• Productionized end-to-end: FastAPI + Docker + MLflow model registry with champion alias versioning.\n• Monitored model health via Evidently data drift reports on training vs. live transaction distributions.\n\n[2] Music Streaming Revenue Forecasting (Python, pandas, Prophet, ARIMA, statsmodels) — Feb 2026\n• Benchmarked ARIMA, Prophet, and Exponential Smoothing across 5 DSPs, 10 territories, and 4 business units.\n• Detected YouTube RPS regime change via CoV analysis; applied DSP-specific baseline windows to prevent overestimation.\n• Surfaced TikTok paradox: 73% of stream volume but only 2.8% of revenue at $2.44 RPS/M vs Spotify’s $2,221.\n\n[3] Financial Data Pipeline (Python, SQL, PySpark, Airflow, dbt, BigQuery, Docker) — Jan 2026\n• Ingested 7,840+ daily OHLCV records across 5 tickers (AAPL, MSFT, GOOGL, AMZN, TSLA) into BigQuery.\n• Scheduled 5-stage pipeline (ingest → process → load → transform → test) via Airflow DAG with Docker CeleryExecutor.\n• Designed 3-layer dbt data model (raw → staging → fact → aggregate) with 6 automated schema tests.\n\n[4] Understanding & Predicting Heart Disease (R, Logistic Regression, LASSO) — Aug 2024\n• Clinical risk prediction model using 15+ patient biomarkers; reduced false negatives 18% via threshold tuning for recall.`,
  skills: `Languages & Tools: Python (pandas, numpy), R, SQL (BigQuery, PostgreSQL, Azure SQL), Git, REST APIs, Docker\nML & Analytics: Scikit-learn, XGBoost, PyTorch, Regression, LASSO, Decision Trees, Cross-validation, Feature engineering, A/B Testing, Bayesian methods\nData Engineering: PySpark, Apache Airflow, dbt Core, Google BigQuery, ETL/ELT pipelines, Parquet\nVisualization: Matplotlib, Seaborn, Power BI, Excel (pivots, Power Query)\nCloud & MLOps: Microsoft Azure, GCP, MLflow, FastAPI, GitHub Actions, Evidently`,
  education: `University of British Columbia — BSc Computer Science & Statistics (Sep 2022 – May 2027)\nDean’s Honour List | Science Co-op | GPA 3.7/4.0\nCoursework: Applied ML, Computer Vision, Data Science, Databases, Algorithms, Statistical Modelling.`,
  contact: `Email: sdubey14@student.ubc.ca\nLinkedIn: linkedin.com/in/swapnildub/\nGitHub: github.com/swapnil-dubey`
};

function appendLine(content, className = 'line') {
  const line = document.createElement('div');
  line.className = className;
  line.innerHTML = content;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function typeText(text) {
  return new Promise((resolve) => {
    const line = document.createElement('div');
    line.className = 'line';
    output.appendChild(line);
    let index = 0;
    const interval = setInterval(() => {
      line.textContent = text.slice(0, index + 1);
      index += 1;
      output.scrollTop = output.scrollHeight;
      if (index >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, 8);
  });
}

function queueOutput(text) {
  outputQueue = outputQueue.then(() => typeText(text));
}

function handleCommand(command) {
  const trimmed = command.trim();
  const safeCommand = escapeHtml(trimmed);
  appendLine(`<span class="prompt"><span class="user">swapnil</span>@<span class="host">portfolio</span>:<span class="dir">~</span>$</span> ${safeCommand}`);
  if (!trimmed) return;

  commandHistory.push(trimmed);
  historyIndex = commandHistory.length;

  if (trimmed.toLowerCase() === 'clear') {
    output.innerHTML = '';
    return;
  }

  const response = responses[trimmed.toLowerCase()];
  if (response) {
    queueOutput(response);
  } else {
    queueOutput(`command not found: ${trimmed}`);
  }
}

function showBootMessages() {
  const bootMessages = [
    `${promptLabel}Welcome to Swapnil Dubey’s portfolio terminal.`,
    "Type 'help' to see available commands."
  ];

  bootMessages.forEach((message) => queueOutput(message));
}

function setupInput() {
  input.focus();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = input.value;
      input.value = '';
      handleCommand(value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex -= 1;
        input.value = commandHistory[historyIndex] || '';
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex += 1;
        input.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        input.value = '';
      }
      setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
    }
  });
}

showBootMessages();
setupInput();

