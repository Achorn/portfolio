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
        <p>
          As a Musician/designer turned software developer, whether it be making
          music, art, or software, I love to send my creations out into the
          world for people to enjoy. My creative side combined with my Sofware
          dev side gives me insight into the development process.
        </p>

        <p>
          My current project is a camping trip helper, for backpackers who want
          to weigh and manage their gear. It is made with React, Redux, and
          Bootstrap
        </p>
        <p>
          If I'm not coding, I'm either biking, cooking, hiking, reading, or
          making coffee with my friends.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
