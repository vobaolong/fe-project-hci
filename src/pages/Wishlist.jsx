import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProductWishList } from "../features/user/userSlice";
import productImg from "../images/products/nike-jordan.png";
import { addToWishList } from "../features/products/productSlice";
const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishListFromDB();
  }, []);
  const getWishListFromDB = () => {
    dispatch(getUserProductWishList());
  };
  const wishListState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const removeFromWishList = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
      dispatch(getUserProductWishList());
    }, 300);
  };
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishListState.length === 0 && (
            <div className="text-center fs-5">No Data</div>
          )}
          {wishListState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={() => removeFromWishList(item?._id)}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={
                        item?.images[0].url ? item?.images[0].url : productImg
                      }
                      className="img-fluid w-100"
                      alt="shoes"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">{item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
