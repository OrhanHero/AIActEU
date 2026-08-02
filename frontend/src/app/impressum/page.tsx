import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – AIActEU KI News Hub",
  description: "Pflichtangaben gemäß § 5 TMG / § 18 MStV.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Impressum</h1>

      <p className="mb-8 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground">
        Entwurf – noch nicht rechtlich geprüft. Diese Seite darf erst nach anwaltlicher Prüfung
        und Vervollständigung der Platzhalter live geschaltet werden (siehe{" "}
        <code>COMPLIANCE.md</code>, Abschnitt &bdquo;Offene Punkte&ldquo;).
      </p>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
        <p>[Name / Firmenbezeichnung des Betreibers]</p>
        <p>[Straße, Hausnummer]</p>
        <p>[PLZ, Ort]</p>
        <p>[Land]</p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Kontakt</h2>
        <p>E-Mail: [Kontakt-E-Mail]</p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p>[Name der verantwortlichen Person]</p>
        <p>[Anschrift, sofern abweichend]</p>
      </section>

      <section className="text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Haftungshinweis</h2>
        <p>
          Diese Plattform kuratiert und fasst Inhalte externer Quellen KI-unterstützt zusammen.
          Für die Richtigkeit externer Inhalte übernehmen wir keine Gewähr; jeder Artikel verlinkt
          zur Originalquelle. Details siehe{" "}
          <a href="/compliance" className="text-primary hover:underline">
            EU-Verhaltenskodex &amp; Transparenz
          </a>
          .
        </p>
      </section>
    </div>
  );
}
