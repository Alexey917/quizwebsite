import { ForWhom } from '@/components';
import { Benefits } from './components/Benefits';
import { GetToKnowUs } from './components/GetToKnowUs';
import { useMediaQuery } from 'react-responsive';

import classes from './AboutUs.module.css';
import waves from '../../assets/sprite.svg';
import wavesBg from '../../assets/sprite.svg';
import wavesBgBottom from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

export const AboutUs = () => {
  const largeScreen = useMediaQuery({ minWidth: 1500 });
  const mediumScreen = useMediaQuery({ minWidth: 1200, maxWidth: 1500 });
  const smallScreen = useMediaQuery({ minWidth: 1024, maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 904, maxWidth: 1024 });
  const isTable = useMediaQuery({ minWidth: 576, maxWidth: 904 });
  const isPhone = useMediaQuery({ minWidth: 360, maxWidth: 576 });

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
          <GetToKnowUs />
        </div>
      </div>

      <svg className={classes.wavesBottom}>
        <use href={waves + '#waves'}></use>
      </svg>

      <svg
        className={classes.wavesBgBottom} // rgb(97 179 182)
        style={{
          fill: largeScreen
            ? 'rgb(78 155 160)'
            : mediumScreen
            ? 'rgb(60 133 141)'
            : smallScreen
            ? 'rgb(43 111 121)'
            : isDesktop
            ? 'rgb(26 90 102)'
            : isTable
            ? '#377e87'
            : isPhone
            ? 'rgb(28 92 104)'
            : 'rgb(97 179 182)',
        }}
      >
        <use href={wavesBgBottom + '#wavesBgBottom'}></use>
      </svg>
    </section>
  );
};
