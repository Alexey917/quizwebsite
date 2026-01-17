import type { FC } from 'react';
import classes from './CustomButton.module.css';

interface ICustomButton {
  type: 'button' | 'submit';
  text: string;
  width: string;
  background: string;
  padding: string;
  fontSize: string;
  variant: 'main' | 'author';
}

export const CustomButton: FC<ICustomButton> = ({
  type,
  text,
  width,
  background,
  padding,
  fontSize,
  variant,
}) => {
  return (
    <div
      className={variant === 'main' ? classes.wrapper : classes.author}
      style={{ width: width }}
    >
      <div
        className={variant === 'main' ? classes.inner : classes.innerAuthor}
        style={{ padding: padding, background: background }}
      >
        <button
          type={type}
          className={classes.btn}
          style={{ background: background }}
        >
          <span style={{ fontSize: fontSize }}>{text}</span>
        </button>
      </div>
    </div>
  );
};
