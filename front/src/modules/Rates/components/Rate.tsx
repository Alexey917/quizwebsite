import { Link } from 'react-router-dom';
import { type IRates } from '@/api';
import { useSaveRate } from '@/hooks';
import { store } from '@/store';
import { setModal } from '@/store/Modal/modal';

import classes from './Rate.module.css';
import type { FC } from 'react';

interface IRateProps {
  props: IRates;
  index: number;
}

/*
is_authorial,
  title,
  preview_description,
  price,
  old_price,
  subtitle,
  image,
  is_new,
*/

export const Rate: FC<IRateProps> = ({ props, index }) => {
  const saveRate = useSaveRate();
  const dispatch = store.dispatch;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement>,
    to: string | null,
    rate: { name: string; id: number },
  ) => {
    saveRate(e, to, rate);
    dispatch(setModal(true));
  };

  return (
    <>
      {!props.is_authorial ? (
        <Link
          to="catalog"
          className={classes.link}
          onClick={(e) =>
            saveRate(e, 'catalog', { name: props.title, id: index + 1 })
          }
        >
          <div className={classes.info}>
            {props.is_new && <span className={classes.new}>NEW</span>}
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.text}>{props.subtitle}</p>
            <ul className={classes.list}>
              {props.preview_description.split(',').map((listItem, index) => (
                <li key={index} className={classes.listItem}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          {props.old_price && (
            <span className={classes.oldPrice}>{`${props.old_price} ₽`}</span>
          )}
          <span className={classes.price}>{`${props.price} ₽`}</span>
          {props.image !== '' && (
            <img src={props.image} className={classes.icon} alt="" />
          )}
        </Link>
      ) : (
        <div
          className={classes.btn}
          onClick={(e) =>
            handleClick(e, null, { name: props.title, id: index + 1 })
          }
        >
          <div className={classes.info}>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.text}></p>
            <ul className={classes.list}>
              {props.preview_description.split(',').map((listItem, index) => (
                <li key={index} className={classes.listItem}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          <span className={classes.oldPrice}>{props.old_price}</span>
          <span className={classes.price}>{props.price}</span>
          {/* <img src={img} className={classes.icon} alt="" /> */}
        </div>
      )}
    </>
  );
};
