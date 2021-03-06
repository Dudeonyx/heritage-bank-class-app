import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import LandingPage from 'pages/LandingPage/LandingPage';

interface IRoutesProps {}

const frameStyle = {
  minHeight: '100vh',
  minWidth: '100vw',
  padding: '0',
};
const Routes: React.FC<IRoutesProps> = props => {
  const [state, setstate] = useState();

  useEffect(() => {});

  return (
    <div style={frameStyle}>
      <Router>
        <LandingPage path="/" />
        {/* <Layout path="/">
        <Home path="/home" />
      </Layout> */}
      </Router>
    </div>
  );
};

export default Routes;
