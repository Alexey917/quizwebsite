import { useLocation, useNavigate } from 'react-router-dom';

import classes from './GoBackButton.module.css';
// import back from '../../assets/sprite.svg';

interface IGoBack {
  classBtn: string;
}

export const GoBackButton = ({ classBtn }: IGoBack) => {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = location.pathname === '/';

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <button
      className={classes[classBtn]}
      onClick={handleNavigate}
      disabled={canGoBack}
      aria-label="Назад на предыдущую страницу"
      title="Вернуться назад"
    >
      <svg
        className={!canGoBack ? `${classes.back}` : `${classes.hiddenBack}`}
        aria-hidden="true"
        focusable="false"
      >
        <title>Стрелка назад</title>
        {/* <use href={back + '#back'}></use> */}
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="back"
        >
          <rect
            x="1"
            y="1"
            width="58"
            height="58"
            rx="23"
            stroke={
              classBtn === 'btnNav' ? '#F1AE79' : 'url(#paint0_linear_547_420)'
            }
            strokeWidth="2"
          />
          <path
            d="M22.9393 31.0607C22.3536 30.4749 22.3536 29.5251 22.9393 28.9393L32.4853 19.3934C33.0711 18.8076 34.0208 18.8076 34.6066 19.3934C35.1924 19.9792 35.1924 20.9289 34.6066 21.5147L26.1213 30L34.6066 38.4853C35.1924 39.0711 35.1924 40.0208 34.6066 40.6066C34.0208 41.1924 33.0711 41.1924 32.4853 40.6066L22.9393 31.0607ZM25 30L25 31.5L24 31.5L24 30L24 28.5L25 28.5L25 30Z"
            fill="#F1AE79"
          />
          <defs>
            <linearGradient
              id="paint0_linear_547_420"
              x1="0"
              y1="30"
              x2="60"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F1AE79" />
              <stop offset="0.5" stopColor="#FECDA7" stopOpacity="0" />
              <stop offset="0.75" stopColor="#FECDA7" stopOpacity="0" />
              <stop offset="1" stopColor="#F1AE79" />
            </linearGradient>
          </defs>
        </svg>
      </svg>
    </button>
  );
};
