import React from "react";
import { CheckCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="h-full w-full bg-secColor">
      <div className="flex flex-col items-center gap-7 lg:py-10 md:py-3 lg:mx-40 md:mx-4 sm:mx-2  h-full mt-28 m-10 bg-white rounded-lg flex-wrap justify-center">
        <CheckCircle
          style={{ fontSize: "5rem" }}
          className="text-primaryBlue animate-bounce"
        />

        <p className="text-2xl text-center text-primaryBlue">
          Đơn hàng của bạn đã được đặt thành công
        </p>

        <Link
          className="bg-primaryBlue text-primaryDarkBlue px-10 py-2 hover:scale-95 transition-all duration-500 rounded-md"
          to="/orders/me"
        >
          Xem đơn hàng
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
