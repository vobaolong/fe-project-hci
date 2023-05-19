import React, { Fragment } from "react";
import CartItemCard from "../../components/Cart/CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import QuantityCardInput from "../../components/Cart/QuantityCardInput";
import {
  addItemsToCart,
  removeItemsFromCart,
  resetCart,
} from "../../actions/cartAction";
import { Link, useNavigate } from "react-router-dom";

import CurrencyFormat from "react-currency-format";
import MetaData from "../../components/layout/MetaData";
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock, size) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty, size));
  };

  const decreaseQuantity = (id, quantity, size) => {
    const newQty = quantity - 1;
    if (quantity <= 1) {
      return;
    }
    dispatch(addItemsToCart(id, newQty, size));
  };

  const deleteItemsFromCart = (id, size) => {
    dispatch(removeItemsFromCart(id, size));
  };

  const clearCartHandle = async () => {
    await dispatch(resetCart());
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Fragment>
      <MetaData title={`JAMILA | Giỏ hàng`} />
      {cartItems.length === 0 ? (
        <div className="isEmptyCart h-screen flex flex-col gap-3 justify-center items-center ">
          <MdRemoveShoppingCart />
          <p className="text-slate-500 text-xl">
            Không có sản phẩm trong giỏ hàng
          </p>
          <Link
            className="bg-primaryBlue text-white px-10 py-2 rounded-md hover:scale-105 transition-all duration-500"
            to="/products"
          >
            Mua sắm ngay!
          </Link>
        </div>
      ) : (
        <Fragment>
          <div className="h-full flex mt-28 bg-white rounded-xl flex-wrap pb-5 mb-10 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
            <div className="cartHeader overflow-x-auto md:overflow-x-hidden bg-primaryBlue w-[100%] mx-auto box-border text-white grid grid-cols-3 md:grid-cols-6 rounded-t-xl px-4">
              <p className="m-5 lg:col-span-4 md:col-span-3">Sản phẩm</p>
              <p className="m-5">Số lượng</p>
              <p className="m-5 text-right">Tổng</p>
            </div>

            <div className="cartContainer w-[100%] px-5 bg-white mx-auto flex flex-col divide-y-2 border-b-2">
              {cartItems?.map((item, index) => {
                return (
                  <div key={index} className="grid grid-cols-3 md:grid-cols-6">
                    <div className="md:col-span-4 place-items-start">
                      <CartItemCard
                        item={item}
                        deleteCartItems={(id) =>
                          deleteItemsFromCart(id, item.size)
                        }
                        size={item.size}
                      />
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <QuantityCardInput
                        quantity={item.quantity}
                        increaseQuantity={() =>
                          increaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock,
                            item.size
                          )
                        }
                        decreaseQuantity={() =>
                          decreaseQuantity(
                            item.product,
                            item.quantity,
                            item.size
                          )
                        }
                      />
                    </div>
                    <div className="flex justify-end items-center">
                      <CurrencyFormat
                        value={item.price * item.quantity}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => <div>{value} đ</div>}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[100%] px-5 flex mx-auto md:flex-row sm:flex-col gap-5">
              <div className="lg:w-1/5 md:w-1/2">
                <button
                  type="submit"
                  onClick={clearCartHandle}
                  className="bg-red-600 w-full hover:shadow-lg py-2 rounded-md text-white mt-5 transition-all duration-500 hover:scale-95 cursor-pointer"
                >
                  Xoá toàn bộ sản phẩm
                </button>
              </div>
              <div className="grid place-items-end w-[90%] mx-auto">
                <div className="flex justify-between py-5 border-primaryDarkBlue w-full md:w-1/2 lg:w-1/3 mt-2 border-t-2 border-t-slate-500 text-lg">
                  <p className="font-bold">Thành tiền:</p>
                  <CurrencyFormat
                    value={cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(value) => (
                      <div>
                        {" "}
                        <b> {value} đ</b>{" "}
                      </div>
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-[33%]">
                  <button
                    onClick={checkoutHandler}
                    className="bg-primaryBlue w-full hover:shadow-lg py-2 rounded-md text-white mt-10 transition-all duration-500 hover:scale-95"
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
