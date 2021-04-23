import React from "react";
import Albums from "../components/Albums";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
function HomePage(props) {
  return (
    <div>
      <div>
        <Hero
          title={"Albums"}
          subTitle={
            "This is a test for the album subtitles. maybe too much info"
          }
          text={"this is text"}
        />
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
