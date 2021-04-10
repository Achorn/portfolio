import React from "react";
import Albums from "../components/Albums";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
function HomePage(props) {
  return (
    <div>
      <div style={{ margin: "0px 0px 20px 0px" }}>
        <Hero title={"Albums"} />
        <Albums />
      </div>
      <div>
        <Hero title={"Projects"} />
        <Carousel />
      </div>
    </div>
  );
}

export default HomePage;
