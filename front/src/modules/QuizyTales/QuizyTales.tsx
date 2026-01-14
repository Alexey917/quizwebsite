import { CustomLink, Logo } from '@/ui';

import classes from './QuizyTales.module.css';
import title from '../../assets/sprite.svg';

export const QuizyTales = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Logo width={590} height={536} />
        <div className={classes.contentWrapper}>
          <h1 className={classes.title}>QuizyTales</h1>
          <svg className={classes.icon}>
            <use href={title + '#title'} className={classes.use}></use>
          </svg>
          <p>где каждый квиз - это маленькая история</p>
          <div className={classes.btnGroup}>
            <CustomLink to="/" text="Выбрать готовый квиз" />
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
};
