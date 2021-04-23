import React from "react";
import Album from "./Album";
import { withStyles } from "@material-ui/core";

class Albums extends React.Component {
  render() {
    let album1 = {
      vinyl: require("../../assets/images/vinyl.png"),
      cover: require("../../assets/images/fallingDown.png"),
      link:
        "https://open.spotify.com/album/2lXw9UDPCJFWSD0aHyeYOI?highlight=spotify:track:2Bkd7kn4fPPupJlovelIDf",
    };
    let album2 = {
      vinyl: require("../../assets/images/redVinyl.png"),
      cover: require("../../assets/images/tourguide.jpg"),
    };
    let album3 = {
      vinyl: require("../../assets/images/vinyl.png"),
      cover: require("../../assets/images/soundcloudCover.png"),
    };
    let { classes } = this.props;

    return (
      <div className={classes.Albums}>
        <Album cover={album1.cover} vinyl={album1.vinyl} link={album1.link} />
        <Album cover={album2.cover} vinyl={album2.vinyl} />
        <Album cover={album3.cover} vinyl={album3.vinyl} />
      </div>
    );
  }
}

const styles = (theme) => ({
  Albums: {
    // border: "solid 1px #ff0000",
    // textAlign5: "center",
    padding: "20",
    // width: "90%",
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-evenly",
    alignContent: "flex-start",
  },
  AlbumContainer: {
    display: "inline-block",
    // padding: "10px 100px 10px 100px",
  },
});

export default withStyles(styles)(Albums);
