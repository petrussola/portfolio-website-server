import React, { useState } from "react";
import ContactDetails from "./ContactDetails";
import FormContainer from "../Footer/FormContainer";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    "justify-content": "center"
  }
});

export default function ContactPage() {

  const classes = useStyles();
  return (
    <div className={`${classes.root} containerMainPage`}>
      <ContactDetails />
      <FormContainer />
    </div>
  );
}
