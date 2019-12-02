import React from "react";
import Title from "./Title";
import NavBar from "./NavBar";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    "justify-content": "space-between",
    // height: "100px",
    padding: "25px 75px",
    // 'border-bottom': '1px solid black'
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title className={classes.title} />
      <NavBar className={classes.navbar} />
    </div>
  );
}
