import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { inter, monumentExtended } from "@/assets/font/monument-extended";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "NTL LOGISTIC - Twój partner w transporcie i spedycji",
  description:
    "Zespół NTL LOGISTIC to ambitni i doświadczeni specjaliści, którzy zrealizują każdy projekt transportowy. Oferujemy transport do 3,5 tony, całopojazdowy, specjalistyczny, obejmujący Europę i Wielką Brytanię. Nowoczesne systemy GPS i stały monitoring zapewniają bezpieczeństwo i pewność dostaw.",
  keywords: [
    "transport",
    "spedycja",
    "NTL LOGISTIC",
    "Europa",
    "Wielka Brytania",
    "Polska",
    "Rzeszów",
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
  metadataBase: new URL("https://www.ntl-logistic.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={monumentExtended.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster containerClassName={`${inter.className} text-sm`} />
      </body>
    </html>
  );
}
