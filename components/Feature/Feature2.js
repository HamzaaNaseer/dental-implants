/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { imageResolver } from "../../utils/helpers";

export const Feature2 = ({ data }) => {
  return (
    <>
      <div className="bg-[#D1EDF5]">
        <div className="max-w-[1600px] mx-auto  lg;py-[100px] md:py-[169px] py-[40px]">
          <div className="max-w-[1296px] mx-auto md:px-[40px] px-[36px]">
            <div className="grid md:grid-cols-2 lg:gap-x-32 gap-x-[20px] gap-y-[15px] items-center mb-[30px] md:mb-[80px]">
              <h1 className="lg:text-[48px] md:text-[34px] text-[28px]  font-semibold md:leading-[48px] leading-[36px] lg:leading-[66px] text-[#12141D]">
                {data?.headline}
              </h1>
              <p className="lg:text-[18px] text-[13px] font-normal leading-[20px] lg:leading-[28px] opacity-[0.7] text-[#12141D] md:pl-8">
                {data?.text}
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-x-[24px] md:gap-x-[17px] gap-y-[17px]">
              {data?.card?.map((_item, idx) => {
                return (
                  <div
                    className="bg-white border-[2px] border-black lg:py-[40px] py-[29px] rounded-[20px] px-[36px] lg:px-[50px] flex flex-col justify-between"
                    key={idx}
                  >
                    <div className="">
                      <div className="lg:mb-10 mb-[29px]">
                        <img src={imageResolver(_item.image).path} alt="" />
                      </div>
                      <div className="lg:mb-[40px] mb-[28px]">
                        <h2 className="lg:text-[20px] lg:leading-[28px] text-[14px] leading-[20px] font-bold mb-[13px] lg:mb-[20px]">
                          {_item.title}
                        </h2>
                        <p className="lg:text-[16px] font-normal lg:leading-[24px] text-[11px] leading-[17px]">
                          {_item.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link href={_item.cta.link}>
                        <button className="flex gap-x-2 items-center lg:text-[16px] font-semibold lg:leading-[24px] text-[11px] leading-[17px] ">
                          {_item.cta.name}
                          <svg
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
                              stroke="#12141D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature2;
