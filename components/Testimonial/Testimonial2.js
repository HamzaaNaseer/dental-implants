import React from "react";
import { imageResolver } from "../../utils/helpers";

const Testimonial2 = ({ data }) => {
  return (
    <>
      <div className="bg-[#F9F9FF]">
        <div className="max-w-[1296px] mx-auto sm:pt-[99px] sm:pb-[141px] pt-[40px] pb-[40px] md:px-[44px] px-[36px]">
          <div className="sm:mb-20 mb-[30px]  max-w-[722px] mx-auto">
            <h2 className="sm:text-[60px] font-[500] sm:leading-[66px] text-[30px] leading-[40px] text-center text-[#12141D]">
              {data?.headline}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
            {data?.testimonialCard?.map((item, index) => (
              <div
                key={index}
                className="min-h-[250px] bg-white shadow-md lg:pt-[36px] lg:px-[40px] lg:pb-[40px] md:p-[28px] p-[20px]"
              >
                <div className="flex gap-x-[24px] mb-[20px] items-center md:max-w-full max-w-[250px] md:mx-0 mx-auto">
                  <div className="">
                    <img
                      src={imageResolver(item.author.image).path}
                      alt=""
                      className="h-[70px] w-[70px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <h2 className="lg:text-[18px] md:text-[13px] text-[18px] font-[600] lg:leading-[30px] md:leading-[22px] leading-[30px] text-[#12141D] mr-auto">
                      {item.author.name}
                    </h2>
                    <h3 className="opacity-70 lg:text-[14px] md:text-[10px] text-[14px] font-[400] lg:leading-[24px] md:leading-[17px] leading-[24px] text-[#12141D]">
                      {item.author.title}
                    </h3>
                  </div>
                </div>
                <div className="">
                  <p className=" lg:text-[18px] lg:leading-[28px] md:text-[13px] md:leading-[20px] text-[16px] leading-[24px] md:text-left text-center font-[400] text-[#12141D]">
                    {item.review}
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

export default Testimonial2;
