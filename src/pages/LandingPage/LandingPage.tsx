import topSvg from 'assets/topbckgrnd.svg';
import bottomSVG from 'assets/Rectangle.svg';
import bottomShadowSVG from 'assets/Rectangle 2.svg';
import logo from 'assets/logo.svg';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import classes from './LandingPage.module.css';
import { Grid } from '@material-ui/core';

interface ILandingPageProps extends RouteComponentProps {}

const LandingPage: React.FC<ILandingPageProps> = props => {
  const [state, setstate] = useState();

  useEffect(() => {});

  return (
    <>
      <div className={classes.container}>
        <div className={classes.tbkg}>
          <img src={topSvg} alt="background graphics" />
        </div>
        <div className={classes.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.bkg}>
          <img className={classes.bkga} src={bottomSVG} alt="" width="auto" />
          <img className={classes.bkgb} src={bottomShadowSVG} alt="" width="auto" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
