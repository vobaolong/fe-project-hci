import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { MdClose, MdArrowForward } from "react-icons/md";

const FilterSlide = ({
  price,
  priceHandler,
  brands,
  setBrand,
  ratings,
  setRatings,
  discount,
  setDiscount,
}) => {
  const [showIcon, setShowIcon] = useState(true);
  const [toggleFilterSlider, setToggleFilterSlider] = useState(false);

  const filterSliderHandler = () => {
    setToggleFilterSlider(true);
  };

  const showFilterBtnHandler = () => {
    setShowIcon(false);
  };

  return (
    <div>
      {!toggleFilterSlider && (
        <div
          className="cursor-pointer group rounded-r-lg z-10 text-white transition-all duration-500 bg-secondaryDark px-2 py-2 hover:px-5 left-0 fixed top-1/4"
          onClick={filterSliderHandler}
          onMouseEnter={showFilterBtnHandler}
          onMouseLeave={() => setShowIcon(true)}
        >
          {showIcon ? (
            <MdArrowForward className="text-white text-xl " />
          ) : (
            <p>Sử dụng bộ lọc</p>
          )}
        </div>
      )}
      <div
        className={`w-full h-auto lg:w-1/5 md:w-1/3 sm:w-1/2 left-0 top-1/4 shadow-xl border-r-2 py-5 rounded-r-lg px-5 z-20 transition-all fixed duration-500 bg-primaryBlue ${
          toggleFilterSlider
            ? "animate-slide-in"
            : "-left-[100%] -translate-x-96"
        }`}
      >
        <div className="flex justify-between items-center">
          <p className="py-2 w-full border-b-2 border-primaryBlue/50 text-secondaryDark">
            Bộ lọc
          </p>
          <MdClose
            onClick={() => setToggleFilterSlider(false)}
            className="text-xl cursor-pointer text-slate-500 hover:text-secondaryDark"
          />
        </div>
        <div className="pt-5">
          <p className="filterHeadingStyle m-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              checked={discount}
              onChange={() => setDiscount(!discount)}
            />
            Sản phẩm giảm giá
          </p>
          <p className="filterHeadingStyle m-2">Giá (đ)</p>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={50000000}
          />
          <p className="filterHeadingStyle m-2">Thương hiệu</p>
          <select
            className="px-3 py-2 outline-none border-2 w-full rounded-md cursor-pointer focus:ring-blue-500 focus:border-blue-500 block"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option
              disabled
              className="filterHeadingStyle m-2 pt-5 pb-3 border-b-2 border-primaryBlue/50"
            >
              Chọn...
            </option>
            {brands?.map((brand, index) => {
              return (
                <option
                  className="py-1 cursor-pointer text-slate-500 hover:text-neutral-300"
                  key={index}
                  value={brand}
                >
                  {brand}
                </option>
              );
            })}
          </select>
          <div>
            <fieldset>
              <p className="filterHeadingStyle m-2 pt-3">Đánh giá (⭐)</p>
              <Slider
                value={ratings}
                onChange={(e, newRatings) => setRatings(newRatings)}
                arial-labelledby="continuous-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
              />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSlide;
