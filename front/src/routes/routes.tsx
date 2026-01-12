import { Layout } from '@/components/Layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // children: [{ index: true }],
  },
]);
