import React from "react";
import { withStyles } from "@material-ui/core";

class Album extends React.Component {
  render() {
    let { classes } = this.props;
    let cover = require("../../assets/images/tourguide.jpg");
    let vinyl = require("../../assets/images/vinyl.png");

    return (
      <div className={classes.album}>
        <img src={cover} />
        <img src={vinyl} />
      </div>
    );
  }
}

const styles = (theme) => ({});

export default withStyles(styles)(Album);
