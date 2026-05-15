import { useState, useEffect } from 'react';

export const useScreenType = () => {
  const [screenType, setScreenType] = useState('default');

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width >= 1501) return 'large';
      if (width >= 1201) return 'medium';
      if (width >= 1025) return 'small';
      if (width >= 905) return 'desktop';
      if (width >= 577) return 'tablet';
      if (width >= 361) return 'phone';
      if (width >= 320) return 'smallPhone';
      return 'default';
    };

    setScreenType(checkScreen());

    const handleResize = () => setScreenType(checkScreen());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenType;
};
