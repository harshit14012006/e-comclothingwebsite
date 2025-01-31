import React from 'react';

function TShirts() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["red", "blue", "green", "black", "white"];

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
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div key={item} className="bg-white p-4 shadow-lg rounded-lg">
              <img src={`/images/product${item}.jpg`} alt={`Product ${item}`} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-2 text-lg font-semibold">T-Shirt {item}</h3>
              <p className="text-gray-600">$39.99</p>
              <div className="mt-2 flex gap-2">
                <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                  Add to Wishlist
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TShirts;