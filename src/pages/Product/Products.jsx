import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../../components/layout/Loader/Loader";
import ProductCard from "../../components/home/OurProduct/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import FilterSlide from "../../components/Products/FilterSlide";
import MetaData from "../../components/layout/MetaData";
import { brands } from "../../data/brand";
import { toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, error, products, resultPerPage, filteredProductsCount } =
    useSelector((state) => state.products);

  const [price, setPrice] = useState([0, 50000000]);
  const [brand, setBrand] = useState("");
  const [ratings, setRatings] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [discount, setDiscount] = useState(false);
  const keyword = params.keyword;
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, brand, ratings, discount));
  }, [dispatch, error, keyword, currentPage, price, brand, ratings, discount]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`JAMILA | Sản phẩm`} />
          <div className="h-auto w-[100%] py-24 md:px-10 ">
            <h1 className="headingStyle">
              <div className="headingStylesDiv" />
              Sản phẩm
            </h1>

            <div className="flex flex-row-reverse justify-center">
              <div className="productsLayoutStyle">
                {products?.length > 0 ? (
                  products?.map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                  })
                ) : (
                  <h1 className="items-center text-center text-xl flex text-primaryBlue font-bold">
                    Đang tải
                    <i class="fa-solid fa-spinner fa-spin ml-2"></i>
                  </h1>
                )}
              </div>
              <FilterSlide
                price={price}
                priceHandler={priceHandler}
                brands={brands}
                setBrand={setBrand}
                ratings={ratings}
                setRatings={setRatings}
                discount={discount}
                setDiscount={setDiscount}
              />
            </div>
          </div>
          {products?.length > 0 ? (
            <div>
              {resultPerPage < filteredProductsCount && (
                <div className="paginationBox">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={filteredProductsCount}
                    onChange={setCurrentPageNo}
                    nextPageText=">"
                    prevPageText="<"
                    firstPageText="<<"
                    lastPageText=">>"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )}
            </div>
          ) : null}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
