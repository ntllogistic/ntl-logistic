"use client";

import CountUp, { CountUpProps } from "react-countup";

export default function StatRef({
  end,
  title,
}: Pick<CountUpProps, "end"> & { title: string }) {
  return (
    <div className="rounded overflow-hidden py-12 sm:py-24 px-6 bg-[#EFEFEF] flex items-end justify-center">
      <h3 className="text-4xl lg:text-5xl  text-center flex flex-col justify-center gap-3">
        <p>
          <CountUp end={end} enableScrollSpy />
          <span className="text-primary">+</span>
        </p>
        <span className="text-sm text-[#191919]/70">{title}</span>
      </h3>
    </div>
  );
}
