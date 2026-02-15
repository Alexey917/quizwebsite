import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizApi, type IQuiz } from './api';
import { getErrorMessage } from '@/api';
import { Description } from './components/Description';
import { Preview } from './components/Preview';

import classes from './Quiz.module.css';

export const Quiz = () => {
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { quizId, categoryId } = useParams<{
    quizId: string;
    categoryId: string;
  }>();

  const extractNumericId = (param: string): number => {
    const numericPart = param.split('-')[0];
    return +numericPart;
  };

  const extractNumericQuiz = (param: string): string => {
    const numericPart = param.split('-')[0];
    return numericPart;
  };

  useEffect(() => {
    const handleQuiz = async () => {
      setLoading(true);
      setError(null);

      try {
        let result;
        if (quizId && categoryId) {
          const numericId = extractNumericId(quizId);
          const numericQuiz = extractNumericQuiz(categoryId);
          result = await quizApi({ numericQuiz });
          console.log(result.data[numericId]);
          setQuiz(result.data[numericId]);
        }
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    handleQuiz();
  }, [quizId, categoryId]);

  return (
    <div className={classes.container}>
      {quiz && (
        <Preview
          img={quiz.detail_image}
          text={quiz.background_image_text}
          title={quiz.title}
          preview_text={quiz.preview_text}
        />
      )}
      {/* <Description /> */}
    </div>
  );
};
