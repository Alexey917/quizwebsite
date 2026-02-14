import { useLocation, useNavigate } from 'react-router-dom';

import classes from './GoBackButton.module.css';
import back from '../../assets/sprite.svg';
import { useEffect, useState, useRef } from 'react';

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
        <use href={back + '#back'}></use>
      </svg>
    </button>
  );
};
