import React, { useState, useEffect } from "react";

function Blazers() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["red", "blue", "green", "black", "white"];
  const categories = ["All", "Men", "Child"];

  // Sample card data with size, color, and category
  const cards = [
    {
      title: "Classic Blazer",
      price: "$100",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Classic+Blazer",
      size: "M",
      color: "black",
      category: "Men",
    },
    {
      title: "Slim Fit Blazer",
      price: "$120",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Slim+Fit+Blazer",
      size: "L",
      color: "blue",
      category: "Men",
    },
    {
      title: "Checked Blazer",
      price: "$130",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Checked+Blazer",
      size: "S",
      color: "green",
      category: "Child",
    },
    {
      title: "Formal Blazer",
      price: "$150",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Formal+Blazer",
      size: "XL",
      color: "red",
      category: "Men",
    },
    {
      title: "Tweed Blazer",
      price: "$110",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Tweed+Blazer",
      size: "XXL",
      color: "white",
      category: "Child",
    },
    {
      title: "Double Breasted Blazer",
      price: "$160",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Double+Breasted+Blazer",
      size: "L",
      color: "blue",
      category: "Men",
    },
  ];

  // Default state for filters (to show all items initially)
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter the cards based on selected size, color, and category
  const filteredCards = cards.filter((card) => {
    const isSizeMatch = selectedSize ? card.size === selectedSize : true;
    const isColorMatch = selectedColor ? card.color === selectedColor : true;
    const isCategoryMatch =
      selectedCategory === "All" || card.category === selectedCategory;
    return isSizeMatch && isColorMatch && isCategoryMatch;
  });

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-100 lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full h-full p-6 bg-white rounded-lg shadow-md lg:w-64">
        <h2 className="text-2xl font-bold text-gray-800">Filters</h2>

        {/* Category Filter */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Category</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 border border-gray-400 rounded-md transition-all ${
                  selectedCategory === category
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Size</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border border-gray-400 rounded-md transition-all ${
                  selectedSize === size
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() =>
                  setSelectedSize(selectedSize === size ? null : size)
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Color</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? "border-gray-800"
                    : "border-gray-400"
                }`}
                style={{ backgroundColor: color }}
                onClick={() =>
                  setSelectedColor(selectedColor === color ? null : color)
                }
              ></button>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="mt-6">
          <button
            className="w-full py-2 text-white bg-gray-500 rounded-md hover:bg-gray-700"
            onClick={() => {
              setSelectedSize(null);
              setSelectedColor(null);
              setSelectedCategory("All"); // Reset to "All" category
            }}
          >
            Clear Filters
          </button>
        </div>
      </aside>

      {/* Product Listing */}
      <div className="flex-1 mt-6 lg:mt-0 lg:ml-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div key={index} className="w-full p-6 rounded-lg">
                <div className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full rounded-md h-72 sm:h-80 md:h-96"
                  />
                </div>
                {/* Title and Price beneath each card */}
                <div className="mt-4 text-center">
  <h3 className="text-lg font-semibold text-blue-800 transition duration-300 transform sm:text-xl hover:text-blue-600">
    {card.title}
  </h3>
  <p className="text-sm text-green-600 sm:text-base">
    {card.price}
  </p>
</div>

              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blazers;
