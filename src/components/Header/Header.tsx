import React from 'react';
import logo from 'assets/HB-logo_default_web.png';
import { Grid, makeStyles, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {} from '@material-ui/styles';
import { lightGreen } from '@material-ui/core/colors';
import Navigation from 'components/Navigation/Navigation';
import MuiNav from '../MuiNav/MuiNav';

const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: theme.spacing(0.5),
    padding: '10px 0',
    backgroundColor: 'hsla(0, 0%, 100%, 1)',
    '& h1': {
      '@media (max-width: 500px)': {
        fontSize: '1.5em',
      },
    },
  },
  // desktopOnly: {
  //   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
  //     display: 'none',
  //   },
  // },
  img: {
    flex: '1 1 auto',
    // height: '7vh',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid
      container
      component="header"
      style={{ textAlign: 'center' }}
      justify="center"
      className={classes.root}
      // alignItems="center"
    >
      <Grid xs={11} alignItems="flex-end" justify="space-between" item container>
        <Grid item>
          <img
            // className={classes.img}
            src={logo}
            alt="Heritage Bank Logo"
            // width="100%"
            // height="auto"
          />
        </Grid>
        <Grid component="span" item>
          {`...your timeless wealth partner`}
        </Grid>
      </Grid>
      {/* {isDesktop ? (
        <MuiNav />
      ) : ( */}
      <Grid xs={8} item>
        <Navigation />
      </Grid>
      {/* )} */}
    </Grid>
  );
};

export default Header;
