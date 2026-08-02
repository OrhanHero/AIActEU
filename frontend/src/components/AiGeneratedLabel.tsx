import Image from "next/image";

/**
 * EU-Kennzeichnung für KI-generierte Inhalte, angelehnt an die Icons von
 * https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content.
 * Die hinterlegten PNGs sind eine KI-Nachbildung dieser Vorlage (kein Download
 * des offiziellen Asset-Kits) – vor Produktivbetrieb gegen das offizielle Kit
 * verifizieren, siehe COMPLIANCE.md.
 */
export function AiGeneratedLabel({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center ${className ?? ""}`}
      title="KI-generierte Zusammenfassung (EU-Kennzeichnung für KI-Inhalte)"
    >
      <Image
        src="/labels/ai-generated-black.png"
        alt="EU-Kennzeichnung: KI-generierter Inhalt"
        width={315}
        height={100}
        className="ai-label-light h-5 w-auto"
      />
      <Image
        src="/labels/ai-generated-white.png"
        alt="EU-Kennzeichnung: KI-generierter Inhalt"
        width={315}
        height={100}
        className="ai-label-dark h-5 w-auto"
      />
    </span>
  );
}
