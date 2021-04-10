import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero
        title={"Joshua Achorn"}
        subTitle={props.subTitle}
        text={props.text}
      />
    </div>
  );
}

export default HomePage;
