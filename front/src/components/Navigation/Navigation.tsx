import { useLocation, Link, useParams } from 'react-router-dom';
import { GoBackButton } from '@/ui';
import { restoreTitleFromSlug } from '@/utils';
import { useSelector } from 'react-redux';
import { getBreadcrumb } from '../../store/index';

import classes from './Navigation.module.css';

export const Navigation = () => {
  const { categoryId, quizId } = useParams();
  const { categoryName, quizName } = useSelector(getBreadcrumb);

  return (
    <nav className={classes.nav}>
      <GoBackButton classBtn="btnNav" />
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link className={classes.link} to="/">
            Главная
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link className={classes.link} to="/catalog">
            Каталог
          </Link>
        </li>
        {categoryId && (
          <li className={classes.listItem}>
            <Link
              className={classes.link}
              to={`/catalog/${categoryId}/quizzes`}
            >
              {categoryName}
            </Link>
          </li>
        )}
        {quizId && (
          <li className={classes.listItem}>
            <Link
              className={classes.link}
              to={`/catalog/${categoryId}/quizzes/${quizId}`}
            >
              {quizName}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
