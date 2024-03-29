import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../actions/orderAction";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";

import SideBar from "../../components/admin/Sidebar";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { SwapHorizontalCircle } from "@material-ui/icons";

const OrdersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, orders } = useSelector((state) => state.allOrders);

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);
  console.log(orders);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Xoá đơn hàng thành công");
      navigate("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders()); // getting all the orders
  }, [dispatch, error, deleteError, isDeleted, navigate]);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  const columns = [
    { field: "id", headerName: "Mã đơn hàng", minWidth: 100, flex: 0.3 },
    { field: "date", headerName: "Ngày đặt", minWidth: 100, flex: 0.2 },
    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 120,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã giao hàng"
          ? "text-green-500"
          : params.getValue(params.id, "status") === "Đang vận chuyển"
          ? "text-yellow-500"
          : params.getValue(params.id, "status") === "Đang xử lý"
          ? "text-yellow-500"
          : "text-red-500";
      },
    },
    { field: "type", headerName: "Thanh toán", minWidth: 100, flex: 0.2 },
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 100,
      flex: 0.2,
    },

    {
      field: "amount",
      headerName: "Tổng tiền",
      type: "number",
      minWidth: 120,
      flex: 0.2,
    },

    {
      field: "actions",
      flex: 0.2,
      headerName: "Hành động",
      minWidth: 120,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const order = params.row;
        console.log(order);
        return (
          <Fragment>
            {order.status === "Đã huỷ" && order.type === "Online" ? (
              <button
                className="text-green-400 hover:text-green-500 transition-all duration-300"
                onClick={() =>
                  deleteOrderHandler(params.getValue(params.id, "id"))
                }
              >
                <SwapHorizontalCircle className="text-2xl" />
              </button>
            ) : (
              <Link
                className="text-green-400 hover:text-green-500 transition-all duration-300"
                to={`/admin/order/${params.getValue(params.id, "id")}`}
              >
                <FaEdit className="text-2xl" />
              </Link>
            )}

            <button
              className="text-red-400 mx-7 hover:text-red-500 transition-all duration-300"
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <FaTrash className="text-2xl" />
            </button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((order) => {
      const formattedDate = new Date(order.createdAt).toLocaleDateString();
      rows.push({
        id: order._id,
        date: formattedDate,
        itemsQty: order.orderItems.length,
        type:
          order.paymentInfo.status && order.paymentInfo.status === "succeeded"
            ? "Online"
            : "COD",
        status:
          order.orderStatus && order.orderStatus === "Delivered"
            ? "Đã giao hàng"
            : order.orderStatus === "Shipped"
            ? "Đang vận chuyển"
            : order.orderStatus === "Cancel"
            ? "Đã huỷ"
            : "Đang xử lý",
        amount: order.totalPrice,
      });
    });

  return (
    <Fragment>
      <MetaData title={`Đơn hàng | Admin`} />

      {/* dashboard */}
      <div className="dashboardStyle">
        <div className="sidebarStyle">
          <SideBar />
        </div>

        <div className="dashboardRightBoxStyle">
          <div className="mb-5">
            <p className="upper text-center text-2xl font-bold text-gray-400">
              Tất cả đơn hàng
            </p>
          </div>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="w-[95%] mx-auto"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};
export default OrdersList;
