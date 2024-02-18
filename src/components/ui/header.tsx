import LogoIcon from "@/assets/icons/logo";
import { SECTIONS } from "@/const";
import NavLink from "./nav-link";
import PhoneIcon from "@/assets/icons/phone";
import MailIcon from "@/assets/icons/mail";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between flex-wrap gap-8 2xl:px-[12vw] px-[8vw] md:px-[4vw] bg-background py-4">
        <div className="relative w-16">
          <LogoIcon />
        </div>
        <div className="flex items-center gap-8 flex-wrap">
          {SECTIONS.map((title) => (
            <NavLink key={title}>{title}</NavLink>
          ))}
        </div>
        <div className="flex items-center gap-8 flex-wrap">
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
