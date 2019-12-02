import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  icon: {
    color: "white"
  }
});

export default function SocialMedia() {
  const classes = useStyles();
  return (
    <div>
      <a
        href="https://twitter.com/petrussola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton className={classes.icon}>
          <TwitterIcon fontSize={"large"} />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/peresola/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton className={classes.icon}>
          <LinkedInIcon fontSize={"large"} />
        </IconButton>
      </a>
      <a
        href="https://github.com/petrussola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton className={classes.icon}>
          <GitHubIcon fontSize={"large"} />
        </IconButton>
      </a>
    </div>
  );
}
