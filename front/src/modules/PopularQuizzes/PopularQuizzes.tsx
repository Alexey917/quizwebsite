import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { Navigation } from 'swiper/modules';
import { popularQuizzes } from '@/consts';
import { CustomLink } from '@/ui';

import 'swiper/css';
import classes from './PopularQuizzes.module.css';

export const PopularQuizzes = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Популярные квизы</h2>
        <Swiper
          slidesPerView={1}
          // spaceBetween={64}
          navigation={true}
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
                <Link to={quiz.link} className={classes.quizLink}></Link>
                {/* <CustomLink /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularQuizzes;
