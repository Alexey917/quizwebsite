import { Link } from 'react-router-dom';
import { type IRates } from '../api/RatesApi';

import classes from './Rate.module.css';

export const Rate = ({
  is_authorial,
  title,
  preview_description,
  price,
  oldPrice,
}: IRates) => {
  return (
    <>
      {!is_authorial ? (
        <Link to="catalog" className={classes.link}>
          <div className={classes.info}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.text}></p>
            <ul className={classes.list}>
              {preview_description.split(',').map((listItem, index) => (
                <li key={index} className={classes.listItem}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          {oldPrice && (
            <span className={classes.oldPrice}>{`${oldPrice} ₽`}</span>
          )}
          <span className={classes.price}>{`${price} ₽`}</span>
          {/* <img src={img} className={classes.icon} alt="" /> */}
        </Link>
      ) : (
        <div className={classes.btn}>
          <div className={classes.info}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.text}></p>
            <ul className={classes.list}>
              {preview_description.split(',').map((listItem, index) => (
                <li key={index} className={classes.listItem}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          <span className={classes.oldPrice}>{oldPrice}</span>
          <span className={classes.price}>{price}</span>
          {/* <img src={img} className={classes.icon} alt="" /> */}
        </div>
      )}
    </>
  );
};
