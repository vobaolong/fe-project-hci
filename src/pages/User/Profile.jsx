import React, { useEffect } from "react";
import MetaData from "../../components/layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/layout/Loader/Loader";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`JAMILA | Thông tin`} />
          <div className="h-full md:h-screen w-full flex flex-col py-12 md:py-0 md:flex-row px-8  bg-slate-100">
            <div className="flex flex-col w-full h-screen justify-center items-center">
              <h1 className="text-2xl md:-translate-x-9 -translate-y-5 justify-center items-center text-primaryBlue">
                Thông tin cá nhân
              </h1>
              <img
                className="w-60 h-60 rounded-full shadow-xl border-4 border-primaryDarkBlue transition-transform duration-500 hover:scale-105"
                src={
                  user.avatar.url
                    ? user.avatar.url
                    : "https://res.cloudinary.com/baolong317/image/upload/v1669743696/avatars/gbgy5z5ovkkl85tgydeu.png"
                }
                alt={user.name}
              />
              <Link
                className="profileLinkBtnStyle bg-secondaryDark"
                to="/update"
              >
                Chỉnh sửa thông tin
              </Link>
            </div>

            <div className="flex flex-col w-full h-screen justify-evenly py-24 items-start box-border">
              <div className="flex">
                <p className="text-slate-800 font-medium text-lg">
                  Họ và tên khách hàng:
                </p>
                <strong className="inline ml-2 font-medium text-xl text-slate-600">
                  {user.name}
                </strong>
              </div>
              <div className="flex">
                <p className="text-slate-800 font-medium text-lg">
                  Địa chỉ Email:
                </p>
                <strong className="inline ml-2 font-medium text-xl text-slate-600">
                  {user.email}
                </strong>
              </div>
              <div className="flex">
                <p className="text-slate-800 font-medium text-lg">
                  Ngày tham gia:
                </p>
                <strong className="inline ml-2 font-medium text-xl text-slate-600">
                  {String(user.createdAt).substring(0, 10)}
                </strong>
              </div>
              <div className="flex flex-col gap-y-5 w-full md:w-[40%]">
                <Link
                  className="profileLinkBtnStyle bg-primaryBlue text-center"
                  to="/orders/me"
                >
                  Đơn hàng của tôi
                </Link>
                <Link
                  className="profileLinkBtnStyle bg-primaryBlue text-center"
                  to="/password/update"
                >
                  Đổi mật khẩu
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
