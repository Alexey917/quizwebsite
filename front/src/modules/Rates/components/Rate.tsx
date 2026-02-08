import { Link } from 'react-router-dom';

import classes from './Rate.module.css';

interface IRate {
  title: string;
  description: string;
  list: string[];
  price: string;
  oldPrice?: string;
  img: string;
  isAuthorial: boolean;
}

export const Rate = ({
  isAuthorial,
  title,
  description,
  list,
  price,
  oldPrice,
  img,
}: IRate) => {
  return (
    <>
      {!isAuthorial ? (
        <Link to="catalog" className={classes.link}>
          <div className={classes.info}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.text}>{description}</p>
            <ul className={classes.list}>
              {list.map((listItem, index) => (
                <li key={index} className={classes.listItem}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          <span className={classes.oldPrice}>{oldPrice}</span>
          <span className={classes.price}>{price}</span>
          <img src={img} className={classes.icon} alt="" />
        </Link>
      ) : (
        <div className={classes.btn}>
          <div className={classes.info}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.text}>{description}</p>
            <ul className={classes.list}>
              {list.map((listItem, index) => (
                <li key={index} className={classes.listItem}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          <span className={classes.oldPrice}>{oldPrice}</span>
          <span className={classes.price}>{price}</span>
          <img src={img} className={classes.icon} alt="" />
        </div>
      )}
    </>
  );
};
