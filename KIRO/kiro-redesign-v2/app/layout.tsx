import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomCTA } from "@/components/MobileBottomCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-geist",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KIRO Karting — Karting Outdoor em Bombarral",
  description:
    "Reserva sessões de karting outdoor para jovens, adultos, grupos e empresas no Kartódromo do Oeste.",
  keywords: [
    "karting Bombarral",
    "kartódromo do Oeste",
    "karting outdoor",
    "KIRO karting",
    "eventos empresariais karting",
  ],
  openGraph: {
    title: "KIRO Karting — Karting Outdoor em Bombarral",
    description:
      "Reserva uma sessão de karting outdoor no Kartódromo do Oeste. Para jovens, adultos, grupos e empresas.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-PT"
      className={`${geist.variable} ${bebas.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col bg-bg text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
