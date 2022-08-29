import React from "react";
import { imageResolver } from "../../utils/helpers";

const Service1 = ({ data }) => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="max-w-[1296px] mx-auto sm:pt-[99px] sm:pb-[124px] sm:py-0 py-[40px] px-[60px]">
          <div className="sm:mb-[27px] mb-[16px]  max-w-[483px] mx-auto">
            <h2 className="sm:text-[42px] font-[700] sm:leading-[48px] text-[30px] leading-[40px] text-center text-[#18181B]">
              {data?.headline}
            </h2>
          </div>
          <div className="sm:mb-[73px] mb-[30px] max-w-[483px] first-line mx-auto ">
            <p className="text-[16px] leading-[24px] font-[400] opacity-70 text-[#12141D] text-center">
              {data?.text}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-[24px] md:gap-x-[16px] sm:gap-y-[26px] gap-y-[24px]">
            {data?.card?.map((item, index) => (
              <div
                key={index}
                className="min-h-[263px] bg-white shadow-sm lg:py-[40px] sm:py-[47px] py-[30px] lg:px-[50px] sm:px-[35px] px-[30px] "
              >
                <div className="mb-[30px]">
                  <img
                    //src={imageResolver(item.cardImage).path}
                    src={item.cardImage}
                    alt=""
                    className="min-h-[50px] min-w-[50px]"
                  />
                </div>
                <div className="mb-[15px]">
                  <h2 className="text-[20px] font-[700] leading-[28px] text-[#12141D] mr-auto">
                    {item.title}
                  </h2>
                </div>
                <div className="">
                  <p className=" sm:text-[18px] sm:leading-[28px] text-[16px] leading-[24px] font-[400] text-[#12141D] opacity-70">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service1;
