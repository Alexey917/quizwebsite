import { CustomLink, Logo, CustomButton, BrandedLettering } from '@/ui';

import classes from './QuizyTales.module.css';
import title from '../../assets/sprite.svg';

export const QuizyTales = () => {
  return (
    <section className={classes.section} aria-labelledby="quizy-tales-title">
      <div className={classes.container}>
        <Logo width={590} height={536} aria-label="Логотип QuizyTales" />
        <div className={classes.contentWrapper}>
          <h1 id="quizy-tales-title" className={classes.title}>
            <svg className={classes.icon} aria-hidden="true">
              <use href={title + '#title'}></use>
              <span className="visually-hidden">QuizyTales</span>
            </svg>
            {/* <BrandedLettering
              positionX={15}
              positionY={40}
              boxWidth={295}
              boxHeight={28}
              variant="main"
            /> */}
          </h1>

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
              padding="28px 22px"
              background="#49969b"
              variant="author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
