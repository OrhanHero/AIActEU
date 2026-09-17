"""Unit tests for AIActEU compliance engine."""

from aiact import ModelProfile, RiskClassifier


def test_recruitment_high_risk() -> None:
    classifier = RiskClassifier()
    profile = ModelProfile(
        domain="recruitment_and_hr",
        autonomous_decision_making=True,
        biometric_identification=False,
    )
    assessment = classifier.evaluate(profile)
    assert "High-Risk" in assessment.risk_tier
    assert "Article 9" in assessment.mandatory_articles


def test_minimal_risk_default() -> None:
    classifier = RiskClassifier()
    profile = ModelProfile(domain="gaming", autonomous_decision_making=False)
    assessment = classifier.evaluate(profile)
    assert "Minimal" in assessment.risk_tier
    assert "Article 50" in assessment.mandatory_articles
