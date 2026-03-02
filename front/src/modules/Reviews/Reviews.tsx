import { useState, useEffect } from 'react';
import { SliderArrow } from '@/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Loading } from '@/components';
import { reviewsApi, type IReviews } from './api';
import { getErrorMessage } from '@/api';

import { Review } from './components';
import { Navigation, EffectFade, Autoplay, Mousewheel } from 'swiper/modules';

import classes from './Reviews.module.css';

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
        <svg
          viewBox="0 0 1440 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="wavesBg"
        >
          <path
            d="M1440 1800L1380 1761.85C1320 1724.57 1200 1650 1080 1624.86C960 1599.71 840 1624.86 720 1643.93C600 1662.14 480 1675.14 360 1656.07C240 1636.99 120 1587.57 60 1562.43L0 1537.28V0L60 38.1504C120 75.4336 240 150 360 175.145C480 200.289 600 175.144 720 156.069C840 137.861 960 124.856 1080 143.931C1200 163.006 1320 212.428 1380 237.572L1440 262.717V1800Z"
            fill="#13515E"
          />
        </svg>
      </svg>

      <svg className={classes.waves} aria-hidden="true">
        {/* <use href={`${sprite}#waves`}></use> */}
        <svg
          viewBox="0 0 1440 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="waves"
        >
          <path
            d="M0 1.68719L60 39.8786C120 77.202 240 151.849 360 177.021C480 202.192 600 177.021 720 157.925C840 139.697 960 126.677 1080 145.773C1200 164.869 1320 214.344 1380 239.516L1440 264.687"
            stroke="url(#paint0_linear_203_246)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_203_246"
              x1="0"
              y1="1.68719"
              x2="1440"
              y2="264.687"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B46B48" />
              <stop offset="0.1" stopColor="#F1AE79" />
              <stop offset="1" stopColor="#B46B48" />
            </linearGradient>
          </defs>
        </svg>
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
            allowTouchMove={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Autoplay, Mousewheel]}
            mousewheel={true}
            simulateTouch={true}
            touchRatio={1.5}
            touchAngle={45}
            threshold={5}
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
