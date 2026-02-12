import { Catalog } from '@/modules';

import classes from './QuizzesPage.module.css';

export const QuizzesPage = () => {
  return (
    <main className={classes.main}>
      <Catalog variant="quizzes" />
    </main>
  );
};
