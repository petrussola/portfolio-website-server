import React, { useState } from "react";

// COMPONENTS
import FormContainer from "./FormContainer";
import ContactDetails from "./ContactDetails";
import Copyright from "./Copyright";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    background: "black",
    color: "white",
    width: "100%",
    height: "auto"
  },
  container: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    height: "inherit"
  }
}));

export default function Footer(props) {
  const [inFooter, setInFooter] = useState(true);
  const classes = useStyles();
  if (props.location.pathname === "/contact") {
    return (
      <div className={classes.root} id={"test"}>
        <Copyright />
      </div>
    );
  } else {
    return (
      <div className={classes.root} id={"test"}>
        <div className={classes.container}>
          <ContactDetails />
          <FormContainer inFooter={inFooter} />
        </div>
      </div>
    );
  }
}
