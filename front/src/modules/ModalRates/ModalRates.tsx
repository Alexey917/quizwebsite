import { useState, useEffect } from 'react';
import { RatesApi, type IRates, getErrorMessage } from '@/api';
import { Loading } from '@/components';
import parse from 'html-react-parser';

import classes from './ModalRates.module.css';

export const ModalRates = () => {
  const [rates, setRates] = useState<IRates[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await RatesApi();
        setRates(result?.data);
        console.log(result.data);
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    handleRates();
  }, []);

  if (loading) {
    return (
      <Loading
        ariaLabel="Загрузка тарифов"
        classSection={`${classes.section}`}
        classTitle={`${classes.title}`}
        text="Тарифы"
      />
    );
  }

  if (error) {
    return (
      <section className={classes.section} aria-label="Ошибка загрузки">
        <div className={classes.container}>
          <h3 className={classes.title}>Выберите тариф:</h3>
          <div className={classes.align}>
            <span className={classes.error} role="alert">
              {error}
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Выберите тариф:</h2>

      {rates
        .filter((rate) => rate.is_authorial === false)
        .map((rate) => (
          <div className={classes.rate}>
            <h3 className={classes.rateTitle}>{rate.title}</h3>
            {parse(rate.preview_description)}
            <button className={classes.rateBtn}>
              <span className={classes.rateBtnText}>Выбрать</span>
            </button>
            {rate.is_new && <span className={classes.new}>NEW</span>}
            {rate.old_price && (
              <span className={classes.oldPrice}>{rate.old_price} ₽</span>
            )}
            <span className={classes.price}>Стоимость {rate.price} ₽</span>
          </div>
        ))}
    </div>
  );
};
