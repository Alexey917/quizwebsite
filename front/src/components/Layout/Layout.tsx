import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

import classes from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
