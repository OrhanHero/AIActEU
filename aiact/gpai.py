"""General-Purpose AI (GPAI) Model Obligations under Article 53 of Regulation (EU) 2024/1689."""

from dataclasses import dataclass, field


@dataclass
class GPAISpec:
    model_name: str
    total_flops: float = 0.0  # Cumulative training compute in FLOPs
    has_copyright_policy: bool = False
    has_training_summary: bool = False
    has_technical_documentation: bool = False
    has_downstream_instructions: bool = False


@dataclass
class GPAIAuditResult:
    model_name: str
    is_systemic_risk: bool
    compliance_score_percent: float
    missing_obligations: list[str] = field(default_factory=list)
    applicable_articles: list[str] = field(default_factory=list)


class GPAIEvaluator:
    """Evaluates GPAI models against EU AI Act Article 51, 52, and 53 requirements."""

    SYSTEMIC_RISK_THRESHOLD: float = 1e25  # 10^25 FLOPs threshold per Article 51

    def evaluate(self, spec: GPAISpec) -> GPAIAuditResult:
        missing = []
        applicable = ["Article 53"]

        is_systemic = spec.total_flops >= self.SYSTEMIC_RISK_THRESHOLD
        if is_systemic:
            applicable.extend(["Article 51", "Article 52", "Article 55"])

        if not spec.has_technical_documentation:
            missing.append("Technical documentation of model & architecture (Art. 53(1)(a))")
        if not spec.has_downstream_instructions:
            missing.append("Integration guidelines for downstream providers (Art. 53(1)(b))")
        if not spec.has_copyright_policy:
            missing.append("Copyright compliance & text/data mining opt-out policy (Art. 53(1)(c))")
        if not spec.has_training_summary:
            missing.append("Public summary of training content & datasets (Art. 53(1)(d))")

        total_checks = 4
        passed_checks = total_checks - len(missing)
        score = (passed_checks / total_checks) * 100.0

        return GPAIAuditResult(
            model_name=spec.model_name,
            is_systemic_risk=is_systemic,
            compliance_score_percent=score,
            missing_obligations=missing,
            applicable_articles=applicable,
        )
