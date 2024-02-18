import { stats } from "@/assets/images";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="bg-white py-40 px-[8vw] md:px-[4vw] 2xl:px-[12vw]">
      <div className="flex flex-col gap-6 sm:grid grid-cols-2 lg:grid-cols-4">
        <div className="rounded overflow-hidden py-16 relative">
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
        <div className="rounded overflow-hidden py-12 bg-[#EFEFEF]">
          <h3 className="text-5xl lg:text-6xl text-center">
            <p>
              42<span className="text-primary">+</span>
            </p>
            <span className="text-sm text-[#191919]/70">
              Zadowolonych klientów
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
