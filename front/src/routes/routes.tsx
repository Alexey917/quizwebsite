import { Layout } from '@/components/Layout';
import { MainPage, CatalogPage, QuizzesPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/catalog', element: <CatalogPage /> },
      { path: '/catalog/:categoryId/quizzes', element: <QuizzesPage /> },
    ],
  },
]);
