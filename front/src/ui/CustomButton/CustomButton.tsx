import type { FC } from 'react';
import classes from './CustomButton.module.css';

interface ICustomButton {
  type: 'button' | 'submit';
  text: string;
  textBr?: string;
}

export const CustomButton: FC<ICustomButton> = ({ type, text, textBr }) => {
  return (
    <div className={classes.wrapper}>
      <button type={type} className={classes.btn}>
        {textBr ? (
          <span className={classes.text}>
            {text}
            <br />
            {textBr}
          </span>
        ) : (
          <span className={classes.text}>{text}</span>
        )}
      </button>
    </div>
  );
};
