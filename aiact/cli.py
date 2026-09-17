"""AIActEU Command-Line Interface."""

import argparse
import json
from pathlib import Path

from aiact import ModelProfile, RiskClassifier


def main() -> None:
    parser = argparse.ArgumentParser(description="Validate system configuration against EU AI Act")
    parser.add_argument("--config", help="Path to sample model config JSON")
    parser.add_argument("--output", help="Path to output JSON report")
    args = parser.parse_args()

    domain = "general"
    if args.config:
        config_path = Path(args.config)
        if config_path.is_file():
            try:
                with config_path.open("r", encoding="utf-8") as f:
                    data = json.load(f)
                    domain = data.get("domain", "general")
            except (json.JSONDecodeError, OSError):
                domain = "general"

    classifier = RiskClassifier()
    res = classifier.evaluate(ModelProfile(domain=domain))
    report = {
        "framework": "Regulation (EU) 2024/1689",
        "risk_tier": res.risk_tier,
        "mandatory_articles": res.mandatory_articles,
    }

    if args.output:
        with Path(args.output).open("w", encoding="utf-8") as f:
            json.dump(report, f, indent=2)
    else:
        print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
