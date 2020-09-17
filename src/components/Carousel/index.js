import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import profilepic from "../../assets/images/profilepic.png";
import campingpic from "../../assets/images/campingpic.png";
import recipepic from "../../assets/images/recipepic.png";
import Card from "../Card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Camping List Assist",
          subTitle: "for weight lists, and sub-lists",
          imgSrc: campingpic,
          link: "http://achorn.github.io/",
          select: "false",
        },
        {
          id: 1,
          title: "Joshua Achorn",
          subTitle: "Linkedin Acount",
          imgSrc: profilepic,
          link: "https://www.linkedin.com/in/joshua-achorn/",
          select: "false",
        },
        {
          id: 2,
          title: "Recipe Scraper",
          subTitle: "Recipes for your pantry",
          imgSrc: recipepic,
          link: "https://achorn.github.io/0xProject-CSCI-3308/",
          select: "false",
        },
      ],
    };
  }
  handleCardClicked = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };
  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClicked(item.id, e)}
          key={item.id}
        />
      );
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
