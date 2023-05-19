import { sizes } from "../../data/size";

const SizeSelect = ({ valueSize, handleSizeClick }) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {sizes?.map((size) => (
        <button
          key={size}
          value={valueSize}
          onClick={() => handleSizeClick(size)}
          className={`p-2 border rounded ${
            valueSize === size ? "bg-secondaryDark text-white" : "bg-gray-200"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelect;
