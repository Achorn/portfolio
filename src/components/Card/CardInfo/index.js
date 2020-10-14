import React from "react";

function CardInfo(props) {
  return (
    <div>
      <p className="j-card-title">{props.title}</p>
      <p className="j-card-sub-title">{props.subTitle}</p>
    </div>
  );
}

export default CardInfo;
