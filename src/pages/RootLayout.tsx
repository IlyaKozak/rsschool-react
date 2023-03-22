import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNavigation from '../components/Header/HeaderNavigation';

class RootLayout extends React.Component {
  render() {
    return (
      <>
        <HeaderNavigation />
        <Outlet />
      </>
    );
  }
}

export default RootLayout;
