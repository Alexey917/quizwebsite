import { useState, useEffect, type FC } from 'react';

import classes from './ScrollStart.module.css';
import up from '../../assets/sprite.svg';

interface IScrollStart {
  targetOffset?: number;
}

export const ScrollStart: FC<IScrollStart> = ({ targetOffset = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScrollThrottled = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > targetOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });

    handleScrollThrottled();

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
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
        <button
          className={classes.btn}
          onClick={scrollToTop}
          aria-label="Прокрутить наверх"
          tabIndex={0}
        >
          <svg className={classes.icon} aria-hidden="true">
            <use href={up + '#up'}></use>
          </svg>
        </button>
      )}
    </>
  );
};
