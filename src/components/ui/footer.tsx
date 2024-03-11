import LogoIcon from "@/assets/icons/logo";
import { SECTIONS } from "@/const/index";
import NavLink from "./nav-link";
import ScrollButton from "./scroll-button";
import Link from "next/link";
import { inter } from "@/assets/font/monument-extended";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="flex items-center justify-between flex-wrap gap-8 2xl:px-[12vw] px-8 md:px-[4vw] bg-background py-4">
        <div className="relative w-16">
          <LogoIcon />
        </div>
        <div className="flex items-center gap-8 flex-wrap">
          {SECTIONS.map(({ title, href }) => (
            <NavLink href={href} key={title}>
              {title}
            </NavLink>
          ))}
        </div>
        <ScrollButton />
      </div>
      <div
        className={`flex items-center justify-between flex-wrap gap-8 2xl:px-[12vw] px-8 md:px-[4vw] bg-background-light py-4 ${inter.className}`}
      >
        <p className="text-white text-[12px] font-medium">
          Copyrights {year}. All rights reserved
        </p>
        <p className="text-white text-[12px] font-medium">
          <span className="opacity-80">Design i realizacja</span>{" "}
          <strong>
            <Link
              href="https://www.divideproject.com/pl"
              target="_blank"
              rel="noreferrer"
              title="DivideProject"
            >
              DivideProject
            </Link>
          </strong>
        </p>
      </div>
    </footer>
  );
}
