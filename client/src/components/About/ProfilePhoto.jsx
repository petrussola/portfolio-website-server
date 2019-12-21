import React from "react";
import Photo from "../../media/photoPere.png";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  image: {
    width: "50%",
    "border-radius": "100%"
  }
}));

export default function ProfilePhoto() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={Photo} alt="Pere" className={classes.image} />
    </div>
  );
}
