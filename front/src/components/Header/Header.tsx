import { Link, useLocation } from 'react-router-dom';

import classes from './Header.module.css';
import { CustomLink } from '@/ui';

export const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className={classes.header} role="banner">
      <div className={classes.container}>
        <nav className={classes.navigation} aria-label="Основная навигация">
          <Link
            to="/"
            className={classes.link}
            aria-current={location.pathname === '/' && 'page'}
          >
            Главная
          </Link>
          <Link
            to="catalog"
            className={classes.link}
            aria-current={location.pathname === '/catalog' && 'page'}
          >
            Каталог
          </Link>
          <Link
            to="rate"
            className={classes.link}
            aria-current={location.pathname === '/rate' && 'page'}
          >
            Тарифы
          </Link>
          <CustomLink
            to="catalog"
            text="Сделать заказ"
            variant="main"
            aria-label="Перейти к оформлению заказа"
          />
        </nav>
      </div>
    </header>
  );
};
