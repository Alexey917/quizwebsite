import type { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

interface ICustomLink {
  to: string;
  text: string;
}

export const CustomLink: FC<ICustomLink> = ({ to, text }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Link to={to} className={classes.link}>
          {text}
        </Link>
      </div>
    </div>
  );
};
