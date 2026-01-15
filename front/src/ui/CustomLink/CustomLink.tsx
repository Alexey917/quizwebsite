import type { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

interface ICustomLink {
  to: string;
  text: string;
  width?: string;
  background?: string;
  padding?: string;
  fontSize?: string;
  variant?: 'main' | 'leftRight' | 'right' | 'bottom';
}

export const CustomLink: FC<ICustomLink> = ({
  to,
  text,
  width,
  background,
  padding,
  fontSize,
  variant,
}) => {
  return (
    <div
      className={variant === 'main' ? classes.wrapper : classes.leftRight}
      style={{ width: `${width}` }}
    >
      <div
        className={variant === 'main' ? classes.inner : classes.innerLeftRight}
        style={{ padding: `${padding}`, background: `${background}` }}
      >
        <Link
          to={to}
          className={classes.link}
          style={{ fontSize: `${fontSize}` }}
        >
          {text}
        </Link>
      </div>
    </div>
  );
};
