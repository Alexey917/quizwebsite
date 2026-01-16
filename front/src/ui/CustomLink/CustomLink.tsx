import type { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

type TLinkVariant = 'main' | 'leftRight' | 'right' | 'bottom';

interface ICustomLink {
  to: string;
  text: string;
  width?: string;
  background?: string;
  padding?: string;
  fontSize?: string;
  variant?: TLinkVariant;
  'aria-label'?: string;
}

const getWrapperClass = (variant: TLinkVariant): string => {
  switch (variant) {
    case 'main':
      return classes.wrapper;
    case 'leftRight':
      return classes.leftRight;
    case 'right':
      return classes.right;
    case 'bottom':
      return classes.bottom;
    default:
      return classes.wrapper;
  }
};

const getInnerClass = (variant: TLinkVariant): string => {
  switch (variant) {
    case 'main':
      return classes.inner;
    case 'leftRight':
      return classes.innerLeftRight;
    case 'right':
      return classes.innerRight;
    case 'bottom':
      return classes.innerBottom;
    default:
      return classes.wrapper;
  }
};

export const CustomLink: FC<ICustomLink> = ({
  to,
  text,
  width,
  background,
  padding,
  fontSize,
  variant = 'main',
  'aria-label': ariaLabel,
}) => {
  return (
    <div
      role="presentation"
      className={getWrapperClass(variant)}
      style={{ width: width }}
    >
      <div
        className={getInnerClass(variant)}
        style={{ padding: padding, background: background }}
      >
        <Link
          to={to}
          className={classes.link}
          style={{ fontSize: fontSize }}
          aria-label={ariaLabel || text}
        >
          {text}
        </Link>
      </div>
    </div>
  );
};
