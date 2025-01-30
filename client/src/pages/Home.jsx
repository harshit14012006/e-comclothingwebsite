import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import heroImage from "../images/heroImage.jpg";

const HeroSection = () => {
  const categories = [
    { name: "T-Shirts", img: "https://via.placeholder.com/150" },
    { name: "Shirts", img: "https://via.placeholder.com/150" },
    { name: "Hoodies", img: "https://via.placeholder.com/150" },
    { name: "Sweaters", img: "https://via.placeholder.com/150" },
    { name: "Jackets", img: "https://via.placeholder.com/150" },
    { name: "Blazers", img: "https://via.placeholder.com/150" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000); // Change the slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, [currentIndex]); // Re-run the effect if currentIndex changes

  const cards = [
    {
      title: "Formal Shirt",
      price: "$40",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Formal+Shirt",
    },
    {
      title: "Casual T-Shirt",
      price: "$25",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Casual+T-Shirt",
    },
    {
      title: "Denim Jacket",
      price: "$60",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Denim+Jacket",
    },
    {
      title: "Chinos",
      price: "$35",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Chinos",
    },
    {
      title: "Leather Jacket",
      price: "$120",
      image:
        "https://via.placeholder.com/150/ffffff/000000?text=Leather+Jacket",
    },
    {
      title: "Blazer",
      price: "$80",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Blazer",
    },
    {
      title: "Hoodie",
      price: "$50",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Hoodie",
    },
    {
      title: "Sneakers",
      price: "$75",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Sneakers",
    },
    {
      title: "Cargo Pants",
      price: "$40",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Cargo+Pants",
    },
    {
      title: "Running Shoes",
      price: "$55",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Running+Shoes",
    },
    {
      title: "Winter Coat",
      price: "$150",
      image: "https://via.placeholder.com/150/ffffff/000000?text=Winter+Coat",
    },
  ];
l
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Image for visibility (optional, only use if you want to ensure it's visible) */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 object-cover w-full h-full opacity-40" // Ensures the image fits properly with some opacity for readability
        />

        {/* Gradient Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl px-6 mx-auto text-center text-white md:px-10 lg:px-12">
          {/* Heading with Typing Animation */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-shadow-md animate-fade-in">
            <ReactTyped
              strings={[
                'Discover the Latest in <span class="text-pink-500">Fashion</span>',
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              startDelay={500}
              showCursor={false}
              loop
              renderText={(strings, index) => (
                <span dangerouslySetInnerHTML={{ __html: strings[index] }} />
              )}
            />
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg font-medium leading-relaxed sm:text-xl md:text-2xl lg:text-3xl opacity-90">
            Explore our exclusive collections, trendy designs, and seasonal
            favorites. Elevate your wardrobe with the best in fashion.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="/shop"
            className="inline-block px-12 py-4 text-xl font-semibold text-white transition-all duration-300 transform rounded-full shadow-xl bg-gradient-to-r from-indigo-600 to-pink-500 hover:scale-105 hover:shadow-2xl"
          >
            Shop Now
          </a>
        </div>
      </section>
      {/* Ui to show sample clothes */}
      <div className="relative w-full px-4 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex / cards.length) * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-2 py-6 text-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-64 rounded-md sm:h-72 md:h-80 lg:h-96"
                />
              </div>
              {/* Title and Price beneath each card */}
              <div className="mt-4">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  {card.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute z-10 flex items-center justify-center w-8 h-8 text-white transform -translate-y-1/2 bg-gray-700 rounded-full left-2 sm:left-4 top-1/2 sm:w-10 sm:h-10 hover:bg-gray-600"
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="absolute z-10 flex items-center justify-center w-8 h-8 text-white transform -translate-y-1/2 bg-gray-700 rounded-full right-2 sm:right-4 top-1/2 sm:w-10 sm:h-10 hover:bg-gray-600"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
