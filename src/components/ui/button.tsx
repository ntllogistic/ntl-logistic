import ArrowIcon from "@/assets/icons/arrow";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-6 pr-16 h-12 text-white font-medium bg-primary text-[12px] rounded relative flex items-center justify-center max-w-max ${className}`}
    >
      {children}
      <div className="absolute right-1 h-10 w-10 rounded bg-background grid place-content-center">
        <ArrowIcon />
      </div>
    </button>
  );
}
