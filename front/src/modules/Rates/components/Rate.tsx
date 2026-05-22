import { Link } from 'react-router-dom';
import { type IRates } from '@/api';
import { useSaveRate } from '@/hooks';
import { store } from '@/store';
import { setModal } from '@/store/Modal/modal';

import parse from 'html-react-parser';

import classes from './Rate.module.css';
import { memo, type FC } from 'react';
import { addTitle } from '@/store/Choice/choice';

interface IRateProps {
  props: IRates;
}

export const Rate: FC<IRateProps> = memo(({ props }) => {
  const saveRate = useSaveRate();
  const dispatch = store.dispatch;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement>,
    to: string | null,
    rate: { name: string; id: number },
  ) => {
    saveRate(e, to, rate);
    dispatch(setModal(true));
    dispatch(addTitle({ name: 'Авторский квиз', id: null }));
  };

  return (
    <>
      {!props.is_authorial ? (
        <Link
          to="catalog"
          className={classes.link}
          onClick={(e) =>
            saveRate(e, 'catalog', { name: props.title, id: props.id })
          }
          aria-label={`Тариф ${props.title} - ${props.price} ₽`}
        >
          <div className={classes.info}>
            {props.is_new && (
              <span className={classes.new} aria-label="Новый тариф">
                NEW
              </span>
            )}
            <h3 className={classes.title}>{props.title}</h3>
            {props.subtitle && (
              <span className={classes.text}>{props.subtitle}</span>
            )}
            {parse(props.preview_description)}
          </div>
          {props.old_price && (
            <span
              className={classes.oldPrice}
              aria-label="Старая цена"
            >{`${props.old_price} ₽`}</span>
          )}
          <span
            className={classes.price}
            aria-label="Текущая цена"
          >{`${props.price} ₽`}</span>
          {props.image && (
            <img
              src={props.image}
              className={classes.icon}
              alt={`Иконка тарифа ${props.title}`}
              loading="lazy"
            />
          )}
        </Link>
      ) : (
        <div
          className={classes.btn}
          onClick={(e) =>
            handleClick(e, null, { name: props.title, id: props.id })
          }
          role="button"
          tabIndex={0}
          aria-label={`Авторский тариф ${props.title} - ${props.price} ₽`}
        >
          <div className={classes.info}>
            {props.is_new && (
              <span className={classes.new} aria-label="Новый тариф">
                NEW
              </span>
            )}
            <h3 className={classes.title}>{props.title}</h3>
            {props.subtitle && (
              <span className={classes.text}>{props.subtitle}</span>
            )}
            {parse(props.preview_description)}
          </div>
          {props.old_price && (
            <span className={classes.oldPrice} aria-label="Старая цена">
              {props.old_price}
            </span>
          )}
          <span className={classes.price} aria-label="Текущая цена">
            {props.price}
          </span>
          {props.image && (
            <img
              src={props.image}
              className={classes.icon}
              alt={`Иконка тарифа ${props.title}`}
              loading="lazy"
            />
          )}
        </div>
      )}
    </>
  );
});
