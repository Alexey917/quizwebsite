import type { FC } from 'react';

import classes from './BrandedLettering.module.css';
import title from '../../assets/sprite.svg';

interface IBrandedLettering {
  width: string;
  height: string;
  marginRight?: string;
}

export const BrandedLettering: FC<IBrandedLettering> = ({
  width,
  height,
  marginRight,
}) => {
  return (
    <>
      <svg
        className={classes.icon}
        aria-hidden="true"
        style={{ width: width, height: height, marginRight: marginRight }}
      >
        <use href={title + '#title'}></use>
        <span className="visually-hidden">QuizyTales</span>
      </svg>
    </>
  );
};
