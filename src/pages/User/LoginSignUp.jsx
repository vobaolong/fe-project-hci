import React, { useState, useRef, useEffect } from "react";
import { MdMailOutline, MdLockOpen, MdPerson } from "react-icons/md";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/user/Button";
import InputField from "../../components/user/InputField";
import Loader from "../../components/layout/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import MetaData from "../../components/layout/MetaData";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { toast } from "react-toastify";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const loginTab = useRef(null);
  const registerTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [avatar, setAvatar] = useState("/profile.png");
  const [avatarPreview, setAvatarPreview] = useState(
    "https://res.cloudinary.com/dnadibjp0/image/upload/v1670951747/users/download_fdsjrx.png"
  );

  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const path = user?.role === "admin" ? "/admin/dashboard" : "/account";
  const redirect = location.search ? location.search.split("=")[1] : path;

  const handleShowHide = () => {
    setShow(!show);
  };
  const handleShowHideConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect, { replace: true });
    }
  }, [error, dispatch, redirect, isAuthenticated, navigate]);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", registerName);
    myForm.set("email", registerEmail);
    myForm.set("password", registerPassword);
    myForm.set("avatar", avatar);

    if (registerPassword !== cpassword) {
      toast.error("Password doesn't match");
    } else {
      dispatch(register(myForm));
    }
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const lowerCase = document.getElementById("lower");
  const upperCase = document.getElementById("upper");
  const digit = document.getElementById("number");
  const specialChar = document.getElementById("special");
  const minLength = document.getElementById("length");

  const iconNotCheckLower = document.getElementById("iconNotCheckLower");
  const iconNotCheckUpper = document.getElementById("iconNotCheckUpper");
  const iconNotCheckNumber = document.getElementById("iconNotCheckNumber");
  const iconNotCheckSpecial = document.getElementById("iconNotCheckSpecial");
  const iconNotCheckLength = document.getElementById("iconNotCheckLength");

  const iconCheckLower = document.getElementById("iconCheckLower");
  const iconCheckUpper = document.getElementById("iconCheckUpper");
  const iconCheckNumber = document.getElementById("iconCheckNumber");
  const iconCheckSpecial = document.getElementById("iconCheckSpecial");
  const iconCheckLength = document.getElementById("iconCheckLength");
  const btnSignUp = document.getElementById("btn-signup");

  const checkPassword = (data) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");
    //Lower Case validation check
    if (lower.test(data)) {
      lowerCase.classList.add("text-primaryBlue");
      iconNotCheckLower.classList.remove("inline");
      iconNotCheckLower.classList.add("hidden");
      iconCheckLower.classList.remove("hidden");
      iconCheckLower.classList.add("inline");
    } else {
      lowerCase.classList.remove("text-primaryBlue");
      iconNotCheckLower.classList.add("inline");
      iconNotCheckLower.classList.remove("hidden");
      iconCheckLower.classList.add("hidden");
      iconCheckLower.classList.remove("inline");
    }

    if (upper.test(data)) {
      upperCase.classList.add("text-primaryBlue");
      iconNotCheckUpper.classList.remove("inline");
      iconNotCheckUpper.classList.add("hidden");
      iconCheckUpper.classList.remove("hidden");
      iconCheckUpper.classList.add("inline");
    } else {
      upperCase.classList.remove("text-primaryBlue");
      iconNotCheckUpper.classList.add("inline");
      iconNotCheckUpper.classList.remove("hidden");
      iconCheckUpper.classList.add("hidden");
      iconCheckUpper.classList.remove("inline");
    }

    if (number.test(data)) {
      digit.classList.add("text-primaryBlue");
      iconNotCheckNumber.classList.remove("inline");
      iconNotCheckNumber.classList.add("hidden");
      iconCheckNumber.classList.remove("hidden");
      iconCheckNumber.classList.add("inline");
    } else {
      digit.classList.remove("text-primaryBlue");
      iconNotCheckNumber.classList.add("inline");
      iconNotCheckNumber.classList.remove("hidden");
      iconCheckNumber.classList.add("hidden");
      iconCheckNumber.classList.remove("inline");
    }

    if (special.test(data)) {
      specialChar.classList.add("text-primaryBlue");
      iconNotCheckSpecial.classList.remove("inline");
      iconNotCheckSpecial.classList.add("hidden");
      iconCheckSpecial.classList.remove("hidden");
      iconCheckSpecial.classList.add("inline");
    } else {
      specialChar.classList.remove("text-primaryBlue");
      iconNotCheckSpecial.classList.add("inline");
      iconNotCheckSpecial.classList.remove("hidden");
      iconCheckSpecial.classList.add("hidden");
      iconCheckSpecial.classList.remove("inline");
    }

    if (length.test(data)) {
      minLength.classList.add("text-primaryBlue");
      iconNotCheckLength.classList.remove("inline");
      iconNotCheckLength.classList.add("hidden");
      iconCheckLength.classList.remove("hidden");
      iconCheckLength.classList.add("inline");
    } else {
      minLength.classList.remove("text-primaryBlue");
      iconNotCheckLength.classList.add("inline");
      iconNotCheckLength.classList.remove("hidden");
      iconCheckLength.classList.add("hidden");
      iconCheckLength.classList.remove("inline");
    }

    if (
      lower.test(data) &&
      upper.test(data) &&
      number.test(data) &&
      special.test(data) &&
      length.test(data)
    ) {
      btnSignUp.disabled = false;
    } else {
      btnSignUp.disabled = true;
    }
  };
  return (
    <>
      <MetaData title={`JAMILA | Đăng nhập/ Đăng ký`} />
      {loading ? (
        <Loader />
      ) : (
        <div className="justify-center flex items-center">
          <div className="h-full mt-28 m-10 bg-white rounded-xl lg:mx-40 md:mx-4 sm:mx-2 xl:w-[40%] lg:w-[100%] md:w-[70%] sm:w-[100%]">
            <Box className="" sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    variant="fullWidth"
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      className="font-bold text-lg"
                      label="đăng nhập"
                      value="login"
                    />
                    <Tab
                      className="font-bold text-lg"
                      label="Đăng ký"
                      value="signup"
                    />
                  </TabList>
                </Box>
                <TabPanel value="login">
                  {/* Login form */}
                  <form
                    className="flex flex-col px-5 py-2 justify-evenly items-center"
                    ref={loginTab}
                    onSubmit={loginSubmit}
                  >
                    <div className="w-full mb-5 justify-center items-center">
                      <div className="flex justify-evenly flex-col h-full gap-3">
                        <InputField
                          type="text"
                          name="email"
                          label="Vui lòng nhập Email"
                          Icon={MdMailOutline}
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <div className="flex">
                          <InputField
                            type={show ? "text" : "password"}
                            name="password"
                            label="Vui lòng nhập mật khẩu"
                            Icon={MdLockOpen}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                          />
                          {!show ? (
                            <AiFillEye
                              id="show_hide"
                              className="cursor-pointer justify-center inline-block mt-4 -ml-9 text-2xl text-primaryBlue z-20"
                              onClick={handleShowHide}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              id="show_hide"
                              className="cursor-pointer justify-center inline-block mt-4 -ml-9 text-2xl text-primaryBlue z-20"
                              onClick={handleShowHide}
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex w-[100%] justify-between my-5">
                        <p>
                          <input type="checkbox" className="accent-green-900" />{" "}
                          Ghi nhớ đăng nhập
                        </p>
                        <Link
                          to="/password/forgot"
                          className="text-lightGray hover:text-primaryBlue underline-offset-2 underline"
                        >
                          Quên mật khẩu ?
                        </Link>
                      </div>
                      <Button label="Đăng nhập" />
                    </div>
                  </form>
                </TabPanel>
                <TabPanel value="signup">
                  {/* Register form */}
                  <form
                    className="flex flex-col px-5 py-2 justify-evenly items-center"
                    ref={registerTab}
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                  >
                    <div className="w-full mb-5 justify-center items-center">
                      <div className="flex justify-evenly flex-col h-full gap-3">
                        <InputField
                          type="text"
                          name="name"
                          label="Vui lòng nhập tên"
                          Icon={MdPerson}
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                        />

                        <InputField
                          type="email"
                          name="email"
                          label="Vui lòng nhập Email"
                          Icon={MdMailOutline}
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        <div className="flex">
                          <InputField
                            type={show ? "text" : "password"}
                            name="password"
                            label="Vui lòng nhập mật khẩu"
                            Icon={MdLockOpen}
                            value={registerPassword}
                            onKeyPress={(e) => checkPassword(e.target.value)}
                            onChange={(e) =>
                              setRegisterPassword(e.target.value)
                            }
                          />
                          {!show ? (
                            <AiFillEye
                              id="show_hide"
                              className="cursor-pointer justify-center inline-block mt-4 -ml-9 text-2xl text-primaryBlue z-20"
                              onClick={handleShowHide}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              id="show_hide"
                              className="cursor-pointer justify-center inline-block mt-4 -ml-9 text-2xl text-primaryBlue z-20"
                              onClick={handleShowHide}
                            />
                          )}
                        </div>
                        <div className="flex">
                          <InputField
                            type={showConfirm ? "text" : "password"}
                            name="cpassword"
                            label="Xác nhận lại mật khẩu"
                            Icon={MdLockOpen}
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}
                          />
                          {!showConfirm ? (
                            <AiFillEye
                              id="show_hide"
                              className="cursor-pointer justify-center inline-block mt-4 -ml-9 text-2xl text-primaryBlue z-20"
                              onClick={handleShowHideConfirm}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              id="show_hide"
                              className="cursor-pointer justify-center inline-block mt-4 -ml-9 text-2xl text-primaryBlue z-20"
                              onClick={handleShowHideConfirm}
                            />
                          )}
                        </div>

                        <div className="flex items-center gap-5">
                          <img
                            src={avatarPreview}
                            className="w-10 h-10 rounded-full"
                            alt="ảnh đại diện"
                          />
                          <input
                            className="avatarChoose border-2 rounded-lg w-full"
                            type="file"
                            name="avatar"
                            accept="image/*"
                            label="chọn ảnh"
                            onChange={registerDataChange}
                            required
                          />
                        </div>
                        <div className="bg-primaryDarkBlue mt-2 p-3 rounded-xl text-sm text-left">
                          <ul className="flex flex-col gap-2 text-zinc-400">
                            <li id="lower" className="ease-in-out">
                              <AiOutlineCloseCircle
                                id="iconNotCheckLower"
                                className="inline mr-1 text-red-500"
                              />
                              <AiOutlineCheckCircle
                                id="iconCheckLower"
                                className="hidden text-green-600 mr-1"
                              />
                              Ít nhất có một ký tự viết thường
                            </li>
                            <li id="upper" className="ease-in-out">
                              <AiOutlineCloseCircle
                                id="iconNotCheckUpper"
                                className="inline mr-1 text-red-500"
                              />
                              <AiOutlineCheckCircle
                                id="iconCheckUpper"
                                className="hidden text-green-600 mr-1"
                              />
                              Ít nhất có một ký tự viết hoa
                            </li>
                            <li id="number" className="ease-in-out">
                              <AiOutlineCloseCircle
                                id="iconNotCheckNumber"
                                className="inline mr-1 text-red-500"
                              />
                              <AiOutlineCheckCircle
                                id="iconCheckNumber"
                                className="hidden text-green-600 mr-1"
                              />
                              Ít nhất có một ký tự số
                            </li>
                            <li id="special" className="ease-in-out">
                              <AiOutlineCloseCircle
                                id="iconNotCheckSpecial"
                                className="inline mr-1 text-red-500"
                              />
                              <AiOutlineCheckCircle
                                id="iconCheckSpecial"
                                className="hidden text-green-600 mr-1"
                              />
                              Ít nhất có một ký tự đặc biệt
                            </li>
                            <li id="length" className="ease-in-out">
                              <AiOutlineCloseCircle
                                id="iconNotCheckLength"
                                className="inline mr-1 text-red-500"
                              />
                              <AiOutlineCheckCircle
                                id="iconCheckLength"
                                className="hidden text-green-600 mr-1"
                              />
                              Độ dài ngắn nhất là 8 ký tự
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p className="py-2">
                      Đã có tài khoản ?{" "}
                      <a className="underline text-blue-500" href="/login">
                        Đăng nhập ngay
                      </a>
                    </p>
                    <Button id="btn-signup" label="Đăng ký" />
                    <p className="pt-5">
                      Nhấn "Đăng ký" cũng đồng nghĩa bạn đồng ý với{" "}
                      <a className="hover:underline text-sky-400" href="/term">
                        Điều khoản sử dụng
                      </a>{" "}
                      và{" "}
                      <a className="hover:underline text-sky-400" href="/term">
                        Chính sách bảo mật
                      </a>
                    </p>
                  </form>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
