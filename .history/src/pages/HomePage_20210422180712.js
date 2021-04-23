import React from "react";
import Albums from "../components/Albums";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Projects from "../components/Projects";

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
          text={
            "I have too many hobbies to count. Thankfully some of them crossover with software development."
          }
        />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;
