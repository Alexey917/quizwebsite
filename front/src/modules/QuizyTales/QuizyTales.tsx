import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CustomLink, Logo, CustomButton, BrandedLettering } from '@/ui';

import classes from './QuizyTales.module.css';
import title from '../../assets/sprite.svg';

export const QuizyTales = () => {
  const isDesktop = useMediaQuery({ maxWidth: 1200 });

  const getLinkProps = () => {
    if (isDesktop)
      return { width: '277px', fontSize: '20px', padding: '19px 45px' };

    return { width: '285px', fontSize: '24px', padding: '24px 33px' };
  };

  const getButtonProps = () => {
    if (isDesktop)
      return { width: '277px', fontSize: '20px', padding: '20px 26px' };

    return { width: '285px', fontSize: '24px', padding: '28px 22px' };
  };

  return (
    <section className={classes.section} aria-labelledby="quizy-tales-title">
      <div className={classes.container}>
        <Logo aria-label="Логотип QuizyTales" />
        <div className={classes.contentWrapper}>
          <h1 id="quizy-tales-title" className={classes.title}>
            <svg className={classes.icon} aria-hidden="true">
              <use href={title + '#title'}></use>
              <span className="visually-hidden">QuizyTales</span>
            </svg>
          </h1>

          <p className={classes.text}>
            где каждый квиз -<br /> это маленькая
            <br /> история
          </p>
          <div className={classes.btnGroup}>
            <CustomLink
              to="catalog"
              text="Выбрать готовый квиз"
              {...getLinkProps()}
              background="#49969b"
              variant="leftRight"
            />
            <CustomButton
              type="button"
              text="Создать собственный квиз"
              {...getButtonProps()}
              background="#49969b"
              variant="author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
