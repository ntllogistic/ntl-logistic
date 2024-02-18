"use client";

import ArrowIcon from "@/assets/icons/arrow";
import { MouseEvent } from "react";

export default function ScrollButton() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      className="border-[1px] border-[#4B4949] rounded px-6 pr-16 h-11 font-medium text-white text-[12px] flex items-center justify-center relative"
    >
      Do góry
      <div className="h-9 w-9 bg-[#2D2D2D] rounded absolute right-1">
        <div className="-rotate-90">
          <ArrowIcon />
        </div>
      </div>
    </button>
  );
}
