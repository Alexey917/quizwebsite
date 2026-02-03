import { useEffect, useState } from 'react';
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
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [quizzes, setQuizzes] = useState<IPopularQuizzes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleQuizzes = async () => {
    setLoading(true);
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

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Популярные квизы</h2>
        {/* <>
          {loading ? (
            <div className={classes.align}>
              <Loader />
            </div>
          ) : error ? (
            <div className={classes.align}>
              <span className={classes.error}>{error}</span>
            </div>
          ) : (
            <>
              <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                style={{ borderRadius: '40px', height: '600px' }}
                modules={[EffectCube, Navigation]}
                className={classes.swiperWrapper}
              >
                {quizzes.map((quiz) => (
                  <SwiperSlide>
                    <div className={classes.quizOverlay}></div>
                    <div
                      className={classes.quiz}
                      style={{ backgroundImage: `url(${quiz.img})` }}
                    >
                      <h3 className={classes.quizTitle}>{quiz.title}</h3>
                      <p className={classes.quizText}>{quiz.description}</p>

                      <div className={classes.linkWrapper}>
                        <Link to={quiz.link} className={classes.quizLink}>
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={classes.customNavigation}>
                {!isBeginning && (
                  <button onClick={handlePrev} className={classes.customPrev}>
                    <SliderArrow
                      one={classes.one}
                      two={classes.two}
                      three={classes.three}
                      prev={true}
                    />
                  </button>
                )}

                {!isEnd && (
                  <button onClick={handleNext} className={classes.customNext}>
                    <SliderArrow
                      one={classes.one}
                      two={classes.two}
                      three={classes.three}
                    />
                  </button>
                )}
              </div>
            </>
          )}
        </> */}

        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          style={{ borderRadius: '40px', height: '600px' }}
          modules={[EffectCube, Navigation]}
          className={classes.swiperWrapper}
        >
          {popularQuizzes.map((quiz) => (
            <SwiperSlide>
              <div className={classes.quizOverlay}></div>
              <div
                className={classes.quiz}
                style={{ backgroundImage: `url(${quiz.img})` }}
              >
                <h3 className={classes.quizTitle}>{quiz.title}</h3>
                <p className={classes.quizText}>{quiz.description}</p>

                <div className={classes.linkWrapper}>
                  <Link to={quiz.link} className={classes.quizLink}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={classes.customNavigation}>
          {!isBeginning && (
            <button onClick={handlePrev} className={classes.customPrev}>
              <SliderArrow
                one={classes.one}
                two={classes.two}
                three={classes.three}
                prev={true}
              />
            </button>
          )}

          {!isEnd && (
            <button onClick={handleNext} className={classes.customNext}>
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
