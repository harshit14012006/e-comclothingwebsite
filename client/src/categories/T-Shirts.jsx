import React, { useState, useEffect } from 'react';

function TShirts() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["red", "blue", "green", "black", "white"];
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const images = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg",
    "/images/product6.jpg",
  ];

  // Open image in full screen
  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  // Close full-screen image
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Navigate to the next image
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Navigate to the previous image
  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // Close modal on pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
        
        {/* Size Filter */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Size</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {sizes.map(size => (
              <button key={size} className="px-3 py-1 border border-gray-500 rounded-md hover:bg-gray-200">
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Color Filter */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Color</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {colors.map(color => (
              <button key={color} className="w-8 h-8 rounded-full border-2" style={{ backgroundColor: color }}></button>
            ))}
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Men's T-Shirts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-40 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300"
                onClick={() => openImage(index)} // Open image on click
              />
              <h3 className="mt-2 text-lg font-semibold">T-Shirt {index + 1}</h3>
              <p className="text-gray-600">$39.99</p>
              <div className="mt-2 flex gap-2">
                <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
                  Add to Wishlist
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImage} // Close modal when clicking outside the image
        >
          <div className="relative max-w-full max-h-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-50"
              onClick={closeImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-50"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing
                prevImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-50"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing
                nextImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Full-Screen Image */}
            <img
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TShirts;