import React from "react";
import { withStyles } from "@material-ui/core";

function Album(props) {
  let cover = require("../../assets/images/tourguide.jpg");
  let vinyl = require("../../assets/images/vinyl.png");
  return (
    <div>
      <img src={cover} />
      <img src={vinyl} />
    </div>
  );
}

const styles = (theme) => ({});

export default withStyles(styles)(Album);
