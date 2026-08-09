import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AIActEU – KI News, Hardware & Compliance";
const description =
  "Zentrale, kuratierte Nachrichten- und Wissensplattform für den deutschsprachigen KI-Sektor – von Hardware & Silicon über Modelle und RAG bis EU-Verhaltenskodex-konformer Compliance-Kennzeichnung.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s · AIActEU" },
  description,
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "AIActEU KI News Hub",
    title,
    description,
  },
  twitter: {
    card: "summary",
    site: "@AIActEUR",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Vermeidet Flash of Wrong Theme: Theme-Präferenz vor Hydration setzen.
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
