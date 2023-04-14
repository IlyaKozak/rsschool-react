import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderNavigation from '../components/Header/HeaderNavigation';
import { setupStore } from '../store';

const RootLayout: React.FC = () => {
  return (
    <>
      <HeaderNavigation />
      <Provider store={setupStore()}>
        <Outlet />
      </Provider>
    </>
  );
};

export default RootLayout;
