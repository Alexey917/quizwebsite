import { Link, useLocation, useParams } from 'react-router-dom';
import {
  CustomLink,
  BrandedLettering,
  GoBackButton,
  MobileMenuBtn,
} from '@/ui';
import { useSelector } from 'react-redux';
import { getBreadcrumb } from '../../store/index';

import { useEffect, type FC, useState } from 'react';
import { routes } from '@/consts';

import classes from './Header.module.css';

interface IHeader {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const Header: FC<IHeader> = ({ isMobile, setIsMobile }) => {
  const [mobileTitle, setMobileTitle] = useState<string>('');
  const location = useLocation();
  const { categoryId, quizId } = useParams();
  const { categoryName, quizName } = useSelector(getBreadcrumb);

  useEffect(() => {
    const [title] = routes.filter((route) => {
      return route.path === location.pathname && route.title;
    });
    if (quizId && quizName) {
      setMobileTitle(quizName);
    } else if (categoryId && categoryName) {
      setMobileTitle(categoryName);
    } else {
      setMobileTitle(title.title);
    }
  }, [categoryId, quizId, location.pathname]);

  return (
    <header className={classes.header} role="banner">
      <div
        className={
          location.pathname !== '/'
            ? `${classes.justifyContainer} ${classes.container}`
            : classes.container
        }
      >
        {location.pathname !== '/' && (
          <BrandedLettering
            positionX={10}
            positionY={40}
            boxWidth={320}
            boxHeight={30}
            variant="header"
            label="QuizyTales"
          />
        )}

        <nav className={classes.navigation} aria-label="Основная навигация">
          <ul className={classes.list}>
            {routes.map((route) => (
              <li key={route.title}>
                {location.pathname === '/' && route.path === '/' ? (
                  <Link
                    to={route.path}
                    className={`${classes.link} ${classes.mainLink}`}
                    aria-current={
                      location.pathname === route.path ? 'page' : undefined
                    }
                  >
                    {route.title}
                  </Link>
                ) : (
                  <Link
                    to={route.path}
                    className={classes.link}
                    aria-current={
                      location.pathname === route.path ? 'page' : undefined
                    }
                  >
                    {route.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <CustomLink to="catalog" text="Сделать заказ" variant="wrapper" />
        </nav>

        <GoBackButton classBtn="btnMenu" />

        <h2 className={classes.currentPath}>{mobileTitle}</h2>

        <MobileMenuBtn setIsMobile={setIsMobile} isMobile={isMobile} />
      </div>
    </header>
  );
};
