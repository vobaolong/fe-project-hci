import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { Link, useParams } from "react-router-dom";
import SideBar from "../../components/admin/Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../actions/orderAction";
import Loader from "../../components/layout/Loader/Loader";
import Button from "../../components/user/Button";
import {
  AccountTree,
  Block,
  Cached,
  CreditCard,
  Home,
  HomeWork,
  LocalAtm,
  LocalShipping,
  Mail,
  Person,
  Phone,
} from "@material-ui/icons";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import CurrencyFormat from "react-currency-format";
import { toast } from "react-toastify";

const ProcessOrder = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const {
    error: updateError,
    isUpdated,
    loading: loadingOrder,
  } = useSelector((state) => state.order);
  const [status, setStatus] = useState("");

  const updateProcessOrder = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(params.id, myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Cập nhật trạng thái đơn hàng thành công");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(params.id));
  }, [dispatch, error, isUpdated, updateError, params.id]);

  return (
    <Fragment>
      <MetaData title={`JAMILA | Đơn hàng`} />

      {/* dashboard */}
      <div className="dashboardStyle">
        <div className="sidebarStyle">
          <SideBar />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="dashboardRightBoxStyle">
            <div className="flex flex-wrap divide-y-2 w-full tall:divide-y-0 tall:divide-x-2 divide-slate-400">
              <div className="w-[68%]">
                <div className="shadow m-2 bg-white rounded-md flex-wrap md:py-3 justify-center p-5">
                  <div>
                    <p className="heading lg:text-xl md:text-base sm:text-sm border-b-2 py-2 mb-5">
                      Các mặt hàng đã đặt{" "}
                      <p className="text-slate-400 inline-block">
                        (Tất cả các mặt hàng đã được vận chuyển)
                      </p>
                    </p>
                    <div>
                      {order?.orderItems &&
                        order?.orderItems?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex gap-1 py-1 px-0 mt-3 items-center rounded-lg w-full justify-between flex-wrap"
                            >
                              <img
                                className="w-[10%] border-1 rounded-lg"
                                src={item?.image}
                                alt="Product"
                              />
                              <Link
                                className="lg:w-[45%] md:w-[50%] sm:w-[40%] capitalize hover:text-primaryBlue lg:text-base md:text-base sm:text-sm"
                                to={`/product/${item?.product}`}
                              >
                                {item?.name}
                                <span>{item?.brand}</span>
                              </Link>
                              <span className="lg:w-[10%] md:w-[10%] sm:w-[10%] text-center rounded-md bg-secColor p-2 lg:text-base md:text-base sm:text-sm">
                                Size: {item?.size}
                              </span>
                              <span className="lg:w-[30%] md:w-[20%] sm:w-[20%] flex text-right lg:text-base md:text-base sm:text-sm justify-end">
                                <CurrencyFormat
                                  value={
                                    item?.price * (1 - item?.discount / 100)
                                  }
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  renderText={(value) => (
                                    <div className="w-[90%] flex justify-between">
                                      <p>
                                        <strong>{value}</strong> x 
                                        <strong>{item.quantity}</strong>
                                      </p>
                                      <p>
                                        <CurrencyFormat
                                          value={
                                            item?.price *
                                            (1 - item?.discount / 100) *
                                            item.quantity
                                          }
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          renderText={(value) => (
                                            <strong className="ml-4">
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
                  <div className="border-t-2 py-5 mt-5 flex justify-between">
                    <div className="w-[70%] flex">
                      <h3 className="w-[25%] text-xl font-bold">
                        Chú ý đơn hàng
                      </h3>
                      <p className="w-[70%]">
                        Các sản phẩm sẽ được vận chuyển cùng nhau vào Thứ 6 và
                        shop sẽ gửi email cho bạn, vui lòng kiểm tra. Xin cảm
                        ơn!
                      </p>
                    </div>
                    <div className="w-[27%] flex flex-col flex-wrap gap-4">
                      <span className="flex justify-between">
                        <strong className="font-bold">Tạm tính</strong>
                        <strong className="font-bold">
                          <CurrencyFormat
                            value={order.itemsPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            renderText={(value) => <div>{value} đ</div>}
                          />
                        </strong>
                      </span>
                      <span className="flex justify-between">
                        <strong className="font-bold">Phí vận chuyển</strong>
                        <strong className="font-bold">
                          <CurrencyFormat
                            value={order.shippingPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            renderText={(value) => <div>{value} đ</div>}
                          />
                        </strong>
                      </span>
                      <span className="flex justify-between border-t-2 pt-2">
                        <strong className="font-bold">Tổng tiền</strong>
                        <strong className="font-bold">
                          <CurrencyFormat
                            value={order.totalPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            renderText={(value) => <div>{value} đ</div>}
                          />
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="shadow m-2 bg-white rounded-md flex-wrap md:py-3 justify-center p-10">
                  <div>
                    <p className="heading lg:text-xl md:text-base sm:text-sm border-b-2 py-2 mb-5">
                      Chi tiết khách hàng
                    </p>
                  </div>
                  <div className="m-10 flex flex-wrap text-left gap-5 justify-around">
                    <div className="flex flex-col flex-wrap gap-3">
                      <div className="flex gap-3 ">
                        <Person className="text-slate-500" />
                        <span className="text-slate-600">
                          {order.user && order.shippingInfo.name}
                        </span>
                      </div>
                      <div className="flex gap-3 ">
                        <Phone className="text-slate-500" />
                        <span className="text-slate-600">
                          {order.user && order.shippingInfo.phoneNo}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Mail className="text-slate-500" />
                        <a
                          href={`mailto:${order?.user?.email}`}
                          className="text-blue-600"
                        >
                          {order?.user && order?.user?.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col flex-wrap gap-3">
                      <div className="flex gap-3">
                        <HomeWork className="text-slate-500" />
                        <span className="text-slate-600">
                          {order.user &&
                            `${order.shippingInfo.address}, ${order.shippingInfo.city} `}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        {order.paymentInfo &&
                        order.paymentInfo.status === "succeeded" ? (
                          <CreditCard className="text-slate-500" />
                        ) : (
                          <LocalAtm className="text-slate-500" />
                        )}
                        <span className="text-slate-600">
                          {order?.paymentInfo &&
                          order?.paymentInfo.status === "succeeded"
                            ? "Thanh toán thẻ"
                            : "Thanh toán tiền mặt"}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        {order.orderStatus &&
                        order.orderStatus === "Delivered" ? (
                          <Home className="text-slate-500" />
                        ) : order.orderStatus === "Shipped" ? (
                          <LocalShipping className="text-slate-500" />
                        ) : order.orderStatus === "Cancel" ? (
                          <Block className="text-slate-500" />
                        ) : (
                          <Cached className="text-slate-500" />
                        )}
                        <p
                          className={`${
                            order.orderStatus &&
                            order.orderStatus === "Delivered"
                              ? "text-green-500"
                              : order.orderStatus === "Shipped"
                              ? "text-yellow-500"
                              : order.orderStatus === "Cancel"
                              ? "text-red-500"
                              : "text-yellow-500"
                          }  `}
                        >
                          {order.orderStatus &&
                          order.orderStatus === "Delivered"
                            ? "Đã giao hàng"
                            : order.orderStatus === "Shipped"
                            ? "Đang vận chuyển"
                            : order.orderStatus === "Cancel"
                            ? "Đã huỷ"
                            : "Đang xử lý"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {order.orderStatus !== "Delivered" &&
                order.orderStatus !== "Cancel" && (
                  <div className="py-2 m-2 my-2 md:mt-0 col-span-6 tall:col-span-2 w-[30%] pl-2">
                    <form
                      className="w-[100%] h-[60vh] flex flex-col gap-6 justify-center items-center mx-auto shadow-lg bg-white p-5 rounded-md"
                      onSubmit={updateProcessOrder}
                    >
                      <div className="text-center mb-10">
                        <p className="text-xl font-medium text-gray-600 pb-3 border-b-2">
                          Trạng thái đơn hàng
                        </p>
                      </div>
                      <div className="w-full mb-2">
                        <div className="flex gap-2 justify-evenly flex-col h-full ">
                          <div className="bg-primaryBlue rounded-lg overflow-hidden w-full flex justify-start items-center">
                            <AccountTree className="text-xl text-white mx-2" />
                            <select
                              value={status}
                              className="px-3 py-2 outline-none border-2 w-full cursor-pointer"
                              onChange={(e) => setStatus(e.target.value)}
                            >
                              <option disabled value="">
                                Chọn trạng thái
                              </option>
                              <option value="Shipped">Đang vận chuyển</option>
                              <option value="Delivered">Đã giao hàng</option>
                              <option value="Cancel">Hủy</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit mx-auto">
                        <Button
                          label="Cập nhật trạng thái"
                          disabled={
                            loadingOrder
                              ? true
                              : false || status === ""
                              ? true
                              : false
                          }
                        />{" "}
                      </div>
                    </form>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
