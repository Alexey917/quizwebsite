import { useEffect, useRef } from 'react';

export const useScrollLock = (flag: boolean) => {
  const originalStyle = useRef('');
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (flag) {
      originalStyle.current = window.getComputedStyle(document.body).overflow;

      scrollPosition.current = window.pageYOffset;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';

      document.body.style.touchAction = 'none';
    }

    return () => {
      if (flag) {
        document.body.style.overflow = originalStyle.current;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        document.body.style.touchAction = '';

        window.scrollTo(0, scrollPosition.current);
      }
    };
  }, [flag]);
};
