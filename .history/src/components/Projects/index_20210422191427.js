import React from "react";
import styled from "styled-components";
import Project from "./project/index";
function Projects() {
  let recipe = require("../../assets/images/recipe.jpg");
  let coctail = require("../../assets/images/coctail.jpg");
  let beach = require("../../assets/images/beach.jpg");
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
        <Project img={beach} />
        <Project img={coctail} />
        <Project />
      </Container>
    </div>
  );
}

export default Projects;
