import { Link } from 'react-router-dom';
import { type IRates } from '@/api';
import { useSaveRate } from '@/hooks';

import classes from './Rate.module.css';

export const Rate = ({
  is_authorial,
  title,
  preview_description,
  price,
  old_price,
  subtitle,
  image,
  is_new,
}: IRates) => {
  const saveRate = useSaveRate();

  return (
    <>
      {!is_authorial ? (
        <Link
          to="catalog"
          className={classes.link}
          onClick={(e) => saveRate(e, 'catalog', title)}
        >
          <div className={classes.info}>
            {is_new && <span className={classes.new}>NEW</span>}
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.text}>{subtitle}</p>
            <ul className={classes.list}>
              {preview_description.split(',').map((listItem, index) => (
                <li key={index} className={classes.listItem}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          {old_price && (
            <span className={classes.oldPrice}>{`${old_price} ₽`}</span>
          )}
          <span className={classes.price}>{`${price} ₽`}</span>
          {image !== '' && <img src={image} className={classes.icon} alt="" />}
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
          <span className={classes.oldPrice}>{old_price}</span>
          <span className={classes.price}>{price}</span>
          {/* <img src={img} className={classes.icon} alt="" /> */}
        </div>
      )}
    </>
  );
};
