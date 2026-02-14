import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizApi } from './api';
import { getErrorMessage } from '@/api';
import { Description } from './components/Description';

import classes from './Quiz.module.css';

export const Quiz = () => {
  // const [quiz, setQuiz] = useState<ICategories[] | IQuizzes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { quizId } = useParams<{ quizId: string }>();

  const extractNumericId = (param: string): string => {
    const numericPart = param.split('-')[0];
    return numericPart;
  };

  useEffect(() => {
    const handleQuiz = async () => {
      setLoading(true);
      setError(null);

      try {
        let result;
        if (quizId) {
          const numericId = extractNumericId(quizId);
          result = await quizApi({ numericId });
          console.log(result.data);
        }

        // setData(result.data);
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    handleQuiz();
  }, [quizId]);

  return (
    <div>
      {/* <Preview /> */}
      <Description />
    </div>
  );
};
