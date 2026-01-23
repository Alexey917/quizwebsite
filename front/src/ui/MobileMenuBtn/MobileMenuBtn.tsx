import type { FC } from 'react';
import classes from './MobileMenuBtn.module.css';
import menu from '../../assets/sprite.svg';
import menuClose from '../../assets/sprite.svg';

interface IMobileBtn {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const MobileMenuBtn: FC<IMobileBtn> = ({ isMobile, setIsMobile }) => {
  return (
    <>
      {isMobile ? (
        <button
          type="button"
          className={classes.btnMenu}
          onClick={() => setIsMobile(false)}
          aria-label="Закрыть мобильное меню"
          title="Открыть меню навигации"
          aria-controls="mobile-menu-id"
        >
          <svg
            className={classes.menuIcon}
            aria-hidden="true"
            focusable="false"
          >
            <title>Иконка закрытия</title>
            <use href={menuClose + '#menuClose'}></use>
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className={classes.btnMenu}
          onClick={() => setIsMobile(true)}
          aria-label="Открыть мобильное меню"
          title="Закрыть меню навигации"
          aria-controls="mobile-menu-id"
        >
          <svg
            className={classes.menuIcon}
            aria-hidden="true"
            focusable="false"
          >
            <title>Иконка меню</title>
            <use href={menu + '#menu'}></use>
          </svg>
        </button>
      )}
    </>
  );
};
