import React, { useState } from 'react';

// COMPONENTS
import FormContainer from '../Form/FormContainer';
import ContactDetails from './ContactDetails';
import Copyright from './Copyright';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    background: 'black',
    color: 'white',
    width: '100%',
    height: 'auto'
  },
  rootcontact: {
    padding: theme.spacing(2, 3),
    background: 'black',
    color: 'white',
    width: '100%',
    height: 'auto',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center'
  },
  container: {
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    height: 'inherit',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      'flex-direction': 'column'
    }
  },
  footnote: {
    padding: theme.spacing(2, 3),
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center'
  }
}));

export default function Footer(props) {
  const [inFooter, setInFooter] = useState(true);
  const classes = useStyles();
  if (props.location.pathname === '/contact') {
    return (
      <div className={classes.rootcontact} id={'test'}>
        <Copyright />
        <p>Made with love with React and Node/Express</p>
      </div>
    );
  } else {
    return (
      <div className={classes.root} id={'test'}>
        <div className={classes.container}>
          <ContactDetails />
          <FormContainer inFooter={inFooter} />
        </div>
        <div className={classes.footnote}>
          <Copyright />
          <p>Made with love with React and Node/Express</p>
        </div>
      </div>
    );
  }
}
