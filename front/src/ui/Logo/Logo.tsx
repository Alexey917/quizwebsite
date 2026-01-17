import type { FC } from 'react';

import classes from './Logo.module.css';
import logo from '../../assets/sprite.svg';

interface ILogo {
  width: number;
  height: number;
  'aria-label'?: string;
}

export const Logo: FC<ILogo> = ({ width, height, 'aria-label': ariaLabel }) => {
  return (
    <>
      <svg
        className={classes.icon}
        style={{ width: `${width}px`, height: `${height}px` }}
        aria-label={ariaLabel}
        role="img"
      >
        <use href={logo + '#logo'}></use>
      </svg>
    </>
  );
};
