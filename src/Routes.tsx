import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import LandingPage from 'pages/LandingPage/LandingPage';

interface IRoutesProps {}

const Routes: React.FC<IRoutesProps> = props => {
  const [state, setstate] = useState();

  useEffect(() => {});

  return (
    <Router>
      <LandingPage path="/" />
      {/* <Layout path="/">
        <Home path="/home" />
      </Layout> */}
    </Router>
  );
};

export default Routes;
