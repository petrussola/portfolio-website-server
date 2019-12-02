import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ContactUsForm from './ContactUsForm';
import axios from 'axios';
import FormMessage from './FormMessage';

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
  const [isSentMessage, setIsSentMessage] = useState(false);
  const [isSentMessageError, setIsSentMessageError] = useState(false);

  useEffect(() => {
    setIsSentMessage(false);
    setIsSentMessageError(false);
  }, []);

  const submitFormHandler = (values, action) => {
    axios
      .post((process.env.REACT_APP_API || '') + '/contact', values)
      .then(res => {
        setIsSentMessage(true);
        setIsSentMessageError(false);
        action.resetForm();
      })
      .catch(error => {
        setIsSentMessage(true);
        setIsSentMessageError(true);
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
      <FormMessage
        isSentMessage={isSentMessage}
        isSentMessageError={isSentMessageError}
      />
    </div>
  );
}
