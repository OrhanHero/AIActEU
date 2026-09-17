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
- [x] General-Purpose AI (GPAI) model duty checklist (Article 53)
- [x] Automated SBOM (Software Bill of Materials) & dataset lineage generator
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
