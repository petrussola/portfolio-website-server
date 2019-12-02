import React from "react";
import Photo from "../../media/photoPere.png";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "50%"
  },
  image: {
    width: "50%",
    "border-radius": "100%"
  }
});

export default function ProfilePhoto() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={Photo} alt="Pere" className={classes.image} />
    </div>
  );
}
