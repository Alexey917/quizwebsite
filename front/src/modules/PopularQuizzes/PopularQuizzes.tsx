import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { Navigation, EffectCube } from 'swiper/modules';
import { popularQuizzes } from '@/consts';
import { CustomLink, SliderArrow } from '@/ui';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import classes from './PopularQuizzes.module.css';
import sprite from '../../assets/sprite.svg';

export const PopularQuizzes = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Популярные квизы</h2>
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
              {/* <svg className={classes.iconNext}>
                <use href={`${sprite}#arrowSliderNext`}></use>
              </svg> */}
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
