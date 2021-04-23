import React from "react";
import { withStyles } from "@material-ui/core";

function Project(props) {
  let {classes} = props
  return <div className = {classes.projectContainer}>project</div>;
}

const styles = (theme) =>({
projectContainer:{
  color: 'palevioletred'
  background: 'papayawhip'
  border: '1px solid palevioletred'
  height: '500px'
  // padding: 10px;
  // margin-left: 10px;}
})

export default withStyles(styles)(Project);
