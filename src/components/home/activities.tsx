import { inter } from "@/app/layout";
import Button from "../ui/button";

export default function Activities() {
  return (
    <section className="px-8 md:px-[4vw] 2xl:px-[12vw] bg-background py-40">
      <div className="flex flex-col gap-8 max-w-xl">
        <h2 className="text-2xl lg:text-3xl text-white">
          Dowiedz się jak{" "}
          <sup className="text-primary -ml-2 lg:text-xl hidden sm:inline">
            skutecznie{" "}
          </sup>
          <span className="text-primary sm:hidden">skutecznie</span> możemy Ci
          pomóc
        </h2>
        <p className={`${inter.className} leading-loose text-sm text-white/80`}>
          Realizujemy transport samochodami do 3.5 tony, który wykorzystujemy
          zarówno do wykonania zleceń dedykowanych, z możliwością realizacji w
          krótkim czasie, jak i przy dostawach ekonomicznych. Realizujemy
          dostawy na terenie całej Europy oraz Wielkiej Brytanii - pomagamy w
          prawidłowym spełnianiu czynności celnych i promocyjnych.
        </p>
        <p className={`${inter.className} leading-loose text-sm text-white/80`}>
          Nasz dział spedycji realizuje zlecenia catopojazdowe do załadunku
          torów, transport częściowy oraz ponadgabarytowy naczepami otwartymi.
        </p>
        <Button className="mt-4">Bezpłatna wycena</Button>
      </div>
    </section>
  );
}
