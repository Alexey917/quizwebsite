import { lazy, Suspense } from 'react';
import { Layout } from '@/components/Layout';
// import { Loader } from '@/ui';
// import { MainPage, CatalogPage, QuizzesPage, QuizPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { Loading } from '@/components';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage/CatalogPage'));
const QuizzesPage = lazy(() => import('@/pages/QuizzesPage/QuizzesPage'));
const QuizPage = lazy(() => import('@/pages/QuizPage/QuizPage'));

const LazySuspense = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loading classSection="firstLoading" />}>
    {children}
  </Suspense>
);

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
