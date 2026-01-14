import { CustomLink, Logo } from '@/ui';

import classes from './QuizyTales.module.css';
import title from '../../assets/sprite.svg';

export const QuizyTales = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Logo width={590} height={536} />
        <div className={classes.contentWrapper}>
          <svg className={classes.icon}>
            <use href={title + '#title'}></use>
          </svg>
          <p className={classes.text}>
            где каждый квиз -<br /> это маленькая
            <br /> история
          </p>
          <div className={classes.btnGroup}>
            <CustomLink to="/" text="Выбрать готовый квиз" variant="main" />
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
};
