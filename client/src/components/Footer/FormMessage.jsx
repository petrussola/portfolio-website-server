import React from 'react';

export default function FormMessage(props) {
    debugger
  if (!props.isSentMessage) {
    debugger;
    return null;
  } else {
    debugger;
    return props.isSentMessage && !props.isSentMessageError ? (
      <div>Thanks, your message has been sent</div>
    ) : (
      <div>There was a problem sending the message, please try again</div>
    );
  }
}
