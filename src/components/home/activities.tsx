import { inter } from "@/assets/font/monument-extended";
import Button from "../ui/button";
import Image from "next/image";
import { activities } from "@/assets/images";
import Link from "next/link";

export default function Activities() {
  return (
    <section className="px-6 md:px-[4vw] 2xl:px-[12vw] bg-background py-24 pb-48 sm:pb-24 lg:py-40 flex flex-col gap-x-16 2xl:gap-x-32 gap-y-16 lg:grid grid-cols-2">
      <div className="flex flex-col gap-8 max-w-xl lg:py-12 lg:ml-auto">
        <h2 className="text-2xl lg:text-3xl text-white">
          Dowiedz się jak{" "}
          <sup className="text-primary -ml-2 lg:text-xl hidden sm:inline">
            skutecznie{" "}
          </sup>
          <span className="text-primary sm:hidden">skutecznie</span> możemy Ci
          pomóc
        </h2>
        <p className={`${inter.className} leading-loose text-sm text-white/80`}>
          Nasz dział transportu realizuje zlecenia samochodami o masie do 3.5
          tony, które wykorzystujemy zarówno do wykonywania zleceń dedykowanych,
          z możliwością dostawy w krótkim czasie, jak i przy transportach
          ekonomicznych. Dostarczamy towary na terenie całej Unii Europejskiej
          oraz Wielkiej Brytanii - pomagamy w prawidłowym spełnianiu czynności
          celnych i promowych.
        </p>
        <p className={`${inter.className} leading-loose text-sm text-white/80`}>
          Dział spedycji zapewnia kompleksową realizację zleceń całopojazdowych
          13,6 LDM/24T, ładunków częściowych oraz specjalistyczny transport
          drewna otwartymi naczepami kłonicowymi.
        </p>
        <Link className="mt-4" href="/kontakt">
          <Button asChild>Bezpłatna wycena</Button>
        </Link>
      </div>
      <div className="relative">
        <div className="relative mx-auto lg:mx-0 lg:mr-auto max-w-xl min-h-[5in] lg:h-full">
          <Image
            className="object-cover object-left rounded"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={activities}
            alt="Ciężarówka transportująca"
          />
          <div className="bg-background absolute left-0 top-0 h-1/6 w-1/5 rounded-br"></div>
          <figure className="absolute -bottom-24 sm:-bottom-8 right-0 sm:-right-8 space-y-2 rounded p-8 bg-[#252525] sm:max-w-xs">
            <blockquote className="text-[12px] text-white leading-relaxed">
              “Jakość to sposób myślenia, który powoduje, że stosuje się i bez
              przerwy poszukuje najlepszych rozwiązań.”
            </blockquote>
            <figcaption className="text-white/70 text-[12px]">
              Edward Deming
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
