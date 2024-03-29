import React from "react";
import ProductCard from "./ProductCard";

const OurProduct = ({ products, heading }) => {
  return (
    <div className="w-[100%] h-auto py-14 mt-4" id="ourproduct">
      <div className="">
        <h1 className="headingStyle text-left">{heading}</h1>

        <div className="w-[90%] mx-auto">
          <div className="productsLayoutStyle">
            {products?.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
