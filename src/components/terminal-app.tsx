"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const responses: Record<string, string> = {
  help: `Available commands:
help - list available commands
about - info about me
experience - my work experience
projects - featured projects
skills - technical skills
education - my academic background
contact - how to reach me
clear - clear terminal`,
  about: `Hey, I'm Swapnil Dubey.
4th-year CS & Statistics student @ UBC (Dean's Honour List, GPA 3.7/4.0).
Incoming Technical Product Manager Intern @ Electronic Arts (Sept–Dec 2026).
Software Engineer Co-op @ BCI (Jan–Apr 2026).
Cyber Risk Analyst Co-op @ Teck Resources (Sep–Dec 2025).
Business Analyst Co-op @ Teck Resources (May–Aug 2025).
I build ML/data engineering pipelines, GenAI tools, and internal automation.`,
  experience: `[1] Electronic Arts - Technical Product Manager Intern (Sept–Dec 2026) [INCOMING]
• Production Infrastructure & Engineering - internal platforms, tools, and services.

[2] British Columbia Investment Management Corporation (BCI) - Software Engineer Co-op (Jan–Apr 2026)
• Owned end-to-end delivery of an internal platform serving 70+ Legal Affairs users.
• Saved ~3 hrs/week for 100+ stakeholders via a Python LLM/RAG pipeline on Azure.
• Unified 3 siloed systems into a single access layer for 100+ Legal Affairs users.

[3] Teck Resources Ltd. - Cyber Risk Analyst Co-op (Sep–Dec 2025)
• Designed centralized Cybersecurity intake with ServiceNow team - defined services, request types, SLAs.
• Built Power Apps + Power Automate workflow - eliminated 10+ manual entries/week.
• Authored requirements as primary POC using Jira/Confluence.

[4] Teck Resources Ltd. - Business Analyst Co-op (May–Aug 2025)
• Improved phishing report rate ~20% across 10K+ employees via A/B testing and segmentation.
• Prepared quarterly board reports for VP, CFO, and Board governance cycles.
• Co-planned phishing simulations for 10K+ employees aligned to KPI targets.`,
  projects: `[1] Fraud Detection MLOps Pipeline (Python, XGBoost, MLflow, FastAPI, Docker) - Mar 2026
• 0.874 AUPRC (21% above baseline) on 590K+ transactions.
• MLflow model registry + Docker + GitHub Actions CI/CD + Evidently drift monitoring.

[2] Music Streaming Revenue Forecasting (Python, Prophet, ARIMA) - Feb 2026
• Benchmarked ARIMA, Prophet, and Exponential Smoothing across 5 DSPs, 10 territories, 4 BUs.
• Detected regime changes via CoV analysis; delivered Finance-ready output.

[3] Financial Data Pipeline (PySpark, Airflow, dbt, BigQuery, Docker) - Jan 2026
• 7,840+ daily OHLCV records via 5-stage Airflow DAG into BigQuery.
• 3-layer dbt data model with 6 automated schema tests.

[4] Prescripto - AI Healthcare Transcription (Python, Whisper, Claude API) - Mar 2025
• Speech-to-summary pipeline supporting 50+ languages, reducing SOAP note time 35%.
• Cut medical hallucinations 40% via dual validation against ICD-11 codes.`,
  skills: `Languages & Databases: Python; R; SQL (Azure SQL, PostgreSQL, Oracle); JavaScript; Git; REST APIs
Product & Analytics: Requirements gathering; A/B testing; KPI design; Stakeholder readouts; Jira; Confluence
AI & ML: Scikit-learn; XGBoost; MLflow; Evidently; LLMs (Claude, OpenAI); RAG pipelines
Tools & Platforms: Docker; GitHub Actions; FastAPI; Power BI; Power Automate; Azure; GCP`,
  education: `University of British Columbia - BSc Computer Science & Statistics (Sep 2022 – May 2027)
Dean's Honour List | Science Co-op | GPA 3.7/4.0`,
  contact: `Email: sdubey14@student.ubc.ca
LinkedIn: linkedin.com/in/swapnildub/
GitHub: github.com/swapnil-dubey`,
};

interface Line {
  content: string;
  className: string;
}

export function TerminalApp() {
  const [lines, setLines] = useState<Line[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const addLine = useCallback((content: string, className = "line") => {
    setLines((prev) => [...prev, { content, className }]);
  }, []);

  useEffect(() => {
    addLine("swapnil@portfolio:~$ Welcome to Swapnil Dubey's portfolio terminal.");
    addLine("Type 'help' to see available commands.");
  }, [addLine]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (command: string) => {
    const trimmed = command.trim();
    addLine(`swapnil@portfolio:~$ ${trimmed}`);

    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed.toLowerCase() === "clear") {
      setLines([]);
      return;
    }

    const response = responses[trimmed.toLowerCase()];
    if (response) {
      response.split("\n").forEach((line) => addLine(line));
    } else {
      addLine(`command not found: ${trimmed}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const next = prev === -1 ? history.length - 1 : Math.max(0, prev - 1);
        setInputValue(history[next] || "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        if (prev >= history.length - 1) {
          setInputValue("");
          return -1;
        }
        const next = prev + 1;
        setInputValue(history[next] || "");
        return next;
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(0,255,159,0.08), transparent 35%), radial-gradient(circle at 80% 10%, rgba(0,200,255,0.1), transparent 30%), #0b0d0f",
        fontFamily: "'JetBrains Mono', monospace",
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className="w-full max-w-[1100px] min-h-[80vh] flex flex-col overflow-hidden rounded-xl"
        style={{
          background: "#0f1115",
          border: "1px solid #1f2329",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-3.5 py-2.5"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.04), transparent)",
            borderBottom: "1px solid #1f2329",
          }}
        >
          <div className="flex gap-2" aria-hidden="true">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
          </div>
          <span className="text-sm" style={{ color: "#8d96a0" }}>
            swapnil@portfolio:~
          </span>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col gap-3 p-4 overflow-hidden">
          <div
            ref={outputRef}
            className="flex-1 overflow-y-auto whitespace-pre-wrap break-words leading-relaxed pr-1.5"
            style={{ color: "#d6dbe0" }}
            aria-live="polite"
          >
            {lines.map((line, i) => (
              <div key={i} className="my-1">
                {line.content}
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid #1f2329",
            }}
          >
            <span style={{ color: "#39ff14", fontWeight: 700 }}>
              <span style={{ color: "#39ff14" }}>swapnil</span>@
              <span style={{ color: "#8d96a0" }}>portfolio</span>:
              <span style={{ color: "#00c8ff" }}>~</span>$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal input"
              className="flex-1 bg-transparent border-none outline-none text-base"
              style={{
                color: "#d6dbe0",
                caretColor: "#00ff9f",
                fontFamily: "inherit",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center py-2.5 px-3.5 text-sm"
          style={{
            borderTop: "1px solid #1f2329",
            color: "#8d96a0",
            background: "rgba(255,255,255,0.01)",
          }}
        >
          &copy; 2026 Swapnil Dubey
        </div>
      </div>
    </div>
  );
}
