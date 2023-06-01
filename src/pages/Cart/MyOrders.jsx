import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../../components/layout/Loader/Loader";
import { Link } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";
import { Visibility } from "@material-ui/icons";
import { toast } from "react-toastify";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { error, loading, orders } = useSelector((state) => state.myOrders);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  const columns = [
    { field: "id", headerName: "Mã đơn hàng", minWidth: 280, flex: 0.7 },

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
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Tổng tiền",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: "actions",
      headerName: "Hành động",
      type: "number",
      minWidth: 120,
      flex: 0.3,
      sortable: false,
      renderCell: (params) => {
        return (
          <Link
            className="text-slate-500 hover:text-primaryBlue transition-all duration-500"
            to={`/order/${params.getValue(params.id, "id")}`}
          >
            <Visibility />
          </Link>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status:
          item.orderStatus && item.orderStatus === "Delivered"
            ? "Đã giao hàng"
            : item.orderStatus === "Shipped"
            ? "Đang vận chuyển"
            : item.orderStatus === "Cancel"
            ? "Đã huỷ"
            : "Đang xử lý",
        amount: `${item.totalPrice} đ`,
      });
    });

  return (
    <Fragment>
      <MetaData title={`JAMILA | Lịch sử đặt hàng`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="py-24 w-[90%] mx-auto">
          <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[]}
            pageSize={5}
            disableSelectionOnClick
            className="rounded-t-md"
            autoHeight
          />
          <p className="bg-secondaryDark py-3 text-center text-xl text-white rounded-b-md">
            Lịch sử đặt hàng của {user?.name}
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
