import React from "react";
import { Link, withRouter } from "react-router-dom";

import Before from "./Before";
import Next from "./Next";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-around",
    width: "30%",
    margin: "0 auto"
  }
});

function BeforeNext(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Before />
      <Next />
    </div>
  );
}

export default withRouter(BeforeNext);
