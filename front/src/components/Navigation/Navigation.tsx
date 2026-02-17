import { Link, useParams, useLocation } from 'react-router-dom';
import { GoBackButton } from '@/ui';

import classes from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();
  const { categoryId, quizId } = useParams();

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
        {categoryId && localStorage.getItem('category') && (
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
              {localStorage.getItem('category')}
            </Link>
          </li>
        )}
        {quizId && localStorage.getItem('quiz') && (
          <li key={`category-${quizId}`} className={classes.listItem}>
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
              {localStorage.getItem('quiz')}
            </Link>
          </li>
        )}
        {quizId && localStorage.getItem('popular') && (
          <li key={`category-${quizId}`} className={classes.listItem}>
            <Link
              className={classes.link}
              to={`/catalog/quizzes/${quizId}`}
              aria-current={
                location.pathname.includes(`/catalog/quizzes/${quizId}`)
                  ? 'page'
                  : undefined
              }
            >
              {localStorage.getItem('popular')}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
