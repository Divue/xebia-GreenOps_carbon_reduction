# 🌿 GreenOps AI — Unified Carbon Reduction Dashboard

> A proactive, AI-powered sustainability platform that helps Xebia transition from manual ESG reporting to real-time, data-driven carbon management.

[![🌿 GreenOps Shift-Left Check](https://github.com/YOUR_ORG/YOUR_REPO/actions/workflows/green-score-check.yml/badge.svg)](https://github.com/YOUR_ORG/YOUR_REPO/actions/workflows/green-score-check.yml)
[![✅ PR Sanity Checks](https://github.com/YOUR_ORG/YOUR_REPO/actions/workflows/pr-checks.yml/badge.svg)](https://github.com/YOUR_ORG/YOUR_REPO/actions/workflows/pr-checks.yml)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [Architecture](#️-architecture)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [CI/CD & Shift-Left Strategy](#-cicd--shift-left-sustainability)
- [Team](#-team)
- [Contributing](#-contributing)

---

## 🌍 Overview

**GreenOps AI** is an MVP dashboard that serves as a central hub for monitoring, forecasting, and reducing Xebia's cloud carbon footprint. It integrates AWS/Azure consumption data, applies AI forecasting, and surfaces actionable recommendations — all in real time.

---

## ❗ The Problem

| Challenge | Impact |
|---|---|
| Decentralised cloud data (AWS + Azure) | No single source of truth for carbon cost |
| Manual, retrospective ESG reporting | Too slow to influence infrastructure decisions |
| No predictive intelligence | Reactive optimisation — expensive and carbon-heavy |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     GreenOps AI Platform                     │
├──────────────┬──────────────┬──────────────┬────────────────┤
│   Frontend   │   Backend    │   ML Model   │  GreenOps      │
│   (React)    │ (Flask/Fast  │  (ARIMA /    │  Engine        │
│              │    API)      │  Regression) │  (Scores +     │
│  Dashboard   │  REST APIs   │  Forecasting │  Reco's)       │
│  Charts      │  Data Pipel  │  CO2e Pred.  │  CI/CD Gate    │
└──────┬───────┴──────┬───────┴──────┬───────┴────────────────┘
       │              │              │
       └──────────────┴──────────────┘
                      │
          ┌───────────┴───────────┐
          │  Cloud Data Sources   │
          │   AWS  │  Azure       │
          └───────────────────────┘
```

---

## ✨ Features

- **📊 Real-time ESG Dashboard** — Total CO2e, Cloud Cost per kg CO2e, Carbon Intensity
- **🤖 AI Carbon Forecasting** — Quarterly emission predictions using ARIMA/Regression
- **🌱 Green Score (A–F)** — Per-project sustainability rating
- **💡 Optimization Engine** — Actionable recommendations (right-sizing VMs, greener regions)
- **🔁 Shift-Left CI/CD Gate** — Automatic carbon checks on every PR to `main`
- **☁️ Multi-Cloud Support** — AWS and Azure data aggregation

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Recharts / Chart.js |
| Backend | Python, Flask / FastAPI |
| ML / Forecasting | Python, scikit-learn, statsmodels (ARIMA) |
| Data Processing | Pandas, NumPy |
| CI/CD | GitHub Actions |
| Hosting | TBD (Render / Railway / Vercel) |

---

## 📁 Project Structure

```
greenops-ai/
│
├── .github/
│   └── workflows/
│       ├── green-score-check.yml   # Shift-Left carbon gate on every PR
│       └── pr-checks.yml           # Lint, build, and sanity checks
│
├── frontend/                       # React dashboard (Person 1)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── backend/                        # Flask/FastAPI server (Person 2)
│   ├── app.py
│   ├── routes/
│   ├── tests/
│   └── requirements.txt
│
├── ml/                             # AI forecasting model (Person 3)
│   ├── model.py
│   ├── train.py
│   ├── data/
│   └── requirements.txt
│
├── greenops/                       # Scoring & recommendations (Person 4)
│   ├── green_score.py
│   ├── recommendations.py
│   └── carbon_calc.py
│
├── docs/
│   ├── api-contract.md             # Backend API contract (v1)
│   └── architecture.md
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Python ≥ 3.11
- Git

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_ORG/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Run the Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
# API runs at http://localhost:5000
```

### 3. Run the Frontend

```bash
cd frontend
npm install
npm start
# Dashboard runs at http://localhost:3000
```

### 4. Run the ML Model

```bash
cd ml
pip install -r requirements.txt
python train.py
```

---

## 📡 API Reference

Base URL: `http://localhost:5000` (dev) | `https://YOUR_DEPLOYED_URL` (prod)

| Endpoint | Method | Description |
|---|---|---|
| `/api/dashboard` | GET | Summary KPIs (CO2e, cost, green score) |
| `/api/cloud-usage` | GET | Cloud VM/storage/network usage |
| `/api/emissions/history` | GET | Monthly historical emissions |
| `/api/forecast` | GET | Predicted emissions for next 3 months |
| `/api/green-score` | GET | Current green score + pass/warn/critical |
| `/api/recommendations` | GET | Optimization suggestions with savings |
| `/api/emissions/by-provider` | GET | CO2e split by AWS / Azure |
| `/api/emissions/by-region` | GET | CO2e split by cloud region |
| `/api/pipeline-status` | GET | CI/CD shift-left gate result |

Full contract: [`docs/api-contract.md`](docs/api-contract.md)

---

## 🔁 CI/CD & Shift-Left Sustainability

Every Pull Request to `main` triggers two automated checks:

### 1. 🌿 Green Score Gate (`green-score-check.yml`)

Calls `/api/pipeline-status` and evaluates the carbon score:

| Status | Score | Action |
|---|---|---|
| ✅ Pass | A / B / C | Merge allowed |
| ⚠️ Warning | D | Merge allowed, flagged for review |
| ❌ Critical | F | **Merge blocked** — fix infra first |

This operationalises the **"Shift-Left Sustainability"** concept from the project spec — developers are notified of carbon issues *before* code hits production.

### 2. ✅ PR Sanity Checks (`pr-checks.yml`)

- Python lint (flake8) on backend and ML code
- React build check on frontend
- JSON/YAML config validation
- PR description enforcement

---

## 👥 Team

| Member | Role | Responsibility |
|---|---|---|
| Person 1 | Frontend Developer | React app, charts, KPI cards, responsive design |
| Person 2 | Backend Developer | Flask/FastAPI, API endpoints, data processing |
| Person 3 | Data / ML Engineer | Dataset generation, ARIMA model, forecasting |
| Person 4 | GreenOps Engineer | Carbon calc, Green Score (A–F), recommendation engine |
| **Person 5** | **DevOps & PM** | **GitHub, CI/CD, hosting, docs, demo** |

---

## 🤝 Contributing

> All team members: **never push directly to `main`.**

```bash
# 1. Create your feature branch
git checkout -b feature/your-name-feature-name

# 2. Make your changes, then commit
git add .
git commit -m "feat: add emissions chart component"

# 3. Push your branch
git push origin feature/your-name-feature-name

# 4. Open a Pull Request to main on GitHub
# → Both CI/CD workflows will run automatically
# → Get at least 1 approval before merging
```

### Branch Naming Convention

```
feature/person1-dashboard-ui
feature/person2-flask-api
feature/person3-arima-model
feature/person4-green-score
feature/person5-cicd-setup     ← that's you!
```

### Commit Message Format

```
feat:     new feature
fix:      bug fix
docs:     documentation only
chore:    setup, config, tooling
refactor: code restructure, no feature change
```

---

> Built with 💚 by Team GreenOps | Xebia Academy Project
