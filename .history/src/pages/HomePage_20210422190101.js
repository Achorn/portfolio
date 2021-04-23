import React from "react";
import Albums from "../components/Albums";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function HomePage(props) {
  return (
    <div>
      <div>
        <Hero
          title={"Albums"}
          text={"\"You can't get better at things you never play.”"}
        />
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
