import classes from './ModalRates.module.css';

export const ModalRates = () => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.wrapper}>Выберите тариф:</h3>
      <div className={classes.rate}></div>
    </div>
  );
};
