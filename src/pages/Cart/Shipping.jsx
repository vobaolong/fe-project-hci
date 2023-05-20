import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../../components/layout/MetaData";
import { Person, Home, LocationCity, Phone } from "@material-ui/icons";
import InputField from "../../components/user/InputField";
import Button from "../../components/user/Button";
import CheckoutSteps from "../../components/shipping/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [name, setName] = useState(shippingInfo.name);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      toast.error("Số điện thoại không đúng định dạng");
      return;
    }

    dispatch(
      saveShippingInfo({
        name,
        address,
        city,
        phoneNo,
      })
    );
    navigate("/order/confirm");
  };
  return (
    <Fragment>
      <MetaData title={`JAMILA | Thông tin vận chuyển`} />
      <div className="h-auto py-24">
        <CheckoutSteps activeStep={0} />
        <div className="h-full flex bg-white rounded-lg flex-wrap py-2 md:py-3 lg:mx-40 md:mx-4 sm:mx-2 justify-center">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
            <h2 className="text-2xl mb-5 pb-5 border-b-2 border-secondaryDark font-semibold w-fit mx-auto">
              Thông tin vận chuyển
            </h2>

            <form
              className="h-[80%] transition-transform duration-500 flex flex-col px-5 py-2  justify-evenly items-center "
              encType="multipart/form-data"
              onSubmit={shippingSubmit}
            >
              <div className="w-full mb-5">
                <div className="flex gap-5 justify-evenly flex-col h-full ">
                  <InputField
                    type="text"
                    name="name"
                    label="Họ và tên"
                    required
                    Icon={Person}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <InputField
                    type="text"
                    name="address"
                    label="Số nhà, đường, phường (xã), quận (huyện)"
                    required
                    Icon={Home}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <InputField
                    type="text"
                    name="city"
                    label="Thành phố"
                    required
                    Icon={LocationCity}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />

                  <InputField
                    type="tel"
                    name="phoneNO"
                    label="Số điện thoại"
                    required
                    Icon={Phone}
                    value={phoneNo}
                    size="10"
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
              </div>
              <Button label="Tiếp tục" />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
