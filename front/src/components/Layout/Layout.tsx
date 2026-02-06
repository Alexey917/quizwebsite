import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { MobileMenu } from '../MobileMenu';
import { useScrollLock } from '@/hooks';
import { Footer } from '../Footer';
import { ScrollStart } from '@/ui';

import classes from './Layout.module.css';

export const Layout = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useScrollLock(isMobile);

  return (
    <>
      <Header setIsMobile={setIsMobile} isMobile={isMobile} />
      {isMobile && <MobileMenu setIsMobile={setIsMobile} isMobile={isMobile} />}
      <Outlet />
      <ScrollStart />
      <Footer />
    </>
  );
};
