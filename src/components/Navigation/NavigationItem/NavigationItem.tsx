import React from 'react';
import { Link } from '@reach/router';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'darkgrey',
      '& a': {
        color: 'white',
      },
    },
    borderRadius: '5px',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    '& a': {
      color: 'hsla(191, 7%, 30%, 1)',
      textDecoration: 'none',
      fontSize: theme.typography.h4.fontSize,
    },
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      '& a': {
        fontSize: theme.typography.h5.fontSize,
      },
    },
  },
}));
interface INavigationItemProps {
  name: string;
  link: string;
}

const NavigationItem: React.FC<INavigationItemProps> = props => {
  const classes = useStyles();
  return (
    <Grid component="li" item className={classes.root}>
      <Link to={props.link}>
        <span>{props.name.replace(/^(.)/, u => u.toUpperCase())}</span>
      </Link>
    </Grid>
  );
};

export default NavigationItem;
