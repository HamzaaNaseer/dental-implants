import React from "react";
import Link from "next/link";

const Footer1 = ({ data }) => {
  return (
    <>
      <div className="w-full bg-[#F6FBFB] py-20 relative ">
        <svg
          className="absolute z-0 top-0 left-0 md:block hidden"
          width={655}
          height={680}
          viewBox="0 0 655 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_50_649)">
            <circle
              cx="39.5"
              cy="64.5"
              r="261.5"
              fill="#FFDD86"
              fillOpacity="0.22"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_50_649"
              x={-576}
              y={-551}
              width={1231}
              height={1231}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={177}
                result="effect1_foregroundBlur_50_649"
              />
            </filter>
          </defs>
        </svg>
        <svg
          className="absolute z-0 bottom-0 right-24"
          width={903}
          height={470}
          viewBox="0 0 903 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_f_50_650)">
            <circle cx="451.5" cy="451.5" r="187.5" fill="#76F4DE" />
          </g>
          <defs>
            <filter
              id="filter0_f_50_650"
              x={0}
              y={0}
              width={903}
              height={903}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={132}
                result="effect1_foregroundBlur_50_650"
              />
            </filter>
          </defs>
        </svg>

        <div className="max-w-[1296px] mx-auto sm:px-[97px] px-[16px]">
          <div className="flex lg:flex-row  flex-col justify-between items-center pb-[78px] border-b-[1px] border-[#12141D] mb-[85px] ">
            <p className="sm:text-[36px] font-bold sm:leading-[46px] text-[28px] leading-[36px] text-[#12141D] max-w-[648px] lg:text-left text-center">
              {data?.headline}
            </p>
            <div className="lg:mt-0 mt-[30px]">
              <Link href={data?.cta?.link || '/'}>
                <button className="py-[13.5px] px-[43.5px] bg-[#FA6444] rounded text-[16px] font-[600] leading-[28px]  text-white">
                  {data?.cta?.name}
                </button>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 justify-between mb-24">
            {data?.Links.map((_menu, idx) => {
              return (
                <div key={idx}>
                  <h2 className="text-[16px] font-[600] leading-[28px] text-[#12141D] mb-[22px]">
                    {_menu.title}
                  </h2>
                  {_menu.cta.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <p className="opacity-80 text-[14px] leading-[40px] text-[#12141D] ">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center">
            <p className="opacity-70 w-72 h-6 text-[14px] leading-[26px] text-[#12141D] md:text-left text-center">
              {data?.copyright}
            </p>
            <p className="opacity-70  text-[14px] leading-[26px] text-right text-[text]">
              Privacy Policy <span className="pl-6"> Terms & Conditions </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
