import React from "react";
import Image from "next/image";

const Contact1 = ({ data }) => {
  return (
    <>
      <div className=" py-[120px] relative bg-[#304659]">
        <svg
          className="absolute z-0 top-0 right-0 sm:block hidden"
          width={702}
          height={562}
          viewBox="0 0 702 562"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.7"
            cx="462.5"
            cy="99.5"
            r="461.5"
            stroke="white"
            strokeWidth={2}
          />
          <circle
            opacity="0.7"
            cx="462.5"
            cy="99.5005"
            r="390.346"
            stroke="white"
            strokeWidth={2}
          />
          <circle
            opacity="0.7"
            cx="462.501"
            cy="99.4999"
            r="319.192"
            stroke="white"
            strokeWidth={2}
          />
        </svg>

        <div className="max-w-[1296px] mx-auto relative z-10 md:px-[97px] px-[16px]">
          <div className="grid lg:grid-cols-2 md:gap-y-[72px] gap-y-[31px] lg:gap-x-[12px]">
            <div className="pr-[89px]">
              <h1 className="sm:text-[52px] text-[28px] font-semibold sm:leading-[60px] leading-[38px] tracking-[-1px] text-white xl:mb-[60px] mb-[32px] ">
                Feel free to contact us to learn more.
              </h1>
              <div className="xl:mb-20 sm:mb-[44px] mb-[26px]">
                <div className="flex items-center mb-6 gap-x-6">
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="49.9614"
                      height={50}
                      rx="24.9807"
                      fill="#FF8181"
                    />
                    <path
                      d="M15 17.2222C15 15.9949 15.9949 15 17.2222 15H20.8658C21.3441 15 21.7687 15.306 21.9199 15.7597L23.5842 20.7525C23.759 21.277 23.5215 21.8503 23.027 22.0976L20.5189 23.3517C21.7436 26.068 23.932 28.2564 26.6483 29.4811L27.9024 26.973C28.1497 26.4785 28.723 26.241 29.2475 26.4158L34.2403 28.0801C34.694 28.2313 35 28.6559 35 29.1342V32.7778C35 34.0051 34.0051 35 32.7778 35H31.6667C22.4619 35 15 27.5381 15 18.3333V17.2222Z"
                      stroke="#12141D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div>
                    <p className="text-lg font-normal leading-[30px] text-white opacity-[0.8]">
                      Contact Us
                    </p>
                    <p className="text-lg font-normal leading-[30px] text-white opacity-[0.8]">
                      {data?.Telephone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-6">
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="49.9614"
                      height={50}
                      rx="24.9807"
                      fill="#FF8181"
                    />
                    <path
                      d="M13.8187 23.75H16.25C17.6307 23.75 18.75 24.8693 18.75 26.25V27.5C18.75 28.8807 19.8693 30 21.25 30C22.6307 30 23.75 31.1193 23.75 32.5V36.1813M20 14.9194V16.875C20 18.6009 21.3991 20 23.125 20H23.75C25.1307 20 26.25 21.1193 26.25 22.5C26.25 23.8807 27.3693 25 28.75 25C30.1307 25 31.25 23.8807 31.25 22.5C31.25 21.1193 32.3693 20 33.75 20L35.0806 20M28.75 35.6099V32.5C28.75 31.1193 29.8693 30 31.25 30H35.0806M36.25 25C36.25 31.2132 31.2132 36.25 25 36.25C18.7868 36.25 13.75 31.2132 13.75 25C13.75 18.7868 18.7868 13.75 25 13.75C31.2132 13.75 36.25 18.7868 36.25 25Z"
                      stroke="#12141D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div>
                    <p className="text-[18px] font-normal leading-[28px] text-white opacity-[0.8]">
                      {data?.address.street}
                    </p>
                    <p className="text-[18px] font-normal leading-[28px] text-white opacity-[0.8]">
                      {data?.address.city}
                      {data?.address.building}
                    </p>
                  </div>
                </div>
              </div>
              <p className="sm:text-lg text-[16px] font-normal sm:leading-8 leading-[24px] text-white mb-8 ">
                “Dental implant Solutions is part of a professional dental
                group. Come to us for all your dental implants needs including
                all-on-four full jaw restorations and full mouth reconstruction.
                Our Walnut Creek dental practice dedicates to serve you the best
                dental services you deserve.”
              </p>
              <div className="flex items-center gap-x-4">
                <span className="">
                  <img
                    src="/static/images/Contact/Contact1/author.png"
                    alt=""
                  />
                </span>
                <div className="">
                  <p className="text-sm font-semibold leading-5 text-white mb-1">
                    Jenny Wilson
                  </p>
                  <p className="text-sm font-normal leading-5 text-white opacity-[0.7]">
                    Director @Company
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white w-full py-10 px-8 rounded-[10px] ">
                <h1 className="text-[28px] font-semibold leading-9 text-center tracking-[-0.05px] text-[#12141D] mb-[60px]">
                  Contact With Us
                </h1>
                <form>
                  <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-y-[20px] mb-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-[#DDE1E0] rounded-md border-[1px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-3"
                      >
                        Number *
                      </label>
                      <input
                        required
                        type="text"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-[#DDE1E0] rounded-md border-[1px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-3"
                      >
                        Email *
                      </label>
                      <input
                        required
                        type="text"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-[#DDE1E0] rounded-md border-[1px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-3"
                      >
                        Subject
                      </label>
                      <input
                        required
                        type="text"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-[#DDE1E0] rounded-md border-[1px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col mb-10">
                      <label
                        className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-3"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        className="text-sm border-[#DDE1E0] rounded-md border-[1px]  py-2 outline-none resize-none px-3 focus:outline-none focus:border focus:border-indigo-700"
                        rows={4}
                        id="message"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="focus:outline-none bg-[#FF8181] mb-1 transition duration-150 ease-in-out  rounded-[10px] text-white px-2 w-full py-[18px] text-base font-semibold leading-6"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact1;
