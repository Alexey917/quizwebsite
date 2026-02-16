import classes from './Step.module.css';

type TNumber = {
  num: number;
  text: string;
  classWrapper?: string;
  classText?: string;
};

export const Step = ({
  num,
  text,
  classText = 'text',
  classWrapper = 'wrapper',
}: TNumber) => {
  return (
    <div className={classes[classWrapper]}>
      <div className={classes.wrapperNum}>
        <span className={classes.number} role="img" aria-label={`шаг ${num}`}>
          {num}
        </span>
      </div>
      <p className={classes[classText]}>{text}</p>
    </div>
  );
};
