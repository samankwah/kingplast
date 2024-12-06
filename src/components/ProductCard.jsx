import { useState } from "react";
import { ShoppingCart, Info } from "lucide-react";
// import Recycled from "../assets/icons/recycle-bricks.png";
const ProductCard = ({
  title,
  description,
  price = 0,
  imageUrl = "",
  inStock = true,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="group border border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        {!inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-blue-900">{title}</h3>
          <span className="text-yellow-600 font-semibold">
            ₵{price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 line-clamp-2 mb-4">{description}</p>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            disabled={!inStock}
            className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-colors ${
              inStock
                ? "bg-yellow-600 text-white hover:bg-yellow-500"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="mr-2" />
            {inStock ? "Add to Cart" : "Unavailable"}
          </button>

          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200"
          >
            <Info />
          </button>
        </div>

        {/* Expandable Details */}
        {isDetailsOpen && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
            {/* Placeholder for additional product details */}
            More details about the product will be shown here.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
