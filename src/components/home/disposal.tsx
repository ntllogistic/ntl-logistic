import { inter } from "@/assets/font/monument-extended";

export default function Disposal() {
  return (
    <section className="px-6 md:px-[4vw] 2xl:px-[12vw] bg-white py-40 flex flex-col gap-8 lg:grid grid-cols-2">
      <div></div>
      <div className="flex flex-col gap-8 max-w-xl">
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
          Lorem ipsum dolor sit amet consectetur. Convallis sodales dui commodo
          eu iaculis sodales odio egestas. Ornare ac eget nunc elit maecenas
          eget cras fringilla. Faucibus maecenas a est tellus enim. Lorem est
          sem augue auctor malesuada ornare nunc porta id. Dolor pellentesque
          platea maecenas risus. Quisque eleifend morbi consectetur amet duis
          sagittis. Eget dui volutpat sed sed vitae diam ornare molestie.
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
