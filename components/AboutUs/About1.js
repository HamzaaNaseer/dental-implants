/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";

const About1 = () => {
  return (
    <>
      <section className="w-full bg-white py-[100px]">
        <div className="max-w-[1259px] mx-auto">
          <div className="grid grid-cols-2 items-center gap-x-[96px]">
            <div className="w-full">
              <img
                className="w-full"
                src="static/images/About/about1/about1.png"
              />
            </div>
            <div className="pl-[90px]">
              <h2 className="text-[42px]  font-bold leading-[48px] text-gray-900 mb-6">
                Meet tax experts online & solve tax problem fast
              </h2>
              <p className="text-lg font-semibold leading-relaxed text-gray-900 mb-[30px]">
                Tax specialists assist in preparing quarterly and annual tax
                provisions and performing tax accounting duties.
              </p>
              <p
                className="opacity-70 text-base leading-relaxed text-gray-900"
                style={{ width: 485 }}
              >
                Tax consultants help clients with a variety of tax-related
                issues. Mainly, they make sure clients comply with tax rule
                regulations, they also help individuals and businesses pay what
                they owe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
