import React from "react";
import { withStyles } from "@material-ui/core";

function Project(props) {
  let { classes } = props;
  let image = require("../../../assets/images/campingpic.png");
  return (
    <div className={classes.projectContainer}>
      <img className={classes.projectImage} src={image} />
    </div>
  );
}

const styles = (theme) => ({
  projectContainer: {
    color: "palevioletred",
    height: "500px",
    overflow: "hidden",
    margin: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: "10px",
    // margin-left: 10px;
  },
  projectImage: {
    objectFit: "cover",
    // flexShrink: "0",
    minWidth: "100%",
    minHeight: "100%",
  },
});

export default withStyles(styles)(Project);
