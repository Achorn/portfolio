import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Content>
        <p>
          Hello. My name is Joshua Achorn and I'm a full stack engineer with
          experience in React, Redux, Node, and SQL
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
      </Content>
    </div>
  );
}

export default AboutPage;
