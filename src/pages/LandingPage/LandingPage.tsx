import topSvg from 'assets/topbckgrnd.svg';
import bottomSVG from 'assets/bottom.svg';
import bottomShadowSVG from 'assets/bottomshadow.svg';
import logo from 'assets/logo.svg';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import classes from './LandingPage.module.css';

interface ILandingPageProps extends RouteComponentProps {}

const LandingPage: React.FC<ILandingPageProps> = props => {
  const [state, setstate] = useState();

  useEffect(() => {});

  return (
    <>
      <img src={topSvg} alt="background graphics" className={classes['top-background-img']} />
      <div className={classes.logo} />
      <img src={bottomSVG} alt="" className={classes['bottom-background-img']} />
      <img src={bottomShadowSVG} alt="" className={classes['bottomShadow-background-img']} />
    </>
  );
};

export default LandingPage;
