import React from "react";

const Contact2 = ({ data }) => {
  return (
    <>
      <div className=" bg-[#D1EDF5]  relative">
        <div className=" max-w-[1296px]  mx-auto md:first-line:px-[36px] ">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className=""></div>
            <div className="flex items-center justify-end pt-[734px]  md:pt-[114px] md:pb-[142px] z-20">
              <div className=" px-[45px] py-[55px] bg-[#1E258E]  max-w-[554px]   ">
                <h2 className="sm:text-4xl text-[29px] font-bold sm:leading-10 leading-[33px] text-white mb-5">
                  Contact us
                </h2>
                <p className="sm:text-base text-[14px] sm:leading-6 leading-[21px] text-[#E8E9F8] mb-7">
                  Prototypes may also be exempted from some requirements that
                  will apply to the final product
                </p>
                <div className="mb-[18px]">
                  <p className="sm:text-sm sm:leading-5 text-[11px] leading-[18px] font-bold text-[#E8E9F8] mb-1">
                    Location:
                  </p>
                  <p className="sm:text-sm sm:leading-5 text-[11px] leading-[18px] text-[#E8E9F8]">
                    {data?.address.building} <br />
                    {data?.address.street} <br />
                    {data?.address.city}
                  </p>
                </div>
                <div>
                  <p className="text-base font-bold leading-6 text-[#E8E9F8] mb-1">
                    Email:{" "}
                    <span className="font-normal pl-6">{data?.Email}</span>{" "}
                  </p>
                  <p className="text-base font-bold leading-6 text-[#E8E9F8] mb-1">
                    Tel:{" "}
                    <span className="font-normal pl-6">{data?.Telephone}</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <iframe
            className="absolute top-0 left-0 z-10"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1648649256122!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div>
            <svg
              className="absolute inset-x-0 w-3/4 mx-auto mb-auto cursor-pointer  md:w-2/5 lg:inset-y-0 lg:my-auto inset-y-10"
              width={44}
              height={52}
              viewBox="0 0 44 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 52C23.496 52 29.344 47.728 34.004 42.428C40.216 35.368 44 27.488 44 20C44 8.148 34.26 0 22 0C9.74 0 0 8.148 0 20C0 27.52 3.784 35.4 9.996 42.452C14.652 47.74 20.5 52 22 52ZM22 24.8C23.0609 24.8 24.0783 24.3786 24.8284 23.6284C25.5786 22.8783 26 21.8609 26 20.8C26 19.7391 25.5786 18.7217 24.8284 17.9716C24.0783 17.2214 23.0609 16.8 22 16.8C20.9391 16.8 19.9217 17.2214 19.1716 17.9716C18.4214 18.7217 18 19.7391 18 20.8C18 21.8609 18.4214 22.8783 19.1716 23.6284C19.9217 24.3786 20.9391 24.8 22 24.8ZM22 33.6C18.6052 33.6 15.3495 32.2514 12.949 29.851C10.5486 27.4505 9.2 24.1948 9.2 20.8C9.2 17.4052 10.5486 14.1495 12.949 11.749C15.3495 9.34857 18.6052 8 22 8C25.3948 8 28.6505 9.34857 31.051 11.749C33.4514 14.1495 34.8 17.4052 34.8 20.8C34.8 24.1948 33.4514 27.4505 31.051 29.851C28.6505 32.2514 25.3948 33.6 22 33.6Z"
                fill="#1F2937"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact2;
