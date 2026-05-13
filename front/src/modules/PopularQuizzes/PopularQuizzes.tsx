import { useEffect, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';

import { Navigation, EffectCube } from 'swiper/modules';
import { Loading } from '@/components';
import { SliderArrow } from '@/ui';
import { createSlug } from '@/utils';
import { popularApi, type IPopularQuizzes } from './api/popularApi';
import { getErrorMessage } from '@/api';
import { useSaveRate } from '@/hooks';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import classes from './PopularQuizzes.module.css';
import { QuizImage } from './components';

export const PopularQuizzes = () => {
  const navigate = useNavigate();

  const [swiperState, setSwiperState] = useState({
    instance: null as SwiperType | null,
    isBeginning: true,
    isEnd: false,
  });

  const [quizzes, setQuizzes] = useState<IPopularQuizzes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const saveRate = useSaveRate();

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

  useEffect(() => {
    const handleQuizzes = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await popularApi();
        setQuizzes(result.data);
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

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

  const handleQuiz = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
    title: string,
  ) => {
    e.preventDefault();
    localStorage.setItem('popular', title);
    localStorage.removeItem('quiz');
    localStorage.removeItem('category');
    saveRate(e, to, { name: '', id: null });
  };

  if (loading) {
    return (
      <Loading
        ariaLabel="Загрузка популярных квизов"
        classSection={`${classes.section}`}
        classTitle={`${classes.title}`}
        text="Популярные квизы"
      />
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

  if (quizzes.length === 0) {
    return (
      <section className={classes.section} aria-label="Квизы еще добавлены">
        <div className={classes.container}>
          <h2 className={classes.title}>Популярные квизы</h2>
          <div className={classes.align}>
            <span className={classes.info} role="alert">
              Квизы еще добавлены
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
          {quizzes
            .filter((quiz) => quiz.is_popular)
            .map((quiz) => (
              <SwiperSlide
                key={`${quiz.id}-${quiz.title}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${quiz.title}. ${quiz.preview_text}`}
              >
                <div className={classes.quizOverlay} aria-hidden="true"></div>

                <div className={classes.quiz}>
                  <QuizImage image={quiz.detail_image} title={quiz.title} />
                  <h3 className={classes.quizTitle}>{quiz.title}</h3>
                  {quiz.preview_text && (
                    <p className={classes.quizText}>{quiz.preview_text}</p>
                  )}

                  <div className={classes.linkWrapper}>
                    <Link
                      to={`/catalog/quizzes/${quiz.id}-${createSlug(
                        quiz.title,
                      )}`}
                      onClick={(e) =>
                        handleQuiz(
                          e,
                          `/catalog/quizzes/${quiz.id}-${createSlug(
                            quiz.title,
                          )}`,
                          quiz.title,
                        )
                      }
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
