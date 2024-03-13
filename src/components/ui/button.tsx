import ArrowIcon from "@/assets/icons/arrow";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  return asChild ? (
    <div
      className={`px-6 pr-16 h-10 text-white font-medium bg-primary text-[11px] rounded relative flex items-center disabled:opacity-60 justify-center max-w-max ${className}`}
    >
      {children}
      <div className="absolute right-0.5 h-9 w-9 rounded bg-background grid place-content-center">
        <ArrowIcon />
      </div>
    </div>
  ) : (
    <button
      {...props}
      className={`px-6 pr-16 h-10 text-white font-medium bg-primary text-[11px] rounded relative flex items-center disabled:opacity-60 justify-center max-w-max ${className}`}
    >
      {children}
      <div className="absolute right-0.5 h-9 w-9 rounded bg-background grid place-content-center">
        <ArrowIcon />
      </div>
    </button>
  );
}
