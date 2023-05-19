import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const ProductSlider = ({ products }) => {
  // Cấu hình cho slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products?.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
