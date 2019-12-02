import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

const useStyle = makeStyles({
  root: {

  },
  icon: {
    margin: "1rem"
  }
});

export default function Center() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <EmojiPeopleIcon fontSize={"large"} className={classes.icon} />
      <p></p>
      <p>Pere Sola Claver</p>
      <p>/</p>
      <p>Full Stack Web Developer</p>
    </div>
  );
}
