import React from "react";
import Album from "../components/Album";
import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {
  return (
    <div>
      <Hero title={"Albums"} />
      <Content>
        <Album cover="" vinyl="" />
        <Album cover="" vinyl="" />
      </Content>
    </div>
  );
}

export default HomePage;
