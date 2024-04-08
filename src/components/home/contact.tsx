import { inter } from "@/assets/font/monument-extended";
import { contact } from "@/assets/images";
import Image from "next/image";
import Gradient from "../ui/gradient";
import { HTMLAttributes } from "react";
import Form from "../contact/form";

export default function Contact({
  className,
}: Pick<HTMLAttributes<HTMLDivElement>, "className">) {
  return (
    <section
      className={`px-6 md:px-[4vw] 2xl:px-[12vw] bg-background py-16 lg:py-40 relative flex flex-col gap-8 lg:items-center lg:grid grid-cols-2 overflow-hidden ${
        className || ""
      }`}
    >
      <div className="flex flex-col gap-8 max-w-xl z-20 relative">
        <h2 className="text-2xl lg:text-3xl text-white">
          Skontaktuj się{" "}
          <sup className="text-primary -ml-2 lg:text-xl hidden sm:inline">
            z nami{" "}
          </sup>
          <span className="text-primary sm:hidden">z nami</span>
        </h2>
        <p className={`${inter.className} leading-loose text-sm text-white/80`}>
          Nasz doświadczony zespół jest do Twojej dyspozycji! Odpowiemy na Twoje
          pytania i przedstawimy Ci ofertę dopasowaną do Twoich potrzeb.
          Skontaktuj się z nami w dogodny dla Ciebie sposób:
        </p>
        <dl className="space-y-4 font-semibold">
          <div className="flex items-center flex-wrap gap-4">
            <div>
              <span className="text-primary text-[12px]">Transport</span>
              <dt className="absolute opacity-0 select-none -z-10">
                Numer telefonu - transport
              </dt>
              <dd className={`${inter.className} text-white text-sm`}>
                +48 792 792 645
              </dd>
            </div>
            <div>
              <span className="text-primary text-[12px]">Spedycja</span>
              <dt className="absolute opacity-0 select-none -z-10">
                Numer telefonu - spedycja
              </dt>
              <dd className={`${inter.className} text-white text-sm`}>
                +48 609 708 007
              </dd>
            </div>
          </div>
          <dt className="absolute opacity-0 select-none -z-10">Adres</dt>
          <dd className={`${inter.className} text-white text-sm`}>
            ul. Karola Lewakowskiego 10/8, 35-119 Rzeszów
          </dd>
          <dt className="absolute opacity-0 select-none -z-10">Email</dt>
          <dd className={`${inter.className} text-white text-sm`}>
            transport@ntl-logistic.com
          </dd>
        </dl>
      </div>
      <div className="bg-background z-20 relative p-8 rounded-md">
        <Form />
      </div>
      <div className="absolute bg-background/[.89] inset-0 w-full h-full z-10" />
      <Image
        fill
        sizes="100vw"
        className="object-cover"
        src={contact}
        alt="A truck riding in a rising sun"
      />
      <Gradient className="absolute left-0 -bottom-16 z-10 w-[40rem]" />
      <Gradient className="absolute right-0 top-0 z-10 w-[40rem] rotate-180 hidden lg:block" />
    </section>
  );
}
