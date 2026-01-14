import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import { CustomLink } from '@/ui';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav className={classes.navigation}>
          <Link to="/" className={classes.link}>
            Главная
          </Link>
          <Link to="catalog" className={classes.link}>
            Каталог
          </Link>
          <Link to="rate" className={classes.link}>
            Тарифы
          </Link>
          <CustomLink to="/" text="Сделать заказ" />
        </nav>
      </div>
    </header>
  );
};
