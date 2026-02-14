import { useEffect } from 'react';
import { Navigation } from '@/components';
import classes from './QuizPage.module.css';
import { Quiz } from '@/modules';

export const QuizPage = () => {
  return (
    <main className={classes.main}>
      <Navigation />
      <Quiz />
    </main>
  );
};
