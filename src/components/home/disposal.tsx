import { inter } from "@/assets/font/monument-extended";
import { disposal } from "@/assets/images";
import Image from "next/image";

export default function Disposal() {
  return (
    <section className="px-6 md:px-[4vw] 2xl:px-[12vw] bg-white py-24 flex flex-col gap-x-16 2xl:gap-x-32 gap-y-12 lg:grid grid-cols-2">
      <div className="relative order-last lg:order-first">
        <div className="relative mx-auto lg:mx-0 lg:ml-auto max-w-xl min-h-[4in] lg:h-full rounded overflow-hidden">
          <Image
            className="object-cover object-center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={disposal}
            alt="Ciężarówka transportująca"
          />
          <div className="bg-white absolute left-0 bottom-0 h-1/6 w-1/6 rounded-tr"></div>
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-xl lg:py-32">
        <h2 className="text-2xl lg:text-3xl">
          Jesteśmy do twojej{" "}
          <sup className="text-primary -ml-2 lg:text-xl hidden sm:inline">
            dyspozycji
          </sup>
          <span className="text-primary sm:hidden">dyspozycji</span>
        </h2>
        <p
          className={`${inter.className} leading-loose text-sm text-background/80`}
        >
          Nasza firma oferuje kompleksowe rozwiązania w zakresie transportu i
          logistyki, dostosowane do indywidualnych potrzeb klienta. Dzięki
          zaangażowanemu zespołowi i nowoczesnym technologiom zapewniamy
          efektywność oraz niezawodność naszych usług na każdym etapie procesu.
        </p>
        <p
          className={`${inter.className} leading-loose text-sm text-background/80 font-semibold`}
        >
          NTL LOGISTIC to sprawdzony partner w dziedzinie transportu i
          logistyki. Jaki ładunek możemy dostarczyć dla Ciebie?
        </p>
      </div>
    </section>
  );
}
