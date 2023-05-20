import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReviewCard from "../../components/home/ReviewCard/ReviewCard";
import MetaData from "../../components/layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import Loader from "../../components/layout/Loader/Loader";
import QuantityCardInput from "../../components/Cart/QuantityCardInput";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  DialogContentText,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import MgSlider from "../../components/Products/MgSlider";
import CurrencyFormat from "react-currency-format";
import SizeSelect from "../../components/Products/SizeSelect";
import OurProduct from "../../components/home/OurProduct/OurProduct";
import { KeyboardArrowRight } from "@material-ui/icons";
import sizeBase from "../../assets/size.jpg";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const { products } = useSelector((state) => state.products);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      toast.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Đánh giá thành công");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, reviewError, success]);

  const handleSizeClick = (size) => {
    setSize(size);
  };

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    if (size === null) {
      toast.error("Vui lòng chọn size trước khi thêm vào giỏ hàng");
      return;
    }
    dispatch(addItemsToCart(id, quantity, size));
    toast.success("Thêm vào giỏ hàng thành công");
  };

  const openReviewHandler = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const openDialogHandler = () => {
    openDialog ? setOpenDialog(false) : setOpenDialog(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));
    setOpen(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full flex mt-28 m-10 flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 gap-5">
          <MetaData title={`${product.name} | JAMILA`} />
          <div className="w-full flex justify-center md:w-[50%] md:p-10 lg:p-0 sm:p-10 overflow-hidden">
            <MgSlider
              width="550px"
              height="550px"
              slides={product.images && product.images}
            />
          </div>

          <div className="md:w-[45%] md:p-10 lg:p-0 sm:p-10">
            <div>
              <h2 className="text-primaryBlue font-bold text-xl text-center mt-5 md:mt-0 md:text-left capitalize">
                {product.name}
              </h2>
            </div>

            <div
              className="flex gap-3 my-3
            justify-center md:justify-start items-center border-t-2 py-3 border-slate-300"
            >
              <Rating {...options} />
              <span className="text-slate-500">
                ({product.numOfReviews} Đánh giá)
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-red-500 border-b-2 border-slate-300 pb-3 text-center md:text-left flex">
                <CurrencyFormat
                  value={product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <div>{value} đ</div>}
                />{" "}
                <div className="flex items-center">
                  <p className="text-mainColor">|</p>
                  <p className="text-base font-light italic text-mainColor">
                    {" "}
                    Giá đã bao gồm 10% VAT
                  </p>
                </div>
              </h1>
              <div className="container mx-auto mt-4 pb-3">
                <SizeSelect
                  valueSize={size}
                  handleSizeClick={handleSizeClick}
                />
                <button
                  onClick={openDialogHandler}
                  className="lg:w-[50%] md:w-[70%] sm:w-full py-2 outline-none mt-5 underline-offset-4 underline text-left"
                >
                  Bảng Quy Đổi Kích Cỡ <KeyboardArrowRight />
                </button>
                <Dialog
                  open={openDialog}
                  onClose={openDialogHandler}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Bảng Quy Đổi Kích Cỡ"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <img src={sizeBase} alt="" />
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={openDialogHandler}
                    >
                      Đóng
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>

              <p className="border-t-2 border-b-2 py-3 border-slate-300 text-slate-600 font-semibold text-center md:text-left">
                Trạng thái:{" "}
                <b
                  className={`${
                    product.stock < 1 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {product.stock < 1 ? "Hết hàng" : "Còn hàng"}
                </b>
                <div className="flex gap-5 my-5 flex-col md:flex-row justify-center md:justify-start">
                  <QuantityCardInput
                    quantity={quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                  <button
                    disabled={product.stock < 1 ? true : false}
                    onClick={addToCartHandler}
                    className="commonBtnStyle mx-auto md:mx-0 py-2 px-5 w-full sm:w-1/2 md:w-[170px] bg-primaryBlue"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </p>
            </div>

            <div className="py-5 font-semibold text-center md:text-left">
              Mô tả:
              <p className="font-normal text-slate-500 text-sm text-justify">
                {/* {parse(product.description)} */}
                {parse(`${product.description}`)}
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={openReviewHandler}
                className="commonBtnStyle w-full sm:w-1/2 md:w-[190px] py-2 px-10 bg-secondaryDark hover:scale-95 outline-none"
              >
                Thêm đánh giá
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="py-5">
        <h1 className="headingStyle uppercase">
          <div className="headingStylesDiv" />
          Đánh giá
        </h1>

        <Dialog
          aria-label="simple-dialog-title"
          open={open}
          onClose={openReviewHandler}
        >
          <DialogTitle>Thêm đánh giá</DialogTitle>
          <DialogContent>
            <Rating
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              size="large"
              name="hover-feedback"
            />
            <TextField
              className="w-[100%]"
              id="outlined-multiline-static"
              multiline
              required
              rows={7}
              cols={20}
              label="Thêm đánh giá"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={openReviewHandler}
              color="secondary"
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              onClick={reviewSubmitHandler}
              color="primary"
            >
              Gửi
            </Button>
          </DialogActions>
        </Dialog>

        {product.reviews && product.reviews[0] ? (
          <div className="flex gap-5 px-10 my-10 no-scrollbar overflow-x-auto">
            {product.reviews &&
              product.reviews.map((review, id) => {
                return <ReviewCard key={id} review={review} />;
              })}
          </div>
        ) : (
          <p className="text-center py-24 text-2xl text-slate-400">
            Chưa có đánh giá
          </p>
        )}
      </div>

      {/* our products */}
      <OurProduct
        heading="Sản phẩm liên quan"
        products={products.slice(0, 8)}
      />
    </Fragment>
  );
};

export default ProductDetails;
