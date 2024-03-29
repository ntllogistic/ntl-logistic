"use client";

import { SECTIONS } from "@/const/index";
import NavLink from "./nav-link";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <Fragment>
      <div
        className={`flex flex-col lg:flex-row items-center lg:gap-8 absolute left-0 right-0 top-16 lg:top-0 bg-background py-4 lg:py-0 lg:relative transition-opacity ${
          isActive ? "opacity-100" : "opacity-0 lg:opacity-100"
        }`}
      >
        {SECTIONS.map((link) => (
          <NavLink
            className="py-2 lg:py-0"
            callback={() => setIsActive(false)}
            href={link.href}
            key={link.title}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      <button
        className="flex flex-col justify-center gap-1.5 lg:hidden"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div
          className={`h-0.5 w-6 rounded-full bg-primary transition-opacity ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 rounded-full bg-primary transition-opacity ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 rounded-full bg-primary transition-opacity ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 rounded-full bg-primary transition-transform absolute ${
            isActive ? "-rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 rounded-full bg-primary transition-transform absolute ${
            isActive ? "rotate-45" : "rotate-0"
          }`}
        ></div>
      </button>
    </Fragment>
  );
}
