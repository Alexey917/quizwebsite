import type { FC } from 'react';

import classes from './Logo.module.css';
import logo from '../../assets/sprite.svg';

interface ILogo {
  width: number;
  height: number;
}

export const Logo: FC<ILogo> = ({ width, height }) => {
  return (
    <>
      <svg
        className={classes.icon}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <use href={logo + '#logo'}></use>
      </svg>
    </>
  );
};
