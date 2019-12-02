import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "flex-direction": "row",
    "align-items": "center"
  },
  icon: {
    color: "white"
  }
});
const currentYear = new Date().getFullYear();

export default function Copyright() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CopyrightIcon fontSize={"small"} />
      <div>{`${currentYear} by Pere Solà`}</div>
    </div>
  );
}
