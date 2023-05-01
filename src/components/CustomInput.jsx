import React from "react";

const CustomInput = (props) => {
  const { type, name, label, i_class, value, onChange, onBlur, i_id } = props;
  return (
    <div className="form-floating mt-2">
      <input
        type={type}
        className={`form-control ${i_class}`}
        name={name}
        id={i_id}
        placeholder={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
