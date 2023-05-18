import React from "react";
import { Link } from "react-router-dom";

const FooterContent = ({ data, title }) => {
  return (
    <div>
      <h1 className="text-primaryBlue font-semibold uppercase tracking-widest">
        {title}
      </h1>
      <div className="mt-5">
        {data
          ? data.map((item, index) => {
              return (
                <div key={index} className="my-2 group w-max">
                  <Link
                    className="text-lightGray ease-in-out duration-500 group-hover:text-mainColor group-hover:underline group-hover:underline-offset-4"
                    to={item.path}
                  >
                    {item.link}
                  </Link>
                </div>
              );
            })
          : "Please provide data"}
      </div>
    </div>
  );
};

export default FooterContent;
