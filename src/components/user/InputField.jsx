import { TextField } from "@material-ui/core";
import React from "react";

const InputField = ({
  Icon,
  label,
  value,
  type,
  name,
  onKeyPress,
  onChange,
}) => {
  return (
    <div className="bg-slate-400 rounded-md overflow-hidden w-full flex justify-start items-center focus:outline-1">
      <Icon className="text-xl text-primaryBlue mx-2" />
      {/* <input
        className="px-3 py-2 outline-none border-2 w-full after:content-['*'] after:ml-0.5 after:text-red-500"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyPress}
        required
      /> */}
      <TextField
        className="w-full bg-slate-100 opacity-90"
        type={type}
        name={name}
        id="filled-basic"
        label={label}
        variant="filled"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyPress}
        required
      />
    </div>
  );
};

export default InputField;
