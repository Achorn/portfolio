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
          text={
            "\"You can't get better at things you never play.”  - Elliott Smith"
          }
        />
        <Albums />
      </div>
      <div>
        <Hero
          title={"Projects"}
          text={'"A hobby a day keeps the doldrums away.”  - Phyllis McGinley'}
        />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;
