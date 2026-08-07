This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Test-Deployment auf IONOS-Webspace (aiacteu.de)

Für einen manuellen Vorab-Test läuft `next build` aktuell mit `output: "export"`
(siehe `next.config.ts`) und erzeugt einen rein statischen Export in `out/`, da
das IONOS-Shared-Webhosting keinen Node.js-Prozess ausführen kann (DNS/Nameserver
läuft über Cloudflare, Webspace inkl. SSL-Zertifikat über IONOS). Ablauf:

```bash
npm run build
# out/ enthält den fertigen statischen Export
```

`npm run build` ruft automatisch `scripts/clean-export.mjs` als `postbuild`-Hook auf: Next.js
schreibt pro Route mehrere `.txt`-Dateien für sein eigenes Client-Router-Prefetching
(`__next.*.txt`, `index.txt` – reine Navigations-Performance, kein Seiteninhalt, im Code nirgends
referenziert). Auf einem Node-losen IONOS-Webspace ohne Revalidierung bringt dieser Prefetch
ohnehin nichts, macht aber ~75% der Export-Dateien aus (293 → 73 Dateien) und hat den manuellen
WinSCP-Sync unnötig fehleranfällig gemacht (siehe Vorfall 2026-08-07: Upload brach mitten im
Transfer der `_next/static/chunks/`-Bundles ab). `robots.txt` bleibt davon unberührt.

Der Inhalt von `out/` wird 1:1 in den lokalen WinSCP-Sync-Ordner kopiert, den
WinSCP automatisch nach aiacteu.de hochlädt. `public/.htaccess` sorgt dafür,
dass Apache bei 404s die gestylte Next.js-404-Seite statt der Server-Standardseite
ausliefert.

Da `output: "export"` ISR/SSR deaktiviert, ist dieser Modus nur für den
Webspace-Test gedacht – die geplante Produktivumgebung ist laut
[`ARCHITECTURE.md`](../ARCHITECTURE.md) weiterhin Vercel (mit ISR).
