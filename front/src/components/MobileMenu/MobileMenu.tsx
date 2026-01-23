import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandedLettering } from '@/ui';
import { routes } from '@/consts';

import type { FC } from 'react';

import classes from './MobileMenu.module.css';

interface IMobileMenu {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const MobileMenu: FC<IMobileMenu> = ({ isMobile, setIsMobile }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const navigationRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
      if (
        overlayRef.current &&
        overlayRef.current.contains(e.target as Node) &&
        !navigationRef.current?.contains(e.target as Node)
      ) {
        setIsMobile(false);
      }
    };

    if (isMobile && overlayRef.current) {
      overlayRef.current.focus();
    }

    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobile) {
        setIsMobile(false);
      }
    };

    const overlay = overlayRef.current;

    if (overlay) {
      overlay.addEventListener('click', handleClick);
      overlay.addEventListener('touchstart', handleClick, { passive: true });
      document.addEventListener('keydown', handleKeyboard);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleClick);
        overlay.removeEventListener('touchstart', handleClick);
        overlay.removeEventListener('keydown', handleKeyboard);
      }
    };
  }, [isMobile]);

  return (
    <div
      className={classes.overlay}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      tabIndex={-1}
    >
      <div className={classes.container}>
        <nav
          className={classes.navigation}
          ref={navigationRef}
          aria-label="Основная навигация"
        >
          {routes.map((route) => (
            <Link
              key={route.title}
              to={route.path}
              className={classes.link}
              aria-current={
                location.pathname === route.path ? 'page' : undefined
              }
              onClick={() => setIsMobile(false)}
            >
              {route.title}
            </Link>
          ))}

          <BrandedLettering
            positionX={10}
            positionY={0}
            boxWidth={310}
            boxHeight={95}
            variant="menu"
            label="QuizyTales"
          />
        </nav>
      </div>
    </div>
  );
};
