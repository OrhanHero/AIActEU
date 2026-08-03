import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Pflichtangaben gemäß § 5 DDG / § 18 MStV.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Impressum</h1>

      <p className="mb-8 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground">
        Entwurf – noch nicht rechtlich geprüft. Diese Seite darf erst nach anwaltlicher Prüfung
        live geschaltet werden (siehe <code>COMPLIANCE.md</code>, Abschnitt &bdquo;Offene
        Punkte&ldquo;).
      </p>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
        <p>Orhan Kahraman</p>
        <p>Weichselstr. 41</p>
        <p>12045 Berlin</p>
        <p>Deutschland</p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:aiacteu@gmail.com" className="text-primary hover:underline">
            aiacteu@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p>
          Orhan Kahraman ·{" "}
          <a
            href="https://www.linkedin.com/in/orhankahraman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p>Weichselstr. 41, 12045 Berlin</p>
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
