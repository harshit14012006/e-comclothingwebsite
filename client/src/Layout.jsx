import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TShirts from "./categories/T-Shirts";
import Shirts from "./categories/Shirts";
import Hoodies from "./categories/Hoodies";
import Jackets from "./categories/Jackets";
import Sweaters from "./categories/Sweaters";
import Blazers from "./categories/Blazers";

function Layout() {
  return (
    <div>
      {/* Set Navbar to fixed and give content padding to avoid overlapping */}
      <Navbar />
      <div> {/* Adjust padding as per your navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<TShirts />} />
          <Route path="/about" element={<Shirts />} />
          <Route path="/contact" element={<Hoodies />} />
          <Route path="/contact" element={<Sweaters />} />
          <Route path="/contact" element={<Jackets />} />
          <Route path="/contact" element={<Blazers />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
