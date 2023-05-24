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
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const [price, setPrice] = useState([0, 50000000]);
  const [brand, setBrand] = useState("");
  const [ratings, setRatings] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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

    dispatch(getProduct(keyword, currentPage, price, brand, ratings));
  }, [dispatch, error, keyword, currentPage, price, brand, ratings]);

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
                  <h1 className="items-center text-center text-xl flex uppercase text-red-600 font-bold">
                    Không tìm thấy sản phẩm
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
              />
            </div>
          </div>
          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
