import { inter } from "@/app/layout";
import { BENEFITS } from "@/const";

export default function Benefits() {
  return (
    <section className="px-8 md:px-[4vw] 2xl:px-[12vw] bg-light py-16 lg:py-24 flex flex-col gap-16 items-center">
      <h2 className="text-2xl lg:text-3xl text-center max-w-3xl xl:max-w-none">
        Profesjonalne usługi są gwarancją zadowolenia{" "}
        <sup className="text-primary -ml-2 lg:text-xl hidden xl:inline">
          klientów
        </sup>
        <span className="text-primary xl:hidden">klientów</span>
      </h2>
      <dl className="flex flex-col gap-6 sm:grid grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit, index) => (
          <BenefitRef {...benefit} index={index} key={benefit.title} />
        ))}
      </dl>
    </section>
  );
}

const BenefitRef = ({
  title,
  description,
  icon,
  index,
}: Benefit & { index: number }) => (
  <div className="rounded bg-white p-8 space-y-4">
    <div className="h-16 w-16 rounded bg-light grid place-content-center mb-12">
      {icon}
    </div>
    <dt
      className={`lg:text-lg ${index < 4 ? "w-min" : "w-auto max-w-[14rem]"}`}
    >
      {title}
    </dt>
    <dd className={`text-[12px] text-background/80 ${inter.className}`}>
      {description}
    </dd>
  </div>
);
