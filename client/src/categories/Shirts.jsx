import React, { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

function Shirts() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["red", "blue", "green", "black", "white"];
  const categories = ["All", "Men", "Child"];
  const images = [
    "https://via.placeholder.com/1000x1000/FF5733/FFFFFF?text=Slide+1",
    "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Slide+2",
    "https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Slide+3",
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const cards = [
    {
      title: "Formal Shirt",
      price: "$40",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Formal+Shirt",
      size: "M",
      color: "black",
      category: "Men",
    },
    {
      title: "Casual Shirt",
      price: "$35",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Casual+Shirt",
      size: "L",
      color: "blue",
      category: "Men",
    },
    {
      title: "Linen Shirt",
      price: "$50",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Linen+Shirt",
      size: "S",
      color: "green",
      category: "Child",
    },
    {
      title: "Denim Shirt",
      price: "$45",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Denim+Shirt",
      size: "XL",
      color: "red",
      category: "Men",
    },
    {
      title: "Checkered Shirt",
      price: "$38",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Checkered+Shirt",
      size: "XXL",
      color: "white",
      category: "Child",
    },
    {
      title: "Slim Fit Shirt",
      price: "$55",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Slim+Fit+Shirt",
      size: "L",
      color: "blue",
      category: "Men",
    },
  ];

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredCards = cards.filter((card) => {
    const isSizeMatch = selectedSize ? card.size === selectedSize : true;
    const isColorMatch = selectedColor ? card.color === selectedColor : true;
    const isCategoryMatch =
      selectedCategory === "All" || card.category === selectedCategory;
    return isSizeMatch && isColorMatch && isCategoryMatch;
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="relative w-full h-[400px] mb-6 lg:mb-0 ">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((image, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                <img
                  src={image}
                  alt={`Slide ${i + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4 hover:bg-opacity-80"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4 hover:bg-opacity-80"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-col min-h-screen p-6 bg-gray-100 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full h-full p-6 bg-white rounded-lg shadow-md lg:w-64">
          <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
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
          <div className="mt-6">
            <button
              className="w-full py-2 text-white bg-gray-500 rounded-md hover:bg-gray-700"
              onClick={() => {
                setSelectedSize(null);
                setSelectedColor(null);
                setSelectedCategory("All");
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
                  <div
                    className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-xl cursor-pointer hover:scale-105"
                    onClick={() => openModal(card)}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full rounded-md h-72 sm:h-80 md:h-96"
                    />
                  </div>
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
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative w-full max-w-3xl p-8 bg-white rounded-lg shadow-xl">
              <button
                onClick={closeModal}
                className="absolute text-gray-600 top-4 right-4 hover:text-gray-800"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Product Image Section with Carousel */}
                <div className="relative w-full">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  {/* Image Carousel Controls (Static for now) */}
                  <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-4 left-1/2">
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <ChevronLeft size={16} />
                    </button>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedProduct.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Premium quality shirt for all occasions
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-gray-700">
                    Made from **100% premium cotton**, this **modern-fit** shirt
                    is perfect for casual wear or formal occasions. Designed for
                    superior comfort and durability.
                  </p>

                  {/* Price */}
                  <p className="mt-4 text-3xl font-bold text-green-500">
                    {selectedProduct.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Free shipping on orders over $50
                  </p>

                  {/* Quantity & Add to Cart */}
                  <div className="flex items-center gap-4 mt-6">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 p-3 text-center border border-gray-300 rounded-lg shadow-sm"
                    />
                    <button className="flex items-center gap-2 px-6 py-3 font-medium text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700">
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shirts;
