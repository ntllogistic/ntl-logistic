import { inter } from "@/assets/font/monument-extended";
import { banner } from "@/assets/images";
import Image from "next/image";
import Button from "../ui/button";
import Gradient from "../ui/gradient";
import Link from "next/link";

export default function Banner({ hideTopArrow }: { hideTopArrow?: boolean }) {
  return (
    <section className="px-6 md:px-[4vw] 2xl:px-[12vw] py-24 lg:py-36 relative flex flex-col items-center gap-8">
      <h2 className="text-2xl lg:text-3xl text-center text-white">
        Doświadczenie i stały rozwój
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
      <Link href="/kontakt">
        <Button asChild>Bezpłatna wycena</Button>
      </Link>
      <Image
        fill
        sizes="(max-width: 768px) 1920px, 100vw"
        className="object-cover relative -z-10"
        src={banner}
        alt="A truck driving on a highway"
      />
      <Gradient className="absolute bottom-0 w-full max-w-[40rem] lg:max-w-none lg:w-[40rem] -z-10" />
      <div className="absolute bottom-0 left-8 md:left-[4vw] 2xl:left-[12vw] translate-y-1/2 w-16 lg:w-[108px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 108 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.3625 64.4107L14.0653 35.2262C5.97823 27.1686 5.97823 14.0993 14.0653 6.04758C22.1582 -2.01586 35.2695 -2.01586 43.3625 6.04758L101.939 64.4107C110.02 72.4683 110.02 85.5376 101.939 93.5893L43.3625 151.952C35.2695 160.016 22.1582 160.016 14.0653 151.952C5.97823 143.901 5.97823 130.831 14.0653 122.774L43.3625 93.5893C51.4436 85.5376 51.4436 72.4683 43.3625 64.4107Z"
            fill="#DA2311"
          />
          <path
            d="M13.439 73.4602L2.30508 62.3806C-0.76836 59.3205 -0.76836 54.3552 2.30508 51.2951C5.37853 48.235 10.3655 48.235 13.439 51.2951L35.6949 73.4602C38.7684 76.5203 38.7684 81.4797 35.6949 84.5398L13.439 106.705C10.3655 109.765 5.37853 109.765 2.30508 106.705C-0.76836 103.645 -0.76836 98.6795 2.30508 95.6253L13.439 84.5398C16.5124 81.4797 16.5124 76.5203 13.439 73.4602Z"
            fill="#DA2311"
          />
        </svg>
      </div>
      {!hideTopArrow && (
        <div className="absolute top-0 right-8 md:right-[4vw] 2xl:right-[12vw] -translate-y-1/2 w-16 lg:w-[108px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 108 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.6375 93.5893L93.9347 122.774C102.022 130.831 102.022 143.901 93.9347 151.952C85.8418 160.016 72.7305 160.016 64.6375 151.952L6.06087 93.5893C-2.02029 85.5317 -2.02029 72.4624 6.06087 64.4107L64.6375 6.04758C72.7305 -2.01585 85.8418 -2.01585 93.9347 6.04758C102.022 14.0993 102.022 27.1686 93.9347 35.2262L64.6375 64.4107C56.5564 72.4624 56.5564 85.5317 64.6375 93.5893Z"
              fill="#2B717F"
            />
            <path
              d="M94.561 84.5398L105.695 95.6194C108.768 98.6795 108.768 103.645 105.695 106.705C102.621 109.765 97.6345 109.765 94.561 106.705L72.3051 84.5398C69.2316 81.4797 69.2316 76.5203 72.3051 73.4602L94.561 51.2951C97.6345 48.235 102.621 48.235 105.695 51.2951C108.768 54.3552 108.768 59.3205 105.695 62.3747L94.561 73.4602C91.4876 76.5203 91.4876 81.4797 94.561 84.5398Z"
              fill="#2B717F"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
