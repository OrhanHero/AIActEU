import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6 text-muted leading-relaxed">
      <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">
        Datenschutzerklärung
      </h1>

      <p className="mb-8 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground">
        Entwurf – noch nicht rechtlich geprüft. Diese Seite darf erst nach anwaltlicher Prüfung
        und Vervollständigung der Platzhalter live geschaltet werden (siehe{" "}
        <code>COMPLIANCE.md</code>, Abschnitt &bdquo;Offene Punkte&ldquo;).
      </p>

      <Section title="1. Verantwortlicher">
        <p>[Name / Firmenbezeichnung, Anschrift, Kontakt – siehe Impressum]</p>
      </Section>

      <Section title="2. Welche Daten wir aktuell verarbeiten">
        <p>
          Der aktuelle Stand dieser Seite (Phase 1/2) verwendet noch kein Tracking und keine
          Cookies mit Personenbezug. Sobald personenbezogene Datenverarbeitung eingeführt wird
          (z. B. Kontaktformular, Accounts), wird dieser Abschnitt vor Live-Schaltung um konkrete
          Verarbeitungszwecke, Rechtsgrundlagen (Art. 6 DSGVO) und Speicherdauern ergänzt.
        </p>
      </Section>

      <Section title="3. Hosting">
        <p>
          Diese Seite wird auf EU-Infrastruktur gehostet (siehe{" "}
          <code>ARCHITECTURE.md</code>). Mit allen eingesetzten Dienstleistern werden vor
          Produktivbetrieb Auftragsverarbeitungsverträge (AVV) abgeschlossen.
        </p>
      </Section>

      <Section title="4. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
          personenbezogenen Daten gemäß Art. 15–21 DSGVO. Kontakt: [Kontakt-E-Mail].
        </p>
      </Section>
    </div>
  );
}
