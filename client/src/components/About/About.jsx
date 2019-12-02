import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import DescriptionMe from "./DescriptionMe";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "50px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center"
  },
  container: {
    padding: '25px',
    display: "flex",
    "flex-direction": "row",
    'align-items': 'center'
  }
});

export default function About() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} containerMainPage`}>
      <h1 className={'pinky'}>PERE SOLÀ CLAVER</h1>
      <div className={classes.container}>
        <ProfilePhoto />
        <DescriptionMe />
      </div>
    </div>
  );
}
