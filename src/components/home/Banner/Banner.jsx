import React from "react";
import CustomIcon from "../../Icons/CustomIcon";
import { brandLogos } from "../../../data/brand";
import Marquee from "react-fast-marquee";
import { services } from "../../../data/service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ jsonData }) => {
  const data = jsonData[0];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-[100%] h-[50vh] flex justify-center items-center mt-32">
        <div className="flex justify-center items-center mx-4 lg:mx-40">
          <h1 className="text-2xl font-bold text-zinc-900 text-center">
            Chào mừng đến với {"  "}
            <span className="text-primaryBlue">{data.companyName}</span>
          </h1>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
          {/*
          <p className="text-3xl md:text-5xl uppercase mt-10 text-primaryBlue text-center leading-relaxed">
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
          </a> */}
        </div>
      </div>
      <div className="grid-rows-1">
        <div className="mt-2 md:py-3 lg:mx-44 md:mx-4 sm:mx-2 justify-around grid-cols-4 grid">
          {services?.map((service, index) => {
            return (
              <div
                key={index}
                className="justify-center items-center flex flex-col gap-2 flex-wrap p-2"
              >
                <img src={service?.image} className="max-w-fit" alt="" />
                <h5 className="font-bold lg:text-xl md:text-lg sm:text-base text-blue-800">
                  {service.title}
                </h5>
                <p>{service.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 grid-rows-1 bg-slate-50 md:py-3 lg:mx-44 md:mx-4 sm:mx-2 rounded-md drop-shadow-md">
        <div className="grid-cols-12 ">
          <div className=" p-4">
            <Marquee className="flex gap-20">
              {brandLogos?.map((index) => {
                return (
                  <div key={index} className="mx-4">
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
