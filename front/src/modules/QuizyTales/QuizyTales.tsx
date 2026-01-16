import { CustomLink, Logo, CustomButton } from '@/ui';

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
            <CustomLink
              to="catalog"
              text="Выбрать готовый квиз"
              width="285px"
              fontSize="24px"
              padding="24px 33px"
              background="#49969b"
              variant="leftRight"
            />
            <CustomButton
              type="button"
              text="Создать собственный квиз"
              width="285px"
              fontSize="24px"
              padding="24px 22px"
              background="#49969b"
              variant="author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
