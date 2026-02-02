import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { Navigation } from 'swiper/modules';
import { popularQuizzes } from '@/consts';
import { CustomLink } from '@/ui';

import 'swiper/css';
import classes from './PopularQuizzes.module.css';
import sprite from '../../assets/sprite.svg';

export const PopularQuizzes = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Популярные квизы</h2>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          spaceBetween={0}
          navigation={{
            nextEl: '.customNext',
            prevEl: '.customPrev',
          }}
          style={{ borderRadius: '40px' }}
          modules={[Navigation]}
          className={classes.swiperWrapper}
        >
          {popularQuizzes.map((quiz) => (
            <SwiperSlide>
              <div className={classes.quiz}>
                <img
                  src={quiz.img}
                  alt={quiz.title}
                  className={classes.quizImg}
                />
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
          <div className={classes.customNavigation}>
            <button className={classes.customNext}>
              <svg className={classes.iconPrev}>
                <use href={`${sprite}#arrowSliderPrev`}></use>
              </svg>
            </button>
            <button className={classes.customPrev}>
              <svg className={classes.iconNext}>
                <use href={`${sprite}#arrowSliderNext`}></use>
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default PopularQuizzes;
