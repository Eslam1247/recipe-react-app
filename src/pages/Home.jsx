import react from "react";
import FetchRecipe from "../components/common/FetchRecipie";
import Slider from "../components/Slider/Slider";

import Image from "../components/assets/Ellipse 10.png";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="slider-con">
        <Slider />
      </div>

      <FetchRecipe />
    </div>
  );
};

export default Home;
