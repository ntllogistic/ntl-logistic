import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { monumentExtended } from "@/assets/font/monument-extended";

export const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NTL Logistic - Twój partner w transporcie i spedycji",
  description:
    "Zespół NTL Logistic to ambitni i doświadczeni specjaliści, którzy zrealizują każdy projekt transportowy. Oferujemy transport do 3,5 tony, całopojazdowy, specjalistyczny, obejmujący Wielką Brytanię. Nowoczesne systemy GPS i stały monitoring zapewniają bezpieczeństwo i pewność dostaw.",
  keywords: [
    "transport",
    "spedycja",
    "NTL Logistic",
    "Wielka Brytania",
    "całopojazdowy",
    "specjalistyczny",
    "naczepy kłonicowe",
    "transport drewna",
    "ponadgabarytowy",
    "GPS",
    "monitoring",
    "bezpieczeństwo",
    "pewność",
    "transport dedykowany",
    "dostawy ekonomiczne",
    "pełen profesjonalizm",
    "holistyczne podejście",
    "czynności celne",
    "promy",
    "naczepy otwarte",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monumentExtended.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}