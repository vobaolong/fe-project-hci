import React, { Fragment, useEffect } from "react";
import Banner from "../components/home/Banner/Banner";
import OurProduct from "../components/home/OurProduct/OurProduct";
import companydata from "./../data/companydata.json";
import MetaData from "./../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";

import { clearErrors, getProduct } from "../actions/productAction";
import Loader from "../components/layout/Loader/Loader";
import { toast } from "react-toastify";

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="JAMILA" />

          {/* banner */}
          <Banner jsonData={companydata} />

          {/* our products */}
          <OurProduct heading="Sản phẩm mới" products={products?.slice(0, 8)} />

          {/* our products */}
          <OurProduct
            heading="Sản phẩm bán chạy"
            products={products?.slice(8, 16)}
          />
        </Fragment>
      )}
    </div>
  );
};

export default HomePage;
