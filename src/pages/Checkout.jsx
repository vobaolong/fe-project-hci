import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { createAnOrder } from "../features/user/userSlice";

const shippingSchema = yup.object({
  fullName: yup.string().required("User Name is required !"),
  address: yup.string().required("Address is required !"),
  city: yup.string().required("City is required !"),
  other: yup.string().required("Other is required !"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });
  const [cartProductState, setCartProductState] = useState([]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + Number(cartState[i].quantity) * cartState[i].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      setTimeout(() => {
        checkOutHandler();
      }, 200);
    },
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    let items = [];
    for (let i = 0; i < cartState?.length; i++) {
      items.push({
        product: cartState[i].productId._id,
        quantity: cartState[i].quantity,
        color: cartState[i].color._id,
        price: cartState[i].price,
      });
    }
    setCartProductState(items);
  }, []);
  const checkOutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razor Pay SDL failed to load");
      return;
    }
    const result = await axios.post(
      "http://localhost:5000/api/user/order/checkout",
      { amount: totalAmount + totalAmount / 20 },
      config
    );
    if (!result) {
      alert("Something went wrong");
      return;
    }

    const { amount, id: order_id, currency } = result.data.order;
    const options = {
      key: "rzp_test_nO30QIbRTTdEb6", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "NALOVA inc.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          "http://localhost:5000/api/user/order/paymentVerify",
          data,
          config
        );
        setPaymentInfo({
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        });

        dispatch(
          createAnOrder({
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount,
            orderItem: cartProductState,
            paymentInfo,
            shippingInfo,
          })
        );
      },
      prefill: {
        name: "NALOVA",
        email: "baolong01.dev@gmail.com",
        contact: "0348073013",
      },
      notes: {
        address: "NALOVA Inc.",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">NALOVA</h3>
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
                onSubmit={formik.handleSubmit}
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    label="Full Name"
                    className="form-control"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange("fullName")}
                    onBlur={formik.handleBlur("fullName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.fullName && formik.errors.fullName}
                  </div>
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    label="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    label="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    label="Other"
                    className="form-control"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.other && formik.errors.other}
                  </div>
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
                    <button className="button" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-2 align-align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            className="img-fluid"
                            width={100}
                            height={100}
                            src={item?.productId?.images[0].url}
                            alt="product"
                          />
                        </div>
                        <div>
                          <h5 className="total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          $ {item?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">
                  $ {totalAmount ? totalAmount : "0"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">
                  $ {totalAmount / 20 ? totalAmount / 20 : "0"}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                $
                {totalAmount + totalAmount / 20
                  ? totalAmount + totalAmount / 20
                  : "0"}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
