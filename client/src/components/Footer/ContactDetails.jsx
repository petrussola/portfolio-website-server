import React from "react";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "50%",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "space-evenly",
    height: "100%"
  },
  icon: {
    color: "white"
  }
});

export default function ContactDetails() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>CONTACT</h1>
      <SocialMedia />
      <Copyright />
    </div>
  );
}
