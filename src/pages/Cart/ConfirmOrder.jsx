import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/shipping/CheckoutSteps";
import SlideableBtn from "../../components/layout/Buttons/SlideableBtn";
import CurrencyFormat from "react-currency-format";

const ConfirmOrder = () => {
  const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000000 ? 0 : 50000;

  const totalPrice = subtotal + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/process/payment");
  };

  return (
    <Fragment>
      <div className="h-auto py-24 px-8 md:px-0">
        <MetaData title={`Thông tin vận chuyển`} />

        <CheckoutSteps activeStep={1} />
        <div className="p-5 h-full flex bg-white rounded-lg flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
          <h2 className="mb-5 pb-5 border-b-2 border-secondaryDark font-semibold w-fit mx-auto lg:text-2xl md:text-xl sm:text-lg">
            Xác nhận đơn hàng
          </h2>
          <div>
            <div className="grid grid-col-1 tall:grid-cols-6 divide-y-2 tall:divide-y-0 tall:divide-x-2 divide-slate-400">
              {/* Shipping Info */}
              <div className="flex flex-col col-span-6 tall:col-span-4 mx-5">
                <div>
                  <p className="text-xl font-bold lg:text-lg md:text-base sm:text-sm">
                    Thông tin giao hàng
                  </p>
                  <div className="lg:text-lg md:text-base sm:text-sm p-5 md:px-10 mt-3 flex flex-col gap-2 rounded-lg bg-slate-200">
                    <div className="flex gap-3">
                      <p>Họ và tên khách hàng: </p>
                      <span className="text-slate-600 font-bold">
                        {shippingInfo?.name}
                      </span>
                    </div>
                    <div className="flex gap-3 ">
                      <p>Số điện thoại: </p>
                      <span className="text-slate-600 font-bold">
                        {shippingInfo?.phoneNo}
                      </span>
                    </div>

                    <div className="flex gap-3 ">
                      <p>Địa chỉ: </p>
                      <span className="text-slate-600 font-bold">
                        {address}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <p className="text-xl font-bold lg:text-lg md:text-base sm:text-sm">
                    Sản phẩm:
                  </p>
                  <div>
                    {cartItems?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border hover:border-slate-400 flex px-2 py-1 md:px-10 mt-3 items-center rounded-lg w-full justify-between flex-wrap"
                        >
                          <img
                            className="w-[20%] md:w-[10%] sm:w-[10%] rounded-lg"
                            src={item?.image}
                            alt="Product"
                          />
                          <Link
                            className="w-[40%] md:w-[50%] sm:w-[40%] capitalize hover:text-primaryBlue lg:text-base md:text-base sm:text-sm"
                            to={`/product/${item?.product}`}
                          >
                            {item?.name}
                          </Link>
                          <span className="w-[20%] md:w-[10%] sm:w-[10%] text-center rounded-md bg-secColor p-2 lg:text-base md:text-base sm:text-sm">
                            Size: {item?.size}
                          </span>
                          <span className="w-[20%] md:w-[20%] sm:w-[20%] ">
                            <CurrencyFormat
                              value={item?.price}
                              displayType={"text"}
                              thousandSeparator={true}
                              renderText={(value) => (
                                <div className="flex flex-wrap lg:flex-row md:flex-col text-right justify-end lg:text-base md:text-base sm:text-sm">
                                  <p>{value}</p> ​x​ <p>{item.quantity}</p>
                                  <p>
                                    <CurrencyFormat
                                      value={item.price * item.quantity}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      renderText={(value) => (
                                        <strong className="ml-1">
                                          {value} đ
                                        </strong>
                                      )}
                                    />
                                  </p>
                                </div>
                              )}
                            />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="tall:pl-8 py-5 mt-3 md:mt-0 col-span-6 tall:col-span-2">
                <div>
                  <p className="text-xl font-bold text-center py-3 border-b-2">
                    Tóm tắt đơn hàng
                  </p>
                  <div className="flex flex-col gap-5 my-3">
                    <div className="flex justify-between">
                      <p>Tạm tính: </p>
                      <CurrencyFormat
                        value={subtotal}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => <div>{value} đ</div>}
                      />
                    </div>
                    <div className="flex justify-between">
                      <p>Phí giao hàng: </p>
                      <CurrencyFormat
                        value={shippingCharges}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => <div>{value} đ</div>}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between py-5 border-t-2">
                    <p>
                      <b>Tổng cộng: </b>
                    </p>
                    <CurrencyFormat
                      value={totalPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(value) => (
                        <div>
                          {" "}
                          <b>{value} đ</b>{" "}
                        </div>
                      )}
                    />
                  </div>

                  <SlideableBtn onClick={proceedToPayment} label="Tiếp tục" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
