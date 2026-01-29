import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { benefits } from '@/consts';

import classes from './Benefits.module.css';

import 'swiper/css';

export const Benefits = () => {
  return (
    <article className={classes.section}>
      <h3 className={classes.title}>Наши преимущества:</h3>
      <div className={classes.slider}>
        <div className={classes.sliderWrapper}>
          {benefits.map((benefit) => (
            <div className={classes.benefitWrapper}>
              {/* <svg className={classes.icon} aria-hidden="true">
                <use href={masks + '#masks'}></use>
                <span className="visually-hidden">QuizyTales</span>
              </svg> */}
              <img
                src={benefit.svg}
                className={classes[benefit.class]}
                alt="masks"
              />
              <h4 className={classes.benefitTitle}>{benefit.title}</h4>
              <p className={classes.text}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
