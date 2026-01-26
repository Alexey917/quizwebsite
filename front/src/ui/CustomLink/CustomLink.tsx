import type { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

type TLinkVariant = 'wrapper' | 'main' | 'right' | 'bottom';

interface ICustomLink {
  to: string;
  text: string;
  textBr?: string;
  background?: string;
  variant?: TLinkVariant;
}

const getWrapperClass = (variant: TLinkVariant): string => {
  switch (variant) {
    case 'wrapper':
      return classes.wrapper;
    case 'main':
      return classes.main;
    default:
      return classes.wrapper;
  }
};

const getInnerClass = (variant: TLinkVariant): string => {
  switch (variant) {
    case 'wrapper':
      return classes.inner;
    case 'main':
      return classes.innerMain;
    default:
      return classes.inner;
  }
};

const getLinkClass = (variant: TLinkVariant): string => {
  switch (variant) {
    case 'wrapper':
      return classes.link;
    case 'main':
      return classes.linkMain;
    default:
      return classes.link;
  }
};

export const CustomLink: FC<ICustomLink> = ({
  to,
  text,
  textBr,
  background,
  variant = 'main',
}) => {
  return (
    <div role="presentation" className={getWrapperClass(variant)}>
      <div
        className={getInnerClass(variant)}
        style={{ background: background }}
      >
        <Link to={to} className={getLinkClass(variant)}>
          {text}
          {textBr && (
            <>
              <br />
              {textBr}
            </>
          )}
        </Link>
      </div>
    </div>
  );
};
