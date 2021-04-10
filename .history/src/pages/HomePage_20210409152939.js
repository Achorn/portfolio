import React from "react";
import Album from "../components/Album";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Content>
        <div>Album section</div>
        <Album cover="" vinyl="" />
        <div>Project Section</div>
      </Content>
    </div>
  );
}

export default HomePage;
