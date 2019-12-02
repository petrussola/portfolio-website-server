import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ContactUsForm from "./ContactUsForm";
import axios from "axios";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "50%"
  }
});

const initialValues = {
  name: "",
  email: "",
  message: ""
};

export default function FormContainer({ inFooter }) {
  const submitFormHandler = (values, action) => {
    axios
      .post("http://localhost:4400/contact", values)
      .then(data => {
        alert("form has been sent");
        action.resetForm();
      })
      .catch(error => {
        debugger;
      });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitFormHandler}
        children={props => <ContactUsForm {...props} inFooter={inFooter} />}
      />
    </div>
  );
}
