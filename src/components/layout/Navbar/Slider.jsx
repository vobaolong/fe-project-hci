import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import CustomIcon from "./../../Icons/CustomIcon";

const isActiveStyle = "font-semibold opacity-100 transition-all duration-500";
const isNotActiveStyle = "font-semibold opacity-50 transition-all duration-500";

const Slider = ({ menuOptions, setCloseToggle, closeToggle }) => {
  const handleCloseToggle = (event) => {
    if (event.key === "Escape" || closeToggle) setCloseToggle(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleCloseToggle);
    return () => {
      document.removeEventListener("keydown", handleCloseToggle);
    };
  }, [closeToggle]);

  return (
    <>
      <div
        className={`md:hidden w-screen h-screen absolute top-0 left-0 z-50 transition-all duration-500 ${
          closeToggle
            ? "animate-slide-in block opacity-100"
            : "-left-[100%] -translate-x-96 opacity-0"
        }`}
        onClick={handleCloseToggle}
      >
        <div className="flex flex-col relative z-20 justify-center items-center bg-primaryBlue w-1/2 h-screen">
          <div className="absolute top-3 right-3 text-secColor">
            <CustomIcon
              Icon={AiOutlineClose}
              onClick={handleCloseToggle}
              customStyle="text-3xl"
            />
          </div>

          {menuOptions.map((menu, index) => {
            return (
              <div key={index} className="my-5 text-secColor font-semibold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  onClick={handleCloseToggle}
                  to={menu.path}
                >
                  {menu.menuName}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
