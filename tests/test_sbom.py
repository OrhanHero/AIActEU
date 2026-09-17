"""Unit tests for GPAI evaluation and AI-SBOM generator."""

from aiact import DatasetComponent, GPAIEvaluator, GPAISpec, SBOMGenerator


def test_gpai_evaluator_systemic_risk() -> None:
    evaluator = GPAIEvaluator()
    spec = GPAISpec(
        model_name="Frontier-LLM-1",
        total_flops=2e25,
        has_copyright_policy=True,
        has_training_summary=False,
        has_technical_documentation=True,
        has_downstream_instructions=True,
    )
    res = evaluator.evaluate(spec)
    assert res.is_systemic_risk is True
    assert "Article 51" in res.applicable_articles
    assert res.compliance_score_percent == 75.0
    assert len(res.missing_obligations) == 1


def test_sbom_generator() -> None:
    generator = SBOMGenerator()
    datasets = [
        DatasetComponent(name="CommonCrawl-Clean", provenance_category="Web", license_type="Permissive"),
        DatasetComponent(name="EU-Law-Corpus", provenance_category="Books", license_type="Public Domain"),
    ]
    sbom = generator.generate(model_name="EurLLM-70B", datasets=datasets, energy_kwh=12500.0)
    data = sbom.to_dict()
    assert data["bomFormat"] == "AI-SBOM-EU-AI-Act"
    assert data["component"]["name"] == "EurLLM-70B"
    assert len(data["lineage"]) == 2
