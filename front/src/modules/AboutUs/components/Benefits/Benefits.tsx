import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { benefits } from '@/consts';

import classes from './Benefits.module.css';

import 'swiper/css';

export const Benefits = () => {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
  console.log(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <article className={classes.article}>
      <h3 className={classes.title}>Наши преимущества:</h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={64}
        loop={true}
        // style={{ width: widthScreen - 210 }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={classes.swiperWrapper}
      >
        {benefits.map((benefit) => (
          <SwiperSlide
            key={benefit.title}
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
