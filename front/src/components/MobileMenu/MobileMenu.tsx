import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BrandedLettering } from '@/ui';

import type { FC } from 'react';

import classes from './MobileMenu.module.css';
import title from '../../assets/sprite.svg';

interface IMobileMenu {
  setIsMobile: (flag: boolean) => void;
}

export const MobileMenu: FC<IMobileMenu> = ({ setIsMobile }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const navigationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (
        overlayRef.current &&
        overlayRef.current.contains(e.target as Node) &&
        !navigationRef.current?.contains(e.target as Node)
      ) {
        setIsMobile(false);
      }
    };

    const overlay = overlayRef.current;

    if (overlay) {
      overlay.addEventListener('click', handleClick);
      overlay.addEventListener('touchstart', handleClick, { passive: true });
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleClick);
        overlay.removeEventListener('touchstart', handleClick);
      }
    };
  }, []);

  return (
    <div className={classes.overlay} ref={overlayRef}>
      <div className={classes.container}>
        <nav className={classes.navigation} ref={navigationRef}>
          <Link
            to="/"
            className={classes.link}
            aria-current={location.pathname === '/' && 'page'}
            onClick={() => setIsMobile(false)}
          >
            Главная
          </Link>
          <Link
            to="catalog"
            className={classes.link}
            aria-current={location.pathname === '/catalog' && 'page'}
            onClick={() => setIsMobile(false)}
          >
            Каталог
          </Link>
          <Link
            to="rate"
            className={classes.link}
            aria-current={location.pathname === '/rate' && 'page'}
            onClick={() => setIsMobile(false)}
          >
            Тарифы
          </Link>

          <BrandedLettering
            positionX={10}
            positionY={0}
            boxWidth={310}
            boxHeight={95}
            variant="menu"
          />
          {/* <svg className={classes.brandedLettering} aria-hidden="true">
            <use href={title + '#title'}></use>
            <span className="visually-hidden">QuizyTales</span>
          </svg> */}
        </nav>
      </div>
    </div>
  );
};
