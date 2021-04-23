import React from "react";
import styled from "styled-components";

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
  `;
  const Project = styled.div`
    // color: palevioletred;
    background-color: papayawhip: 
  `;

  return (
    <div>
      {/* <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper> */}
      <Container>
        <Project>project</Project>
        <Project>project</Project>

        <Project>project</Project>

        <Project>project</Project>

        <Project>project</Project>
      </Container>
    </div>
  );
}

export default Projects;
