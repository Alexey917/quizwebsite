import { useEffect, useState, useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { Navigation, EffectCube } from 'swiper/modules';
import { popularQuizzes } from '@/consts';
import { SliderArrow, Loader } from '@/ui';
import { popularApi, type IPopularQuizzes } from './api/popularApi';
import { getErrorMessage } from '@/api';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import classes from './PopularQuizzes.module.css';

export const PopularQuizzes = () => {
  const [swiperState, setSwiperState] = useState({
    instance: null as SwiperType | null,
    isBeginning: true,
    isEnd: false,
  });

  const [quizzes, setQuizzes] = useState<IPopularQuizzes[]>([]);
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

  const handleQuizzes = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await popularApi();
      setQuizzes(result);
    } catch (e: unknown) {
      const message = getErrorMessage(e);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleQuizzes();
  }, []);

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
    <section className={classes.section} aria-label="Популярные квизы">
      <div className={classes.container}>
        <h2 className={classes.title}>Популярные квизы</h2>

        <Swiper
          role="region"
          aria-roledescription="carousel"
          aria-live="polite"
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          modules={[EffectCube, Navigation]}
          className={classes.swiperWrapper}
        >
          {popularQuizzes.map((quiz) => (
            <SwiperSlide
              key={quiz.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${quiz.title}. ${quiz.description}`}
            >
              <div className={classes.quizOverlay} aria-hidden="true"></div>
              <div className={classes.quiz}>
                <img
                  src={quiz.img}
                  alt={quiz.title}
                  loading="lazy"
                  className={classes.quizImage}
                />
                <h3 className={classes.quizTitle}>{quiz.title}</h3>
                <p className={classes.quizText}>{quiz.description}</p>

                <div className={classes.linkWrapper}>
                  <Link
                    to={quiz.link}
                    className={classes.quizLink}
                    aria-label={`Подробнее о квизе: ${quiz.title}`}
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
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

export default PopularQuizzes;
