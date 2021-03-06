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
    width: "300px",
    height: "200px",
    position: "relative",
    margin: "20px",
  },
  cover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "0.8",
  },
  vinyl: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "0.8",
  },
});

export default withStyles(styles)(Album);
