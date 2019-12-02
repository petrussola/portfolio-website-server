import React from "react";
import { Link } from "react-router-dom";
// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "40%"
  },
  menuItems: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-around"
  }
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul className={classes.menuItems}>
        <Link to="/">
          <li>
            <h4 className={"bold"}>HOME</h4>
          </li>
        </Link>
        <Link to="/projects/1">
          <li>
            <h4 className={"bold"}>PROJECTS</h4>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <h4 className={"bold"}>ABOUT</h4>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <h4 className={"bold"}>CONTACT</h4>
          </li>
        </Link>
      </ul>
    </div>
  );
}
