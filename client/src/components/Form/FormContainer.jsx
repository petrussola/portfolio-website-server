import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ContactUsForm from './ContactUsForm';
import axios from 'axios';
import FormMessage from './FormMessage';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      'margin-top': '1rem'
    }
  }
}));

const initialValues = {
  name: '',
  email: '',
  message: ''
};

let emailEndPoint;

if (process.env.NODE_ENV === 'production') {
  emailEndPoint = '/contact';
} else {
  emailEndPoint = `${process.env.REACT_APP_API}/contact`;
}

export default function FormContainer({ inFooter }) {
  const [isSentMessage, setIsSentMessage] = useState(false);
  const [isSentMessageError, setIsSentMessageError] = useState(false);

  useEffect(() => {
    setIsSentMessage(false);
    setIsSentMessageError(false);
  }, []);

  const submitFormHandler = (values, action) => {
    debugger;
    axios
      .post(emailEndPoint, values)
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
