import React from "react";
import Albums from "../components/Albums";
import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {
  return (
    <div>
      <div>
        <Hero title={"Albums"} />
        <Albums />
      </div>
      <div>
        <Hero title={"Projects"} />
      </div>
    </div>
  );
}

export default HomePage;
