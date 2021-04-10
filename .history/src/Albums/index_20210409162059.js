import React from "react";
import Album from "./Album";
import { withStyles } from "@material-ui/core";

class Albums extends React.Component {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.Albums}>
        <div>
          <Album />
        </div>
        <div>
          <Album />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  Albums: {},
});

export default withStyles(styles)(Albums);
