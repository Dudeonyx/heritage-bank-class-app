import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import { Container, Box, makeStyles, Grid } from '@material-ui/core';
import Layout from 'components/Layout/Layout';
import myPic from 'assets/IMG_20190527_081113.jpg';
import { RouteComponentProps } from '@reach/router';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  container: {
    boxSizing: 'border-box',
  },
  backgrnd: {},
  [theme.breakpoints.up('sm')]: {
    backgrnd: {
      height: '80vh',
    },
  },
  [theme.breakpoints.up('md')]: {},
  span: {
    textAlign: 'center',
  },
  text: {
    color: 'hsla(88, 90%, 35%, 1)',
    /* text-decoration: blink; */
    textShadow: '1px 1px 0px hsl(0, 0%, 0%)',
    textTransform: 'uppercase',
    fontWeight: 900,
    fontSize: '3em',
  },
}));

const Home: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  //   const [state, setstate] = useState();

  useEffect(() => {});

  return (
    <Grid
      container
      component="div"
      alignItems="center"
      justify="center"
      className={classes.backgrnd}
    >
      <div />
      {/* <Grid item container component="h1" xs={10} className={classes.text}>
        <Grid
          item
          component="span"
          xs={12}
        >{`Heritage Bank: 2019 Graduate Development Programme`}</Grid>
      </Grid> */}
      {/* <h2 /> */}
    </Grid>
  );
};

export default Home;
