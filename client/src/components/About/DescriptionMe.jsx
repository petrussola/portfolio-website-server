import React from "react";
import ProfilePhoto from "./ProfilePhoto";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "0 auto"
  }
});

export default function DescriptionMe() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>2 CENTS ABOUT ME</h3>
      <p className={"justify spacedlines"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin feugiat quam, vitae condimentum lacus. Sed molestie posuere
        est, eget lobortis urna consequat ut. Aliquam erat volutpat. Vivamus ut
        pharetra libero. Praesent scelerisque malesuada tortor, quis commodo
        neque interdum sit amet. Nulla condimentum, enim quis luctus vestibulum,
        magna magna gravida nunc, a egestas lacus magna sed ipsum. In at
        fermentum felis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>

      <h3>LANGUAGES & FRAMEWORKS</h3>
      <p className={"center spacedlines"}>
        HTML | CSS | Javascript | React | Node | Express | Relational Databases
      </p>
    </div>
  );
}
