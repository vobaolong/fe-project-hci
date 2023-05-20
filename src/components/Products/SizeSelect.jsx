import { sizes } from "../../data/size";

const SizeSelect = ({ valueSize, handleSizeClick }) => {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-6 gap-4">
      {sizes?.map((size) => (
        <button
          key={size}
          value={valueSize}
          onClick={() => handleSizeClick(size)}
          className={`p-2 border rounded flex-wrap ${
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
