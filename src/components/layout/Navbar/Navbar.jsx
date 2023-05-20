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
import { Badge } from "@material-ui/core";
const isActiveStyle =
  "font-bold lg:text-xl md:text-base sm:text-sm opacity-100 transition-all duration-500";
const isNotActiveStyle =
  "font-semibold lg:text-lg md:text-base sm:text-sm opacity-50 transition-all duration-500";

const Navbar = ({ menuOptions }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const handleCloseToggle = () => {
    setToggleSidebar(true);
  };

  return (
    <>
      {`${user?.role}` === "admin" ? null : (
        <header className="max-h-[10vh] bg-primaryBlue opacity-95 top-0 z-50 py-2 md:py-3 px-4 lg:px-40 text-primaryDarkBlue flex justify-between border-b border-slate-200">
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
      )}

      <header className="w-[100%] bg-primaryDarkBlue top-0 right-0 sticky z-50 py-3 md:py-6 px-4 lg:px-40 text-slate-900 border-b-2 border-b-slate-200">
        <div className="flex justify-between items-center">
          <Link className="lg:w-[10%] md:w-[20%] sm:w-[20%] mx-5 p-0" to="/">
            <img className="w-[100%]" src={logo} alt="logo" />
          </Link>
          <div className="hidden md:block text-primaryBlue">
            {`${user?.role}` === "admin" ? null : (
              <div className="flex lg:gap-10 md:gap-7 sm:gap-5">
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

                <Badge
                  badgeContent={
                    cartItems.length === 0 ? null : cartItems.length
                  }
                  color="primary"
                >
                  <CustomIcon path="/cart" Icon={HiOutlineShoppingBag} />
                </Badge>
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
