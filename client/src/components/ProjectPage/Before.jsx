import React from "react";
import { Link, withRouter } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

function Before(props) {
  const { id } = props.match.params;
  return id === "1" ? null : (
    <div>
      <Link to={`/projects/${Number(id) - 1}`}>
        <Typography
          variant="body1"
          color="primary"
        >{`< Previous project`}</Typography>
      </Link>
    </div>
  );
}

export default withRouter(Before);
