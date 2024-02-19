import { inter } from "@/app/layout";
import { contact } from "@/assets/images";
import Image from "next/image";
import Button from "../ui/button";
import Gradient from "../ui/gradient";

export default function Contact() {
  return (
    <section className="px-6 md:px-[4vw] 2xl:px-[12vw] bg-background py-24 lg:y-40 relative flex flex-col gap-8 lg:grid grid-cols-2 overflow-hidden">
      <div className="flex flex-col gap-8 max-w-xl z-20 relative">
        <h2 className="text-2xl lg:text-3xl text-white">
          Skontaktuj się{" "}
          <sup className="text-primary -ml-2 lg:text-xl hidden sm:inline">
            z nami{" "}
          </sup>
          <span className="text-primary sm:hidden">z nami</span>
        </h2>
        <p className={`${inter.className} leading-loose text-sm text-white/80`}>
          Lorem ipsum dolor sit amet consectetur. Sed massa pellentesque massa
          mi mattis convallis. Eget et dolor a amet eu viverra. Lorem ipsum
          dolor sit amet consectetur. Sed massa pellentesque massa mi
        </p>
        <div className="space-y-4">
          <p className="text-white text-sm">+48 609 708 007</p>
          <p className="text-white text-sm">
            ul. Karola Lewakowskiego 10/4, 35-119 Rzeszów
          </p>
          <p className="text-white text-sm">transport@ntl-logistic.com</p>
        </div>
      </div>
      <div className="bg-background z-20 relative p-8 rounded">
        <form action="">
          <div className="flex flex-col gap-4 sm:grid grid-cols-2">
            <input
              type="text"
              className="border-[1px] border-white/20 rounded py-3 px-6 text-[12px] bg-background text-white placeholder:text-white/80"
              placeholder="Imię"
            />
            <input
              type="email"
              className="border-[1px] border-white/20 rounded py-3 px-6 text-[12px] bg-background text-white placeholder:text-white/80"
              placeholder="E-mail"
            />
            <textarea
              className="border-[1px] border-white/20 rounded py-3 px-6 text-[12px] bg-background text-white placeholder:text-white/80 min-h-[8rem] col-span-2"
              placeholder="Treść wiadomości"
            />
            <Button className="mt-2">Wyślij</Button>
          </div>
        </form>
      </div>
      <div className="absolute bg-background/[.89] inset-0 w-full h-full z-10" />
      <Image
        fill
        sizes="100vw"
        className="object-cover"
        src={contact}
        alt="A truck riding in a rising sun"
      />
      <Gradient className="absolute left-0 bottom-0 z-10 lg:z-20 w-[40rem]" />
      <Gradient className="absolute right-0 top-0 z-10 w-[40rem] rotate-180" />
    </section>
  );
}
