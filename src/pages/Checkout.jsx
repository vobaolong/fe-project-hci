import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/products/nike-jordan.png";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Shoes Store</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp;/&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp;/&nbsp;
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Vo Bao Long (vobalong@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    label="Full Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    label="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    label="Apartment, Suite ,etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    label="City"
                    className="form-control"
                  />
                </div>

                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    label="Zipcode"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">Vans</h5>
                    <p className="total-price">Vans Old School</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 10000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 10000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 10000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
