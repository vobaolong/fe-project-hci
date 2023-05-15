import React from "react";
import { CgMouse } from "react-icons/cg";
import CustomIcon from "../../Icons/CustomIcon";
import { brands } from "../../../data/brand";
import Marquee from "react-fast-marquee";

const Banner = ({ jsonData }) => {
  const data = jsonData[0];

  return (
    <>
      <div className="w-[100%] h-screen flex justify-center items-center customBanner ">
        <div className="flex justify-center flex-col items-center mx-4 lg:mx-40">
          <h1 className="text-2xl font-bold text-zinc-900 text-center">
            Chào mừng đến với {"  "}
            <span className="text-primaryBlue">{data.companyName}</span>
          </h1>

          <p className="text-4xl md:text-5xl uppercase mt-10 text-primaryBlue text-center leading-relaxed">
            TÌM SẢN PHẨM{" "}
            <span className="text-zinc-900 border-b-4 border-primaryBlue">
              TUYỆT VỜI
            </span>{" "}
            Ở BÊN DƯỚI
          </p>
          <a
            href="#ourproduct"
            className="transition-all duration-500 animate-bounce mt-36"
          >
            <button className="py-3 px-7 bg-primaryBlue rounded-lg border-2 border-borderGlowBlue text-secColor hover:text-primaryBlue hover:bg-transparent transition-all duration-500 flex justify-center items-center gap-3">
              Mua ngay!
              <CustomIcon Icon={CgMouse} />
            </button>
          </a>
        </div>
      </div>
      <div className="grid-rows-1 bg-slate-50 md:px-0 mx-4 lg:mx-40 rounded-md drop-shadow-md">
        <div className="grid-cols-12 ">
          <div className=" p-4">
            <Marquee className="flex gap-20">
              {brands?.map((index) => {
                return (
                  <div className="mx-4">
                    <img src={index.image} alt="brand" />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
