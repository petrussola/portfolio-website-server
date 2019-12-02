import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  success: {
    color: 'green'
  },
  failure: {
    color: 'red'
  }
});

export default function FormMessage(props) {
  const classes = useStyles();
  if (!props.isSentMessage) {
    return null;
  } else {
    return props.isSentMessage && !props.isSentMessageError ? (
      <div className={classes.success}>Thanks, your message has been sent</div>
    ) : (
      <div className={classes.failure}>
        There was a problem sending the message, please try again
      </div>
    );
  }
}
