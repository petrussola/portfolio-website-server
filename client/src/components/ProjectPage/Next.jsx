import React from "react";
import { Link, withRouter } from "react-router-dom";
import Projects from "../../database/Projects";
import Typography from "@material-ui/core/Typography";

function Next(props) {
  const { id } = props.match.params;

  return Number(id) === Projects[Projects.length - 1].id ? null : (
    <div>
      <Link to={`/projects/${Number(id) + 1}`}>
        <Typography
          variant="body1"
          color="primary"
        >{`Next project >`}</Typography>
      </Link>
    </div>
  );
}

export default withRouter(Next);
