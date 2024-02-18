"use client";

import { MouseEvent } from "react";

export default function NavLink({ children }: { children: string }) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(children);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className="after:ml-auto text-white text-[12px] hover:text-primary-light transition-colors after:h-px after:block after:bg-primary after:w-full after:max-w-0 hover:after:max-w-[66%] after:transition-all"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
