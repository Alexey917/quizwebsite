import { Link } from 'react-router-dom';
import { BrandedLettering } from '@/ui';

import type { FC } from 'react';

import classes from './MobileMenu.module.css';
import brandedLettering from '../../assets/sprite.svg';
import title from '../../assets/sprite.svg';

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

          {/* <svg className={classes.brandedLettering} aria-hidden="true">
            <use href={brandedLettering + '#brandedLettering'}></use>
            <span className="visually-hidden">QuizyTales</span>
          </svg> */}

          <svg className={classes.brandedLettering} aria-hidden="true">
            <use href={title + '#title'}></use>
            <span className="visually-hidden">QuizyTales</span>
          </svg>
        </nav>
      </div>
    </div>
  );
};
