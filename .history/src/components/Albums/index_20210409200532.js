import React from "react";
import Album from "./Album";
import { withStyles } from "@material-ui/core";

class Albums extends React.Component {
  render() {
    let album1 = {
      vinyl: require("../../assets/images/vinyl.png"),
      cover: require("../../assets/images/fallingDown.png"),link :
      "https://open.spotify.com/album/2lXw9UDPCJFWSD0aHyeYOI?highlight=spotify:track:2Bkd7kn4fPPupJlovelIDf";

    };
    let album2 = {
      vinyl: require("../../assets/images/redVinyl.png"),
      cover: require("../../assets/images/tourguide.jpg"),
    };
    let { classes } = this.props;

    return (
      <div className={classes.Albums}>
        <div className={classes.AlbumContainer}>
          <Album cover={album1.cover} vinyl={album1.vinyl} />
        </div>
        <div className={classes.AlbumContainer}>
          <Album cover={album2.cover} vinyl={album2.vinyl} />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  Albums: {
    // border: "solid 1px #ff0000",
    // textAlign: "center",
    margin: "0px auto",
    width: "90%",
  },
  AlbumContainer: {
    display: "inline-block",
    padding: "10px 100px 10px 100px",
  },
});

export default withStyles(styles)(Albums);
