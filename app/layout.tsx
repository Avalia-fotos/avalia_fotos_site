import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avalia.app"),
  title: {
    default: "AvaliA — Avaliação de fotos com IA",
    template: "%s | AvaliA",
  },
  description:
    "AvaliA avalia suas fotos com IA, atribui nota visual e oferece feedback técnico com pontos fortes, pontos a melhorar e sugestões práticas.",
  openGraph: {
    title: "AvaliA — Avaliação de fotos com IA",
    description:
      "Receba análise técnica, nota visual e recomendações práticas para evoluir suas fotos.",
    url: "https://www.avalia.app",
    siteName: "AvaliA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AvaliA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AvaliA — Avaliação de fotos com IA",
    description:
      "Análise técnica automática, feedback educativo e nota visual em segundos.",
    images: ["/og-image.png"],
  },
  icons: [
    {
      rel: "icon",
      url: "/icon-192.png",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

