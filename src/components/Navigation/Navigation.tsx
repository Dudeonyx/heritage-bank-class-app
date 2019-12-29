import React, { useState, useEffect, useMemo } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  nav: {
    padding: '10px',
    '& ul': {
      padding: '0px 0',
      margin: '0',
    },
  },
}));
interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = props => {
  const classes = useStyles();
  const [state, setstate] = useState([
    { name: 'home', link: 'home' },
    { name: 'photos', link: 'photos' },
    { name: 'blog', link: 'blog' },
    { name: 'chat', link: 'chat' },
  ]);

  useEffect(() => {});
  const navItems = useMemo(() => state.map(item => <NavigationItem {...item} />), [state]);
  return (
    <nav className={classes.nav}>
      <Grid component="ul" container justify="space-between" alignItems="center">
        {navItems}
      </Grid>
    </nav>
  );
};

export default Navigation;
