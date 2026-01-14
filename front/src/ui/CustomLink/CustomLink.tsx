import type { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

interface ICustomLink {
  to: string;
  text: string;
  variant?: 'main';
}

export const CustomLink: FC<ICustomLink> = ({ to, text, variant }) => {
  return (
    <div
      className={
        variant === 'main'
          ? `${classes.wrapper} ${classes.main}`
          : classes.wrapper
      }
    >
      <div
        className={
          variant === 'main'
            ? `${classes.inner} ${classes.main}`
            : classes.inner
        }
      >
        <Link to={to} className={classes.link}>
          {text}
        </Link>
      </div>
    </div>
  );
};
