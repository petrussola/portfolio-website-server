import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import BeforeNext from "./BeforeNext";
import { Link } from "react-router-dom";

// PROJECT DATA
import ProjectsData from "../../database/Projects";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2)
  },
  projectContainer: {
    // margin: theme.spacing(3, 2),
    display: "flex",
    "flex-direction": "row"
  },
  imageContainer: {
    width: "50%"
  },
  error: {
    margin: theme.spacing(3, 2)
  }
}));

export default function Project(props) {
  const classes = useStyles();
  const { id } = props.match.params;
  const [selectedProject] = ProjectsData.filter(item => {
    return item.id === Number(id);
  });
  debugger;

  return !selectedProject ? (
    <div className={classes.error}>
      {`The project you were searching for does not exist. There are currently ${ProjectsData.length} projects in store. Click `}
      <Link to="/projects/1">HERE</Link>
      {` to get started with one of my projects.`}
    </div>
  ) : (
    <div className={classes.root}>
      <BeforeNext />
      <div className={classes.projectContainer}>
        <ProjectImage selectedProject={selectedProject} />
        <ProjectDescription selectedProject={selectedProject} />
      </div>
    </div>
  );
}
