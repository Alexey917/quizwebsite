import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { SliderArrow } from '@/ui';
import { Loading } from '@/components';
import { getErrorMessage } from '@/api';
import { RatesApi, type IRates } from '@/api';

import classes from './Rates.module.css';
import { Rate } from './components';

export const Rates = () => {
  const [swiperState, setSwiperState] = useState({
    instance: null as SwiperType | null,
    isBeginning: true,
    isEnd: false,
  });

  const [rates, setRates] = useState<IRates[]>([]);
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
    const handleRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await RatesApi();
        setRates(result.data);
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    handleRates();
  }, []);

  if (loading) {
    return (
      <Loading
        ariaLabel="Загрузка тарифов"
        classSection={`${classes.section}`}
        classTitle={`${classes.title}`}
        text="Тарифы"
      />
    );
  }

  if (error) {
    return (
      <section className={classes.section} aria-label="Ошибка загрузки">
        <div className={classes.container}>
          <h2 className={classes.title}>Тарифы</h2>
          <div className={classes.align}>
            <span className={classes.error} role="alert">
              {error}
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (rates.length === 0) {
    return (
      <section className={classes.section} aria-label="Тарифы пока отсутствуют">
        <div className={classes.container}>
          <h2 className={classes.title}>Тарифы</h2>
          <div className={classes.align}>
            <span className={classes.info} role="alert">
              Тарифы пока отсутствуют
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.section} id="tariffs-section">
      <div className={classes.container}>
        <h2 className={classes.title}>Тарифы</h2>

        <Swiper
          role="region"
          aria-roledescription="carousel"
          aria-label="Тарифы"
          aria-live="polite"
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
            },
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesOffsetBefore: 15,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesOffsetBefore: 50,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesOffsetBefore: 50,
            },

            904: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesOffsetBefore: 25,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
            },
          }}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          className={classes.swiperWrapper}
        >
          {rates.map((rate, index) => (
            <SwiperSlide
              key={`${rate.title}-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Тариф ${rate.title}`}
            >
              <Rate props={rate} />
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
    </section>
  );
};
