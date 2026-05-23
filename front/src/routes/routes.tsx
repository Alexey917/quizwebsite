import { lazy } from 'react';
import { Layout, LazySuspense } from '@/components';
import { createBrowserRouter } from 'react-router-dom';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage/CatalogPage'));
const QuizzesPage = lazy(() => import('@/pages/QuizzesPage/QuizzesPage'));
const QuizPage = lazy(() => import('@/pages/QuizPage/QuizPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <LazySuspense>
            <MainPage />
          </LazySuspense>
        ),
      },
      {
        path: '/catalog',
        element: (
          <LazySuspense>
            <CatalogPage />
          </LazySuspense>
        ),
      },
      {
        path: '/catalog/:categoryId/quizzes',
        element: (
          <LazySuspense>
            <QuizzesPage />
          </LazySuspense>
        ),
      },
      {
        path: '/catalog/:categoryId/quizzes/:quizId',
        element: (
          <LazySuspense>
            <QuizPage />
          </LazySuspense>
        ),
      },
      {
        path: '/catalog/quizzes/:quizId',
        element: (
          <LazySuspense>
            <QuizPage />
          </LazySuspense>
        ),
      },
      {
        path: '*',
        element: (
          <LazySuspense>
            <MainPage />
          </LazySuspense>
        ),
      },
    ],
  },
]);
