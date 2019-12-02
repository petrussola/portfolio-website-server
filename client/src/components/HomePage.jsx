import React from "react";
import { Link } from "react-router-dom";

// PROJECT DATA
import ProjectsData from "../database/Projects";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import PageviewIcon from "@material-ui/icons/Pageview";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  },
  image: {
    width: "100%"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} containerMainPage`}>
      <GridList
        cellHeight={300}
        className={classes.gridList}
        cols={3}
        spacing={50}
      >
        {ProjectsData.map(project => (
          <GridListTile
            key={project.id}
            cols={project.cols || 1}
            rows={project.rows || 1}
          >
            <img
              src={project.img}
              alt={project.title}
              className={classes.image}
            />
            <GridListTileBar
              title={project.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${project.title}`}
                  className={classes.icon}
                  size={"medium"}
                >
                  <Link to={`/projects/${project.id}`}>
                    <PageviewIcon />
                  </Link>
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
