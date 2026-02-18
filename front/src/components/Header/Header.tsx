import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  CustomLink,
  BrandedLettering,
  GoBackButton,
  MobileMenuBtn,
} from '@/ui';

import { useEffect, type FC, useState } from 'react';
import { routes } from '@/consts';

import classes from './Header.module.css';
import { useSaveRate } from '@/hooks';

interface IHeader {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const Header: FC<IHeader> = ({ isMobile, setIsMobile }) => {
  const [mobileTitle, setMobileTitle] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();
  const { categoryId, quizId } = useParams();
  const saveRate = useSaveRate();

  useEffect(() => {
    const category = localStorage.getItem('category');
    const quiz = localStorage.getItem('quiz');
    const popular = localStorage.getItem('popular');

    const title = routes.find((route) => {
      return route.path === location.pathname && route.title;
    });
    if (quizId && quiz) {
      setMobileTitle(quiz);
    } else if (categoryId && category) {
      setMobileTitle(category);
    } else if (title) {
      setMobileTitle(title.title);
    } else if (quizId && popular) {
      setMobileTitle(popular);
    } else {
      navigate('/');
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
                {location.pathname === '/' && route.title === 'Главная' ? (
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
                    onClick={(e) => saveRate(e, route.path, '')}
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
