import React from "react";

function Album(props) {
  let cover = require("../../assets/images/tourguide.jpg");
  let vinyl = require("../../assets/images/vinyl.png");
  return (
    <div>
      <div>cover</div>
      <img src={cover} />
      <div>vinyl</div>
    </div>
  );
}

export default Album;
