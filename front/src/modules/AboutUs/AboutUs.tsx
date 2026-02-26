import { ForWhom } from '@/components';
import { Benefits } from './components/Benefits';
import { GetToKnowUs } from './components/GetToKnowUs';
import { useScreenType } from './hooks';

import classes from './AboutUs.module.css';
import sprite from '../../assets/sprite.svg';

export const AboutUs = () => {
  const screenType = useScreenType();

  return (
    <section className={classes.section} aria-labelledby="about-us-title">
      <h2 id="about-us-title" className={classes.visuallyHidden}>
        О нашей компании
      </h2>
      <svg
        className={classes.wavesBg}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href={`${sprite}#wavesBg `} xlinkHref={`${sprite}#wavesBg`}></use>
      </svg>

      <svg
        className={classes.waves}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href={`${sprite}#waves`} xlinkHref={`${sprite}#waves`}></use>
      </svg>
      <div className={classes.content}>
        <div className={classes.container}>
          <ForWhom />
          <Benefits />
          <GetToKnowUs />
        </div>
      </div>

      <svg className={classes.wavesBottom} aria-hidden="true">
        <use href={`${sprite}#waves`}></use>
      </svg>

      <svg
        className={`${classes.wavesBgBottom} ${classes[screenType]}`}
        aria-hidden="true"
      >
        <use href={`${sprite}#wavesBgBottom`}></use>
      </svg>
    </section>
  );
};
