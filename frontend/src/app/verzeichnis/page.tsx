import type { Metadata } from "next";
import Link from "next/link";
import { providerDomains, benchmarks, getProvidersByDomain } from "@/lib/toolsDirectory";
import { ProviderCard } from "@/components/ProviderCard";
import { BenchmarkCard } from "@/components/BenchmarkCard";

export const metadata: Metadata = {
  title: "Anbieter- & Benchmark-Verzeichnis",
  description:
    "Die wichtigsten KI-Anbieter, Frameworks und Tools nach Bereich sortiert, plus die drei meistgenutzten Benchmark-Plattformen.",
};

export default function VerzeichnisPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">
        Anbieter- & Benchmark-Verzeichnis
      </h1>
      <p className="mb-10 max-w-2xl text-muted leading-relaxed">
        Die jeweils zehn relevantesten Anbieter je Bereich sowie die drei meistgenutzten
        Benchmark-Plattformen der Branche – als Nachschlagewerk, nicht als Newsfeed. Für laufende
        Berichterstattung siehe die{" "}
        <Link href="/kategorien" className="text-primary hover:underline">
          Kategorien
        </Link>
        .
      </p>

      {/* Benchmarks */}
      <section className="mb-14">
        <h2 className="mb-1 text-xl font-semibold tracking-tight text-foreground">
          Top-3-Benchmark-Plattformen
        </h2>
        <p className="mb-4 text-sm text-muted">
          Ausgewählt nach Bekanntheit und Zitierhäufigkeit in der Community.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benchmarks.map((benchmark) => (
            <BenchmarkCard key={benchmark.name} benchmark={benchmark} />
          ))}
        </div>
      </section>

      {/* Anbieter nach Domäne */}
      <div className="flex flex-col gap-12">
        {providerDomains.map((domain) => {
          const domainProviders = getProvidersByDomain(domain.slug);
          return (
            <section key={domain.slug} id={domain.slug}>
              <div className="mb-4 flex items-start gap-3">
                <span className="text-2xl" aria-hidden>
                  {domain.emoji}
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {domain.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{domain.description}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {domainProviders.map((provider) => (
                  <ProviderCard key={provider.name} provider={provider} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
