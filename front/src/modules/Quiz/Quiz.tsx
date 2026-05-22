import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizApi, type IQuiz } from './api';
import { getErrorMessage } from '@/api';
import { Description } from './components/Description';
import { Preview } from './components/Preview';
import { Loading } from '@/components';
import { extractNumericId, extractNumericString } from '@/utils';

import classes from './Quiz.module.css';
import { quizPopularApi } from './api/quizApi';
import { store } from '@/store';
import { setModal } from '@/store/Modal/modal';
import { addTitle } from '@/store/Choice/choice';

export const Quiz = () => {
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = store.dispatch;

  const { quizId, categoryId } = useParams<{
    quizId: string;
    categoryId: string;
  }>();

  const handleClick = (title: { name: string; id: null | number }) => {
    dispatch(setModal(true));
    dispatch(addTitle(title));
  };

  useEffect(() => {
    const handleQuiz = async () => {
      setLoading(true);
      setError(null);

      try {
        let result;

        if (quizId && categoryId) {
          const numericId = extractNumericId(quizId);
          const numericQuiz = extractNumericString(categoryId);
          result = await quizApi({ numericQuiz });
          setQuiz(result.data.find((elem: IQuiz) => elem.id === numericId));
        } else if (quizId && !categoryId) {
          const numericQuiz = extractNumericString(quizId);
          result = await quizPopularApi({ numericQuiz });
          setQuiz(result?.data);
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

  if (loading) {
    return (
      <Loading
        ariaLabel="Загрузка страницы квиза"
        classSection={`${classes.section}`}
        classTitle={`${classes.title}`}
        text=""
      />
    );
  }

  if (error) {
    return (
      <section className={classes.section} aria-label="Ошибка загрузки">
        <div className={`${classes.container} ${classes.align}`}>
          <div className={classes.align}>
            <span className={classes.error} role="alert">
              {error}
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (!quiz) {
    return (
      <section
        className={classes.section}
        aria-label="Подробная информация отсутствует"
      >
        <div className={`${classes.container} ${classes.align}`}>
          <div className={classes.align}>
            <span className={classes.info} role="alert">
              Подробная информация отсутствует
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className={classes.container}>
        {quiz && (
          <Preview
            img={quiz.detail_image}
            text={quiz.background_image_text}
            title={quiz.title}
            preview_text={quiz.preview_text}
          />
        )}
      </div>
      {quiz && (
        <Description
          description={quiz.description}
          text={quiz.background_image_text}
        />
      )}
      <div className={classes.wrapperBtn}>
        <div className={classes.container}>
          {quiz && (
            <button
              type="button"
              className={classes.btn}
              onClick={() => handleClick({ name: quiz.title, id: quiz.id })}
            >
              <span className={classes.btnText}>Выбрать</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
