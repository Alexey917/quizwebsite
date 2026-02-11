import { Link } from 'react-router-dom';

import classes from './Card.module.css';

interface ICard<T> {
  data: T;
  dataIndex: number;
}

export const Card = ({ data, dataIndex }: ICard<any>) => {
  return (
    <article className={classes.card}>
      <img
        src={data.preview}
        className={classes.img}
        alt={`${data.title} картинка`}
      />
      <h3 className={classes.title}>{data.title}</h3>
      <p className={classes.description}>{data.description}</p>
      <Link className={classes.link} to={`/catalog/${dataIndex}/quizzes`}>
        Подробнее
      </Link>
    </article>
  );
};
