import React from "react";
import { withStyles } from "@material-ui/core";

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);

    this.state = { imageLoading: true };
  }

  handleImageLoaded() {
    // this.setState({ imageLoading: false });
    console.log("image loaded");
  }

  render() {
    let { classes } = this.props;

    const openInNewTab = () => {
      console.log(this.props.link);
      if (this.props.link) {
        console.log("opening link");
        const newWindow = window.open(
          this.props.link,
          "_blank",
          "noopener,noreferrer"
        );
        if (newWindow) newWindow.opener = null;
      } else alert("coming soon");
    };
    return (
      <div className={classes.albumContainer}>
        <div className={classes.album} onClick={openInNewTab}>
          <img
            className={classes.cover}
            src={this.props.cover}
            onLoad={this.state.handleImageLoaded}
          />
          <img className={classes.vinyl} src={this.props.vinyl} />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  albumContainer: {
    border: "solid 1px #ff0000",
    width: "550px",
    overflow: "visible",
    height: "400px",
    margin: "0px 0px 20px 0px",
  },
  album: {
    width: "400px",
    height: "400px",
    position: "relative",
    transition: "500ms",
    top: "0",

    "&:hover": {
      width: "550px",
      cursor: "pointer",
      top: "-10px",
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
