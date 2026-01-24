import type { FC } from 'react';

import classes from './Logo.module.css';
import logo from '../../assets/sprite.svg';

interface ILogo {
  'aria-label'?: string;
}

export const Logo: FC<ILogo> = ({ 'aria-label': ariaLabel }) => {
  return (
    <>
      <svg className={classes.icon} aria-label={ariaLabel} role="img">
        <use href={logo + '#logo'}></use>
      </svg>
    </>
  );
};
