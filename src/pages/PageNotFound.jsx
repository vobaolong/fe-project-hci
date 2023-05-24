import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.png";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img className="w-1/2" src={error} alt="" />
      <Link
        className="py-2 px-3 mt-5 rounded-md w-[100px] text-center shadow-lg hover:scale-105 transition-all duration-500 bg-primaryBlue text-white"
        to="/"
      >
        Trang chủ
      </Link>
    </div>
  );
};

export default PageNotFound;
