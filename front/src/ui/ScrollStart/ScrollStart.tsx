import { useState, useEffect, type FC } from 'react';

import classes from './ScrollStart.module.css';
import up from '../../assets/sprite.svg';

interface IScrollStart {
  targetOffset?: number;
}

export const ScrollStart: FC<IScrollStart> = ({ targetOffset = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку, когда прокрутили больше чем targetOffset пикселей
      if (window.scrollY > targetOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetOffset]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button className={classes.btn} onClick={scrollToTop}>
          <svg className={classes.icon}>
            <use href={up + '#up'}></use>
          </svg>
        </button>
      )}
    </>
  );
};
