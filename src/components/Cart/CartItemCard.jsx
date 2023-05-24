import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import shoes from "../../assets/shoes.png";
import { Delete } from "@material-ui/icons";
import { IconButton, Tooltip } from "@material-ui/core";

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
        <div className="flex gap-2 text-red-600 font-bold">
          <CurrencyFormat
            value={item.price * (1 - item?.discount / 100)}
            displayType={"text"}
            thousandSeparator={true}
            prefix=""
            renderText={(value) => <div>{value} đ</div>}
          />
          {item?.discount !== 0 && (
            <del className="text-gray-400">
              <CurrencyFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix=""
                renderText={(value) => <div>{value} đ</div>}
              />{" "}
            </del>
          )}
        </div>
        <div className="capitalize rounded-md bg-secColor w-max p-2">
          Size: {size}
        </div>
        <Tooltip title="Delete" className="w-max">
          <IconButton>
            <Delete
              className="text-red-600"
              onClick={() => deleteCartItems(item.product, size)}
            />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default CartItemCard;
