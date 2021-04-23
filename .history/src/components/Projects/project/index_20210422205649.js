import React from "react";
import { withStyles } from "@material-ui/core";

function Project(props) {
  let { classes } = props;
  let image = props.img
    ? props.img
    : require("../../../assets/images/campingpic.jpg");
  return (
    <div
      className={classes.projectContainer}
      onClick={() => alert("project links coming soon")}
    >
      <img className={classes.projectImage} src={image} />
    </div>
  );
}

const styles = (theme) => ({
  projectContainer: {
    borderRadius: "2.5px",

    color: "palevioletred",
    height: "400px",
    overflow: "hidden",
    margin: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  projectImage: {
    objectFit: "cover",
    minWidth: "100%",
    minHeight: "100%",
    cursor: "pointer",
    transition: "500ms",
    "&:hover": {
      minWidth: "103%",
      minHeight: "103%",
    },
  },
});

export default withStyles(styles)(Project);
