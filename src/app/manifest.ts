import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: "NTL LOGISTIC",
    name: "NTL LOGISTIC - Twój partner w transporcie i spedycji",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#DA2311",
    background_color: "#ffffff",
    description:
      "Zespół NTL LOGISTIC to ambitni i doświadczeni specjaliści, którzy zrealizują każdy projekt transportowy.",
    categories: [
      "transport",
      "spedycja",
      "NTL LOGISTIC",
      "do 3,5 tony",
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
    ],
    lang: "pl",
  };
}
