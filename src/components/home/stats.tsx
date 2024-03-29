import { stats } from "@/assets/images";
import Image from "next/image";
import StatRef from "./stat-ref";

export default function Stats() {
  return (
    <section className="bg-white py-16 lg:py-40 px-6 md:px-[4vw] 2xl:px-[12vw] space-y-16 lg:space-y-24">
      <div className="flex flex-col gap-6 sm:grid grid-cols-2 lg:grid-cols-4">
        <div className="rounded overflow-hidden py-12 px-6 relative flex items-center justify-center">
          <h3 className="w-min text-2xl lg:text-3xl text-center text-white relative z-10 leading-normal lg:leading-normal mx-auto">
            <span className="text-sm text-white/80">Statystyki </span>Naszych
            Osiągnięć
          </h3>
          <Image
            fill
            sizes="(min-width: 640px) 50vw, (min-width: 1024px) 25vw, 100vw"
            className="object-cover"
            src={stats.src}
            alt="Pracownik branży transportowej"
          />
        </div>
        <StatRef end={42} title="Zadowolonych klientów" />
        <StatRef end={112} title="Zrealizowanych zleceń" />
        <div className="rounded overflow-hidden py-12 sm:py-24 px-6 bg-[#EFEFEF] flex items-end justify-center">
          <h3 className="text-4xl lg:text-5xl  text-center flex flex-col justify-center gap-3">
            <p className="text-sm text-primary ml-auto text-right">Tysięcy</p>
            <p>Setki</p>
            <span className="text-sm text-[#191919]/70">
              Przejechanych kilometrów
            </span>
          </h3>
        </div>
      </div>
      <figure className="flex flex-col gap-4 text-center items-center max-w-4xl mx-auto">
        <blockquote className="text-lg lg:text-xl">
          “Jakość to sposób myślenia, który powoduje, że stosuje się i bez
          przerwy poszukuje najlepszych rozwiązań.”
        </blockquote>
        <figcaption className="text-primary text-sm">Edward Deming</figcaption>
      </figure>
    </section>
  );
}
