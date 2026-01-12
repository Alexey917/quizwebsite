import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="catalog">Каталог</Link>
        <Link to="rate">Тарифы</Link>
      </nav>
    </header>
  );
};
