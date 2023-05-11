import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import product from "../images/nike.png";

const SpecialProduct = (props) => {
  const { title, brand, totalrating, price, sold, quantity, id } = props;
  return (
    <>
      <div className="col-4 mt-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="col-6">
              <img className="img-fluid" src={product} alt="" />
            </div>
            <div className="special-product-content">
              <h5 className="special-product-brand">{brand}</h5>
              <Link to="/" className="special-product-title fw-bolder">
                {title}
              </Link>
              <ReactStars
                count={5}
                size={24}
                value={totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="special-product-price">
                <span className="red-p">$ {price}</span> &nbsp;{" "}
                <strike>${(price * 4) / 5}</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle bg-danger">1</span>:
                  <span className="badge rounded-circle bg-danger">1</span>:
                  <span className="badge rounded-circle bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Product: {quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: quantity / quantity + sold * 100 + "%" }}
                    aria-valuenow={quantity / quantity + sold * 100}
                    aria-valuemin={quantity}
                    aria-valuemax={sold + quantity}
                  ></div>
                </div>
              </div>
              <Link
                className="button btn btn-outline-warning rounded"
                to={"/product" + id}
              >
                View
                <i className="fa-solid fa-cart-shopping fa-bounce ms-2 "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
