import { useLocation, useNavigate } from 'react-router-dom';

import classes from './GoBackButton.module.css';
import back from '../../assets/sprite.svg';
import { useEffect, useState, useRef } from 'react';

export const GoBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isGoingBackRef = useRef<boolean>(false);
  const [history, setHistory] = useState<string[]>([]);

  console.log(history);

  const handleNavigate = () => {
    if (history.length > 1) {
      navigate(-1);
      isGoingBackRef.current = true;
      setHistory((prevItems) => prevItems.slice(0, -1));
    }
  };

  useEffect(() => {
    if (isGoingBackRef.current) {
      isGoingBackRef.current = false;
    } else {
      setHistory([...history, location.pathname]);
    }
  }, [location]);

  return (
    <button
      className={classes.btnMenu}
      onClick={handleNavigate}
      disabled={history.length < 2}
    >
      <svg
        className={
          history.length > 1 ? `${classes.back}` : `${classes.hiddenBack}`
        }
      >
        <use href={back + '#back'}></use>
      </svg>
    </button>
  );
};
