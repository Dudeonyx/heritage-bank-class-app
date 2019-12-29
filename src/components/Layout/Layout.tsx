import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import { RouteComponentProps } from '@reach/router';

interface ILayoutProps extends RouteComponentProps {
  children?: React.ReactChild;
}

const Layout: React.FC<ILayoutProps> = props => {
  //   const [state, setstate] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
