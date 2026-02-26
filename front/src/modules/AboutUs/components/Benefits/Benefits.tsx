import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { benefits } from '@/consts';

import classes from './Benefits.module.css';

import 'swiper/css';

export const Benefits = () => {
  const isTablet = useMediaQuery({ minWidth: 904, maxWidth: 1024 });
  const isMid = useMediaQuery({ minWidth: 576, maxWidth: 904 });
  const isPhone = useMediaQuery({ minWidth: 360, maxWidth: 576 });
  const isMin = useMediaQuery({ minWidth: 320, maxWidth: 360 });

  return (
    <article className={classes.article} aria-labelledby="benefits-title">
      <h3 id="benefits-title" className={classes.title}>
        Наши преимущества:
      </h3>

      <Swiper
        slidesPerView={isMid || isPhone ? 2 : isMin ? 1 : 3}
        spaceBetween={isTablet || isMid ? 200 : isPhone ? 320 : 120}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={classes.swiperWrapper}
      >
        {benefits.map((benefit) => (
          <SwiperSlide
            key={benefit.title}
            className={classes.mySwiperSlider}
            aria-label="Наши преимущества"
            role="region"
          >
            <div className={classes.benefitWrapper}>
              <div className={classes.imgWrapper}>
                <img
                  src={benefit.svg}
                  className={classes[benefit.class]}
                  alt={`Иконка: ${benefit.title}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className={classes.benefitTitle}>{benefit.title}</h4>
              <p className={classes.text}>{benefit.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};
