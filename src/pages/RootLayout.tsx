import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderNavigation from '../components/Header/HeaderNavigation';
import CardsProvider from '../context/cardsProvider';

const RootLayout: React.FC = () => {
  return (
    <>
      <HeaderNavigation />
      <CardsProvider>
        <Outlet />
      </CardsProvider>
    </>
  );
};

export default RootLayout;
