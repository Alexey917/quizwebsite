import { Link, useParams, useLocation } from 'react-router-dom';
import { GoBackButton } from '@/ui';

import { useSelector } from 'react-redux';
import { getBreadcrumb } from '../../store/index';

import classes from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();
  const { categoryId, quizId } = useParams();
  const { categoryName, quizName } = useSelector(getBreadcrumb);

  return (
    <nav className={classes.nav} aria-label="Хлебные крошки">
      <GoBackButton classBtn="btnNav" />
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link
            className={classes.link}
            to="/"
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Главная
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link
            className={classes.link}
            to="/catalog"
            aria-current={location.pathname === '/catalog' ? 'page' : undefined}
          >
            Каталог
          </Link>
        </li>
        {categoryId && categoryName && (
          <li key={`category-${categoryId}`} className={classes.listItem}>
            <Link
              className={classes.link}
              to={`/catalog/${categoryId}/quizzes`}
              aria-current={
                location.pathname.includes(`/catalog/${categoryId}/quizzes`) &&
                !quizId
                  ? 'page'
                  : undefined
              }
            >
              {categoryName}
            </Link>
          </li>
        )}
        {quizId && quizName && (
          <li key={`category-${categoryId}`} className={classes.listItem}>
            <Link
              className={classes.link}
              to={`/catalog/${categoryId}/quizzes/${quizId}`}
              aria-current={
                location.pathname.includes(
                  `/catalog/${categoryId}/quizzes/${quizId}`,
                )
                  ? 'page'
                  : undefined
              }
            >
              {quizName}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
