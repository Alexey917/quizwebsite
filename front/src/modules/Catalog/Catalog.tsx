import { useState, useEffect, useRef } from 'react';
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
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const limit = 3;
  const { categoryId } = useParams<{ categoryId: string }>();
  const target = useRef<HTMLDivElement | null>(null);

  const extractNumericId = (param: string): string => {
    const numericPart = param.split('-')[0];
    return numericPart;
  };

  const handleCategories = async (
    pageNum: number,
    isLoadMore: boolean = false,
  ) => {
    if (isLoadMore) {
      setIsLoadingMore(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      let result;
      if (variant === 'categories') {
        result = await categoriesApi(pageNum, limit);
      } else {
        if (categoryId) {
          const numericId = extractNumericId(categoryId);

          result = await quizzesApi({ numericId });
        }
      }

      if (result?.data) {
        if (isLoadMore) {
          setData((prev) => [...prev, ...result.data]);
        } else {
          setData(result.data);
        }

        if (variant === 'categories') {
          setHasMore(result.data.length === limit);
        } else {
          setHasMore(false);
        }
      }
    } catch (e: unknown) {
      const message = getErrorMessage(e);
      setError(message);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    setHasMore(true);
    handleCategories(1, false);
  }, [variant, categoryId]);

  useEffect(() => {
    if (page > 1) {
      handleCategories(page, true);
    }
  }, [page]);

  useEffect(() => {
    if (!target.current || !hasMore || loading || isLoadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading &&
          !isLoadingMore &&
          hasMore
        ) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.5, rootMargin: '300px' },
    );

    observer.observe(target.current);

    return () => observer.disconnect();
  }, [loading, isLoadingMore, hasMore]);

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

  if (data.length === 0) {
    return (
      <section
        className={classes.section}
        aria-label={
          variant === 'categories'
            ? 'Нет доступных категорий'
            : 'Нет доступных квизов'
        }
      >
        <div className={`${classes.container} ${classes.align}`}>
          <div className={classes.align}>
            <span className={classes.info} role="alert">
              {variant === 'categories'
                ? 'Нет доступных категорий'
                : 'Нет доступных квизов'}
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {data.map((elem) => (
          <Card key={elem.id} data={elem} />
        ))}
        {hasMore && (
          <div className={classes.observer} ref={target}>
            {isLoadingMore && <Loading />}
          </div>
        )}
      </div>
    </section>
  );
};
