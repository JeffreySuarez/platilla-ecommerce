import React from "react";
import Anuncios from "../components/Anuncios";
import CategoriesItems from "../components/Categories/CategoriesItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Anuncios />
      <Slider />
      <CategoriesItems />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
