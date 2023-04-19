import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderNavigation from '../components/Header/HeaderNavigation';
import '../index.css';

const RootLayout: React.FC = () => {
  return (
    <>
      <HeaderNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
