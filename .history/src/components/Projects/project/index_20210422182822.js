import React from "react";
import { withStyles } from "@material-ui/core";

function Project(props) {
  let { classes } = props;
  let image = require("../../../assets/images/tourguide.jpg");
  return (
    <div className={classes.projectContainer}>
      <img className={classes.projectImage} src={image} />
    </div>
  );
}

const styles = (theme) => ({
  projectContainer: {
    color: "palevioletred",
    background: "papayawhip",
    border: "1px solid palevioletred",
    height: "500px",
    overflow: "hidden",

    // padding: 10px;
    // margin-left: 10px;
  },
  projectImage: {
    maxWidth: "150%",
    maxHeight: "150%",
    display: "block",
  },
});

export default withStyles(styles)(Project);
