import React from "react";
import styled from "styled-components";
import Project from "./project/index";
function Projects() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  const Container = styled.div`
    // background: papayawhip;
    margin: 50px;
    // padding: 20px;
    display: grid;
    background: white;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  `;

  return (
    <div>
      {/* <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper> */}
      <Container>
        <Project />
        <Project />
        <Project />
        <Project />
      </Container>
    </div>
  );
}

export default Projects;
