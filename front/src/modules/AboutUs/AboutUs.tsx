import { ForWhom } from '@/components';
import { Benefits } from './components/Benefits';

import classes from './AboutUs.module.css';
import waves from '../../assets/sprite.svg';
import wavesBg from '../../assets/sprite.svg';

export const AboutUs = () => {
  return (
    <section className={classes.section}>
      <svg className={classes.wavesBg}>
        <use href={wavesBg + '#wavesBg'}></use>
      </svg>

      <svg className={classes.waves}>
        <use href={waves + '#waves'}></use>
      </svg>
      <div className={classes.content}>
        <div className={classes.container}>
          <ForWhom />
          <Benefits />
        </div>
      </div>
    </section>
  );
};
