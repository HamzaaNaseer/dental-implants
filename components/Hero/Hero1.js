/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { imageResolver } from "../../utils/helpers";

const Hero1 = ({ data }) => {
  return (
    <>
      <div className="bg-[#F2FBFB] sm:pb-[112px] pb-[40px] relative">
        <div className="max-w-[1220px] mx-auto">
          <header className="flex justify-between items-center lg:px-0 md:px-[50px] px-4">
            <div className="pt-[15px]">
              <svg
                width="125"
                height="27"
                viewBox="0 0 125 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.05" cy="13.2528" r="10.3787" fill="#FA6444" />
                <path
                  d="M33.9458 23.5972C33.4945 23.5972 33.0689 23.5613 32.669 23.4895C32.269 23.4229 31.9254 23.3331 31.6383 23.2203L32.469 20.4897C32.8382 20.6128 33.1715 20.6846 33.4689 20.7051C33.7714 20.7256 34.0304 20.6769 34.2458 20.559C34.4663 20.4461 34.6355 20.2436 34.7534 19.9513L34.8996 19.5975L30.6999 7.3522H34.6381L36.8148 15.7824H36.9379L39.1454 7.3522H43.1067L38.6532 20.2974C38.4378 20.9435 38.1327 21.5127 37.7378 22.005C37.3481 22.5024 36.843 22.8921 36.2226 23.1742C35.6072 23.4562 34.8483 23.5972 33.9458 23.5972ZM49.6831 19.3898C48.4422 19.3898 47.3756 19.136 46.4834 18.6283C45.5962 18.1155 44.9117 17.4028 44.4297 16.49C43.9528 15.5721 43.7143 14.5081 43.7143 13.2979C43.7143 12.0826 43.9528 11.0186 44.4297 10.1059C44.9117 9.18797 45.5962 8.4752 46.4834 7.96754C47.3756 7.45476 48.4422 7.19837 49.6831 7.19837C50.9241 7.19837 51.9881 7.45476 52.8752 7.96754C53.7675 8.4752 54.452 9.18797 54.9289 10.1059C55.4109 11.0186 55.6519 12.0826 55.6519 13.2979C55.6519 14.5081 55.4109 15.5721 54.9289 16.49C54.452 17.4028 53.7675 18.1155 52.8752 18.6283C51.9881 19.136 50.9241 19.3898 49.6831 19.3898ZM49.7062 16.5515C50.1575 16.5515 50.5395 16.4131 50.8523 16.1362C51.1651 15.8593 51.4035 15.4747 51.5676 14.9824C51.7368 14.4902 51.8214 13.921 51.8214 13.2749C51.8214 12.6185 51.7368 12.0442 51.5676 11.5519C51.4035 11.0596 51.1651 10.675 50.8523 10.3981C50.5395 10.1212 50.1575 9.98278 49.7062 9.98278C49.2396 9.98278 48.8447 10.1212 48.5217 10.3981C48.2038 10.675 47.9602 11.0596 47.791 11.5519C47.6269 12.0442 47.5448 12.6185 47.5448 13.2749C47.5448 13.921 47.6269 14.4902 47.791 14.9824C47.9602 15.4747 48.2038 15.8593 48.5217 16.1362C48.8447 16.4131 49.2396 16.5515 49.7062 16.5515ZM65.2013 14.0671V7.3522H68.9548V19.1667H65.3705V16.9669H65.2474C64.9859 17.6899 64.5398 18.2642 63.9091 18.6899C63.2835 19.1103 62.5271 19.3206 61.64 19.3206C60.8349 19.3206 60.1273 19.136 59.5171 18.7668C58.9068 18.3976 58.4325 17.8822 58.0941 17.2207C57.7556 16.5541 57.5839 15.7747 57.5787 14.8824V7.3522H61.34V14.144C61.3451 14.785 61.5143 15.2901 61.8477 15.6593C62.181 16.0285 62.6348 16.2131 63.2091 16.2131C63.5834 16.2131 63.9193 16.1311 64.2167 15.967C64.5193 15.7978 64.7577 15.5542 64.9321 15.2363C65.1115 14.9132 65.2013 14.5235 65.2013 14.0671ZM71.3489 19.1667V7.3522H75.0025V9.5059H75.1256C75.3409 8.72646 75.6922 8.14702 76.1793 7.76756C76.6665 7.38297 77.2331 7.19068 77.8792 7.19068C78.0536 7.19068 78.233 7.2035 78.4176 7.22913C78.6022 7.24965 78.774 7.28298 78.933 7.32913V10.5981C78.7535 10.5366 78.5176 10.4879 78.2253 10.452C77.9382 10.4161 77.6818 10.3981 77.4562 10.3981C77.01 10.3981 76.6075 10.4981 76.2486 10.6981C75.8947 10.893 75.6153 11.1673 75.4102 11.5211C75.2102 11.8698 75.1102 12.2801 75.1102 12.7518V19.1667H71.3489ZM87.567 23.5972V17.2515H87.4901C87.3311 17.6156 87.1055 17.9566 86.8132 18.2745C86.5209 18.5924 86.1543 18.8488 85.7133 19.0437C85.2774 19.2385 84.7621 19.336 84.1672 19.336C83.2955 19.336 82.5032 19.1103 81.7905 18.6591C81.0777 18.2078 80.5085 17.531 80.0829 16.6285C79.6573 15.726 79.4445 14.6055 79.4445 13.2672C79.4445 11.8775 79.665 10.734 80.106 9.83664C80.547 8.93927 81.1239 8.27521 81.8366 7.84447C82.5545 7.41374 83.3263 7.19837 84.1518 7.19837C84.7723 7.19837 85.303 7.30605 85.744 7.52142C86.185 7.73166 86.5491 8.00344 86.8363 8.33675C87.1234 8.67006 87.3414 9.01619 87.4901 9.37514H87.6054V7.3522H91.3283V23.5972H87.567ZM85.4748 16.4054C85.9312 16.4054 86.3209 16.2772 86.644 16.0208C86.967 15.7593 87.2157 15.3927 87.3901 14.9209C87.5644 14.4491 87.6516 13.8953 87.6516 13.2595C87.6516 12.6134 87.5644 12.057 87.3901 11.5904C87.2209 11.1237 86.9722 10.7648 86.644 10.5135C86.3209 10.2623 85.9312 10.1366 85.4748 10.1366C85.0082 10.1366 84.6134 10.2648 84.2903 10.5212C83.9672 10.7776 83.7211 11.1391 83.5519 11.6057C83.3878 12.0724 83.3058 12.6236 83.3058 13.2595C83.3058 13.8953 83.3904 14.4491 83.5596 14.9209C83.7288 15.3927 83.9724 15.7593 84.2903 16.0208C84.6134 16.2772 85.0082 16.4054 85.4748 16.4054ZM95.9145 19.1667L92.8378 7.3522H96.6144L98.2066 14.9209H98.3066L100.014 7.3522H103.699L105.452 14.8671H105.552L107.098 7.3522H110.875L107.791 19.1667H103.768L101.922 12.2826H101.791L99.945 19.1667H95.9145ZM117.653 19.3898C116.417 19.3898 115.351 19.1462 114.454 18.6591C113.561 18.1668 112.874 17.4669 112.392 16.5592C111.915 15.6465 111.677 14.5619 111.677 13.3056C111.677 12.0852 111.918 11.0186 112.4 10.1059C112.882 9.18797 113.561 8.4752 114.438 7.96754C115.315 7.45476 116.348 7.19837 117.538 7.19837C118.379 7.19837 119.148 7.32913 119.845 7.59065C120.543 7.85217 121.145 8.23932 121.653 8.7521C122.161 9.26489 122.556 9.89818 122.838 10.652C123.12 11.4006 123.261 12.2595 123.261 13.2287V14.1671H112.992V11.9826H119.761C119.756 11.5827 119.661 11.2263 119.476 10.9135C119.292 10.6007 119.038 10.3571 118.715 10.1828C118.397 10.0033 118.03 9.91356 117.615 9.91356C117.194 9.91356 116.817 10.0084 116.484 10.1982C116.151 10.3828 115.887 10.6366 115.692 10.9596C115.497 11.2776 115.394 11.6391 115.384 12.0442V14.2671C115.384 14.7491 115.479 15.1722 115.669 15.5362C115.859 15.8952 116.128 16.1747 116.476 16.3746C116.825 16.5746 117.241 16.6746 117.723 16.6746C118.056 16.6746 118.358 16.6285 118.63 16.5362C118.902 16.4439 119.135 16.308 119.33 16.1285C119.525 15.949 119.671 15.7285 119.769 15.467L123.222 15.567C123.079 16.3413 122.763 17.0156 122.276 17.5899C121.794 18.1591 121.161 18.6027 120.376 18.9206C119.592 19.2334 118.684 19.3898 117.653 19.3898Z"
                  fill="#12141D"
                />
              </svg>
            </div>
            <div className="flex items-center pt-[14px]">
              <div className="lg:hidden block">
                <svg
                  width="25"
                  height="17"
                  viewBox="0 0 25 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6806 7.5H1.31944C0.590735 7.5 0 7.92533 0 8.45V8.55C0 9.07467 0.590735 9.5 1.31944 9.5H23.6806C24.4093 9.5 25 9.07467 25 8.55V8.45C25 7.92533 24.4093 7.5 23.6806 7.5Z"
                    fill="#18181B"
                  />
                  <path
                    d="M23.6806 15H1.31944C0.590735 15 0 15.4253 0 15.95V16.05C0 16.5747 0.590735 17 1.31944 17H23.6806C24.4093 17 25 16.5747 25 16.05V15.95C25 15.4253 24.4093 15 23.6806 15Z"
                    fill="#18181B"
                  />
                  <path
                    d="M23.6806 0H1.31944C0.590735 0 0 0.425329 0 0.95V1.05C0 1.57467 0.590735 2 1.31944 2H23.6806C24.4093 2 25 1.57467 25 1.05V0.95C25 0.425329 24.4093 0 23.6806 0Z"
                    fill="#18181B"
                  />
                </svg>
              </div>
              <div className=" lg:flex hidden">
                <div className="pr-[43px]">
                  <p className="text-[#12141D] text-sm font-[500]  leading-[22px]">
                    Demos
                  </p>
                </div>
                <div className="pr-[43px]">
                  <p className="text-[#12141D] text-sm font-[500]  leading-[22px]">
                    About
                  </p>
                </div>
                <div className="pr-[43px]">
                  <p className="text-[#12141D] text-sm font-[500]  leading-[22px]">
                    Blog
                  </p>
                </div>
                <div className="pr-[43px]">
                  <p className="text-[#12141D] text-sm font-[500]  leading-[22px]">
                    Pages
                  </p>
                </div>
                <div className="pr-[43px]">
                  <p className="text-[#12141D] text-sm font-[500]  leading-[22px]">
                    Contact
                  </p>
                </div>
              </div>
              <div className="lg:block hidden  ">
                <button className="bg-[#FA6444] py-3 px-[18px] rounded-[4.5px]">
                  <p className="text-sm font-[500]  leading-[22px]  text-white">
                    Book A Meeting
                  </p>
                </button>
              </div>
            </div>
          </header>
          <section className="lg:px-[27px] md:px-[50px] px-4">
            <div className="grid grid-cols-12  md:gap-x-4">
              <div className="md:pt-[110px] pt-[47px] lg:col-span-6 md:col-span-7 col-span-12">
                <div className="sm:mb-[45px] mb-[20px] md:max-w-[500px] ">
                  <div className="sm:mb-[35px] mb-[30px]">
                    <h1 className="sm:text-[54px] text-[38px] sm:leading-[61px] leading-[52px] font-[700]  text-[#12141D] mb-4 md:text-left text-center">
                      {data?.headline}
                    </h1>
                    <h2 className="opacity-80 sm:text-[16px] sm:leading-[29px] text-[18px] leading-[32px] font-[400] text-[#12141D] md:text-left text-center ">
                      {data?.text}
                    </h2>
                  </div>
                  <div className="sm:mb-[34px] mb-[20px] flex md:justify-start justify-center">
                    <Link href={data?.cta?.link || '/'}>
                      <button className="bg-[#FA6444] py-3 px-[18px] rounded-[4.5px]">
                        <p className="text-sm font-[500]  leading-[22px]  text-white">
                          {data?.cta?.name}
                        </p>
                      </button>
                    </Link>
                  </div>
                  <div className="w-[77px] h-[1px] bg-[#0F172A] md:mx-0 mx-auto"></div>
                </div>
                <div className="">
                  <div className="mb-5 flex md:justify-start justify-center">
                    <p className="opacity-80 text-sm font-[500] leading-[29px] text-[#12141D] text-opacity-70">
                      Trusted by big brands
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 grid-cols-2 md:mx-0 mx-auto md:gap-0 gap-5">
                    {data?.brands?.data?.map((item, index) => (
                      <div
                        key={index}
                        className="mr-[40px] flex items-center justify-center"
                      >
                        <img
                          src={imageResolver(item).path}
                          alt=""
                          className=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="sm:pt-[60px] pt-[40px] flex justify-end relative lg:col-span-6 md:col-span-5 col-span-12">
                <span className="absolute bottom-0 right-0 z-20">
                  <svg
                    width={244}
                    height={248}
                    viewBox="0 0 244 248"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M71.6025 441.725C75.4918 421.422 76.6203 400.809 78.2897 380.266C80.0686 358.377 76.7926 336.431 79.942 314.617C84.6108 282.281 91.7317 243.704 121.164 222.645C150.627 201.565 189.096 196.131 223.623 186.191C247.536 179.307 271.173 169.492 293.594 159.128C307.632 152.639 316.356 143.688 325.206 131.662C336.644 116.12 349.03 94.812 346.743 75.0488C345.846 67.3001 344.865 59.6685 343.536 51.9648"
                      stroke="url(#paint0_linear_0_1)"
                      strokeWidth="9.025"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36.6395 418.758C40.5369 398.503 41.6739 377.938 43.3517 357.444C45.1395 335.607 41.8729 313.715 45.0311 291.953C49.7129 259.692 56.8494 221.205 86.2889 200.186C115.758 179.146 154.227 173.711 188.756 163.782C212.671 156.905 236.31 147.106 258.734 136.758C272.774 130.279 281.5 121.347 290.355 109.347C301.799 93.8376 314.193 72.576 311.914 52.8611C311.021 45.1314 310.043 37.5184 308.717 29.8337"
                      stroke="url(#paint1_linear_0_1)"
                      strokeWidth="9.025"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.91837 398.727C8.87183 378.221 10.0278 357.402 11.7319 336.654C13.5477 314.546 10.2413 292.383 13.4459 270.351C18.1964 237.691 25.4357 198.726 55.2739 177.443C85.1424 156.137 124.128 150.629 159.122 140.571C183.359 133.606 207.317 123.681 230.044 113.202C244.273 106.64 253.118 97.5962 262.094 85.446C273.694 69.7431 286.258 48.2165 283.953 28.258C283.049 20.4327 282.059 12.7257 280.717 4.94612"
                      stroke="url(#paint2_linear_0_1)"
                      strokeWidth="9.025"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_1"
                        x1="178.299"
                        y1="77.1946"
                        x2="230.259"
                        y2="417.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B2E7E7" />
                        <stop offset={1} stopColor="#FFEEFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_1"
                        x1="143.48"
                        y1="55.0635"
                        x2="195.312"
                        y2="394.531"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B2E7E7" />
                        <stop offset={1} stopColor="#FFEEFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_0_1"
                        x1="113.259"
                        y1="30.5151"
                        x2="165.731"
                        y2="374.173"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B2E7E7" />
                        <stop offset={1} stopColor="#FFEEFE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="relative">
                  <div className="absolute top-6 right-6 sm:w-[128px] w-[78px] sm:h-[109px] h-[71px] bg-white opacity-90 z-10 shadow-lg sm:p-[17px] p-[10px] flex flex-col justify-between">
                    <div className="">
                      <p className="w-16 h-7 text-[19px] sm:text-[32px] font-[100] leading-[18px] sm:leading-[29px] text-black flex">
                        34%
                        <span className="ml-1.5 mt-1">
                          <svg
                          className="sm:hidden block"
                            width="13"
                            height="14"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.4375"
                              y="0.949219"
                              width="12.1514"
                              height="12.1514"
                              fill="#07E092"
                            />
                            <path
                              d="M6.54455 3.4885C6.51313 3.4571 6.47053 3.43945 6.4261 3.43945C6.38168 3.43945 6.33907 3.4571 6.30766 3.4885L3.62718 6.16899C3.59577 6.2004 3.57812 6.24301 3.57812 6.28743C3.57812 6.33185 3.59577 6.37446 3.62718 6.40587L4.2973 7.07599C4.32871 7.1074 4.37132 7.12505 4.41574 7.12505C4.46016 7.12505 4.50277 7.1074 4.53418 7.07599L5.75598 5.8542V10.6432C5.75598 10.6876 5.77363 10.7303 5.80505 10.7617C5.83647 10.7931 5.87908 10.8107 5.92351 10.8107H6.92869C6.97312 10.8107 7.01574 10.7931 7.04715 10.7617C7.07857 10.7303 7.09622 10.6876 7.09622 10.6432V5.8542L8.31802 7.07599C8.34944 7.1074 8.39204 7.12505 8.43646 7.12505C8.48089 7.12505 8.52349 7.1074 8.55491 7.07599L9.22503 6.40587C9.25644 6.37446 9.27408 6.33185 9.27408 6.28743C9.27408 6.24301 9.25644 6.2004 9.22503 6.16899L6.54455 3.4885Z"
                              fill="white"
                            />
                          </svg>

                          <svg
                            className="sm:block hidden "
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.110352"
                              width="19.8"
                              height="18.6263"
                              fill="#07E092"
                            />
                            <path
                              d="M10.4549 4.00243C10.4037 3.95429 10.3343 3.92725 10.2619 3.92725C10.1895 3.92725 10.1201 3.95429 10.0689 4.00243L5.7012 8.11124C5.65003 8.1594 5.62128 8.2247 5.62128 8.2928C5.62128 8.36089 5.65003 8.4262 5.7012 8.47435L6.79313 9.50156C6.84432 9.5497 6.91374 9.57674 6.98613 9.57674C7.05851 9.57674 7.12793 9.5497 7.17912 9.50156L9.16998 7.62871V14.9696C9.16998 15.0377 9.19874 15.103 9.24993 15.1512C9.30112 15.1994 9.37056 15.2264 9.44296 15.2264H11.0808C11.1532 15.2264 11.2227 15.1994 11.2739 15.1512C11.3251 15.103 11.3538 15.0377 11.3538 14.9696V7.62871L13.3447 9.50156C13.3959 9.5497 13.4653 9.57674 13.5377 9.57674C13.6101 9.57674 13.6795 9.5497 13.7307 9.50156L14.8226 8.47435C14.8738 8.4262 14.9025 8.36089 14.9025 8.2928C14.9025 8.2247 14.8738 8.1594 14.8226 8.11124L10.4549 4.00243Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <h3 className=" sm:text-xs text-[7px] leading-[10px] font-medium sm:leading-[16px] text-black">
                        Yearly <br /> Growth
                      </h3>
                    </div>
                  </div>
                  <img
                    src={imageResolver(data?.heroImage).path}
                    alt=""
                    className="min-h-full w-[273px] sm:w-[457px]"
                  />
                  <div className="absolute sm:w-[220px] w-[135px] sm:min-h-[233px] sm:max-h-full max-h-[152px] bg-white opacity-90 z-10 bottom-[70px] left-[-67px] sm:left-[-110px] shadow-lg p-3 sm:p-5">
                    <div className="sm:mb-6 mb-[15px]">
                      <h3 className=" sm:text-[15px] text-[9px] leading-[10px] font-[600] sm:leading-[17px] text-[#12141D] mb-3">
                        Take Notes
                      </h3>
                      <svg
                        className="sm:hidden block"
                        width={108}
                        height={21}
                        viewBox="0 0 108 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <line
                            x1="2.22509"
                            y1="1.55616"
                            x2="105.583"
                            y2="1.55617"
                            stroke="#445150"
                            strokeWidth="2.9033"
                            strokeLinecap="round"
                          />
                          <line
                            x1="2.22509"
                            y1="10.2671"
                            x2="96.292"
                            y2="10.2671"
                            stroke="#445150"
                            strokeWidth="2.9033"
                            strokeLinecap="round"
                          />
                          <line
                            x1="2.22509"
                            y1="18.9761"
                            x2="59.1297"
                            y2="18.9761"
                            stroke="#445150"
                            strokeWidth="2.9033"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>

                      <svg
                        className="sm:block hidden"
                        width={174}
                        height={33}
                        viewBox="0 0 174 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <line
                            x1="2.98736"
                            y1="3.21569"
                            x2="171.39"
                            y2="3.21571"
                            stroke="#445150"
                            strokeWidth="4.74391"
                            strokeLinecap="round"
                          />
                          <line
                            x1="2.98737"
                            y1="16.5668"
                            x2="156.251"
                            y2="16.5668"
                            stroke="#445150"
                            strokeWidth="4.74391"
                            strokeLinecap="round"
                          />
                          <line
                            x1="2.98737"
                            y1="29.9176"
                            x2="95.6973"
                            y2="29.9176"
                            stroke="#445150"
                            strokeWidth="4.74391"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="sm:mb-4 mb-[11px]">
                      <svg
                        className="sm:hidden block"
                        width={101}
                        height={14}
                        viewBox="0 0 101 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <line
                            opacity="0.8"
                            x1="21.0949"
                            y1="3.58868"
                            x2="98.9033"
                            y2="3.58869"
                            stroke="#445150"
                            strokeWidth="2.32264"
                            strokeLinecap="round"
                          />
                          <line
                            opacity="0.8"
                            x1="21.0949"
                            y1="10.5555"
                            x2="91.9354"
                            y2="10.5555"
                            stroke="#445150"
                            strokeWidth="2.32264"
                            strokeLinecap="round"
                          />
                        </g>
                        <rect
                          x="1.64443"
                          y="2.13661"
                          width="10.4519"
                          height="10.4519"
                          stroke="#D5D7D7"
                          strokeWidth="1.74198"
                        />
                        <path
                          d="M7.26866 10.5275L3.12109 5.90033L4.50362 4.35796L7.26866 7.44271L13.3518 0.65625L14.7343 2.19863L7.26866 10.5275Z"
                          fill="#07E092"
                        />
                      </svg>

                      <svg
                        className="sm:block hidden"
                        width={163}
                        height={20}
                        viewBox="0 0 163 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <line
                            opacity="0.8"
                            x1="33.7361"
                            y1="4.54457"
                            x2="160.51"
                            y2="4.54459"
                            stroke="#445150"
                            strokeWidth="3.79513"
                            strokeLinecap="round"
                          />
                          <line
                            opacity="0.8"
                            x1="33.736"
                            y1="15.2252"
                            x2="149.156"
                            y2="15.2252"
                            stroke="#445150"
                            strokeWidth="3.79513"
                            strokeLinecap="round"
                          />
                        </g>
                        <rect
                          x="2.03859"
                          y="2.52498"
                          width="17.0229"
                          height="15.8451"
                          stroke="#D5D7D7"
                          strokeWidth="2.84635"
                        />
                        <path
                          d="M11.2044 15.2994L4.44618 8.20666L6.69893 5.84241L11.2044 10.5709L21.1165 0.168213L23.3693 2.53246L11.2044 15.2994Z"
                          fill="#07E092"
                        />
                      </svg>
                    </div>
                    <div className="">
                      <svg
                        className="sm:hidden block"
                        width={85}
                        height={14}
                        viewBox="0 0 85 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <line
                            opacity="0.8"
                            x1="1.16132"
                            y1="-1.16132"
                            x2="63.3666"
                            y2="-1.16132"
                            transform="matrix(0.999996 -0.00281998 -0.00254814 0.999997 19.9297 4.55859)"
                            stroke="#445150"
                            strokeWidth="2.32264"
                            strokeLinecap="round"
                          />
                          <line
                            opacity="0.8"
                            x1="1.16132"
                            y1="-1.16132"
                            x2="51.825"
                            y2="-1.16132"
                            transform="matrix(0.999996 -0.00282008 -0.00254806 0.999997 19.9141 11.5254)"
                            stroke="#445150"
                            strokeWidth="2.32264"
                            strokeLinecap="round"
                          />
                        </g>
                        <rect
                          x="1.64443"
                          y="1.94716"
                          width="10.4519"
                          height="10.4519"
                          stroke="#D5D7D7"
                          strokeWidth="1.74198"
                        />
                        <path
                          d="M7.26866 10.3419L3.12109 5.71479L4.50362 4.17241L7.26866 7.25716L13.3518 0.470703L14.7343 2.01308L7.26866 10.3419Z"
                          fill="#07E092"
                        />
                      </svg>

                      <svg
                        className="sm:block hidden"
                        width={163}
                        height={20}
                        viewBox="0 0 163 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2">
                          <line
                            opacity="0.8"
                            x1="33.7361"
                            y1="4.54457"
                            x2="160.51"
                            y2="4.54459"
                            stroke="#445150"
                            strokeWidth="3.79513"
                            strokeLinecap="round"
                          />
                          <line
                            opacity="0.8"
                            x1="33.736"
                            y1="15.2252"
                            x2="149.156"
                            y2="15.2252"
                            stroke="#445150"
                            strokeWidth="3.79513"
                            strokeLinecap="round"
                          />
                        </g>
                        <rect
                          x="2.03859"
                          y="2.52498"
                          width="17.0229"
                          height="15.8451"
                          stroke="#D5D7D7"
                          strokeWidth="2.84635"
                        />
                        <path
                          d="M11.2044 15.2994L4.44618 8.20666L6.69893 5.84241L11.2044 10.5709L21.1165 0.168213L23.3693 2.53246L11.2044 15.2994Z"
                          fill="#07E092"
                        />
                      </svg>
                    </div>
                    <div className="sm:mt-6 mt-[15px] ml-[-14px]">
                      <svg
                        className="sm:hidden block"
                        width="73"
                        height="20"
                        viewBox="0 0 73 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="8.70312"
                          y="0.605469"
                          width="55.7858"
                          height="19.3317"
                          rx="1.657"
                          fill="#1E1F22"
                        />
                      </svg>

                      <svg
                        className="sm:block hidden"
                        width={120}
                        height={31}
                        viewBox="0 0 120 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="90.9"
                          height="29.6328"
                          transform="translate(14.5 0.797119)"
                          fill="#1E1F22"
                        />
                        <line
                          opacity="0.8"
                          x1="2.25625"
                          y1="-2.25625"
                          x2="41.6272"
                          y2="-2.25625"
                          transform="matrix(0.999989 -0.00475795 0.00473455 0.999989 38.0086 17.7876)"
                          stroke="#8B9392"
                          strokeWidth="4.5125"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <span className=" absolute bottom-0 right-[417px] z-20 md:block hidden">
          <svg
            width={815}
            height={432}
            viewBox="0 0 815 432"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f_1_643)">
              <ellipse
                cx="407.65"
                cy="397.711"
                rx="168.75"
                ry="158.747"
                fill="#76F4DE"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_643"
                x="0.639969"
                y="0.703384"
                width="814.02"
                height="794.015"
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
                  stdDeviation="119.13"
                  result="effect1_foregroundBlur_1_643"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="absolute top-0 left-0 z-20 md:block hidden">
          <svg
            width={591}
            height={596}
            viewBox="0 0 591 596"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_650)">
              <ellipse
                cx="35.55"
                cy="54.609"
                rx="235.35"
                ry="221.4"
                fill="#FFDD86"
                fillOpacity="0.22"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_650"
                x="-519.285"
                y="-486.276"
                width="1109.67"
                height="1081.77"
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
                  stdDeviation="159.742"
                  result="effect1_foregroundBlur_1_650"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </div>
    </>
  );
};

export default Hero1;
