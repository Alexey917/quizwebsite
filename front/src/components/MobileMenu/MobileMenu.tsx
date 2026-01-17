import { Link } from 'react-router-dom';

import type { FC } from 'react';

import classes from './MobileMenu.module.css';

interface IMobileMenu {
  setIsMobile: (flag: boolean) => void;
}

export const MobileMenu: FC<IMobileMenu> = ({ setIsMobile }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <nav className={classes.navigation}>
          <Link
            to="/"
            className={classes.link}
            aria-current={location.pathname === '/' && 'page'}
          >
            Главная
          </Link>
          <Link
            to="catalog"
            className={classes.link}
            aria-current={location.pathname === '/catalog' && 'page'}
          >
            Каталог
          </Link>
          <Link
            to="rate"
            className={classes.link}
            aria-current={location.pathname === '/rate' && 'page'}
          >
            Тарифы
          </Link>
        </nav>
      </div>
    </div>
  );
};
