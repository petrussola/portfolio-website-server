import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center"
  },
  list: {
    width: "50%",
    margin: "0 auto"
  },
  button: {
    width: "50%",
    margin: theme.spacing(1)
  }
}));

export default function ContactDetails() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<TwitterIcon />}
        href="https://twitter.com/petrussola"
        fullWidth="true"
      >
        Twitter
      </Button>
      <Button
        variant="contained"
        color="inherit"
        size="large"
        className={classes.button}
        startIcon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/peresola/"
        fullWidth="true"
      >
        Linkedin
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<GitHubIcon />}
        href="https://github.com/petrussola"
        fullWidth="true"
      >
        GitHub
      </Button>
    </div>
  );
}
