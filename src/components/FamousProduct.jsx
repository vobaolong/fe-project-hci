import React from "react";
import { Link } from "react-router-dom";

const FamousProduct = () => {
  return (
    <>
      <Link to="/" className="col-3 mt-3">
        <div className="famous-card position-relative">
          <img
            className="famous-image w-100 img-fluid"
            src="../images/famous/famous-01.png"
            alt="Famous Sneaker"
          />
          <div className="famous-content position-absolute">
            <h6>High Rating</h6>
            <h5>Sneaker Nike Blazer</h5>
            <p>$118.43</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FamousProduct;
