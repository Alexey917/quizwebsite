import type { FC } from 'react';
import { useSaveRate } from '@/hooks';
import { store } from '@/store';
import { setModal } from '@/store/Modal/modal';
import classes from './CustomButton.module.css';

interface ICustomButton {
  type: 'button' | 'submit';
  text: string;
  textBr?: string;
}

export const CustomButton: FC<ICustomButton> = ({ type, text, textBr }) => {
  const saveRate = useSaveRate();
  const dispatch = store.dispatch;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement>,
    to: string | null,
    rate: { name: string; id: number | null },
  ) => {
    saveRate(e, to, rate);
    dispatch(setModal(true));
  };

  return (
    <div className={classes.wrapper}>
      <button
        type={type}
        className={classes.btn}
        onClick={(e) => handleClick(e, null, { name: '', id: null })}
      >
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
