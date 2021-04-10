import React from "react";
import { withStyles } from "@material-ui/core";

class Album extends React.Component {
  render() {
    let { classes } = this.props;
    let cover = require("../../assets/images/tourguide.jpg");
    let vinyl = require("../../assets/images/vinyl.png");

    return (
      <div className={classes.album}>
        <img className={classes.cover} src={cover} />
        <img className={classes.vinyl} src={vinyl} />
      </div>
    );
  }
}

const styles = (theme) => ({
  album: {
    width: "200px",
    height: "200px",
    position: "relative",
    margin: "20px",
  },
  cover: {
    position: "static",
    height: "200px",
    borderRadius: "5px",
    boxShadow: "2px 1px 1px",
  },
  vinyl: {
    position: "absolute",
    height: "200px",
  },
});

export default withStyles(styles)(Album);
