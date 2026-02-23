import { useState, useEffect } from 'react';
import { SliderArrow } from '@/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Loading } from '@/components';
import { reviewsApi, type IReviews } from './api';
import { getErrorMessage } from '@/api';

import { Review } from './components';
// import { reviews } from '@/consts';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

import classes from './Reviews.module.css';
import sprite from '../../assets/sprite.svg';

export const Reviews = () => {
  const [swiperState, setSwiperState] = useState({
    instance: null as SwiperType | null,
    isBeginning: true,
    isEnd: false,
  });

  const [reviews, setReviews] = useState<IReviews[]>([]);
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

  useEffect(() => {
    const handleReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await reviewsApi();
        setReviews(result.data);
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    handleReviews();
  }, []);

  if (loading) {
    return (
      <Loading
        ariaLabel="Загрузка отзывов"
        classSection={`${classes.section}`}
        classTitle={`${classes.title}`}
        text="Отзывы"
      />
    );
  }

  if (error) {
    return (
      <section className={classes.section} aria-label="Ошибка загрузки">
        <div className={classes.container}>
          <h2 className={classes.title}>Отзывы</h2>
          <div className={classes.align}>
            <span className={classes.error} role="alert">
              {error}
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className={classes.section} aria-label="Отзывы еще не добавлены">
        <div className={classes.container}>
          <h2 className={classes.title}>Отзывы</h2>
          <div className={classes.align}>
            <span className={classes.info} role="alert">
              Отзывы еще не добавлены
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.section} aria-label="Отзывы">
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
            spaceBetween={28}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className={classes.swiperWrapper}
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                key={`${review.author}-${index}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Отзыв ${index + 1} из ${reviews.length}`}
                className={classes.swiperSlider}
              >
                <Review {...review} slideIndex={index} />
              </SwiperSlide>
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
