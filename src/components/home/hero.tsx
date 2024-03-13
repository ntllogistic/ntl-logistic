import { hero, service, shipping, transport } from "@/assets/images";
import Image from "next/image";
import Button from "../ui/button";
import { inter } from "@/assets/font/monument-extended";
import Gradient from "../ui/gradient";
import Link from "next/link";
import Title from "./title";

export default function Hero() {
  return (
    <section className="px-4 flex flex-col gap-4 md:grid grid-cols-3 bg-background">
      <div className="col-span-3 relative overflow-hidden rounded-lg sm:rounded-l-none">
        <div className="bg-gradient-to-r from-[rgba(25,25,25,.97)] to-[rgba(25,25,25,.6)] sm:from-[rgba(25,25,25,1)] sm:to-[rgba(25,25,25,.4)] w-full h-full px-8 md:px-[4vw] 2xl:px-[12vw] py-32 lg:py-64 relative z-10">
          <div className="flex flex-col gap-6 relative z-10">
            <h1 className="text-3xl lg:text-4xl text-white font-semibold leading-snug lg:leading-snug">
              Innowacyjny Transport
              <br /> Nowa jakość w Logistyce
            </h1>
            <p
              className={`text-white/80 leading-relaxed lg:leading-relaxed text-sm lg:text-base max-w-xl ${inter.className}`}
            >
              NTL LOGISTIC zapewnia najnowocześniejsze rozwiązania logistyczne,
              które przynoszą sukces w każdym profesjonalnym wyzwaniu.
            </p>
            <Link className="mt-4" href="/kontakt">
              <Button asChild>Bezpłatna wycena</Button>
            </Link>
          </div>
        </div>
        <Image
          fill
          sizes="(max-width: 1200px) 1400px, 100vw"
          priority
          className="object-cover object-[65%_100%] lg:object-[50%_90%]"
          src={hero.src}
          alt="Ciężarówka jadące po autostradzie"
        />
      </div>
      <div className="py-24 md:py-32 px-6 flex items-center justify-center relative rounded-lg overflow-hidden">
        <div className="space-y-3 text-center relative z-10">
          <h2 className="text-xl lg:text-2xl text-white font-medium">
            Transport
          </h2>
          <p className={`text-white/90 text-sm  ${inter.className}`}>
            Pewność i bezpieczeństwo
          </p>
        </div>
        <Image
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
          src={transport.src}
          alt="Transport"
        />
        <Gradient className="w-full absolute -bottom-16" />
      </div>
      <div className="py-24 md:py-32 px-6 flex items-center justify-center relative rounded-lg overflow-hidden">
        <div className="space-y-3 text-center relative z-10">
          <h2 className="text-xl lg:text-2xl text-white font-medium">
            Spedycja
          </h2>
          <p className={`text-white/90 text-sm  ${inter.className}`}>
            Profesjonalna organizacja
          </p>
        </div>
        <Image
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          src={shipping.src}
          alt="Spedycja"
        />
        <Gradient className="w-full absolute -bottom-16" />
      </div>
      <div className="py-24 md:py-32 px-6 flex items-center justify-center relative rounded-lg overflow-hidden">
        <div className="space-y-3 text-center relative z-10">
          <h2 className="text-xl lg:text-2xl text-white font-medium">
            Obsługa celna
          </h2>
          <p className={`text-white/90 text-sm  ${inter.className}`}>
            Pomoc w czynnościach celnych i promowych
          </p>
        </div>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
          src={service.src}
          alt="Obsługa celna"
        />
        <Gradient className="w-full absolute -bottom-16" />
      </div>
    </section>
  );
}
