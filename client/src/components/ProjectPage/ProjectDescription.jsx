import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2),
    padding: theme.spacing(3, 2),
    width: "50%",
    height: "auto",
    "text-align": "left"
  },
  cardButtons: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ProjectDescription({ selectedProject }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4">{selectedProject.title}</Typography>
        <Typography variant="body1">
          {selectedProject.description}
          <br />
          <br />
        </Typography>
        <Typography variant="body1" color="secondary">
          Built with: {selectedProject.tech}
          <br />
          <br />
        </Typography>
        <div className={classes.cardButtons}>
          {/* <a href={selectedProject.repo}> */}
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.button}
              startIcon={<GitHubIcon />}
              href={selectedProject.repo}
            >
              Github Repo
            </Button>
          {/* </a> */}
          {!selectedProject.url ? null : (
            // <Typography color="inherit">Visit App</Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              className={classes.button}
              startIcon={<WebIcon />}
              href={selectedProject.url}
            >
              Visit App
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
