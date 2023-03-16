import { Outlet } from 'react-router-dom';
import HeaderNavigation from '../components/HeaderNavigation';

const RootLayout = () => {
  return (
    <>
      <HeaderNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
