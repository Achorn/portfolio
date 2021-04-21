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
          businesses to customers with time sensitive offers. As a software
          developer, my main goal and drive is to make products that make a
          difference.
        </p>
        <p>
          I love the outdoors and Im a cerial hobbiest to fill in my free time{" "}
        </p>

        <p>
          I'm so bad at advocating for myself. I'm a software developer who is
          loud and funny and brinds joy to those around him and I love creating.{" "}
        </p>
        <p></p>
      </Content>
    </div>
  );
}

export default AboutPage;
