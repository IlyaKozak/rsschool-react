import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderNavigation from '../components/Header/HeaderNavigation';
import CardsProvider from '../context/cardsProvider';
import store from '../store';

const RootLayout: React.FC = () => {
  return (
    <>
      <HeaderNavigation />
      <Provider store={store}>
        <CardsProvider>
          <Outlet />
        </CardsProvider>
      </Provider>
    </>
  );
};

export default RootLayout;
