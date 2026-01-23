import { Link, useLocation } from 'react-router-dom';
import {
  CustomLink,
  BrandedLettering,
  GoBackButton,
  MobileMenuBtn,
} from '@/ui';

import type { FC } from 'react';

import { routes } from '@/consts';

import classes from './Header.module.css';

interface IHeader {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const Header: FC<IHeader> = ({ isMobile, setIsMobile }) => {
  const location = useLocation();

  return (
    <header className={classes.header} role="banner">
      <div
        className={
          location.pathname !== '/'
            ? `${classes.justifyContainer} ${classes.container}`
            : classes.container
        }
      >
        {location.pathname !== '/' && (
          <>
            <BrandedLettering
              positionX={10}
              positionY={40}
              boxWidth={320}
              boxHeight={30}
              variant="header"
              label="QuizyTales"
            />
          </>
        )}

        <nav className={classes.navigation} aria-label="Основная навигация">
          {routes.map((route) => (
            <div key={route.title}>
              {location.pathname === '/' && route.path === '/' ? (
                <Link
                  to={route.path}
                  className={`${classes.link} ${classes.mainLink}`}
                  aria-current={location.pathname === route.path && 'page'}
                >
                  {route.title}
                </Link>
              ) : (
                <Link
                  to={route.path}
                  className={classes.link}
                  aria-current={location.pathname === route.path && 'page'}
                >
                  {route.title}
                </Link>
              )}
            </div>
          ))}

          <CustomLink to="catalog" text="Сделать заказ" variant="main" />
        </nav>

        <GoBackButton />

        <h2 className={classes.currentPath}>
          {routes.find((route) => route.path === location.pathname)?.title}
        </h2>

        <MobileMenuBtn setIsMobile={setIsMobile} isMobile={isMobile} />
      </div>
    </header>
  );
};
