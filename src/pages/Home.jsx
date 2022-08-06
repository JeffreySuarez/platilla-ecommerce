import React from "react";
import Anuncios from "../components/Anuncios";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Anuncios />
      <Slider />
    </div>
  );
};

export default Home;
