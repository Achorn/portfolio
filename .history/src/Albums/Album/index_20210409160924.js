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
    flex: 1;
    width: "400px",
    height: "400px",
    position: "relative",
    transition: "500ms",
    top: "0",

    "&:hover": {
      width: "550px",
      cursor: "pointer",
      top: "-10px",
      shadow: "5px 10px #888888",
    },
  },
  cover: {
    borderRadius: "2.5px",
    height: "100%",
    position: "absolute",
    float: "left",
  },
  vinyl: {
    height: "100%",
    float: "right",
  },
});

export default withStyles(styles)(Album);
