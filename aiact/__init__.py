"""AIActEU - EU AI Act (Regulation EU 2024/1689) Developer Toolkit."""

from dataclasses import dataclass, field
from typing import List


@dataclass
class ModelProfile:
    domain: str
    autonomous_decision_making: bool = False
    biometric_identification: bool = False


@dataclass
class AssessmentResult:
    risk_tier: str
    mandatory_articles: List[str] = field(default_factory=list)


class RiskClassifier:
    """Evaluates AI systems against EU AI Act risk categories."""

    def evaluate(self, profile: ModelProfile) -> AssessmentResult:
        high_risk_domains = {
            "recruitment_and_hr",
            "biometrics",
            "critical_infrastructure",
            "law_enforcement",
            "education_and_vocational_training",
        }

        if profile.biometric_identification:
            return AssessmentResult(
                risk_tier="Prohibited / High-Risk (Annex III, Title II)",
                mandatory_articles=["Article 5", "Article 9", "Article 10", "Article 14"],
            )

        if profile.domain in high_risk_domains or profile.autonomous_decision_making:
            return AssessmentResult(
                risk_tier="High-Risk (Annex III)",
                mandatory_articles=["Article 9", "Article 11", "Article 13", "Article 14"],
            )

        return AssessmentResult(
            risk_tier="Minimal / Transparency Only (Title IV)",
            mandatory_articles=["Article 50"],
        )
