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
    height: "200px",
  },
  cover: { height: "200px" },
  vinyl: { height: "200px" },
});

export default withStyles(styles)(Album);
