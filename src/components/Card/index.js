import React from "react";
import CardInfo from "./CardInfo";
// import "./component.css";

function Card(props) {
  return (
    <div className="d-inline-block j-card">
      <img
        className="j-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
        onClick={props.onClick}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
