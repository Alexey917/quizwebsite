import { useState, useEffect } from 'react';
import { RatesApi, type IRates, getErrorMessage } from '@/api';
import { Loading } from '@/components';
import parse from 'html-react-parser';

import classes from './ModalRates.module.css';
import { useSaveRate } from '@/hooks';

interface IModalRates {
  variant?: 'authorial' | 'usual';
}

export const ModalRates = ({ variant = 'usual' }: IModalRates) => {
  const [rates, setRates] = useState<IRates[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const saveRate = useSaveRate();

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
          <h2 className={classes.title}>Выберите тариф:</h2>
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
    <section className={classes.wrapper} aria-label="Доступные тарифы">
      <h2 className={classes.title}>Выберите тариф:</h2>

      {rates
        .filter((rate) =>
          variant === 'usual' ? !rate.is_authorial : rate.is_authorial,
        )
        .map((rate, index) => (
          <article
            className={classes.rate}
            key={`${index}-${rate.title}`}
            aria-labelledby={`rate-title-${index}`}
            onClick={(e) => saveRate(e, null, rate.title)}
          >
            <h3 className={classes.rateTitle} id={`rate-title-${index}`}>
              {rate.title}
            </h3>
            {parse(rate.preview_description)}
            <button
              type="button"
              className={classes.rateBtn}
              aria-label={`Выбрать тариф "${rate.title}" за ${rate.price} рублей`}
              onClick={(e) => saveRate(e, null, rate.title)}
            >
              <span className={classes.rateBtnText}>Выбрать</span>
            </button>
            {rate.is_new && (
              <span className={classes.new} aria-label="Новый тариф">
                NEW
              </span>
            )}
            {rate.old_price && (
              <span className={classes.oldPrice} aria-label="Старая цена">
                {rate.old_price} ₽
              </span>
            )}
            <span className={classes.price} aria-label="Текущая цена">
              Стоимость {rate.price} ₽
            </span>
          </article>
        ))}
    </section>
  );
};
