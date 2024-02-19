"use client";

import Link from "next/link";
import { MouseEvent } from "react";

type Props = { children: string; callback?: () => void; className?: string };

export default function NavLink({ children, callback, className }: Props) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(children);
    element?.scrollIntoView({ behavior: "smooth" });
    callback && callback();
  };

  return children === "Kontakt" ? (
    <Link
      href="/kontakt"
      className={`after:ml-auto text-white text-[12px] hover:text-primary-light transition-colors after:h-px after:block after:bg-primary after:w-full after:max-w-0 hover:after:max-w-[66%] after:transition-all ${className}`}
    >
      Kontakt
    </Link>
  ) : (
    <button
      className={`after:ml-auto text-white text-[12px] hover:text-primary-light transition-colors after:h-px after:block after:bg-primary after:w-full after:max-w-0 hover:after:max-w-[66%] after:transition-all ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
