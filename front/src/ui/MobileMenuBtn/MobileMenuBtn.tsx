import type { FC } from 'react';
import classes from './MobileMenuBtn.module.css';

interface IMobileBtn {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const MobileMenuBtn: FC<IMobileBtn> = ({ isMobile, setIsMobile }) => {
  return (
    <>
      {isMobile ? (
        <button
          type="button"
          className={classes.btnMenu}
          onClick={() => setIsMobile(false)}
          aria-label="Закрыть мобильное меню"
          title="Открыть меню навигации"
          aria-controls="mobile-menu-id"
          aria-haspopup="true"
          aria-expanded={isMobile}
        >
          <svg
            className={classes.menuIcon}
            aria-hidden="true"
            focusable="false"
          >
            <title>Иконка закрытия</title>
            <svg
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="menuClose"
            >
              <rect
                x="1"
                y="1"
                width="58"
                height="58"
                rx="22.0769"
                stroke="url(#paint0_linear_838_2)"
                strokeWidth="2"
              />
              <path
                d="M29.5 32.3745L19.4392 42.4354C19.0627 42.8118 18.5837 43 18.0019 43C17.4202 43 16.9411 42.8118 16.5646 42.4354C16.1882 42.0589 16 41.5798 16 40.9981C16 40.4164 16.1882 39.9373 16.5646 39.5608L26.6255 29.5L16.5646 19.4392C16.1882 19.0627 16 18.5837 16 18.0019C16 17.4202 16.1882 16.9411 16.5646 16.5646C16.9411 16.1882 17.4202 16 18.0019 16C18.5837 16 19.0627 16.1882 19.4392 16.5646L29.5 26.6255L39.5608 16.5646C39.9373 16.1882 40.4164 16 40.9981 16C41.5798 16 42.0589 16.1882 42.4354 16.5646C42.8118 16.9411 43 17.4202 43 18.0019C43 18.5837 42.8118 19.0627 42.4354 19.4392L32.3745 29.5L42.4354 39.5608C42.8118 39.9373 43 40.4164 43 40.9981C43 41.5798 42.8118 42.0589 42.4354 42.4354C42.0589 42.8118 41.5798 43 40.9981 43C40.4164 43 39.9373 42.8118 39.5608 42.4354L29.5 32.3745Z"
                fill="#F1AE79"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_838_2"
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
      ) : (
        <button
          type="button"
          className={classes.btnMenu}
          onClick={() => setIsMobile(true)}
          aria-label="Открыть мобильное меню"
          title="Закрыть меню навигации"
          aria-controls="mobile-menu-id"
        >
          <svg
            className={classes.menuIcon}
            aria-hidden="true"
            focusable="false"
          >
            <title>Иконка меню</title>
            <svg
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="menu"
            >
              <rect
                x="1"
                y="1"
                width="58"
                height="58"
                rx="22.0769"
                stroke="url(#paint0_linear_547_366)"
                strokeWidth="2"
              />
              <line
                x1="17.1538"
                y1="22.0769"
                x2="42.8461"
                y2="22.0769"
                stroke="#F1AE79"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="17.1538"
                y1="29"
                x2="42.8461"
                y2="29"
                stroke="#F1AE79"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="17.1538"
                y1="35.9231"
                x2="42.8461"
                y2="35.9231"
                stroke="#F1AE79"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_547_366"
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
      )}
    </>
  );
};
