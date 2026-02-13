import { Catalog } from '@/modules';

import classes from './QuizzesPage.module.css';
import { Navigation } from '@/components';

export const QuizzesPage = () => {
  return (
    <main className={classes.main}>
      <Navigation />
      <Catalog variant="quizzes" />
    </main>
  );
};
