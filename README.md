# codewars-code-sync

Automatically sync your solved Codewars kata to GitHub using GitHub Actions.

This project fetches completed kata from the Codewars API, generates markdown files for each solved problem, and automatically commits them to your GitHub repository to keep your contribution graph active.

---

## Features

- Fetch completed Codewars kata using the Codewars API
- Generate markdown solution files automatically
- Auto commit and push changes using GitHub Actions
- Scheduled sync every 6 hours
- Keeps GitHub contribution graph active
- Beginner-friendly CI/CD automation project

---

## Tech Stack

- Node.js
- GitHub Actions
- Axios
- Codewars API

---

## Folder Structure

```bash
codewars-sync/
│
├── .github/
│   └── workflows/
│       └── codewars-sync.yml
│
├── scripts/
│   └── fetchCodewars.js
│
├── solutions/
│
├── package.json
└── README.md
```

---

## How It Works

```text
Codewars API
   ↓
Node.js Script
   ↓
Generate Markdown Files
   ↓
GitHub Action Runs
   ↓
Auto Commit & Push
   ↓
Green Contribution Graph ✅
```

---

## Setup

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/codewars-sync.git
```

```bash
cd codewars-sync
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Add Your Codewars Username

Open:

```bash
scripts/fetchCodewars.js
```

Replace:

```js
const USERNAME = "YOUR_CODEWARS_USERNAME";
```

with:

```js
const USERNAME = "__malware99";
```

---

### 4. Run Script Locally

```bash
node scripts/fetchCodewars.js
```

This generates markdown files inside:

```bash
solutions/
```

---

## GitHub Actions

The workflow automatically runs every 6 hours.

Workflow file:

```bash
.github/workflows/codewars-sync.yml
```

Manual trigger is also enabled from the GitHub Actions tab.

---

## Example Generated File

```md
# Two Sum

## Completed At
2026-05-21T12:00:00Z

## URL
https://www.codewars.com/kata/example-id
```

---

## Workflow Example

```yaml
name: Codewars Sync

on:
  schedule:
    - cron: "0 */6 * * *"

  workflow_dispatch:
```

---

## Future Improvements

- Store actual solution code
- Add TypeScript support
- Generate README stats automatically
- Track streaks
- Build dashboard UI using Next.js
- Multi-platform sync support:
  - LeetCode
  - HackerRank
  - Codewars

---

## Learning Outcomes

This project teaches:

- APIs
- Node.js scripting
- GitHub Actions
- CI/CD basics
- Automation
- File system handling
- Cron jobs
- Backend fundamentals

---

## Author

Built by __malware99

---
```
