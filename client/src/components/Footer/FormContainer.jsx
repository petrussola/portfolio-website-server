import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ContactUsForm from './ContactUsForm';
import axios from 'axios';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '50%'
  }
});

const initialValues = {
  name: '',
  email: '',
  message: ''
};

export default function FormContainer({ inFooter }) {
  const [isSentMessageOk, setIsSentMessageOk] = useState(false);
  const [isSentMessageError, setIsSentMessageError] = useState(false);
  useEffect(() => {
    setIsSentMessageOk(false);
    setIsSentMessageError(false);
  });
  const submitFormHandler = (values, action) => {
    axios
      .post((process.env.REACT_APP_API || '') + '/contact', values)
      .then(res => {
        debugger;
        setIsSentMessageOk(true);
        action.resetForm();
      })
      .catch(error => {
        setIsSentMessageError(false);
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
