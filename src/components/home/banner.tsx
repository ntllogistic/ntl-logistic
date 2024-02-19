import { inter } from "@/app/layout";
import { banner } from "@/assets/images";
import Image from "next/image";
import Button from "../ui/button";
import Gradient from "../ui/gradient";

export default function Banner() {
  return (
    <section className="px-8 md:px-[4vw] 2xl:px-[12vw] py-24 lg:py-36 relative flex flex-col items-center gap-8">
      <h2 className="text-2xl lg:text-3xl text-center text-white">
        Doświadczenie i zaangażowanie
      </h2>
      <p
        className={`text-sm text-white ${inter.className} text-center leading-8 max-w-3xl`}
      >
        Jesteśmy zespołem ambitnych i doświadczonych osób, które wykorzystują
        swoje umiejętności i zainteresowania dla realizacji projektów
        transportowych dla obecnych i przyszłych klientów. Oferujemy
        najkorzystniejsze rozwiązania, z uwzględnieniem czynników ekonomicznych
        oraz jakościowych.
      </p>
      <Button>Bezpłatna wycena</Button>
      <Image
        fill
        sizes="(max-width: 768px) 1920px, 100vw"
        className="object-cover relative -z-10"
        src={banner}
        alt="A truck driving on a highway"
      />
      <Gradient className="absolute bottom-0 w-[40rem] -z-10" />
    </section>
  );
}
