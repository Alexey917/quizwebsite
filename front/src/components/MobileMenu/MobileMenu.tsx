import { memo, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandedLettering } from '@/ui';
import { routes } from '@/consts';

import type { FC } from 'react';

import classes from './MobileMenu.module.css';
import { useSaveRate } from '@/hooks';

interface IMobileMenu {
  isMobile: boolean;
  setIsMobile: (flag: boolean) => void;
}

export const MobileMenu: FC<IMobileMenu> = memo(({ isMobile, setIsMobile }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const navigationRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const saveRate = useSaveRate();

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

  const mobileSaveRate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
    rate: { name: string; id: number | null },
  ) => {
    setIsMobile(false);
    saveRate(e, to, rate);
  };

  return (
    <div
      className={classes.overlay}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      tabIndex={-1}
      id="mobile-menu-id"
    >
      <div className={classes.container}>
        <nav
          className={classes.navigation}
          ref={navigationRef}
          aria-label="Основная навигация"
        >
          <ul className={classes.list}>
            {routes.map((route) => (
              <li key={route.title}>
                {route.title === 'Тарифы' ? (
                  <Link
                    to={route.path}
                    className={classes.link}
                    aria-current={
                      location.pathname === route.path ? 'page' : undefined
                    }
                    onClick={(e) => {
                      e.preventDefault();

                      if (location.pathname !== '/') {
                        setIsMobile(false);
                        navigate('/');

                        setTimeout(() => {
                          const element =
                            document.getElementById('tariffs-section');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            const interval = setInterval(() => {
                              const el =
                                document.getElementById('tariffs-section');
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                                clearInterval(interval);
                              }
                            }, 100);
                          }
                        }, 300);
                      } else {
                        setIsMobile(false);
                        setTimeout(() => {
                          const element =
                            document.getElementById('tariffs-section');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            const interval = setInterval(() => {
                              const el =
                                document.getElementById('tariffs-section');
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                                clearInterval(interval);
                              }
                            }, 100);
                          }
                        }, 300);
                      }
                    }}
                  >
                    {route.title}
                  </Link>
                ) : route.path === '/' && location.pathname == '/' ? (
                  ''
                ) : (
                  <Link
                    to={route.path}
                    className={classes.link}
                    aria-current={
                      location.pathname === route.path ? 'page' : undefined
                    }
                    onClick={(e) =>
                      mobileSaveRate(e, route.path, { name: '', id: null })
                    }
                  >
                    {route.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMobile(false);
              navigate('/');
            }}
          >
            <BrandedLettering
              positionX={10}
              positionY={0}
              boxWidth={310}
              boxHeight={95}
              variant="menu"
              label="QuizyTales"
            />
          </Link>
        </nav>
      </div>
    </div>
  );
});
