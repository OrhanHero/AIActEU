"""AIActEU Command-Line Interface."""

import argparse
import json
from pathlib import Path

from aiact import DatasetComponent, GPAIEvaluator, GPAISpec, ModelProfile, RiskClassifier, SBOMGenerator


def main() -> None:
    parser = argparse.ArgumentParser(description="Validate system configuration against EU AI Act")
    parser.add_argument("--config", help="Path to sample model config JSON")
    parser.add_argument("--output", help="Path to output JSON report")
    parser.add_argument("--generate-sbom", action="store_true", help="Generate EU AI Act compliant AI-SBOM")
    parser.add_argument("--evaluate-gpai", action="store_true", help="Evaluate General-Purpose AI model obligations")
    args = parser.parse_args()

    config_data = {}
    if args.config:
        config_path = Path(args.config)
        if config_path.is_file():
            try:
                with config_path.open("r", encoding="utf-8") as f:
                    config_data = json.load(f)
            except (json.JSONDecodeError, OSError):
                config_data = {}

    if args.generate_sbom:
        model_name = config_data.get("name", "Custom-AI-Model")
        datasets_raw = config_data.get("datasets", [])
        datasets = [
            DatasetComponent(
                name=d.get("name", "Generic-Dataset"),
                provenance_category=d.get("category", "Web"),
                license_type=d.get("license", "Open"),
                opt_out_verified=d.get("opt_out_verified", True),
            )
            for d in datasets_raw
        ]
        sbom = SBOMGenerator().generate(
            model_name=model_name,
            version=config_data.get("version", "1.0"),
            base_architecture=config_data.get("architecture", "Transformer"),
            datasets=datasets,
            energy_kwh=float(config_data.get("energy_kwh", 0.0)),
        )
        report = sbom.to_dict()

    elif args.evaluate_gpai:
        spec = GPAISpec(
            model_name=config_data.get("name", "GPAI-Model"),
            total_flops=float(config_data.get("total_flops", 0.0)),
            has_copyright_policy=bool(config_data.get("has_copyright_policy", False)),
            has_training_summary=bool(config_data.get("has_training_summary", False)),
            has_technical_documentation=bool(config_data.get("has_technical_documentation", False)),
            has_downstream_instructions=bool(config_data.get("has_downstream_instructions", False)),
        )
        res_gpai = GPAIEvaluator().evaluate(spec)
        report = {
            "framework": "Regulation (EU) 2024/1689 (GPAI / Article 53)",
            "model_name": res_gpai.model_name,
            "is_systemic_risk": res_gpai.is_systemic_risk,
            "compliance_score_percent": res_gpai.compliance_score_percent,
            "missing_obligations": res_gpai.missing_obligations,
            "applicable_articles": res_gpai.applicable_articles,
        }

    else:
        domain = config_data.get("domain", "general")
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

