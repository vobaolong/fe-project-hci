import React from "react";
import { brandLogos } from "../../../data/brand";
import Marquee from "react-fast-marquee";
import { banners, services } from "../../../data/service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="h-full flex flex-col mt-28 m-10 flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
        <Slider className="max-w-full justify-center shadow" {...settings}>
          {banners?.map((index) => {
            return (
              <img
                key={index}
                className="rounded-md cursor-pointer"
                style={{ width: "inherit" }}
                src={index.image}
                alt="Banner"
                title="Banner"
                onClick={() => navigate("/products")}
              />
            );
          })}
        </Slider>
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
                <h5 className="font-bold lg:text-xl md:text-lg sm:text-base text-primaryBlue">
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
