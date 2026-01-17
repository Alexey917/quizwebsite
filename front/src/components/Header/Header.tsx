import { Link, useLocation } from 'react-router-dom';
import { CustomLink } from '@/ui';

import type { FC } from 'react';

import classes from './Header.module.css';
import menu from '../../assets/sprite.svg';

interface IHeader {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const Header: FC<IHeader> = ({ isMobile, setIsMobile }) => {
  const location = useLocation();

  return (
    <header
      className={classes.header}
      role="banner"
      style={{ position: `${isMobile ? 'fixed' : 'static'}` }}
    >
      <div className={classes.container}>
        <nav className={classes.navigation} aria-label="Основная навигация">
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
          <CustomLink to="catalog" text="Сделать заказ" variant="main" />
        </nav>
        <button className={classes.btnMenu} onClick={() => setIsMobile(true)}>
          <svg className={classes.menuIcon}>
            <use href={menu + '#menu'}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};
