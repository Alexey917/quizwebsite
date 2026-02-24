import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import type { ICategories, IQuizzes } from '../api';
import { createSlug } from '@/utils';

import classes from './Card.module.css';

interface ICard {
  data: ICategories | IQuizzes;
  dataIndex: number;
}

export const Card = ({ data }: ICard) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();

  const handleCategory = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
  ) => {
    e.preventDefault();
    localStorage.setItem('category', data.title);
    localStorage.removeItem('popular');
    navigate(to);
  };

  const handleQuiz = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    localStorage.setItem('quiz', data.title);
    localStorage.removeItem('popular');
    navigate(to);
  };

  return (
    <article
      className={classes.card}
      aria-labelledby={`card-title-${data.title}`}
    >
      <img
        src={data.preview_image}
        className={classes.img}
        alt={`${data.title} картинка`}
        loading="lazy"
        decoding="async"
      />
      <div className={classes.overlay} aria-hidden="true"></div>
      <h3 id={`card-title-${data.title}`} className={classes.title}>
        {data.title}
      </h3>
      <p className={classes.description}>{data.preview_text}</p>
      {location.pathname === '/catalog' ? (
        <Link
          className={classes.link}
          to={`/catalog/${data.id}-${createSlug(data.title)}/quizzes`}
          onClick={(e) =>
            handleCategory(
              e,
              `/catalog/${data.id}-${createSlug(data.title)}/quizzes`,
            )
          }
        >
          Подробнее
        </Link>
      ) : (
        <Link
          className={classes.link}
          to={`/catalog/${categoryId}/quizzes/${data.id}-${createSlug(
            data.title,
          )}`}
          onClick={(e) =>
            handleQuiz(
              e,
              `/catalog/${categoryId}/quizzes/${data.id}-${createSlug(
                data.title,
              )}`,
            )
          }
        >
          Подробнее
        </Link>
      )}
    </article>
  );
};
