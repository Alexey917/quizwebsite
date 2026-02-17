import type { ReactNode } from 'react';
import { useRef, useEffect } from 'react';

import classes from './Modal.module.css';
import sprite from '../../assets/sprite.svg';

type TModal = {
  children: ReactNode;
  setModal: (flag: boolean) => void;
  isModal: boolean;
};

export const Modal = ({ children, setModal, isModal }: TModal) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
      if (
        overlayRef.current &&
        overlayRef.current.contains(e.target as Node) &&
        !wrapperRef.current?.contains(e.target as Node)
      ) {
        setModal(false);
      }
    };

    if (isModal && overlayRef.current) {
      overlayRef.current.focus();
    }

    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModal) {
        setModal(false);
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
  }, [isModal]);

  return (
    <div
      className={classes.overlay}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      id="modal-id"
    >
      <div className={classes.wrapper} ref={wrapperRef}>
        <div className={classes.content}>
          <button className={classes.btnClose} onClick={() => setModal(false)}>
            <svg
              className={classes.closeIcon}
              aria-hidden="true"
              focusable="false"
            >
              <use href={`${sprite}#close`}></use>
            </svg>
          </button>
          <svg
            className={classes.logoIcon}
            aria-hidden="true"
            focusable="false"
          >
            <use href={`${sprite}#modalLogo`}></use>
          </svg>
          {children}
        </div>
      </div>
    </div>
  );
};
