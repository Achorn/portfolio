import React from "react";
import Albums from "../components/Albums";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
function HomePage(props) {
  return (
    <div>
      <div>
        <Hero title={"Albums"} subTitle={"Music... my first love"} />
        <Albums />
      </div>
      <div>
        <Hero
          title={"Projects"}
          subTitle={
            "I have too many hobbies to count. Thankfully some of them crossover with software development."
          }
        />
        {/* <Projects /> */}
      </div>
    </div>
  );
}

export default HomePage;
