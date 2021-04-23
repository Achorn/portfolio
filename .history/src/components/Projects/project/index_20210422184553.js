import React from "react";
import { withStyles } from "@material-ui/core";

function Project(props) {
  let { classes } = props;
  let image = props.img
    ? props.img
    : require("../../../assets/images/campingpic.png");
  return (
    <div className={classes.projectContainer}>
      <img className={classes.projectImage} src={image} />
    </div>
  );
}

const styles = (theme) => ({
  projectContainer: {
    borderRadius: "2.5px",

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
    cursor: "pointer",
    transition: "500ms",
    "&:hover": {
      minWidth: "102%",
      minHeight: "102%",
    },
  },
});

export default withStyles(styles)(Project);
