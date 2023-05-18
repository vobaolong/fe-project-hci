import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import CurrencyFormat from "react-currency-format";

const ProductCard = ({ product }) => {
  const options = {
    size: "large",
    readOnly: true,
    precision: 0.5,
    value: product.ratings,
  };

  return (
    <Link
      to={`/product/${product._id}`}
      className="flex flex-col justify-between w-64 h-[400px] m-auto rounded-lg shadow-xl bg-secColor overflow-hidden md:hover:shadow-xl transition-all duration-300 md:hover:scale-105 group decoration-transparent"
      title={`Name: ${
        product.name
      } \nPrice: ${product.price.toLocaleString()} đ \nRating: ${
        product.ratings
      } ★`}
    >
      <div className="h-fit overflow-hidden p-2">
        <img
          className="object-contain rounded-lg"
          src={product.images[0].url}
          alt={product.name}
        />
      </div>

      <div className="px-3 py-2 text-center bg-white">
        <div className="w-full flex justify-center items-center flex-col pb-1">
          <Rating {...options} />
          <span className="text-gray-500">
            ({product.numOfReviews} đánh giá)
          </span>
        </div>

        <p className="text-primaryBlue font-bold text-md capitalize line-clamp-2">
          {product.name}
        </p>
        <CurrencyFormat
          value={product.price}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(value) => <div>{value} đ</div>}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
