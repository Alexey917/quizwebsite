import { useLocation, useNavigate } from 'react-router-dom';

import classes from './GoBackButton.module.css';
import back from '../../assets/sprite.svg';
import { useEffect, useState, useRef } from 'react';

export const GoBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isGoingBackRef = useRef<boolean>(false);
  const [history, setHistory] = useState<string[]>(() => {
    return [location.pathname];
  });

  const canGoBack = history.length > 1;

  const handleNavigate = () => {
    if (canGoBack) {
      isGoingBackRef.current = true;
      setHistory((prevItems) => {
        return prevItems.slice(0, -1);
      });
      navigate(-1);
    }
  };

  useEffect(() => {
    if (isGoingBackRef.current) {
      isGoingBackRef.current = false;
      return;
    }

    setHistory((prev) => {
      if (prev[prev.length - 1] === location.pathname) {
        return prev;
      }
      return [...prev, location.pathname];
    });

    // window.addEventListener('popstate', checkHistory);
  }, [location]);

  return (
    <button
      className={classes.btnMenu}
      onClick={handleNavigate}
      disabled={!canGoBack}
      aria-label="Назад на предыдущую страницу"
      title="Вернуться назад"
    >
      <svg
        className={canGoBack ? `${classes.back}` : `${classes.hiddenBack}`}
        aria-hidden="true"
        focusable="false"
      >
        <title>Стрелка назад</title>
        <use href={back + '#back'}></use>
      </svg>
    </button>
  );
};
