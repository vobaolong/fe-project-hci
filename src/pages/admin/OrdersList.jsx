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

const OrdersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, orders } = useSelector((state) => state.allOrders);

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

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
    { field: "id", headerName: "Mã đơn hàng", minWidth: 200, flex: 0.5 },
    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã giao hàng"
          ? "text-green-500"
          : "text-red-500";
      },
    },
    {
      field: "itemsQty",
      headerName: "Số lượng sản phẩm",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Tổng tiền",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Hành động",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link
              className="text-green-400 hover:text-green-500 transition-all duration-300"
              to={`/admin/order/${params.getValue(params.id, "id")}`}
            >
              <FaEdit className="text-2xl" />
            </Link>

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
      rows.push({
        id: order._id,
        itemsQty: order.orderItems.length,
        status:
          order.orderStatus && order.orderStatus === "Delivered"
            ? "Đã giao hàng"
            : order.orderStatus === "Shipped"
            ? "Đang vận chuyển"
            : order.orderStatus === "Cancel"
            ? "Đã hủy"
            : "Đang xử lí",
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
