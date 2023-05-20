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
      className="shadow flex flex-col justify-between w-64 h-[400px] m-auto rounded-lg bg-slate-200 overflow-hidden md:hover:shadow transition-all duration-300 md:hover:scale-95 group decoration-transparent"
      title={`Name: ${
        product.name
      } \nPrice: ${product.price.toLocaleString()} đ \nRating: ${
        product.ratings
      } ★`}
    >
      <div className="min-h-fit h-[62%] overflow-hidden p-2 ">
        <img
          className="object-contain rounded-lg w-full"
          src={product.images[0].url}
          alt={product.name}
        />
      </div>

      <div className="px-3 py-2 h-[36%] text-center bg-white">
        <div className="w-full flex justify-center items-center flex-col pb-1">
          <Rating {...options} />
          <span className="text-gray-500">
            ({product.numOfReviews} đánh giá)
          </span>
        </div>

        <p className="text-primaryBlue font-bold text-base capitalize line-clamp-2">
          {product.name}
        </p>
        <p className="text-red-500 font-bold">
          <CurrencyFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <div>{value} đ</div>}
          />
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
