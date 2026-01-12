import { Link } from 'react-router-dom';

import classes from './Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav>
          <Link to="/" className={classes.link}>
            Главная
          </Link>
          <Link to="catalog" className={classes.link}>
            Каталог
          </Link>
          <Link to="rate" className={classes.link}>
            Тарифы
          </Link>
        </nav>
      </div>
    </header>
  );
};
