import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';

interface IRoutesProps {}

const Routes: React.FC<IRoutesProps> = props => {
  const [state, setstate] = useState();

  useEffect(() => {});

  return (
    <Layout>
      <Router>
        <Home path="/" />
      </Router>
    </Layout>
  );
};

export default Routes;
