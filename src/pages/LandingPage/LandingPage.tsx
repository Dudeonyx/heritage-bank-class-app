import { Bckgrnd } from 'components/Bckgrnd/Bckgrnd';
import topSvg from 'assets/topbckgrnd.svg';
import bottomSVG from 'assets/background gfx.png';
// import bottomShadowSVG from 'assets/Rectangle 2.png';
import logo from 'assets/HB-logo_default_web.png';
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
          <svg viewBox="0 0 128 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M127.053 0C54.736 41.715 17.9334 22.4089 0 0H127.053Z" fill="#4FC143" />
          </svg>
        </div>
        <div className={classes.logo}>
          <img src={logo} alt="" />
          <p className={classes.time}>...your timeless wealth partner</p>
          <p className={classes.gdp}>Graduate Development Programme</p>
        </div>
        <div className={classes.bkg}>
          <button>
            <span>Get Started!</span>
          </button>
          {/* <Bckgrnd /> */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
