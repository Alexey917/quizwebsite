import { useMediaQuery } from 'react-responsive';
import { CustomLink, Logo, CustomButton } from '@/ui';

import classes from './QuizyTales.module.css';
import title from '../../assets/sprite.svg';

export const QuizyTales = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1200 });
  const isLaptop = useMediaQuery({ minWidth: 904, maxWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 904 });
  const isPhone = useMediaQuery({ minWidth: 320, maxWidth: 576 });

  const getLinkProps = () => {
    if (isDesktop)
      return { width: '277px', fontSize: '20px', padding: '19px 47px' };
    if (isLaptop)
      return { width: '211px', fontSize: '20px', padding: '12px 12px' };
    if (isTablet)
      return { width: '231px', fontSize: '20px', padding: '12px 22px' };
    if (isPhone)
      return { width: '156px', fontSize: '12px', padding: '1px 21px' };

    return { width: '285px', fontSize: '24px', padding: '24px 33px' };
  };

  const getButtonProps = () => {
    if (isDesktop)
      return { width: '277px', fontSize: '20px', padding: '21px 26px' };
    if (isLaptop)
      return { width: '211px', fontSize: '20px', padding: '15.5px 8px' };
    if (isTablet)
      return { width: '231px', fontSize: '20px', padding: '15.5px 8px' };
    if (isPhone)
      return { width: '156px', fontSize: '12px', padding: '3px 17px' };

    return { width: '285px', fontSize: '24px', padding: '26.5px 22px' };
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
          {!isTablet && !isPhone && (
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
          )}
        </div>
        {(isTablet || isPhone) && (
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
        )}
      </div>
    </section>
  );
};
