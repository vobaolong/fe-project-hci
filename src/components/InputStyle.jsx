import React from "react";

const InputStyle = () => {
  return (
    <>
      <div className="form-field">
        <input type="text" className="form-input" placeholder=" " />
        <label htmlFor="name" className="form-label">
          Name
        </label>
      </div>
    </>
  );
};

export default InputStyle;
