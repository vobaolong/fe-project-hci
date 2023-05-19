import React from "react";

const SlideableBtn = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="w-full
      overflow-hidden
      relative
      z-10
      before:content-['']
      before:bg-primaryBlue
      before:w-1/2
      before:absolute
      before:h-full
      before:top-0
      before:left-0
      before:-z-10
      before:transition-all
      before:duration-500
      hover:before:w-0
      hover:before:opacity-0
      shadow-md
      hover:shadow-lg
      hover:after:w-0
      hover:after:opacity-0
      after:content-['']
      after:bg-primaryBlue
      after:w-1/2
      after:absolute
      after:h-full
      after:top-0
      after:right-0
      after:-z-10
      after:transition-all
      after:duration-500
      py-2 px-3
      text-white
      rounded-md
      hover:scale-95
      transition-all
      duration-500
      bg-primaryBlue
      opacity-75
      hover:opacity-100"
    >
      {label}
    </button>
  );
};

export default SlideableBtn;
