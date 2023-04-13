import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import HeaderNavigation from '../components/Header/HeaderNavigation';
import CardsProvider from '../context/cardsProvider';
import { openLibraryApi } from '../services/openLibraryApi';
import store from '../store';

const RootLayout: React.FC = () => {
  return (
    <>
      <HeaderNavigation />
      <CardsProvider>
        <ApiProvider api={openLibraryApi}>
          <Provider store={store}>
            <Outlet />
          </Provider>
        </ApiProvider>
      </CardsProvider>
    </>
  );
};

export default RootLayout;
