import { useState, useEffect } from 'react';
// import { categories } from '@/consts';
import { getErrorMessage } from '@/api';
import { Card } from './components';
import { Loading } from '@/components';
import {
  categoriesApi,
  type ICategories,
  quizzesApi,
  type IQuizzes,
} from './api';

import classes from './Catalog.module.css';
import { useParams } from 'react-router-dom';

interface IVariant {
  variant: 'categories' | 'quizzes';
}

export const Catalog = ({ variant }: IVariant) => {
  const [data, setData] = useState<ICategories[] | IQuizzes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { categoryId } = useParams<{ categoryId: string }>();

  const extractNumericId = (param: string): string => {
    const numericPart = param.split('-')[0];
    return numericPart;
  };

  useEffect(() => {
    const handleCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        let result;
        if (variant === 'categories') {
          result = await categoriesApi();
        } else {
          if (categoryId) {
            const numericId = extractNumericId(categoryId);

            result = await quizzesApi({ numericId });
          }
        }

        setData(result.data);
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    handleCategories();
  }, [variant, categoryId]);

  if (loading) {
    return (
      <Loading
        ariaLabel={
          variant === 'categories' ? 'Загрузка категорий' : 'Загрузка квизов'
        }
        classSection={classes.section}
        classTitle={classes.title}
        text=""
      />
    );
  }

  if (error) {
    return (
      <section className={classes.section} aria-label="Ошибка загрузки">
        <div className={classes.container}>
          <div className={classes.align}>
            <span className={classes.error} role="alert">
              {error}
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {data.map((elem, index) => (
          <Card
            key={`${elem.title}-${index}`}
            data={elem}
            dataIndex={index + 1}
          />
        ))}
      </div>
    </section>
  );
};
