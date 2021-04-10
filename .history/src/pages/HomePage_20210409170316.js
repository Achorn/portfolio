import React from "react";
import Albums from "../components/Albums";
import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {
  return (
    <div>
      <Hero title={"Albums"} />
      <Albums />
      <Hero title={"Projects"} />
    </div>
  );
}

export default HomePage;
