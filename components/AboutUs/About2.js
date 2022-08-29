/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const About2 = () => {
  return (
    <>
      <section className="w-full bg-[#F9FCFC] py-[100px]">
        <div className="max-w-[1186px] mx-auto">
          <div className="w-full flex  justify-between">
            <div className="max-w-[526px]">
              <h1 className=" text-[42px] leading-[48px] font-bold  mb-6">
                Reduce your risk of errors and missed deadlines
              </h1>
              <p className="opacity-70 text-base leading-relaxed text-gray-900 mb-12">
                The profile of tax has become much more visible not only from an
                investor and board perspective but also from a tax authority and
                public perspective also needs to take direct control of risk.
              </p>

              <button className=" px-9 py-4 text-white bg-[#FA6444] rounded-[3px]">
                Book A Call
              </button>
            </div>
            <div className=" w-[416px] bg-white mb-[30px] min-h-[320px]">
              <div className="flex justify-between items-center bg-[#12141D] py-3 rounded-t px-5">
                <h3 className="text-base font-semibold text-white">
                  Book next meeting
                </h3>
                <div className="flex gap-x-1.5 items-center">
                  <svg
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={4} cy={4} r={4} fill="#F23936" />
                  </svg>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#FABB18" />
                  </svg>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#008EFF" />
                  </svg>
                </div>
              </div>
              <div className="px-5 py-4 ">
                <div className="flex justify-between mb-[18px]">
                  <p className=" text-base font-bold leading-tight text-gray-900">
                    CSP Score
                  </p>
                  <p className=" text-xs leading-3 text-right text-gray-900">
                    View Details
                  </p>
                </div>
                <div className="mb-[34px]">
                  <img src="static/images/About/about2/card1.png" />
                </div>
                <div className="max-w-[269px] flex justify-between mx-auto">
                  <div>
                    <p className=" text-sm font-semibold leading-3 text-gray-700 mb-2.5">
                      Good
                    </p>
                    <div className="flex space-x-1.5  ">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.196289"
                          y="0.650391"
                          width="8.26231"
                          height="8.26231"
                          rx="4.13115"
                          fill="#008EFF"
                        />
                      </svg>

                      <p className="w-6 h-full text-xs leading-none text-gray-900">
                        70%
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className=" text-sm font-semibold leading-3 text-gray-700 mb-2.5">
                      Avarage
                    </p>
                    <div className="flex space-x-1.5  ">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.574219"
                          y="0.650391"
                          width="8.26231"
                          height="8.26231"
                          rx="4.13115"
                          fill="#FFC947"
                        />
                      </svg>

                      <p className="w-6 h-full text-xs leading-none text-gray-900">
                        20%
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className=" text-sm font-semibold leading-3 text-gray-700 mb-2.5">
                      Bad
                    </p>
                    <div className="flex space-x-1.5  ">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.572266"
                          y="0.650391"
                          width="8.26231"
                          height="8.26231"
                          rx="4.13115"
                          fill="#14B082"
                        />
                      </svg>

                      <p className="w-6 h-full text-xs leading-none text-gray-900">
                        70%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
