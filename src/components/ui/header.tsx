import LogoIcon from "@/assets/icons/logo";
import PhoneIcon from "@/assets/icons/phone";
import MailIcon from "@/assets/icons/mail";
import Nav from "./nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between gap-8 2xl:px-[12vw] px-8 md:px-[4vw] bg-background h-16 lg:h-20 relative">
        <Link href="/" className="relative w-14 lg:w-20">
          <LogoIcon />
        </Link>
        <Nav />
        <div className="items-center gap-8 hidden xl:flex">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span className="text-[12px] text-white font-medium">
              +48 609 708 007
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon />
            <span className="text-[12px] text-white font-medium">
              transport@ntl-logistic.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
