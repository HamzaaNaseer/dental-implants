/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { imageResolver } from "../../utils/helpers";

const Feature1 = ({ data }) => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto bg-[#F8FBFB] py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[627px] mx-auto lg:mb-[84px] md:mb-[118px] mb-[30px]">
            <h1 className="md:text-[42px] text-[36px] font-bold text-[#12141D] leading-[53px] text-center">
              {data?.headline}
            </h1>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 xl:gap-x-[100px] lg:gap-x-[33px] lg:px-[47px] md:gap-y-[66px] gap-y-[24px] px-[16px]">
            <div>
              <div className=" bg-white sm:mb-[30px] md:mb-[66px] mb-[20px] min-h-[398px] max-w-[400px]  shadow-md  mx-auto">
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
                <div className="flex justify-between items-center px-5 py-2 bg-[#F0F7FC] mb-8">
                  <div className="flex items-center gap-x-4">
                    <img
                      alt=""
                      src="/static/images/Features/feature1/profile.png"
                    />
                    <p className="text-sm font-bold">Monika joe</p>
                  </div>
                  <p className="text-sm font-semibold text-[#45C646]">
                    On Call
                  </p>
                </div>
                <div className="px-8  pb-5">
                  <div className="flex justify-center gap-x-4 bg-[#D0EFE6] py-4 max-w-[248px] mx-auto rounded-[39px] mb-8">
                    <div className="py-1.5 px-2.5 bg-[#13A87C] rounded-md">
                      <svg
                        width="21"
                        height="14"
                        viewBox="0 0 21 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.6798 5.14174V1.14261C15.6798 0.514174 15.1758 0 14.5598 0H1.11999C0.503994 0 0 0.514174 0 1.14261V12.5687C0 13.1971 0.503994 13.7113 1.11999 13.7113H14.5598C15.1758 13.7113 15.6798 13.1971 15.6798 12.5687V8.56957L18.2446 11.1861C18.9502 11.906 20.1598 11.3918 20.1598 10.3749V3.32499C20.1598 2.30807 18.9502 1.7939 18.2446 2.51374L15.6798 5.14174Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#14B082]">
                      02:50
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <div className="w-14 h-14 rounded-full bg-[#CCE8FF] flex justify-center items-center mb-4">
                        <svg
                          width={24}
                          height={18}
                          viewBox="0 0 24 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.5983 1.70925V16.8125C12.5983 17.7874 11.4197 18.2676 10.7358 17.5837L5.32311 12.171H2.41304C1.61277 12.171 0.958008 11.5162 0.958008 10.7159V7.80585C0.958008 7.00558 1.61277 6.35082 2.41304 6.35082H5.32311L10.7358 0.938086C11.4197 0.254219 12.5983 0.734381 12.5983 1.70925ZM23.5547 6.39447L22.0124 4.85213L19.1459 7.71855L16.2795 4.85213L14.7372 6.39447L17.6036 9.26089L14.7372 12.1273L16.2795 13.6696L19.1459 10.8032L22.0124 13.6696L23.5547 12.1273L20.6883 9.26089L23.5547 6.39447Z"
                            fill="#008EFF"
                          />
                        </svg>
                      </div>
                      <hr className="h-2 w-14 bg-[#D9E2E7] rounded-lg"></hr>
                    </div>
                    <div>
                      <div className="w-14 h-14 rounded-full bg-[#FCD7D7] flex justify-center items-center mb-4">
                        <svg
                          width="32"
                          height="12"
                          viewBox="0 0 32 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.85677 11.3708L8.48083 9.24255C9.11061 8.73391 9.47797 7.95756 9.47797 7.14106V3.66088C13.4403 2.34912 17.7307 2.33574 21.7061 3.66088V7.15444C21.7061 7.97095 22.0735 8.74729 22.7033 9.25593L25.3142 11.3708C26.3638 12.2141 27.8595 12.1338 28.8042 11.17L30.4049 9.53703C31.4545 8.4662 31.4545 6.68596 30.3393 5.68206C21.9292 -1.89402 9.25493 -1.89402 0.844807 5.68206C-0.27042 6.68596 -0.27042 8.4662 0.779205 9.53703L2.37988 11.17C3.31143 12.1338 4.80714 12.2141 5.85677 11.3708V11.3708Z"
                            fill="#F23936"
                          />
                        </svg>
                      </div>
                      <hr className="h-2 w-14 bg-[#D9E2E7] rounded-lg"></hr>
                    </div>
                    <div>
                      <div className="w-14 h-14 rounded-full bg-[#FEF1D1] flex justify-center items-center mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9312 0.958008C5.71441 0.958008 0.62793 6.04449 0.62793 12.2613C0.62793 14.8611 1.53219 17.3478 3.22769 19.3824L0.967029 21.643C0.514897 22.0952 0.514897 22.7734 0.967029 23.2255C1.19309 23.4516 1.41916 23.5646 1.75826 23.5646H11.9312C18.148 23.5646 23.2345 18.4781 23.2345 12.2613C23.2345 6.04449 18.148 0.958008 11.9312 0.958008ZM7.40991 13.3916C6.73171 13.3916 6.27958 12.9395 6.27958 12.2613C6.27958 11.5831 6.73171 11.131 7.40991 11.131C8.08811 11.131 8.54024 11.5831 8.54024 12.2613C8.54024 12.9395 8.08811 13.3916 7.40991 13.3916ZM11.9312 13.3916C11.253 13.3916 10.8009 12.9395 10.8009 12.2613C10.8009 11.5831 11.253 11.131 11.9312 11.131C12.6094 11.131 13.0616 11.5831 13.0616 12.2613C13.0616 12.9395 12.6094 13.3916 11.9312 13.3916ZM16.4525 13.3916C15.7743 13.3916 15.3222 12.9395 15.3222 12.2613C15.3222 11.5831 15.7743 11.131 16.4525 11.131C17.1307 11.131 17.5829 11.5831 17.5829 12.2613C17.5829 12.9395 17.1307 13.3916 16.4525 13.3916Z"
                            fill="#FABB18"
                          />
                        </svg>
                      </div>
                      <hr className="h-2 w-14 bg-[#D9E2E7] rounded-lg"></hr>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <h2 className="sm:text-[22px] sm:leading-[32px] text-[20px] leading-[28px] font-bold text-center text-[#12141D] mb-4">
                  {data?.card[0]?.title}
                </h2>
                <p className="text-[16px] leading-[26px] font-normal text-center px-12">
                  {data?.card[0]?.description}
                </p>
              </div>
            </div>
            <div>
              <div className=" bg-white sm:mb-[30px] md:mb-[66px] mb-[20px]  min-h-[398px] max-w-[400px]  shadow-md  mx-auto">
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
                <div className="px-5 py-8">
                  <div className="mb-4">
                    <img src="/static/images/Features/feature1/top-lines.png" />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-x-2.5 mb-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#57C0A1] flex justify-center items-center">
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0429 0.864728C10.9682 0.789695 10.8792 0.730139 10.7812 0.689497C10.6832 0.648854 10.5781 0.62793 10.472 0.62793C10.3658 0.62793 10.2607 0.648854 10.1627 0.689497C10.0647 0.730139 9.97576 0.789695 9.901 0.864728L3.90986 6.83676L1.39278 4.32306C1.31516 4.24842 1.22353 4.18973 1.12312 4.15034C1.02271 4.11095 0.915498 4.09164 0.807593 4.09349C0.699688 4.09535 0.593207 4.11835 0.49423 4.16117C0.395253 4.204 0.305718 4.26581 0.230737 4.34308C0.155757 4.42035 0.096799 4.51156 0.0572302 4.61151C0.0176613 4.71147 -0.0017439 4.8182 0.000122974 4.92561C0.00198985 5.03303 0.0250922 5.13903 0.0681105 5.23756C0.111129 5.33609 0.173221 5.42522 0.250842 5.49986L3.33889 8.57394C3.41365 8.64897 3.50259 8.70853 3.60059 8.74917C3.69859 8.78981 3.8037 8.81074 3.90986 8.81074C4.01602 8.81074 4.12113 8.78981 4.21913 8.74917C4.31712 8.70853 4.40607 8.64897 4.48083 8.57394L11.0429 2.04152C11.1246 1.96656 11.1897 1.87558 11.2343 1.77431C11.2788 1.67304 11.3018 1.56368 11.3018 1.45313C11.3018 1.34257 11.2788 1.23321 11.2343 1.13194C11.1897 1.03068 11.1246 0.939693 11.0429 0.864728V0.864728Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="h-2 bg-[#E2ECF4] w-52 rounded-lg"></div>
                    </div>
                    <div className="flex items-center gap-x-2.5 mb-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#57C0A1] flex justify-center items-center">
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0429 0.864728C10.9682 0.789695 10.8792 0.730139 10.7812 0.689497C10.6832 0.648854 10.5781 0.62793 10.472 0.62793C10.3658 0.62793 10.2607 0.648854 10.1627 0.689497C10.0647 0.730139 9.97576 0.789695 9.901 0.864728L3.90986 6.83676L1.39278 4.32306C1.31516 4.24842 1.22353 4.18973 1.12312 4.15034C1.02271 4.11095 0.915498 4.09164 0.807593 4.09349C0.699688 4.09535 0.593207 4.11835 0.49423 4.16117C0.395253 4.204 0.305718 4.26581 0.230737 4.34308C0.155757 4.42035 0.096799 4.51156 0.0572302 4.61151C0.0176613 4.71147 -0.0017439 4.8182 0.000122974 4.92561C0.00198985 5.03303 0.0250922 5.13903 0.0681105 5.23756C0.111129 5.33609 0.173221 5.42522 0.250842 5.49986L3.33889 8.57394C3.41365 8.64897 3.50259 8.70853 3.60059 8.74917C3.69859 8.78981 3.8037 8.81074 3.90986 8.81074C4.01602 8.81074 4.12113 8.78981 4.21913 8.74917C4.31712 8.70853 4.40607 8.64897 4.48083 8.57394L11.0429 2.04152C11.1246 1.96656 11.1897 1.87558 11.2343 1.77431C11.2788 1.67304 11.3018 1.56368 11.3018 1.45313C11.3018 1.34257 11.2788 1.23321 11.2343 1.13194C11.1897 1.03068 11.1246 0.939693 11.0429 0.864728V0.864728Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="h-2 bg-[#E2ECF4] w-52 rounded-lg"></div>
                    </div>
                    <div className="flex items-center gap-x-2.5 mb-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#57C0A1] flex justify-center items-center">
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0429 0.864728C10.9682 0.789695 10.8792 0.730139 10.7812 0.689497C10.6832 0.648854 10.5781 0.62793 10.472 0.62793C10.3658 0.62793 10.2607 0.648854 10.1627 0.689497C10.0647 0.730139 9.97576 0.789695 9.901 0.864728L3.90986 6.83676L1.39278 4.32306C1.31516 4.24842 1.22353 4.18973 1.12312 4.15034C1.02271 4.11095 0.915498 4.09164 0.807593 4.09349C0.699688 4.09535 0.593207 4.11835 0.49423 4.16117C0.395253 4.204 0.305718 4.26581 0.230737 4.34308C0.155757 4.42035 0.096799 4.51156 0.0572302 4.61151C0.0176613 4.71147 -0.0017439 4.8182 0.000122974 4.92561C0.00198985 5.03303 0.0250922 5.13903 0.0681105 5.23756C0.111129 5.33609 0.173221 5.42522 0.250842 5.49986L3.33889 8.57394C3.41365 8.64897 3.50259 8.70853 3.60059 8.74917C3.69859 8.78981 3.8037 8.81074 3.90986 8.81074C4.01602 8.81074 4.12113 8.78981 4.21913 8.74917C4.31712 8.70853 4.40607 8.64897 4.48083 8.57394L11.0429 2.04152C11.1246 1.96656 11.1897 1.87558 11.2343 1.77431C11.2788 1.67304 11.3018 1.56368 11.3018 1.45313C11.3018 1.34257 11.2788 1.23321 11.2343 1.13194C11.1897 1.03068 11.1246 0.939693 11.0429 0.864728V0.864728Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="h-2 bg-[#E2ECF4] w-52 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="">
                    <img src="/static/images/Features/feature1/bottom-lines.png" />
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <h2 className="sm:text-[22px] sm:leading-[32px] text-[20px] leading-[28px] font-bold text-center text-[#12141D] mb-4">
                  {data?.card[1]?.title}
                </h2>
                <p className="text-[16px] leading-[26px] font-normal text-center px-12">
                  {data?.card[1]?.description}
                </p>
              </div>
            </div>
            <div>
              <div className=" bg-white sm:mb-[30px] md:mb-[66px] mb-[20px] min-h-[398px] max-w-[400px]  shadow-md  mx-auto">
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
                <div className="flex justify-center pt-3.5">
                  <img src="/static/images/Features/feature1/graph.png" />
                </div>
              </div>

              <div className="w-full ">
                <h2 className="sm:text-[22px] sm:leading-[32px] text-[20px] leading-[28px] font-bold text-center text-[#12141D] mb-4">
                  {data?.card[2]?.title}
                </h2>
                <p className="text-[16px] leading-[26px] font-normal text-center px-12">
                  {data?.card[2]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature1;
