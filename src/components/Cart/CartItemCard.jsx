import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import shoes from "../../assets/shoes.png";

const CartItemCard = ({ item, size, deleteCartItems }) => {
  return (
    <div className="w-24 md:w-full flex flex-col justify-center  md:justify-start md:flex-row gap-6 py-3 h-auto items-start box-border">
      <img
        className="w-[14vmax] md:w-[8vmax] border rounded-lg"
        src={item?.image ? item?.image : shoes}
        alt="cartitem"
      />
      <div className="flex flex-col mx-[0.3vmax] my-[1vmax]">
        <Link
          className="font-medium capitalize"
          to={`/product/${item.product}`}
        >
          {item.name}
        </Link>
        <CurrencyFormat
          value={item.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix="Giá: "
          renderText={(value) => <div>{value} đ</div>}
        />
        <div className="capitalize rounded-md bg-secColor w-max p-2">
          Size: {size}
        </div>
        <p
          onClick={() => deleteCartItems(item.product, size)}
          className="bg-red-600 w-[150px] hover:bg-red-400 hover:shadow-lg hover:scale-95 transition-all duration-500 text-white cursor-pointer py-[0.1em] rounded-md text-center mt-2"
        >
          Xóa
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
