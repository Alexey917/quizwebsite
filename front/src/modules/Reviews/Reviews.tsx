import { useState, useEffect } from 'react';
import { Loader, SliderArrow } from '@/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import { Review } from './components';
import { reviews } from '@/consts';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

import classes from './Reviews.module.css';
import sprite from '../../assets/sprite.svg';

export const Reviews = () => {
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

  // useEffect(() => {
  //   const handleRates = async () => {
  //     setLoading(true);
  //     setError(null);

  //     try {
  //       const result = await RatesApi();
  //       setRates(result.data);
  //       console.log(result.data);
  //     } catch (e: unknown) {
  //       const message = getErrorMessage(e);
  //       setError(message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   handleRates();
  // }, []);

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
    <section className={classes.section}>
      <svg className={classes.wavesBg} aria-hidden="true">
        <use href={`${sprite}#wavesBg`}></use>
      </svg>

      <svg className={classes.waves} aria-hidden="true">
        <use href={`${sprite}#waves`}></use>
      </svg>
      <div className={classes.content}>
        <div className={classes.container}>
          <h2 className={classes.title}>Отзывы</h2>

          <Swiper
            role="region"
            aria-roledescription="carousel"
            aria-live="polite"
            slidesPerView={3}
            spaceBetween={32}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className={classes.swiperWrapper}
          >
            {reviews.map((review, index) => (
              <>
                <SwiperSlide
                  key={review.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${review.title}`}
                  className={classes.swiperSlider}
                >
                  <Review {...review} index={index} />
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
      </div>
    </section>
  );
};
