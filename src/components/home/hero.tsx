import { hero, service, shipping, transport } from "@/assets/images";
import Image from "next/image";
import Button from "../ui/button";
import { inter } from "@/app/layout";

export default function Hero() {
  return (
    <section className="px-4 flex flex-col gap-4 lg:grid grid-cols-3 bg-background">
      <div className="col-span-3 px-[8vw] md:px-[4vw] 2xl:px-[12vw] py-64 relative overflow-hidden rounded-lg">
        <div className="flex flex-col gap-6 relative z-10">
          <h1 className="text-3xl lg:text-4xl text-white font-semibold leading-snug lg:leading-snug">
            Innowacyjny Transport
            <br /> Nowa Jakość w Logistyce
          </h1>
          <p
            className={`text-white/80 leading-relaxed lg:leading-relaxed text-sm lg:text-base max-w-xl ${inter.className}`}
          >
            NTL NATILLMO zapewnia najnowocześniejsze rozwiązania logistyczne,
            które przynoszą sukces w każdym profesjonalnym wyzwaniu.
          </p>
          <Button className="mt-4">Bezpłatna wycena</Button>
        </div>
        <Image
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
          src={hero.src}
          alt="Ciężarówka jadące po autostradzie"
        />
      </div>
      <div className="py-40 flex items-center justify-center relative rounded-lg overflow-hidden">
        <div className="space-y-4 text-center relative z-10">
          <h2 className="text-xl lg:text-2xl text-white font-medium">
            Transport
          </h2>
          <p
            className={`text-white/90 text-sm lg:text-base  ${inter.className}`}
          >
            Pewność i bezpieczeństwo
          </p>
        </div>
        <Image
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          src={transport.src}
          alt="Transport"
        />
        <Gradient />
      </div>
      <div className="py-40 flex items-center justify-center relative rounded-lg overflow-hidden">
        <div className="space-y-4 text-center relative z-10">
          <h2 className="text-xl lg:text-2xl text-white font-medium">
            Spedycja
          </h2>
          <p
            className={`text-white/90 text-sm lg:text-base  ${inter.className}`}
          >
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
        <Gradient />
      </div>
      <div className="py-40 flex items-center justify-center relative rounded-lg overflow-hidden">
        <div className="space-y-4 text-center relative z-10">
          <h2 className="text-xl lg:text-2xl text-white font-medium">
            Obsługa celna
          </h2>
          <p
            className={`text-white/90 text-sm lg:text-base  ${inter.className}`}
          >
            Pomoc w czynnościach celnych i promowych
          </p>
        </div>
        <Image
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          src={service.src}
          alt="Obsługa celna"
        />
        <Gradient />
      </div>
    </section>
  );
}

function Gradient() {
  return (
    <div className="w-full absolute bottom-0">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 619 379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_132)">
          <ellipse cx="309" cy="375.5" rx="163" ry="153.5" fill="#DA2311" />
        </g>
        <defs>
          <filter
            id="filter0_f_1_132"
            x="-112.2"
            y="-36.2"
            width="842.4"
            height="823.4"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="129.1"
              result="effect1_foregroundBlur_1_132"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
