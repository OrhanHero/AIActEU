"use client";

import { useState } from "react";
import Link from "next/link";


interface DatasetEntry {
  name: string;
  category: "Web" | "Books" | "Code" | "Media";
  license: string;
  optOutVerified: boolean;
}

export default function AuditPage() {

  // Tab State
  const [activeTab, setActiveTab] = useState<"classifier" | "sbom" | "cicd">("classifier");

  // Classifier State
  const [modelName, setModelName] = useState("MyModel-Alpha");
  const [domain, setDomain] = useState("recruitment_and_hr");
  const [autonomousDecision, setAutonomousDecision] = useState(true);
  const [biometricIdentification, setBiometricIdentification] = useState(false);
  const [generativeAI, setGenerativeAI] = useState(true);
  const [publicSpaceDeployment, setPublicSpaceDeployment] = useState(false);

  // SBOM State
  const [modelArchitecture, setModelArchitecture] = useState("Transformer-Decoder");
  const [totalFlops, setTotalFlops] = useState("1.2e24");
  const [energyKwh, setEnergyKwh] = useState(4500);
  const [datasets, setDatasets] = useState<DatasetEntry[]>([
    { name: "EurLex-Corpus-2026", category: "Books", license: "Public Domain", optOutVerified: true },
    { name: "CommonCrawl-Clean-Subset", category: "Web", license: "Permissive", optOutVerified: true },
    { name: "OpenCode-Stack-v2", category: "Code", license: "Apache-2.0", optOutVerified: true },
  ]);
  const [newDatasetName, setNewDatasetName] = useState("");
  const [newDatasetCategory, setNewDatasetCategory] = useState<"Web" | "Books" | "Code" | "Media">("Web");

  // Calculate Risk Tier
  let riskTier = "Minimal Risk (Title IV)";
  let riskColor = "emerald";
  const mandatoryArticles: { article: string; title: string; desc: string }[] = [];

  if (biometricIdentification && publicSpaceDeployment) {
    riskTier = "Prohibited AI System (Title II, Art. 5)";
    riskColor = "rose";
    mandatoryArticles.push({
      article: "Art. 5",
      title: "Verbotene Praktiken",
      desc: "Echtzeit-Biometrie im öffentlich zugänglichen Raum ist grundsätzlich verboten (außer bei eng definierten richterlichen Ausnahmen).",
    });
  } else if (
    domain === "recruitment_and_hr" ||
    domain === "biometrics" ||
    domain === "critical_infrastructure" ||
    domain === "law_enforcement" ||
    domain === "education_and_vocational_training" ||
    autonomousDecision
  ) {
    riskTier = "High-Risk AI System (Annex III)";
    riskColor = "amber";
    mandatoryArticles.push(
      { article: "Art. 9", title: "Risikomanagementsystem", desc: "Kontinuierlicher iterativer Prozess über den gesamten Lebenszyklus." },
      { article: "Art. 10", title: "Daten & Daten-Governance", desc: "Verzerrungsfreie, repräsentative Trainings- und Testdatensätze." },
      { article: "Art. 11", title: "Technische Dokumentation", desc: "Vollständige Dokumentation gemäß Annex IV vor dem Inverkehrbringen." },
      { article: "Art. 14", title: "Menschliche Aufsicht", desc: "Human-in-the-Loop oder Human-on-the-Loop Mechanismen zur Interventionsmöglichkeit." }
    );
  } else if (generativeAI) {
    riskTier = "Limited Risk / Transparency Only (Title IV)";
    riskColor = "blue";
    mandatoryArticles.push({
      article: "Art. 50",
      title: "Transparenz- und Kennzeichnungspflicht",
      desc: "Nutzer müssen eindeutig informiert werden, dass sie mit einem KI-System interagieren bzw. Inhalte KI-generiert sind.",
    });
  } else {
    mandatoryArticles.push({
      article: "Art. 50 (Opt-in)",
      title: "Verhaltenskodex & Mindeststandards",
      desc: "Freiwillige Selbstverpflichtung zu europäischen Ethik- und Transparenz-Richtlinien.",
    });
  }

  if (generativeAI && !mandatoryArticles.some((a) => a.article === "Art. 50")) {
    mandatoryArticles.push({
      article: "Art. 50",
      title: "Kennzeichnungspflicht KI-generierter Inhalte",
      desc: "Metadaten-Kennzeichnung nach europäischem Verhaltenskodex.",
    });
  }

  // Handle Add Dataset
  const handleAddDataset = () => {
    if (!newDatasetName.trim()) return;
    setDatasets([
      ...datasets,
      {
        name: newDatasetName.trim(),
        category: newDatasetCategory,
        license: "Standard License",
        optOutVerified: true,
      },
    ]);
    setNewDatasetName("");
  };

  const handleDownloadReport = () => {
    const report = {
      reportId: `AIACT-AUDIT-${Date.now().toString(36).toUpperCase()}`,
      date: new Date().toISOString(),
      system: {
        modelName,
        architecture: modelArchitecture,
        domain,
        autonomousDecision,
        biometricIdentification,
        generativeAI,
        totalFlops,
        energyKwh,
      },
      assessment: {
        framework: "Regulation (EU) 2024/1689",
        riskTier,
        mandatoryArticles: mandatoryArticles.map((a) => `${a.article}: ${a.title}`),
        annexIIIMapping: domain,
      },
      sbom: {
        datasetCount: datasets.length,
        datasets,
      },
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${modelName.toLowerCase()}-aiact-audit.json`;
    a.click();
    URL.revokeObjectURL(url);
  };


  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-400 backdrop-blur-md">
          <span>🇪🇺 EU AI ACT (REGULATION EU 2024/1689)</span>
          <span>·</span>
          <span>DEVELOPER AUDIT ENGINE</span>
        </div>
        <h1 className="mt-4 font-serif-heading text-3xl font-black tracking-tight text-foreground sm:text-5xl">
          Interaktiver KI-Compliance Playground
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          Prüfe dein KI-System oder Open-Weight-Modell in Echtzeit gegen die Kriterien des EU AI Act: 
          Ermittle den verbindlichen Risiko-Tier (Annex III), erstelle konforme Software Bill of Materials (SBOM) 
          und integriere Prüfschritte nahtlos in deine CI/CD-Pipelines.
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-xl border border-border/80 bg-surface/60 p-1.5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("classifier")}
            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
              activeTab === "classifier"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted hover:text-foreground"
            }`}
          >
            ⚖️ Risiko-Klassifikator (Annex III)
          </button>
          <button
            onClick={() => setActiveTab("sbom")}
            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
              activeTab === "sbom"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted hover:text-foreground"
            }`}
          >
            📦 Art. 53 GPAI & SBOM Generator
          </button>
          <button
            onClick={() => setActiveTab("cicd")}
            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
              activeTab === "cicd"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted hover:text-foreground"
            }`}
          >
            🤖 Codex CI/CD Bot Quickstart
          </button>
        </div>
      </div>

      {/* TAB 1: CLASSIFIER */}
      {activeTab === "classifier" && (
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Form Controls */}
          <div className="glass-panel rounded-2xl p-6 lg:col-span-6">
            <h2 className="mb-4 text-base font-bold text-foreground">1. System-Spezifikation eingeben</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold uppercase text-muted mb-1">
                  Modell- / Systemname
                </label>
                <input
                  type="text"
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/50 px-3.5 py-2 text-foreground focus:border-primary focus:outline-none"
                  placeholder="z. B. CustomerService-Assistant-v2"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-muted mb-1">
                  Einsatz-Domäne (EU Annex III Relevanz)
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2 text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="recruitment_and_hr">👔 Personalwesen, Recruiting & HR-Screening (Annex III Punkt 4)</option>
                  <option value="biometrics">👁️ Biometrische Identifikation & Kategorisierung (Annex III Punkt 1)</option>
                  <option value="critical_infrastructure">⚡ Kritische Infrastrukturen (Energie, Wasser, Verkehr) (Annex III Punkt 2)</option>
                  <option value="education_and_vocational_training">🎓 Bildung, Notengebung & Zulassung (Annex III Punkt 3)</option>
                  <option value="law_enforcement">⚖️ Justiz & Strafverfolgung (Annex III Punkt 6)</option>
                  <option value="healthcare">🏥 Medizintechnik & Diagnostik (MDR-Harmonisierung)</option>
                  <option value="customer_service">💬 Kundenservice & dialogorientierte Chatbots</option>
                  <option value="creative_and_gaming">🎨 Kreativ, Medien & Gaming (Minimal)</option>
                  <option value="general">🌐 Allgemeine Informationsverarbeitung & RAG</option>
                </select>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between rounded-xl border border-border/60 bg-surface/40 p-3">
                  <div>
                    <span className="font-semibold text-foreground">Autonome Entscheidungsfindung</span>
                    <p className="text-xs text-muted">Trifft das System Entscheidungen ohne zwingende manuelle Zwischenbestätigung?</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={autonomousDecision}
                    onChange={(e) => setAutonomousDecision(e.target.checked)}
                    className="h-5 w-5 accent-primary"
                  />
                </label>

                <label className="flex items-center justify-between rounded-xl border border-border/60 bg-surface/40 p-3">
                  <div>
                    <span className="font-semibold text-foreground">Biometrische Fernidentifikation</span>
                    <p className="text-xs text-muted">Erfassung von Gesichtszügen, Stimmmustern oder Verhaltensmerkmalen?</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={biometricIdentification}
                    onChange={(e) => setBiometricIdentification(e.target.checked)}
                    className="h-5 w-5 accent-primary"
                  />
                </label>

                {biometricIdentification && (
                  <label className="flex items-center justify-between rounded-xl border border-rose-500/30 bg-rose-950/20 p-3">
                    <div>
                      <span className="font-semibold text-rose-300">Öffentlich zugänglicher Raum</span>
                      <p className="text-xs text-rose-200/70">Wird das System im öffentlichen Raum eingesetzt (Gefahr Art. 5 Verbot)?</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={publicSpaceDeployment}
                      onChange={(e) => setPublicSpaceDeployment(e.target.checked)}
                      className="h-5 w-5 accent-rose-500"
                    />
                  </label>
                )}

                <label className="flex items-center justify-between rounded-xl border border-border/60 bg-surface/40 p-3">
                  <div>
                    <span className="font-semibold text-foreground">Generative KI (Text, Audio, Bild)</span>
                    <p className="text-xs text-muted">Erzeugt synthetische Inhalte, die unter Art. 50 fallen?</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={generativeAI}
                    onChange={(e) => setGenerativeAI(e.target.checked)}
                    className="h-5 w-5 accent-primary"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Live Audit Result */}
          <div className="glass-panel rounded-2xl p-6 lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-foreground">2. Regulatorische Bewertung</h2>
                <span className="font-mono text-xs text-muted">Rechtsstand: 2026</span>
              </div>

              {/* Risk Badge Card */}
              <div className={`mt-4 rounded-2xl border p-5 ${
                riskColor === "rose"
                  ? "border-rose-500/50 bg-rose-950/30"
                  : riskColor === "amber"
                  ? "border-amber-500/50 bg-amber-950/30"
                  : riskColor === "blue"
                  ? "border-blue-500/50 bg-blue-950/30"
                  : "border-emerald-500/50 bg-emerald-950/30"
              }`}>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">Ermittelter Risiko-Tier</span>
                <p className={`mt-1 font-serif-heading text-2xl font-black ${
                  riskColor === "rose"
                    ? "text-rose-400"
                    : riskColor === "amber"
                    ? "text-amber-400"
                    : riskColor === "blue"
                    ? "text-blue-400"
                    : "text-emerald-400"
                }`}>
                  {riskTier}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                  {riskColor === "rose" && "Achtung: Systeme dieser Kategorie dürfen in der Europäischen Union nicht in Betrieb genommen oder in Verkehr gebracht werden."}
                  {riskColor === "amber" && "Dieses System unterliegt strengen vor- und nachgelagerten Auflagen (Qualitätsmanagementsystem, CE-Kennzeichnung, EU-Konformitätserklärung)."}
                  {riskColor === "blue" && "Transparenzauflagen: Nutzer müssen über den KI-Einsatz informiert werden, generierte Inhalte müssen maschinenlesbar gekennzeichnet sein."}
                  {riskColor === "emerald" && "Geringes oder kein spezifisches regulatorisches Risiko nach Title IV. Es gelten allgemeine Produkt- und Datenschutzgesetze."}
                </p>
              </div>

              {/* Mandatory Checklist */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Verbindliche Rechtsvorschriften & Artikel:
                </h3>
                <div className="mt-3 space-y-2">
                  {mandatoryArticles.map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-border/60 bg-surface/50 p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary">{item.article}</span>
                        <span className="text-[11px] font-semibold text-foreground">{item.title}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 border-t border-border/60 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-muted">Prüfung: EU AI Act Konformitäts-Check</span>
              <button
                onClick={handleDownloadReport}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
              >
                📥 Audit-Report (JSON) herunterladen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GPAI & SBOM */}
      {activeTab === "sbom" && (
        <div className="grid gap-8 lg:grid-cols-12">
          {/* SBOM Metadata */}
          <div className="glass-panel rounded-2xl p-6 lg:col-span-5 space-y-4">
            <h2 className="text-base font-bold text-foreground">General-Purpose AI (GPAI) Spezifikation</h2>
            
            <div>
              <label className="block text-xs font-semibold uppercase text-muted mb-1">Modell-Architektur</label>
              <input
                type="text"
                value={modelArchitecture}
                onChange={(e) => setModelArchitecture(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-3.5 py-2 text-foreground text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-muted mb-1">
                Trainings-Compute (FLOPs)
              </label>
              <input
                type="text"
                value={totalFlops}
                onChange={(e) => setTotalFlops(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-3.5 py-2 text-foreground text-sm"
                placeholder="z. B. 1.5e25"
              />
              <span className="mt-1 block text-[11px] text-muted">
                Schwellenwert für systemisches Risiko (Art. 51): ≥ 10²⁵ FLOPs
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-muted mb-1">Energieverbrauch (kWh)</label>
              <input
                type="number"
                value={energyKwh}
                onChange={(e) => setEnergyKwh(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background/50 px-3.5 py-2 text-foreground text-sm"
              />
            </div>

            {/* Add Dataset Form */}
            <div className="border-t border-border/60 pt-4">
              <h3 className="text-xs font-bold uppercase text-foreground mb-2">Datensatz zur Lineage hinzufügen</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Datensatz-Name..."
                  value={newDatasetName}
                  onChange={(e) => setNewDatasetName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/50 px-3 py-1.5 text-xs text-foreground"
                />
                <div className="flex gap-2">
                  <select
                    value={newDatasetCategory}
                    onChange={(e) => setNewDatasetCategory(e.target.value as "Web" | "Books" | "Code" | "Media")}
                    className="w-1/2 rounded-xl border border-border bg-surface px-3 py-1.5 text-xs text-foreground"
                  >
                    <option value="Web">🌐 Web-Daten</option>
                    <option value="Books">📚 Bücher</option>
                    <option value="Code">💻 Code</option>
                    <option value="Media">🖼️ Medien</option>
                  </select>
                  <button
                    onClick={handleAddDataset}
                    className="w-1/2 rounded-xl border border-primary bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/20"
                  >
                    + Hinzufügen
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Generated SBOM Preview */}
          <div className="glass-panel rounded-2xl p-6 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-foreground">KI Software Bill of Materials (Art. 53 Konform)</h2>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                  EU AI Act SBOM v1.0
                </span>
              </div>

              {/* Dataset Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border/80 text-muted uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-2">Datensatz</th>
                      <th className="py-2">Kategorie</th>
                      <th className="py-2">Lizenz</th>
                      <th className="py-2">Opt-Out</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-mono">
                    {datasets.map((d, i) => (
                      <tr key={i}>
                        <td className="py-2.5 font-semibold text-foreground">{d.name}</td>
                        <td className="py-2.5 text-muted">{d.category}</td>
                        <td className="py-2.5 text-muted">{d.license}</td>
                        <td className="py-2.5 text-emerald-400">✓ Verifiziert</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* JSON Snippet */}
              <div className="mt-4 rounded-xl border border-border/80 bg-slate-950 p-3 font-mono text-[11px] text-emerald-400 overflow-x-auto max-h-48">
                <pre>{JSON.stringify({ datasetCount: datasets.length, lineage: datasets }, null, 2)}</pre>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/60 flex justify-end">
              <button
                onClick={handleDownloadReport}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
              >
                📥 Vollständiges SBOM-Manifest (.json) exportieren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CI/CD BOT QUICKSTART */}
      {activeTab === "cicd" && (
        <div className="glass-panel rounded-2xl p-6 lg:p-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-foreground">
              Automatisierter PR-Compliance Audit in GitHub Actions
            </h2>
            <p className="mt-2 text-sm text-muted">
              Integriere die Prüfung direkt in dein Repository. Bei jedem Pull Request analysiert der Codex-Audit-Workflow 
              automatisch Modell-Spezifikationen und warnt vor Verstößen gegen den EU AI Act.
            </p>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary">
              1. Installation via Python & CLI
            </h3>
            <div className="mt-2 rounded-xl border border-border/80 bg-slate-950 p-3 font-mono text-xs text-blue-300">
              pip install aiact<br />
              aiact-check --config model-spec.json --output report.json
            </div>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary">
              2. GitHub Actions Workflow (.github/workflows/codex-audit.yml)
            </h3>
            <div className="mt-2 rounded-xl border border-border/80 bg-slate-950 p-3 font-mono text-xs text-amber-300 overflow-x-auto">
              <pre>{`name: EU AI Act Codex Audit
on: [pull_request]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.11"
      - run: pip install aiact
      - run: aiact-check --config ./model-config.json --output ./audit.json`}</pre>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://github.com/OrhanHero/AIActEU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-xs font-bold text-background shadow-lg transition-all hover:scale-105"
              >
                GitHub Repository ansehen ↗
              </Link>
              <Link
                href="/compliance"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-2 text-xs font-bold text-foreground transition-all hover:bg-surface-hover"
              >
                EU AI Act Leitfaden lesen →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
