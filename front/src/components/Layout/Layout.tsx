import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { MobileMenu } from '../MobileMenu';

import classes from './Layout.module.css';

export const Layout = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <>
      <Header setIsMobile={setIsMobile} isMobile={isMobile} />
      {isMobile && <MobileMenu setIsMobile={setIsMobile} />}
      <Outlet />
    </>
  );
};
