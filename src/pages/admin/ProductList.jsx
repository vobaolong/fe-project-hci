import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProducts,
  deleteProduct,
} from "../../actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";
import SideBar from "../../components/admin/Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, products } = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

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
      toast.success("Xoá sản phẩm thành công");
      navigate("/admin/products");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProducts());
  }, [dispatch, error, deleteError, isDeleted, navigate]);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const columns = [
    { field: "id", headerName: "Mã sản phẩm", minWidth: 200, flex: 0.4 },

    {
      field: "name",
      headerName: "Tên sản phẩm",
      minWidth: 280,
      flex: 0.6,
    },
    {
      field: "stock",
      headerName: "Số lượng",
      type: "number",
      minWidth: 100,
      flex: 0.2,
    },

    {
      field: "price",
      headerName: "Giá",
      type: "number",
      minWidth: 120,
      flex: 0.2,
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
              to={`/admin/product/${params.getValue(params.id, "id")}`}
            >
              <FaEdit className="text-2xl" />
            </Link>

            <button
              className="text-red-400 mx-7 hover:text-red-500 transition-all duration-300"
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
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

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.stock,
        price: `${item.price.toLocaleString()} đ`,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`Sản phẩm | Admin`} />

      {/* dashboard */}
      <div className="dashboardStyle">
        <div className="sidebarStyle">
          <SideBar />
        </div>

        <div className="dashboardRightBoxStyle">
          <div className="mb-5">
            <p className="upper text-center text-2xl font-bold text-gray-400">
              Tất cả sản phẩm
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

export default ProductList;
