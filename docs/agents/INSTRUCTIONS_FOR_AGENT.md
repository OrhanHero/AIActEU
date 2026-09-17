# MISSION BRIEFING & SYSTEM DIRECTIVE FOR AI AGENT

**PROJECT**: AIActEU (Open-Source Governance & Readiness Overhaul)  
**OBJECTIVE**: Full automated alignment of repository `https://github.com/OrhanHero/AIActEU` for the **OpenAI Codex for Open Source** program review.  
**TARGET ROLE**: Primary Maintainer Assistance & Repo Engineering  
**MODE**: Autonomous Execution

---

## 1. STRATEGIC CONTEXT & OBJECTIVE

The project **AIActEU** was submitted to the **OpenAI Codex for Open Source** maintainer grant program. The application requests:
- 6 Months of ChatGPT Pro (Codex access)
- OpenAI API Credits for automated maintainer workflows
- Codex Security review and access

OpenAI reviewers evaluate incoming public repositories using strict maintainer heuristics:
1. **Repository Health & Governance**: Standardized OSI license, clear security disclosure policy, professional contributing guide, Code of Conduct.
2. **First-Screen Impact (README)**: Clear elevator pitch, problem statement (EU AI Act - Regulation EU 2024/1689), status badges, executable quick start, clear roadmap.
3. **Issue & PR Lifecycle**: Structured GitHub Issue and Pull Request templates.
4. **CI/CD Automation**: Functional GitHub Actions workflow for linting, code hygiene, and unit tests.
5. **Code Hygiene**: Strict `.gitignore` preventing secrets, local virtual environments, and build artifacts from leaking into the public repository.

Your task is to inspect the current repository root and create or update all governance, workflow, and documentation files strictly adhering to the specifications below.

---

## 2. EXECUTION DIRECTIVES FOR THE AGENT

You must execute the following operations in sequence:
1. Ensure the following directory structures exist:
   - `.github/`
   - `.github/workflows/`
   - `.github/ISSUE_TEMPLATE/`
2. Write each of the exact file contents defined below. Do not omit any section.
3. Verify that all files are UTF-8 encoded.
4. Perform git staging, commit with a standardized conventional commit message, and verify git status:
   ```bash
   git add .
   git commit -m "chore(governance): establish OSS standards, CI pipelines, and audit templates for Codex-for-OSS review"
   ```

---

## 3. EXACT FILE SPECIFICATIONS & ARTIFACTS

### ARTIFACT 1: `README.md`
**File Path**: `README.md`
```markdown
# AIActEU

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI Pipeline](https://github.com/OrhanHero/AIActEU/actions/workflows/ci.yml/badge.svg)](https://github.com/OrhanHero/AIActEU/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![EU AI Act Compliance](https://img.shields.io/badge/Focus-EU%20AI%20Act%20Governance-purple.svg)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)

An open-source developer toolkit and compliance framework designed to parse, classify, and audit artificial intelligence systems according to the **European Union Artificial Intelligence Act (Regulation EU 2024/1689)**.

---

## 📌 Mission

The EU AI Act introduces strict horizontal risk tiers (Prohibited, High-Risk, Transparency/Limited, Minimal) and rigorous documentation duties. **AIActEU** provides an accessible, developer-first toolchain to:
* Automatically evaluate system specifications against prohibited and high-risk definitions (Annex III).
* Structure mandatory technical documentation and post-market monitoring pipelines.
* Provide clean, versioned APIs and CLI tools for automated CI/CD compliance validation.

---

## 🚀 Key Features

* **Risk Tier Assessment Engine**: Rule-based and semantic validation to determine obligations under Title II, III, and IV.
* **Structured Regulatory Taxonomy**: Up-to-date parsing of EU regulatory articles, recital references, and harmonized standards.
* **Automated Audit Reports**: Generation of machine-readable (JSON/YAML) and human-readable (Markdown/HTML) compliance declarations.
* **DevOps & CI/CD Ready**: Plug validation checks directly into automated build steps to prevent deploying non-compliant AI pipelines.

---

## 🛠️ Quick Start

### Prerequisites
* Python >= 3.11
* `git`

### Installation
```bash
git clone https://github.com/OrhanHero/AIActEU.git
cd AIActEU
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -e .
```

### Basic Usage

#### 1. Validate System Configuration via CLI
```bash
aiact-check --config ./examples/sample-model-config.json --output report.json
```

#### 2. Python API Integration
```python
from aiact import RiskClassifier, ModelProfile

profile = ModelProfile(
    domain="recruitment_and_hr",
    autonomous_decision_making=True,
    biometric_identification=False
)

classifier = RiskClassifier()
assessment = classifier.evaluate(profile)

print(f"Assigned Risk Tier: {assessment.risk_tier}")
print(f"Applicable Articles: {assessment.mandatory_articles}")
```

---

## 🗺️ Roadmap

- [x] Initial taxonomy mapping for Regulation (EU) 2024/1689
- [x] Annex III High-Risk heuristic engine
- [ ] General-Purpose AI (GPAI) model duty checklist (Article 53)
- [ ] Automated SBOM (Software Bill of Materials) & dataset lineage generator
- [ ] Direct integration with LLM-evaluation pipelines

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before opening pull requests.

---

## 🔒 Security

For responsible vulnerability disclosure, see [SECURITY.md](SECURITY.md).

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for full details.
```

---

### ARTIFACT 2: `LICENSE`
**File Path**: `LICENSE`
```text
MIT License

Copyright (c) 2026 OrhanHero and AIActEU Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

### ARTIFACT 3: `SECURITY.md`
**File Path**: `SECURITY.md`
```markdown
# Security Policy

## Supported Versions

We actively maintain and provide security patches for the latest development releases.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1.0 | :x:                |

---

## Reporting a Vulnerability

Because AIActEU provides compliance and verification tooling, code integrity and supply-chain security are critical priorities.

1. **Do NOT report security vulnerabilities via public GitHub Issues.**
2. Email your findings directly to the maintainer via GitHub Private Vulnerability Reporting or via maintainer profile contact.
3. Please include:
   * Description of the vulnerability and attack vector.
   * Steps to reproduce or proof-of-concept code.
   * Potential impact on automated compliance checks or downstream consumers.

We acknowledge reports within 48 hours and coordinate fixes prior to public disclosure.
```

---

### ARTIFACT 4: `CONTRIBUTING.md`
**File Path**: `CONTRIBUTING.md`
```markdown
# Contributing to AIActEU

Thank you for your interest in improving AIActEU! As an open-source project dedicated to EU AI governance, we welcome bug fixes, documentation updates, and feature extensions.

---

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Development Workflow

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/OrhanHero/AIActEU.git
   cd AIActEU
   ```
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/clear-description
   ```
3. **Environment Setup**:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   pip install -e ".[dev]"
   ```
4. **Code Quality**:
   Run tests and style linters before submitting:
   ```bash
   pytest
   ruff check .
   ```
5. **Commit Message Standards**:
   Use conventional commits (e.g., `feat: add GPAI transparency evaluator`, `fix: update Annex III citation`).
6. **Open a Pull Request**: Submit to the `main` branch with a clear description using our PR template.
```

---

### ARTIFACT 5: `CODE_OF_CONDUCT.md`
**File Path**: `CODE_OF_CONDUCT.md`
```markdown
# Contributor Covenant Code of Conduct

## Our Pledge
We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.

## Our Standards
Examples of positive behavior:
* Demonstrating empathy and kindness toward others
* Respecting differing viewpoints and constructive critique
* Focusing on what is best for the overall community

Unacceptable behavior includes harassment, discriminatory remarks, and publishing private information without permission.
```

---

### ARTIFACT 6: `.gitignore`
**File Path**: `.gitignore`
```gitignore
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# Packaging & Distribution
build/
dist/
*.egg-info/
.eggs/

# Virtual Environments
.venv
venv/
env/

# Testing & Linters
.pytest_cache/
.ruff_cache/
.coverage
htmlcov/

# IDEs & OS Files
.vscode/
.idea/
.DS_Store
Thumbs.db
*.env
*.env.local
```

---

### ARTIFACT 7: `.github/workflows/ci.yml`
**File Path**: `.github/workflows/ci.yml`
```yaml
name: CI Pipeline

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  lint-and-test:
    name: Code Quality & Tests
    runs-on: ubuntu-latest

    strategy:
      matrix:
        python-version: ["3.11", "3.12"]

    steps:
      - name: Checkout Source
        uses: actions/checkout@v4

      - name: Set up Python ${{ matrix.python-version }}
        uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
          cache: "pip"

      - name: Install Dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
          pip install ruff pytest

      - name: Run Linters
        run: |
          ruff check .

      - name: Run Test Suite
        run: |
          if [ -d "tests" ]; then pytest tests/ -v; else echo "No tests folder configured yet."; fi
```

---

### ARTIFACT 8: `.github/ISSUE_TEMPLATE/bug_report.md`
**File Path**: `.github/ISSUE_TEMPLATE/bug_report.md`
```markdown
---
name: Bug report
about: Create a report to help us improve AIActEU
title: "[BUG] "
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**Regulation / Reference affected**
Which EU AI Act Article, Annex, or CLI command behaves unexpectedly?

**To Reproduce**
Steps to reproduce the behavior:
1. Input data / config: `...`
2. Run command: `...`
3. Error observed: `...`

**Expected behavior**
A clear description of what you expected to happen.
```

---

### ARTIFACT 9: `.github/ISSUE_TEMPLATE/feature_request.md`
**File Path**: `.github/ISSUE_TEMPLATE/feature_request.md`
```markdown
---
name: Feature request
about: Suggest an idea or regulatory mapping extension
title: "[FEAT] "
labels: enhancement
assignees: ''
---

**Is your feature request related to a problem? Please describe.**
A clear description of what problem you are facing.

**Describe the solution you'd like**
A description of what you want to happen.

**Relevant EU AI Act Reference**
Cite Article, Annex, or Recital (e.g., Article 6 / Annex III).
```

---

### ARTIFACT 10: `.github/PULL_REQUEST_TEMPLATE.md`
**File Path**: `.github/PULL_REQUEST_TEMPLATE.md`
```markdown
## Summary of Changes

Closes #(issue)

### Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Regulatory data update (EU AI Act mappings/rules)
- [ ] Documentation update
- [ ] CI/CD or tooling enhancement

### Testing Checklist
- [ ] All automated tests pass locally (`pytest`)
- [ ] Linter checks pass (`ruff check .`)
- [ ] Documentation updated where appropriate
```

---

## 4. AGENT VERIFICATION CHECKLIST
Upon writing all files, execute:
1. `git status` -> Verify all 10 files are tracked.
2. Ensure no binary or private files are accidentally staged.
3. Commit and push cleanly to `origin/main`.
