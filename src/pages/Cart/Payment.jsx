import React, { useEffect, useState, useRef, Fragment } from "react";
import CheckoutSteps from "../../components/shipping/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CreditCard, Event, VpnKey } from "@material-ui/icons";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { resetCart } from "../../actions/cartAction";
import SlideableBtn from "../../components/layout/Buttons/SlideableBtn";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const payBtn = useRef(null);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const alert = useAlert();

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    payBtn.current.disable = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
        },
      };

      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;
        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          alert.success(
            `Bạn đã thanh toán thành công số tiền ${order.totalPrice.toLocaleString()} đ}`
          );
          // creating order when payment is success
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));
          navigate("/success", { replace: true });
          dispatch(resetCart());
          setLoading(false);
        } else {
          alert.error("There's some issue while processing payment");
        }
      }
    } catch (err) {
      payBtn.current.disable = false;
      alert.error(err.response.data.message);
    }
  };

  const submitWithoutPay = async (e) => {
    e.preventDefault();
    setLoading(true);

    order.paymentInfo = {
      id: order.id,
      status: "Unpaid",
    };
    dispatch(createOrder(order));
    navigate("/success", { replace: true });
    dispatch(resetCart());
    setLoading(false);
  };

  // const paymentHandler = async () => {
  //   await dispatch(resetCart());
  // };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <div className="h-auto py-24 px-8 md:px-0">
        <MetaData title={`Thanh toán`} />
        <CheckoutSteps activeStep={2} />
        <div className="h-full flex flex-col flex-wrap bg-white rounded-lg py-4 m-10 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 items-center">
          <form
            className="flex flex-col gap-5 w-[50%]"
            onSubmit={(e) => submitHandler(e)}
          >
            <p className="w-fit mx-auto text-xl font-bold py-5 border-b-2 border-secondaryDark">
              Thông tin thẻ
            </p>
            <div className="paymentInputFieldDivStyle">
              <CreditCard className="paymentInputFieldIconStyle" />
              <CardNumberElement className="paymentInputFieldStyle" />
            </div>
            <div className="paymentInputFieldDivStyle">
              <Event className="paymentInputFieldIconStyle" />
              <CardExpiryElement className="paymentInputFieldStyle" />
            </div>
            <div className="paymentInputFieldDivStyle">
              <VpnKey className="paymentInputFieldIconStyle" />
              <CardCvcElement className="paymentInputFieldStyle" />
            </div>

            {/* <input
              // onClick={dispatch(resetCart())}
              className="slideableBtnStyles cursor-pointer mt-5"
              ref={payBtn}
              type="submit"
              disabled={loading ? true : false}
              value={
                loading
                  ? `Processing...`
                  : `Thanh toán - ${
                      orderInfo && orderInfo.totalPrice.toLocaleString()
                    } đ`
              }
            /> */}
            <SlideableBtn
              ref={payBtn}
              type="submit"
              disabled={loading ? true : false}
              label={
                loading
                  ? `Đang xử lý...`
                  : `Thanh toán - ${
                      orderInfo && orderInfo.totalPrice.toLocaleString()
                    } đ`
              }
            />
          </form>
          <div className="w-full md:w-[50%] mx-auto">
            <form
              className="flex gap-1 mt-5 mt-5"
              onSubmit={(e) => submitWithoutPay(e)}
            >
              <SlideableBtn
                disabled={loading ? true : false}
                label="Thanh toán khi nhận hàng"
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
