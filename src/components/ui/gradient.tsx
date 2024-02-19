import { HTMLAttributes } from "react";

export default function Gradient({
  className,
}: Pick<HTMLAttributes<HTMLDivElement>, "className">) {
  return (
    <div className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 619 379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_132)">
          <ellipse cx="309" cy="375.5" rx="163" ry="153.5" fill="#DA2311" />
        </g>
        <defs>
          <filter
            id="filter0_f_1_132"
            x="-112.2"
            y="-36.2"
            width="842.4"
            height="823.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="129.1"
              result="effect1_foregroundBlur_1_132"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
