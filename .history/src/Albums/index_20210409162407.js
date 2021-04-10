import React from "react";
import Album from "./Album";
import { withStyles } from "@material-ui/core";

class Albums extends React.Component {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.Albums}>
        <div className={classes.AlbumContainer}>
          <Album />
        </div>
        <div className={classes.AlbumContainer}>
          <Album />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  Albums: {
    border: "solid 1px #ff0000",
    // textAlign: "center",
    margin: "0px auto",
    width: "80%",
  },
  AlbumContainer: { display: "inline-block" },
});

export default withStyles(styles)(Albums);
