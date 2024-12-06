import { useEffect, useState } from "react";
import axios from "axios";
import { Filter, SortDesc, ShoppingCart, Search } from "lucide-react";
import Cabbage from "../assets/cabbage.png";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [activeFilters, setActiveFilters] = useState({
    category: "",
    priceRange: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products.json");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    // Search filter
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (activeFilters.category) {
      result = result.filter(
        (product) => product.category === activeFilters.category
      );
    }

    // Price range filter
    if (activeFilters.priceRange) {
      const [min, max] = activeFilters.priceRange.split("-").map(Number);
      result = result.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    // Sorting
    switch (sortOption) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [searchTerm, activeFilters, sortOption, products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Our Sustainable Products
      </h1>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-wrap gap-4">
        {/* Search Input */}
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-8 border rounded-lg"
          />
          <Search className="absolute left-2 top-3 text-gray-400" />
        </div>

        {/* Category Filter */}
        <select
          value={activeFilters.category}
          onChange={(e) =>
            setActiveFilters((prev) => ({
              ...prev,
              category: e.target.value,
            }))
          }
          className="p-2 border rounded-lg"
        >
          <option value="">All Categories</option>
          <option value="building-blocks">Building Blocks</option>
          <option value="insulation">Insulation</option>
          <option value="roofing">Roofing</option>
        </select>

        {/* Price Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="default">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={Cabbage}
              alt={product.name}
              className="w-full h-72 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-700 font-bold">
                  ₵{products?.map((product) => product.price?.toFixed(2))}
                </span>
                {/* <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  <ShoppingCart className="inline mr-2" /> Add to Cart
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
