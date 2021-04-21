import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Content>
        <p>
          Software Engineer at Nigh Technologies, working to connect local
          businesses to customers with time sensitive offers.
        </p>
        <p>In my free time, I make music with friends, and</p>

        <p></p>
        <p></p>
      </Content>
    </div>
  );
}

export default AboutPage;
