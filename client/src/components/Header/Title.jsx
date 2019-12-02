import React from "react";
import { Link } from "react-router-dom";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "60%",
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'flex-start',

  }
});

export default function Title() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/">
        <h1>P</h1>
      </Link>
    </div>
  );
}
