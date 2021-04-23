import React from "react";
import styled from "styled-components";
import Project from "./project/index";
function Projects() {
  let recipe = require("../../assets/images/recipe.jpg");

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
        <Project img={recipe} />
        <Project />
        <Project />
        <Project />
      </Container>
    </div>
  );
}

export default Projects;
