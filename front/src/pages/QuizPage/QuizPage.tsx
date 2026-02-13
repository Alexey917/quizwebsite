import { useEffect } from 'react';
import { client } from '@/api';
import { Navigation } from '@/components';
import classes from './QuizPage.module.css';

export const QuizPage = () => {
  const categoriesApi = async () => {
    const response = await client.get('/api/quizzes/1');
    return response.data;
  };

  useEffect(() => {
    console.log(categoriesApi());
  }, []);

  return (
    <main className={classes.main}>
      <Navigation />
    </main>
  );
};
