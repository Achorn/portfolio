import React from "react";
import Album from "./Album";
import { withStyles } from "@material-ui/core";

class Albums extends React.Component {
  render() {
    let { classes } = this.props;

    return (
      <div classname={classes.Albums}>
        <Album />
        <Album />
      </div>
    );
  }
}

const styles = (theme) => ({
  Albums: {
    width: "100%",
    display: "inline-block",
    backgroundColor: "green",
    height: "800px",
  },
});

export default withStyles(styles)(Albums);
