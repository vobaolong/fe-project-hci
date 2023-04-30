import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import product from "../images/nike.png";
const SpecialProduct = () => {
  return (
    <>
      <div className="col-4 mt-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="col-6">
              <img className="img-fluid" src={product} alt="" />
            </div>
            <div className="special-product-content">
              <h5 className="special-product-brand">Nike</h5>
              <Link to="/" className="special-product-title fw-bolder">
                Nike Air Jordan 1 Low 'Marina Blue' DC0774-114
              </Link>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="special-product-price">
                <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
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
                <p>Product: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <button className="btn btn-outline-warning rounded" to="/">
                Add to cart
                <i className="fa-solid fa-cart-shopping fa-bounce ms-2 "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
