from dataclasses import dataclass, field
from datetime import UTC, datetime
from typing import Any


@dataclass
class DatasetComponent:
    name: str
    provenance_category: str  # e.g., "Web", "Books", "Code", "Media"
    license_type: str
    opt_out_verified: bool = True


@dataclass
class ModelSBOM:
    model_name: str
    version: str
    base_architecture: str
    datasets: list[DatasetComponent] = field(default_factory=list)
    energy_consumption_kwh: float = 0.0

    def to_dict(self) -> dict[str, Any]:
        return {
            "bomFormat": "AI-SBOM-EU-AI-Act",
            "specVersion": "1.0",
            "timestamp": datetime.now(UTC).isoformat(),
            "component": {
                "name": self.model_name,
                "version": self.version,
                "architecture": self.base_architecture,
                "metrics": {
                    "energy_consumption_kwh": self.energy_consumption_kwh,
                },
            },
            "lineage": [
                {
                    "dataset": d.name,
                    "category": d.provenance_category,
                    "license": d.license_type,
                    "opt_out_verified": d.opt_out_verified,
                }
                for d in self.datasets
            ],
        }


class SBOMGenerator:
    """Generates machine-readable AI-SBOM declarations compliant with EU AI Act Art. 53."""

    def generate(
        self,
        model_name: str,
        version: str = "1.0",
        base_architecture: str = "Transformer-Decoder",
        datasets: list[DatasetComponent] | None = None,
        energy_kwh: float = 0.0,
    ) -> ModelSBOM:
        return ModelSBOM(
            model_name=model_name,
            version=version,
            base_architecture=base_architecture,
            datasets=datasets or [],
            energy_consumption_kwh=energy_kwh,
        )
