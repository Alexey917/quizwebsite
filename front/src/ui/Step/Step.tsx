import classes from './Step.module.css';

type TNumber = { num: number; text: string };

export const Step = ({ num, text }: TNumber) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperNum}>
        <span className={classes.number} role="img" aria-label={`шаг ${num}`}>
          {num}
        </span>
      </div>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
