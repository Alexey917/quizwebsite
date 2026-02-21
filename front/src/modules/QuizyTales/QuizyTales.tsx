import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { Logo, CustomButton } from '@/ui';

import classes from './QuizyTales.module.css';
import title from '../../assets/sprite.svg';
import { useSaveRate } from '@/hooks';

export const QuizyTales = () => {
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 904 });
  const isPhone = useMediaQuery({ minWidth: 320, maxWidth: 576 });

  const saveRate = useSaveRate();

  return (
    <section className={classes.section} aria-labelledby="quizy-tales-title">
      <div className={classes.container}>
        <Logo aria-label="Логотип QuizyTales" />
        <div className={classes.contentWrapper}>
          <h1 id="quizy-tales-title" className={classes.title}>
            <svg className={classes.icon} aria-label="QuizyTales" role="img">
              <use href={title + '#title'}></use>
            </svg>
          </h1>

          <p className={classes.text}>
            где каждый квиз -<br /> это маленькая
            <br /> история
          </p>
          {!isTablet && !isPhone && (
            <div className={classes.btnGroup}>
              <div className={classes.linkWrapper}>
                <Link
                  to="catalog"
                  className={classes.quizLink}
                  onClick={(e) =>
                    saveRate(e, 'catalog', { name: '', id: null })
                  }
                >
                  Выбрать
                  <br />
                  готовый квиз
                </Link>
              </div>
              <CustomButton
                type="button"
                text="Создать"
                textBr="собственный квиз"
              />
            </div>
          )}
        </div>
        {(isTablet || isPhone) && (
          <div className={classes.btnGroup}>
            <div className={classes.linkWrapper}>
              <Link
                to="catalog"
                className={classes.quizLink}
                onClick={(e) => saveRate(e, 'catalog', { name: '', id: null })}
              >
                Выбрать
                <br />
                готовый квиз
              </Link>
            </div>
            <CustomButton
              type="button"
              text="Создать"
              textBr="собственный квиз"
            />
          </div>
        )}
      </div>
    </section>
  );
};
