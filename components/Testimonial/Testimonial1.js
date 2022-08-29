/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { imageResolver } from "../../utils/helpers";
const cardData = [
  {
    review:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
    name: "Leslie Alexander",
    status: "Founder",
    profileUrl: "/images/testimonial1/Oval.png",
  },
  {
    review:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
    name: "Leslie Alexander",
    status: "Founder",
    profileUrl: "/images/testimonial1/Oval.png",
  },
  {
    review:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
    name: "Leslie Alexander",
    status: "Founder",
    profileUrl: "/images/testimonial1/Oval.png",
  },
];
const Testimonial1 = ({ data }) => {
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  return (
    <>
      <div className="max-w-[1600px] mx-auto bg-[#0F172A] md:pt-[100px] pb-[40px] pt-[40px] relative">
        <svg
          className="absolute top-0 left-0"
          width={263}
          height={214}
          viewBox="0 0 263 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-80 212C-78.0602 194.347 -70.8535 177.958 -56.1377 167.475C-49.4376 162.702 -43.1452 158.968 -35.5255 155.96C-29.0397 153.399 -21.4931 152.567 -14.6566 151.524C1.94136 148.992 18.6698 148.349 35.2917 146.15C50.4847 144.14 65.6768 143.156 80.7498 140.265C97.4269 137.066 111.851 131.303 127.063 123.717C142.8 115.87 158.661 108.36 171.709 96.3367C185.885 83.2748 199.569 68.5427 210.667 52.7924C230.595 24.51 246.581 -6.42963 253.645 -40.4804C257.161 -57.4318 261 -74.5962 261 -92"
            stroke="white"
            strokeOpacity="0.14"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 z-0 sm:block hidden"
          width={667}
          height={613}
          viewBox="0 0 667 613"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_f_35_515)">
            <circle cx="214.5" cy="452.5" r="188.5" fill="#76F4DE" />
          </g>
          <defs>
            <filter
              id="filter0_f_35_515"
              x={-238}
              y={0}
              width={905}
              height={905}
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
                result="effect1_foregroundBlur_35_515"
              />
            </filter>
          </defs>
        </svg>
        <svg
          className="absolute top-0 right-0 z-0"
          width={634}
          height={690}
          viewBox="0 0 634 690"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_f_35_516)">
            <circle cx="413.5" cy="276.5" r="149.5" fill="#FFDDA9" />
          </g>
          <defs>
            <filter
              id="filter0_f_35_516"
              x={0}
              y={-137}
              width={827}
              height={827}
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
                result="effect1_foregroundBlur_35_516"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width={237}
          height={232}
          viewBox="0 0 237 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M273 17.0688C255.111 4.93347 228.104 -0.174064 206.848 2.8513C180.049 6.66578 159.716 21.1488 145.326 43.3402C138.015 54.6153 129.821 66.1846 127.014 79.6052C123.794 94.9962 124.052 111.876 125.059 127.512C126.512 150.06 147.058 167.27 167.703 171.864C181.078 174.841 191.327 174.776 203.762 168.361C205.58 167.424 210.56 164.67 210.912 162.025C211.904 154.578 203.175 145.591 197.949 141.42C186.08 131.948 165.34 128.358 150.933 126.688C136.493 125.013 120.747 123.907 106.386 126.739C91.4568 129.684 75.787 136.383 62.611 143.893C36.1077 158.999 22.6518 184.595 10.3482 211.478C-0.0835243 234.27 -0.070568 261.693 6.69594 285.501C9.11582 294.016 12.5381 302.464 14.6691 311"
            stroke="white"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>

        <div className="max-w-[1296px] mx-auto md:px-[80px] px-[16px]">
          <div className="mx-auto md:mb-20 mb-[30px]">
            <p className="md:text-[18px] text-[16px] font-medium md:leading-[30px] leading-[26px] text-center text-white opacity-[0.6] mb-5">
              {data?.peopleText}
            </p>
            <h1 className="md:text-[36px] text-[28px] md:leading-[48px] leading-[36px] font-bold text-center text-white">
              {data?.headline}
            </h1>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 xl:gap-x-[40px] lg:gap-x-[30px] gap-y-[24px] relative z-20">
            {data?.testimonialCard?.map((_item, idx) => {
              return (
                <div
                  className="bg-[#FFFFFF] py-[32px] px-[28px] rounded-md flex flex-col justify-between"
                  key={idx}
                >
                  <div className="flex flex-col gap-x-1 items-center mb-7">
                    <div className="mb-[32px] flex justify-start gap-x-1 w-full">
                      {range(1, _item.stars).map((star, idx) => {
                        return (
                          <svg
                            key={idx}
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.31359 0.205137L10.5966 5.05692L15.7 5.83512C15.8321 5.85566 15.9417 5.95266 15.9829 6.0855C16.024 6.21834 15.9897 6.36408 15.8941 6.46169L12.202 10.2374L13.0737 15.57C13.0966 15.7075 13.0428 15.8466 12.9348 15.9288C12.8269 16.011 12.6836 16.0219 12.5655 15.9569L8.00052 13.4397L3.43557 15.9576C3.31748 16.0228 3.17417 16.0121 3.06616 15.93C2.95816 15.8478 2.9043 15.7086 2.92735 15.571L3.79908 10.2374L0.105869 6.46169C0.0103498 6.36408 -0.0240346 6.21834 0.0171182 6.0855C0.058271 5.95266 0.167857 5.85566 0.299974 5.83512L5.40341 5.05692L7.68745 0.205137C7.74557 0.0796823 7.86718 0 8.00052 0C8.13386 0 8.25547 0.0796823 8.31359 0.205137Z"
                              fill="#F59E0B"
                            />
                          </svg>
                        );
                      })}
                    </div>
                    
                    <p className="md:text-[18px] text-[16px]  font-normal md:leading-[28px] leading-[24px] text-[#18181B] ">
                      {_item.review}
                    </p>
                  </div>

                  <div className="flex gap-x-4 items-center mt-auto">
                    <img
                      src={imageResolver(_item.author.image).path}
                      className="h-[43px] w-[43px]"
                    />
                    <div>
                      <h3 className="text-[16px] leading-[28px] font-semibold text-[#18181B] mb-[2px]">
                        {_item.author.name}
                      </h3>
                      <p className="tex-[14px] font-normal leading-[22px] text-[#0F172A] opacity-[0.7]">
                        {_item.author.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial1;
