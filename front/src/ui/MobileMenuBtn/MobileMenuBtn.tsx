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
        <button className={classes.btnMenu} onClick={() => setIsMobile(false)}>
          <svg className={classes.menuIcon}>
            <use href={menuClose + '#menuClose'}></use>
          </svg>
        </button>
      ) : (
        <button className={classes.btnMenu} onClick={() => setIsMobile(true)}>
          <svg className={classes.menuIcon}>
            <use href={menu + '#menu'}></use>
          </svg>
        </button>
      )}
    </>
  );
};
