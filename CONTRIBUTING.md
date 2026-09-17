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
