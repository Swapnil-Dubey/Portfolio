const output = document.getElementById('output');
const input = document.getElementById('terminalInput');
const promptLabel = "swapnil@portfolio:~$ ";
let commandHistory = [];
let historyIndex = -1;
let outputQueue = Promise.resolve();

const responses = {
  help: `Available commands:\nhelp - list available commands\nabout - info about me\nexperience - my work experience\nprojects - featured projects\nskills - technical skills\neducation - my academic background\ncontact - how to reach me\nclear - clear terminal`,
  about: `Hey, I'm Swapnil Dubey.\n4th-year CS & Statistics student @ UBC (Dean’s Honour List, GPA 3.7/4.0).\nCyber Risk Analyst Co-op @ Teck Resources.\nIncoming Enterprise Solutions SWE Co-op @ BCI.\nI build ML/GenAI experiments and internal tools — RAG apps, BI dashboards, risk automations.`,
  experience: `[1] Teck Resources Ltd. — Cyber Risk Analyst Co-op (Sep 2025 – Present)\n• Triage daily cyber risk requests in ServiceNow and run AL1/AL2 assessments.\n• Built Power Apps + Automate workflow to sync ServiceNow to SharePoint (10+ hrs/week saved).\n• Maintain risk register, dashboards, and SLA metrics.\n\n[2] Teck Resources Ltd. — Business Analyst Co-op (May–Aug 2025)\n• Built Power BI dashboards for cybersecurity KPIs and monthly reporting.\n• Joined datasets (LMS, phishing, finance) using Power Query & SQL.\n• Co-planned phishing simulations for 10K+ employees; +20% report rate.\n\n[3] BCI — Enterprise Solutions SWE Co-op (Incoming Jan–Apr 2026)\n• Supporting internal applications, Jira/Confluence workflows, and business integrations.`,
  projects: `Prescripto — AI Healthcare Transcription (Python, Whisper, Gemini Flash)\n• Real-time multilingual transcription and summary pipeline; ~143ms per request.\n• Dual validation (regex + ICD-11 semantic checks) reduced hallucinations by ~40%.\n\nAdvizr — Academic Advice RAG (Python, Cohere API)\n• Personalized UBC course advisor using UBCGrades + RateMyProfessor APIs.\n• Custom re-ranking over 65K data points; 80% faster responses.\n\nHappy Meal — Nutrition Platform (PHP, Oracle SQL)\n• Full-stack diet planner with 30% faster queries and schema normalization.\n\nHeart Disease ML — Logistic Regression, R\n• 79.8% accuracy, reduced false negatives by ~18%.`,
  skills: `Languages: Python, R, Java, SQL, HTML/CSS\nData & ML: scikit-learn, logistic regression, LASSO, KNN, trees, CV\nGenAI & NLP: OpenAI, Cohere, RAG pipelines, Whisper, embeddings\nBI & Automation: Power BI, Power Apps, Power Automate, SharePoint, ServiceNow\nRisk & Product: Cyber risk assessments, PAM, Jira, Confluence, agile workflows`,
  education: `University of British Columbia — BSc Computer Science & Statistics (2022–2027)\nDean’s Honour List | Science Co-op | GPA 3.7/4.0\nCoursework: Applied ML, Computer Vision, Data Science, Databases, Algorithms, Statistical Modelling.`,
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

