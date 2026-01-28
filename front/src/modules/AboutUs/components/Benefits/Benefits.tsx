import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './Benefits.module.css';

export const Benefits = () => {
  return (
    <article className={classes.section}>
      <h3 className={classes.title}>Наши преимущества:</h3>
      <div className={classes.slider}>
        <div className={classes.Benefit}>
          {/* <svg className={classes.wavesBg}>
            <use href={wavesBg + '#wavesBg'}></use>
          </svg> */}
          <h4 className={classes.titleBenefit}>Атмосфера погружения</h4>
          <p className={classes.text}>
            Сказочные сценарии, тематическое оформление, музыкльное
            сопровождение — создаём полное погружение в мир квиза
          </p>
        </div>
      </div>
    </article>
  );
};
