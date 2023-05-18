import { useState } from "react";
import { sizes } from "../../data/size";

const SizeSelect = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div className="grid grid-cols-8 gap-4">
      {sizes?.map((size) => (
        <button
          key={size}
          value={selectedSize}
          onChange={handleSizeChange}
          onClick={() => handleSizeClick(size)}
          className={`p-2 border rounded ${
            selectedSize === size
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
