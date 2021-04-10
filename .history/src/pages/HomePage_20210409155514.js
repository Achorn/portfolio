import React from "react";
import Albums from "../Albums";
import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {
  return (
    <div>
      <Hero title={"Albums"} />
      <Albums />
    </div>
  );
}

export default HomePage;
