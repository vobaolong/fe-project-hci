import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineSearch,
  HiOutlinePhone,
} from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import CustomIcon from "../../Icons/CustomIcon";
import { Link, NavLink } from "react-router-dom";
import Slider from "./Slider";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";
import logo from "../../../assets/logo.png";
const isActiveStyle =
  "font-bold text-xl opacity-100 transition-all duration-500";
const isNotActiveStyle =
  "font-semibold text-lg opacity-50 transition-all duration-500";

const Navbar = ({ menuOptions }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const handleCloseToggle = () => {
    setToggleSidebar(true);
  };

  return (
    <>
      <header className="bg-primaryDarkBlue top-0 z-50 py-2 md:py-3 px-4 lg:px-40 text-primaryBlue flex justify-between border-b border-slate-200">
        <p className="sm:text-sm flex gap-1 font-medium col-span-6">
          <FaShippingFast className="h-6 text-xl" />
          Miễn phí vận chuyển đơn từ 1.000.000 ₫
        </p>
        <p className="sm:text-sm flex gap-1 font-medium col-span-6">
          <HiOutlinePhone className="h-6 text-xl" />
          Hotline:
          <strong>
            <a className="hover:text-amber-400" href="tel:+84348073013">
              0348073013
            </a>
          </strong>
        </p>
      </header>
      <header className="w-[100%] bg-primaryDarkBlue top-0 right-0 sticky z-50 py-3 md:py-6 px-4 lg:px-40 text-slate-900 border-b-2 border-b-slate-200">
        <div className="flex justify-between items-center">
          <Link className="lg:w-[10%] md:w-[20%] sm:w-[20%] mx-5 p-0" to="/">
            <img className="w-[100%]" src={logo} alt="logo" />
          </Link>
          <div className="hidden md:block text-primaryBlue">
            {`${user?.role}` === "admin" ? null : (
              <div className="flex gap-10">
                {menuOptions?.map((menu, index) => {
                  return (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? isActiveStyle : isNotActiveStyle
                      }
                      to={menu.path}
                      key={index}
                    >
                      {menu.menuName}
                    </NavLink>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex items-start gap-4 md:gap-6">
            {`${user?.role}` === "admin" ? null : (
              <>
                <CustomIcon path="/search" Icon={HiOutlineSearch} />
                <CustomIcon path="/cart" Icon={HiOutlineShoppingBag} />
                {cartItems.length === 0 ? null : (
                  <>
                    <p className="w-5 text-xs text-white -ml-7 rounded-full border-2 border-sky-500 pl-1.5">
                      {cartItems.length}
                    </p>
                  </>
                )}
              </>
            )}
            {isAuthenticated ? (
              <UserOptions user={user} />
            ) : (
              <CustomIcon path="/login" Icon={HiOutlineUser} />
            )}
            <CustomIcon
              path="/#"
              Icon={AiOutlineMenu}
              onClick={handleCloseToggle}
              customStyle="block md:hidden"
            />
          </div>
        </div>
      </header>
      {toggleSidebar ? (
        <Slider
          menuOptions={menuOptions}
          setCloseToggle={setToggleSidebar}
          closeToggle={toggleSidebar}
        />
      ) : (
        <Slider
          menuOptions={menuOptions}
          setCloseToggle={setToggleSidebar}
          closeToggle={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
