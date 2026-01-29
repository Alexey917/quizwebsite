import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { benefits } from '@/consts';

import classes from './Benefits.module.css';

import 'swiper/css';

export const Benefits = () => {
  return (
    <article className={classes.section}>
      <h3 className={classes.title}>Наши преимущества:</h3>
      {/* <div className={classes.slider}>
        <div
          className={classes.sliderWrapper}
          ref={sliderRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {infinity.map((benefit) => (
            <div className={classes.benefitWrapper}>
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
      </div> */}

      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        style={{ width: '1400px' }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={classes.swiperWrapper}
      >
        {benefits.map((benefit) => (
          <SwiperSlide
            style={{
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <div className={classes.benefitWrapper}>
              <img
                src={benefit.svg}
                className={classes[benefit.class]}
                alt="masks"
              />
              <h4 className={classes.benefitTitle}>{benefit.title}</h4>
              <p className={classes.text}>{benefit.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};
