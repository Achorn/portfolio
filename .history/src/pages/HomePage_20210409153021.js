import React from "react";
import Album from "../components/Album";
import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {
  return (
    <div>
      <Hero title={"Album Selection"} />
      <Content>
        <div>Album section</div>
        <Album cover="" vinyl="" />
        <div>Project Section</div>
      </Content>
    </div>
  );
}

export default HomePage;
