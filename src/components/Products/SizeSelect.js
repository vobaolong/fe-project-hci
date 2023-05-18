import { useState } from "react";
import { sizes } from "../../data/size";

const SizeSelect = ({valueSize, handleSizeClick}) => {
  // const [selectedSize, setSelectedSize] = useState(null);
  // const handleSizeClick = (size) => {
  //   console.log(size);
  //   setSelectedSize(size);
  // };
  // const handleSizeChange = (event) => {
  //   setSelectedSize(event.target.value);
  //   console.log(event.target.value);
  // };
  return (
    <div className="grid grid-cols-8 gap-4">
      {sizes?.map((size) => (
        <button
          key={size}
          value={valueSize}
          // onChange={(e) => handleSizeChange(e)}
          onClick={() => handleSizeClick(size)}
          className={`p-2 border rounded ${
            valueSize === size
              ? "bg-secondaryDark text-white"
              : "bg-gray-200"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelect;
