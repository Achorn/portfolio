import React from "react";
import Album from "./Album";
import { withStyles } from "@material-ui/core";

class Albums extends React.Component {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.Albums}>
        <Album className={classes.Album} />
        <Album />
        <Album />
      </div>
    );
  }
}

const styles = (theme) => ({
  Albums: {
    border: "solid 1px #ff0000",
    // textAlign: "center",
    margin: "0px auto",
    width: "40%",
    "&: Div": { display: "inline-block" },
  },
  Album: {},
});

export default withStyles(styles)(Albums);
