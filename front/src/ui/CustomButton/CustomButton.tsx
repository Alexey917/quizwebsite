import type { FC } from 'react';
import classes from './CustomButton.module.css';

type TBtnVariant = 'author';

interface ICustomButton {
  type: 'button' | 'submit';
  text: string;
  background: string;
  variant: TBtnVariant;
}

const getWrapperClass = (variant: TBtnVariant) => {
  switch (variant) {
    case 'author':
      return classes.author;
    default:
      return classes.author;
  }
};

const getInnerClass = (variant: TBtnVariant) => {
  switch (variant) {
    case 'author':
      return classes.innerAuthor;
    default:
      return classes.innerAuthor;
  }
};

const getBtnClass = (variant: TBtnVariant) => {
  switch (variant) {
    case 'author':
      return classes.btnAuthor;
    default:
      return classes.btnAuthor;
  }
};

export const CustomButton: FC<ICustomButton> = ({
  type,
  text,
  background,
  variant,
}) => {
  return (
    <div className={getWrapperClass(variant)}>
      <div className={getInnerClass(variant)}>
        <button
          type={type}
          className={getBtnClass(variant)}
          style={{ background: background }}
        >
          {text}
        </button>
      </div>
    </div>
  );
};
