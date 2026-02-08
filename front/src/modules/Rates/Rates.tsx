import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { SliderArrow, Loader } from '@/ui';
import { rates } from '@/consts';

import classes from './Rates.module.css';
import { Rate } from './components';

export const Rates = () => {
  const [swiperState, setSwiperState] = useState({
    instance: null as SwiperType | null,
    isBeginning: true,
    isEnd: false,
  });

  // const [rates, setRates] = useState<IRates[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePrev = () => {
    if (swiperState.instance) {
      swiperState.instance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperState.instance) {
      swiperState.instance.slideNext();
    }
  };

  const handleSwiper = (swiper: SwiperType) => {
    setSwiperState({
      instance: swiper,
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setSwiperState((prev) => ({
      ...prev,
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    }));
  };

  if (loading) {
    return (
      <section
        className={classes.section}
        aria-label="Загрузка популярных квизов"
      >
        <div className={classes.container}>
          <h2 className={classes.title}>Популярные квизы</h2>
          <div className={classes.align}>
            <Loader />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.section} aria-label="Ошибка загрузки">
        <div className={classes.container}>
          <h2 className={classes.title}>Популярные квизы</h2>
          <div className={classes.align}>
            <span className={classes.error} role="alert">
              {error}
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className={classes.container}>
        <h2>Тарифы</h2>

        <Swiper
          role="region"
          aria-roledescription="carousel"
          aria-live="polite"
          slidesPerView={2}
          spaceBetween={20}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          className={classes.swiperWrapper}
        >
          {rates.map((rate) => (
            <>
              <SwiperSlide
                key={rate.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${rate.title}. ${rate.description}`}
              >
                <Rate {...rate} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>

        <div className={classes.customNavigation}>
          {!swiperState.isBeginning && (
            <button
              onClick={handlePrev}
              className={classes.customPrev}
              aria-label="Предыдущий слайд"
              disabled={swiperState.isBeginning}
            >
              <SliderArrow
                one={classes.one}
                two={classes.two}
                three={classes.three}
                prev={true}
              />
            </button>
          )}

          {!swiperState.isEnd && (
            <button
              onClick={handleNext}
              className={classes.customNext}
              aria-label="Следующий слайд"
              disabled={swiperState.isEnd}
            >
              <SliderArrow
                one={classes.one}
                two={classes.two}
                three={classes.three}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
