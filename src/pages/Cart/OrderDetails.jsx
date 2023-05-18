import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { Link, useParams } from "react-router-dom";
import {
  getOrderDetails,
  clearErrors,
  cancelOrder,
} from "../../actions/orderAction";
import Loader from "../../components/layout/Loader/Loader";
import { useAlert } from "react-alert";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import CurrencyFormat from "react-currency-format";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const alert = useAlert();
  const params = useParams();

  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  const [status] = useState("Cancel");

  const updateStatussOrder = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(cancelOrder(params.id, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Cập nhật trạng thái đơn hàng thành công");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(params.id));
  }, [alert, dispatch, error, isUpdated, updateError, params.id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Chi tiết đơn hàng`} />

          <div className="h-auto pt-40 pb-10">
            <div className="w-[90%] mx-auto">
              <div>
                <p className="heading">Thông tin giao hàng</p>
              </div>
              <div className="headingData">
                <div className="flex gap-3 ">
                  <p>Tên: </p>
                  <span className="text-slate-600">
                    {order.user && order.shippingInfo.fullName}
                  </span>
                </div>
                <div className="flex gap-3 ">
                  <p>SĐT: </p>
                  <span className="text-slate-600">
                    {order.user && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div className="flex gap-3 ">
                  <p>Địa chỉ: </p>
                  <span className="text-slate-600">
                    {order.user &&
                      `${order.shippingInfo.fullName} - ${order.shippingInfo.address}, ${order.shippingInfo.city} `}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="heading">Chi tiết thanh toán</p>
                <div className="headingData">
                  <div className="flex gap-3">
                    <p>Thanh toán: </p>
                    <p
                      className={`${
                        order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "text-green-500"
                          : "text-red-500"
                      }  `}
                    >
                      {order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "Đã thanh toán"
                        : "Chưa thanh toán"}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <p>Số tiền: </p>
                    <span className="text-slate-600">
                      {order.totalPrice && (
                        <CurrencyFormat
                          value={order.totalPrice}
                          displayType={"text"}
                          thousandSeparator={true}
                          renderText={(value) => <div>{value} đ</div>}
                        />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="heading">Trạng thái đơn hàng</p>
                <div className="headingData">
                  <div className="flex gap-3">
                    <p className="flex gap-3">
                      Đơn hàng:{" "}
                      <p
                        className={`${
                          order.orderStatus && order.orderStatus === "Delivered"
                            ? "text-green-500"
                            : "text-red-500"
                        }  `}
                      >
                        {order.orderStatus && order.orderStatus === "Delivered"
                          ? "Đã giao hàng"
                          : order.orderStatus === "Shipped"
                          ? "Đang vận chuyển"
                          : order.orderStatus === "Cancel"
                          ? "Đã hủy"
                          : "Đang xử lí"}
                      </p>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="heading">Chi tiết đơn hàng: </p>
                <div className="headingData">
                  {order.orderItems &&
                    order.orderItems.map((item, index) => {
                      console.log(order.orderItems);
                      return (
                        <div
                          key={index}
                          className="flex gap-x-7 mt-3 items-center"
                        >
                          <img
                            className="w-[10vmax] md:w-[5vmax]"
                            src={item.image}
                            alt="Product"
                          />
                          <Link
                            className="capitalize"
                            to={`/product/${item.product}`}
                          >
                            {item.name}, Size: {item.size}
                          </Link>
                          <span>
                            <CurrencyFormat
                              value={item.price}
                              displayType={"text"}
                              thousandSeparator={true}
                              renderText={(value) => (
                                <div>
                                  {item.quantity} X {value} ={" "}
                                  <b>
                                    <CurrencyFormat
                                      value={item.price * item.quantity}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      renderText={(value) => (
                                        <div>{value} đ</div>
                                      )}
                                    />
                                  </b>
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
          </div>
          {order.orderStatus === "Processing" && (
            <form
              className="flex justify-center content-center mb-20"
              onSubmit={updateStatussOrder}
            >
              <button className="bg-red-600 px-5 py-2 text-white rounded-md hover:scale-105 transition-all duration-500">
                Hủy đơn hàng
              </button>
            </form>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
