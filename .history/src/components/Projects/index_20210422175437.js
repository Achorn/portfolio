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
    padding: 20px;
    display: grid;
    background: white;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  `;
  const Project = styled.div`
    color: palevioletred;
    background: papayawhip;
    border: 1px solid black;
    // background: #ececec;
    // margin: 5px;
    // padding: 10px;
    // margin-left: 10px;
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
