import { useState, useEffect } from 'react';
import { RatesApi, type IRates, getErrorMessage } from '@/api';
import parse from 'html-react-parser';

import classes from './ModalRates.module.css';
import { useSaveRate } from '@/hooks';
import { Loader } from '@/ui';

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

        if (result?.data) {
          setRates(result.data);
        }
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
      <section className={classes.wrapper} aria-label="Загрузка тарифов">
        <h2 className={classes.title}>Выберите тариф:</h2>
        <div className={classes.align}>
          <Loader />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.wrapper} aria-label="Ошибка загрузки">
        <h2 className={classes.title} style={{ textAlign: 'center' }}>
          Выберите тариф:
        </h2>
        <div className={classes.align}>
          <span className={classes.error} role="alert">
            {error}
          </span>
        </div>
      </section>
    );
  }

  if (rates.length === 0) {
    return (
      <section className={classes.wrapper} aria-label="Нет доступных тарифов">
        <h2 className={classes.title} style={{ textAlign: 'center' }}>
          Выберите тариф:
        </h2>
        <div className={classes.align}>
          <span className={classes.info} role="alert">
            {variant === 'usual'
              ? 'Нет доступных тарифов'
              : 'Нет доступных авторских тарифов'}
          </span>
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
        .map((rate) => (
          <article
            className={classes.rate}
            key={`${rate.id}-${rate.title}`}
            aria-labelledby={`rate-title-${rate.id}`}
            onClick={(e) =>
              saveRate(e, null, { name: rate.title, id: rate.id })
            }
          >
            <h3 className={classes.rateTitle} id={`rate-title-${rate.id}`}>
              {rate.title}
            </h3>
            {parse(rate.preview_description)}
            <button
              type="button"
              className={classes.rateBtn}
              aria-label={`Выбрать тариф "${rate.title}" за ${rate.price} рублей`}
              onClick={(e) =>
                saveRate(e, null, { name: rate.title, id: rate.id })
              }
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
