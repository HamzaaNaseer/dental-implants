import React from "react";
import Link from "next/link";
import { imageResolver } from "../../utils/helpers";

const Service2 = ({ data }) => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1296px] mx-auto sm:pt-[101px] sm:pb-[120px] pt-[40px] pb-[40px] sm:px-[32px] px-[16px]">
          <div className="sm:mb-[103px] mb-[30px] max-w-[483px] mx-auto">
            <h2 className="sm:text-[52px] text-[30px] font-[700] sm:leading-[60px] leading-[40px] text-center text-[#12141D]">
              {data?.headline}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            {data?.card?.map((item, index) => (
              <div
                key={index}
                className="min-h-[263px] bg-[#F8FBFD] shadow-md rounded-[10px] pt-[30px] pl-[90px] pb-[40px] pr-[36px] flex flex-col justify-between relative"
              >
                <div className="absolute left-[30px] top[40px]">
                  <img
                    src={imageResolver(item.cardImage).path}
                    alt=""
                    className=""
                  />
                </div>
                <div className="mb-[57px]">
                  <div className="mb-[18px]">
                    <h2 className="sm:text-[24px] font-[600] sm:leading-[36px] text-[21px] leading-[26px] text-[#12141D] mr-auto">
                      {item.title}
                    </h2>
                  </div>
                  <div className="">
                    <p className=" text-[16px] leading-[24px] font-[400] text-[#12141D] opacity-70">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="">
                  <Link href={item.ctaLink}>
                    <button className="flex gap-x-2 items-center text-[16px] font-[600] leading-[24px] ">
                      {item.ctaText}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service2;
