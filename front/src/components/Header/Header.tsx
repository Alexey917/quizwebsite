import { Link, useLocation } from 'react-router-dom';
import { CustomLink, BrandedLettering } from '@/ui';

import type { FC } from 'react';

import { routes } from '@/consts';

import classes from './Header.module.css';
import menu from '../../assets/sprite.svg';
import back from '../../assets/sprite.svg';
import headerLettering from '../../assets/sprite.svg';

interface IHeader {
  setIsMobile: (flag: boolean) => void;
}

export const Header: FC<IHeader> = ({ setIsMobile }) => {
  const location = useLocation();
  console.log(location.pathname);

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
            {/* <svg className={classes.headerLettering}>
              <use href={headerLettering + '#headerLettering'}></use>
            </svg> */}
            <BrandedLettering
              positionX={10}
              positionY={40}
              boxWidth={320}
              boxHeight={30}
              variant="header"
            />
          </>
        )}

        <nav className={classes.navigation} aria-label="Основная навигация">
          {routes.map((route) => (
            <Link
              key={route.title}
              to={route.path}
              className={classes.link}
              aria-current={location.pathname === '/' && 'page'}
            >
              {route.title}
            </Link>
          ))}

          <CustomLink to="catalog" text="Сделать заказ" variant="main" />
        </nav>
        <button className={classes.btnMenu}>
          <svg className={classes.back}>
            <use href={back + '#back'}></use>
          </svg>
        </button>

        <h2 className={classes.currentPath}>
          {routes.find((route) => route.path === location.pathname)?.title}
        </h2>

        <button className={classes.btnMenu} onClick={() => setIsMobile(true)}>
          <svg className={classes.menuIcon}>
            <use href={menu + '#menu'}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};
