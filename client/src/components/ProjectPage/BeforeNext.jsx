import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Before from './Before';
import Next from './Next';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-around',
    width: '30%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

function BeforeNext(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Before />
      <Next />
    </div>
  );
}

export default withRouter(BeforeNext);
