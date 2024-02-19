"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

type Props = { children: string; callback?: () => void; className?: string };

export default function NavLink({
  children,
  callback,
  className,
  href,
}: Props & LinkProps) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(children);
    element?.scrollIntoView({ behavior: "smooth" });
    callback && callback();
  };

  return href ? (
    <Link
      href={href}
      className={`${
        pathname === href
          ? "text-primary-light after:max-w-[66%]"
          : "text-white hover:text-primary-light after:max-w-0 hover:after:max-w-[66%]"
      } after:ml-auto text-[12px] transition-colors after:h-px after:block after:bg-primary after:w-full after:transition-all ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`after:ml-auto text-white text-[12px] hover:text-primary-light transition-colors after:h-px after:block after:bg-primary after:w-full after:max-w-0 hover:after:max-w-[66%] after:transition-all ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
  return <></>;
}
